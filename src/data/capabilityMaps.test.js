import { describe, expect, it } from "bun:test";
import { services, getService } from "./services.ts";
import { technologies } from "./technologies.ts";
import { technologyGroups, technologyAnchor } from "./technologyGroups.ts";
import { diagrams } from "./diagrams.ts";
describe("capability map destinations",()=>{
 it("groups every requested technology without introducing vendors",()=>{const listed=new Set(technologyGroups.flatMap(g=>g.names));expect([...listed].sort()).toEqual([...technologies].sort());});
 it("uses the eight requested technology categories",()=>{expect(technologyGroups.map(g=>g.id)).toEqual(["cloud","identity","privileged-access","security","network","devops","itsm","enterprise-apps"]);});
 it("has unique platform destinations",()=>{expect(new Set(technologies.map(technologyAnchor)).size).toBe(30);});
 it("keeps all nine services and requested IAM destinations available",()=>{expect(services.length).toBe(9);for(const id of ["iam","ciam","pam","pim","nhi","iga"])expect(getService("identity")?.blocks.some(b=>b.id===id)).toBe(true);});
 it("provides seven coherent reference diagrams with valid connections",()=>{expect(Object.keys(diagrams).sort()).toEqual(["estate","identity","cybersecurity","cloud","software-engineering","hardware-engineering","process"].sort());for(const d of Object.values(diagrams)){const ids=new Set(d.nodes.map(n=>n.id));for(const [a,b]of d.edges){expect(ids.has(a)).toBe(true);expect(ids.has(b)).toBe(true);}}});
});
