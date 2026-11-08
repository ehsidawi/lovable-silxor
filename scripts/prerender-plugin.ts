import { createServer, type Plugin } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
const MAX_PRERENDER_PAGES = 100;
/** Build-only renderer. No runtime server or client dependency. */
export function prerenderPlugin(): Plugin {
 let output = "dist";
 return {name:"silxor-static-pages",apply:"build",configResolved(config){output=config.build.outDir;},async closeBundle(){
  const server = await createServer({configFile:false,root:process.cwd(),resolve:{alias:{"@":path.resolve(process.cwd(),"src")}},server:{middlewareMode:true,watch:null,hmr:false},appType:"custom"});
  try {
   const renderer=await server.ssrLoadModule("/src/prerender.tsx");
   const pages: string[]=[...new Set([...renderer.pages,...(renderer.extraPrerenderPages ?? [])])] as string[];
   if(pages.length>MAX_PRERENDER_PAGES)throw new Error("Prerender page cap exceeded");
   let template=await readFile(path.join(output,"index.html"),"utf8");
   template=template.replace(/<title>[\s\S]*?<\/title>/g,"").replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,"").replace(/<meta\s+(?:name|property)="(?:title|description|robots|og:title|og:description|og:url|og:type|og:image|twitter:image|twitter:title|twitter:description|twitter:url|twitter:card)"[^>]*>/g,"").replace(/<link rel="canonical"[^>]*>/g,"");
   for(const route of [...pages,"/404"]) {
    const rendered=renderer.renderPage(route);
    if(!rendered.body.includes("<h1")||rendered.body.includes("Loading page"))throw new Error(`Incomplete prerender for ${route}`);
    const html=template.replace("</head>",`${rendered.head}\n</head>`).replace('<div id="root"></div>',`<div id="root">${rendered.body}</div>`);
    const target=route==="/"?path.join(output,"index.html"):route==="/404"?path.join(output,"404.html"):path.join(output,route.slice(1),"index.html");
    await mkdir(path.dirname(target),{recursive:true});await writeFile(target,html);
   }
   for(const [name,content] of Object.entries(renderer.discoveryFiles()))await writeFile(path.join(output,name),content as string);
   console.log(`Prerendered ${pages.length} public routes plus 404 with full HTML and route metadata.`);
  }finally{await server.close();}
 }};
}
