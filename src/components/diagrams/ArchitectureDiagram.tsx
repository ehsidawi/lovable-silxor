import { useId } from "react";
import type { ArchitectureDiagram as DiagramData } from "@/data/diagrams";
function DiagramDrawing({ data, compact, id }: {data:DiagramData;compact:boolean;id:string}) {
 const width=compact?360:1080; const cellWidth=compact?304:300; const nodeHeight=compact?88:100;
 const flowOrder: Record<string,string[]> = { "software-lifecycle":["discover","design","build","validate","release","improve"], "iot-flow":["device","gateway","ingest","processing","apps","updates"], "engagement-flow":["assess","design","build","migrate","operate","improve"] };
 const ordered = compact && flowOrder[data.id] ? [...data.nodes].sort((a,b)=>flowOrder[data.id].indexOf(a.id)-flowOrder[data.id].indexOf(b.id)) : data.nodes;
 const positions=new Map(ordered.map((n,i)=>[n.id,{x:compact?28:30+n.column*360,y:compact?24+i*124:24+n.row*164}]));
 const height=compact?data.nodes.length*124:Math.max(...data.nodes.map(n=>n.row))*164+148;
 return <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby={`${id}-title ${id}-desc`} className={`architecture-svg w-full ${compact?"md:hidden":"hidden md:block"}`}>
  <title id={`${id}-title`}>{data.title}</title><desc id={`${id}-desc`}>{data.description}</desc>
  <defs><marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="diagram-arrow" /></marker></defs>
  {data.edges.map(([from,to])=>{const a=positions.get(from);const b=positions.get(to);if(!a||!b)return null;let d:string;
   if(compact){const start=a.y+nodeHeight;const end=b.y;d=b.y-a.y===124?`M ${a.x+cellWidth/2} ${start} V ${end-8}`:`M ${a.x+cellWidth} ${a.y+nodeHeight/2} H 350 V ${b.y+nodeHeight/2} H ${b.x+cellWidth+6}`;}
   else if(a.y===b.y){const right=b.x>a.x;d=`M ${a.x+(right?cellWidth:0)} ${a.y+nodeHeight/2} H ${b.x+(right?-6:cellWidth+6)}`;}
   else {const down=b.y>a.y; const sy=a.y+(down?nodeHeight:0);const ey=b.y+(down?-6:nodeHeight+6);const mid=(sy+ey)/2;d=`M ${a.x+cellWidth/2} ${sy} V ${mid} H ${b.x+cellWidth/2} V ${ey}`;}
   return <path key={`${from}-${to}`} d={d} className="diagram-connector" markerEnd={`url(#${id}-arrow)`} />;
  })}
  {ordered.map((n,i)=>{const p=positions.get(n.id);if(!p)return null;return <g key={n.id}><rect x={p.x} y={p.y} width={cellWidth} height={nodeHeight} rx="4" className={n.accent?"diagram-node diagram-node-accent":"diagram-node"}/><text x={p.x+16} y={p.y+23} className="diagram-index">{String(i+1).padStart(2,"0")}</text><text x={p.x+16} y={p.y+47} className="diagram-label">{n.label}</text><text x={p.x+16} y={p.y+70} className="diagram-detail">{n.detail}</text></g>;})}
 </svg>;
}
export default function ArchitectureDiagram({data}:{data:DiagramData}) {
 const id=useId().replace(/:/g,"");return <section className="r-section" aria-labelledby={`${id}-heading`}><div className="container-content"><span className="r-eyebrow">Architecture view</span><h2 id={`${id}-heading`} className="r-title mt-4 max-w-4xl">{data.title}</h2><figure className="mt-9"><DiagramDrawing data={data} compact={false} id={`${id}-desktop`}/><DiagramDrawing data={data} compact id={`${id}-mobile`}/><figcaption className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground">{data.summary}</figcaption></figure><p className="mt-4 max-w-4xl text-xs leading-relaxed text-muted-foreground">{data.footnote}</p></div></section>;
}
