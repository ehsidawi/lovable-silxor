import { useId, useState } from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ArchitectureDiagram as DiagramData } from "@/data/diagrams";
import { diagramLayout } from "./layouts";

export default function ArchitectureDiagram({data}:{data:DiagramData}) {
  const id = useId().replace(/:/g, "");
  const { nodes, positions } = diagramLayout(data);
  const [selectedId, setSelectedId] = useState(data.nodes.find(node => node.accent)?.id ?? data.nodes[0]?.id);
  const selected = nodes.find(node => node.id === selectedId) ?? nodes[0];
  if (!selected) return null;
  const connections = data.edges.flatMap(([from, to]) => {
    if (from !== selected.id && to !== selected.id) return [];
    const incoming = to === selected.id;
    const node = nodes.find(item => item.id === (incoming ? from : to));
    return node ? [{ node, incoming }] : [];
  });
  return <section className="r-section diagram-section" aria-labelledby={`${id}-heading`}>
    <div className="container-content">
      <div className="diagram-heading">
        <span className="r-eyebrow">Architecture view</span>
        <h2 id={`${id}-heading`} className="r-title">{data.title}</h2>
      </div>
      <figure className={`diagram-explorer diagram-explorer--${data.id}`}>
        <div className="diagram-canvas">
          <svg viewBox="0 0 600 330" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
            <title id={`${id}-title`}>{data.title}</title>
            <desc id={`${id}-desc`}>{data.description}</desc>
            <defs><marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="explorer-arrow" /></marker></defs>
            {data.edges.map(([from, to]) => {
              const a = positions.get(from), b = positions.get(to);
              if (!a || !b) return null;
              const length = Math.hypot(b.x - a.x, b.y - a.y);
              if (!length) return null;
              const dx = (b.x - a.x) / length, dy = (b.y - a.y) / length;
              const active = from === selected.id || to === selected.id;
              return <path key={`${from}-${to}`} d={`M ${a.x + dx * 27} ${a.y + dy * 27} L ${b.x - dx * 30} ${b.y - dy * 30}`} className={`explorer-edge ${active ? "is-active" : ""}`} markerEnd={`url(#${id}-arrow)`} />;
            })}
            {nodes.map((node, index) => {
              const point = positions.get(node.id);
              if (!point) return null;
              const active = node.id === selected.id;
              return <g key={node.id} className={`explorer-point ${active ? "is-active" : ""}`}>
                <circle cx={point.x} cy={point.y} r="25" />
                <text x={point.x} y={point.y + 5} textAnchor="middle">{String(index + 1).padStart(2, "0")}</text>
              </g>;
            })}
          </svg>
          <div className="diagram-selection" id={`${id}-selection`} aria-live="polite" aria-atomic="true">
            <span className="diagram-selection-index">{String(nodes.indexOf(selected) + 1).padStart(2, "0")}</span>
            <div><h3>{selected.label}</h3><p>{selected.detail}</p></div>
          </div>
        </div>
        <div className="diagram-directory">
          <div className="diagram-node-list" role="group" aria-labelledby={`${id}-heading`}>
            {nodes.map((node, index) => <Button key={node.id} variant="ghost" className="diagram-choice" aria-pressed={node.id === selected.id} aria-controls={`${id}-selection`} onClick={() => setSelectedId(node.id)}>
              <span className="diagram-choice-index">{String(index + 1).padStart(2, "0")}</span><span>{node.label}</span>
            </Button>)}
          </div>
          <div className="diagram-connections" aria-label={`Connections for ${selected.label}`}>
            {connections.map(({ node, incoming }) => <Button key={`${node.id}-${incoming}`} variant="ghost" className="diagram-connection" aria-label={`${incoming ? "From" : "To"} ${node.label}`} onClick={() => setSelectedId(node.id)}>
              {incoming ? <ArrowDownLeft aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}<span>{node.label}</span>
            </Button>)}
          </div>
        </div>
        <figcaption className="diagram-summary"><details><summary>Architecture view</summary><p>{data.summary}</p></details></figcaption>
      </figure>
      <p className="diagram-footnote">{data.footnote}</p>
    </div>
  </section>;
}
