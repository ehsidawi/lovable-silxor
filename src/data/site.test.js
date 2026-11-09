import { describe, expect, it } from "bun:test";
import { business, resourceLinks, engagements } from "./site.ts";
import { services } from "./services.ts";
import { structuredData } from "../lib/structuredData.ts";
describe("public enterprise facts and policies",()=>{
 it("uses the requested business identity and contact details",()=>{expect(business.name).toBe("Silxor Group Holding");expect(business.email).toBe("hello@silxor.com");expect(business.telephone).toBe("+1 979 500 3390");});
 it("limits organizational sameAs to the existing company profile",()=>{expect(business.sameAs).toEqual(["https://www.linkedin.com/company/silxorllc/"]);});
 it("provides all five requested engagement models",()=>{expect(engagements.map(e=>e.id)).toEqual(["assessment","project","augmentation","managed","retainer"]);});
 it("includes every required new guidance destination",()=>{for(const p of ["/engagement","/process","/faq","/careers","/privacy","/terms","/cookies","/security"])expect(resourceLinks.some(l=>l.to===p)).toBe(true);});
 it("never advertises search when there is no search feature",()=>{expect(JSON.stringify(structuredData("/","Home","Description")).includes("SearchAction")).toBe(false);});
 it("identifies each service at its actual URL",()=>{for(const s of services){const schema=structuredData(s.path,s.name,s.intro)["@graph"].find(n=>n["@type"]==="Service");expect(schema?.url).toBe(`https://silxor.com${s.path}`);expect(schema?.name).toBe(s.name);}});
});
