import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import ServicesIndex from "@/pages/ServicesIndex";
import ServiceDetail from "@/pages/ServiceDetail";
import IndustriesPage from "@/pages/IndustriesPage";
import DeliveryPage from "@/pages/DeliveryPage";
import ClientsPage from "@/pages/ClientsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import BookAssessment from "@/pages/BookAssessment";
import Partners from "@/pages/Partners";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ComplianceDoc from "@/pages/ComplianceDoc";
import SLADoc from "@/pages/SLADoc";
import ResourcePage from "@/pages/ResourcePage";
import FaqPage from "@/pages/FaqPage";
import NotFound from "@/pages/NotFound";
import { services } from "@/data/services";
import { resourcePages } from "@/data/resources";
import { SITE, business, faqs } from "@/data/site";
export const pages = ["/", "/services", ...services.map(s=>s.path), "/industries", "/delivery", "/clients", "/about", "/contact", "/book", "/partners", "/privacy", "/compliance", "/sla", ...resourcePages.map(p=>p.path), "/faq"];
// Editorial timestamps for significant content authored in this pass, not build time.
export const contentModifiedAt: Record<string, string> = Object.fromEntries([
 ...resourcePages.map(p=>p.path), "/faq", "/privacy", "/industries", ...services.map(s=>s.path),
].map(p=>[p,"2026-11-08"]));
const routes = [{path:"/",component:Index},{path:"/services",component:ServicesIndex},{path:"/services/:slug",component:ServiceDetail},{path:"/industries",component:IndustriesPage},{path:"/delivery",component:DeliveryPage},{path:"/clients",component:ClientsPage},{path:"/about",component:AboutPage},{path:"/contact",component:ContactPage},{path:"/book",component:BookAssessment},{path:"/partners",component:Partners},{path:"/privacy",component:PrivacyPolicy},{path:"/compliance",component:ComplianceDoc},{path:"/sla",component:SLADoc},{path:"/faq",component:FaqPage},...resourcePages.map(p=>({path:p.path,component:ResourcePage})),{path:"*",component:NotFound}];
export function renderPage(path: string) {
 const context: Record<string, any> = {};
 const body = renderToString(<HelmetProvider context={context}><ThemeProvider attribute="class" defaultTheme="light" storageKey="silxor-theme"><TooltipProvider><StaticRouter location={path}><Routes>{routes.map(r=><Route key={r.path} path={r.path} element={<r.component />} />)}</Routes></StaticRouter></TooltipProvider></ThemeProvider></HelmetProvider>);
 const h=context.helmet;
 return {body,head:[h.title,h.meta,h.link,h.script].map(x=>x.toString()).join("\n")};
}
export function discoveryFiles() {
 const directory = services.map(s=>({name:s.name,slug:s.slug,url:`${SITE}${s.path}`,description:s.intro,summary:s.outcome,capabilities:s.capabilities}));
 const summary = `# Silxor Group Holding\n\n> Enterprise technology consultancy for enterprise and corporate clients.\n\nSilxor helps organizations plan, build, migrate, secure and operate technology across on premises, hybrid and cloud environments. Offerings describe capabilities; scope is agreed per engagement. Technology names do not imply vendor affiliation or certification. This directory makes no client or performance claims.\n\n## Services\n${services.map(s=>`- [${s.name}](${s.path}): ${s.outcome}`).join("\n")}\n\n## Pages\n${pages.filter(p=>p!=="/"&&!p.startsWith("/services/")&&p!=="/services").map(p=>`- [${p.slice(1).replace(/-/g," ")}](${p}): Public information about Silxor ${p.slice(1).replace(/-/g," ")}.`).join("\n")}\n\n## Contact\n- [Book an Assessment](/book): Choose Telegram or WhatsApp to arrange a conversation with +1 979 500 3390.\n- [Email](mailto:hello@silxor.com): hello@silxor.com.\n- [Telegram](https://t.me/+19795003390): Direct contact.\n- [WhatsApp](https://wa.me/19795003390): Direct contact.\n- [LinkedIn](${business.sameAs[0]}): Existing company profile.\n\n801 Barton Springs Rd, Austin, TX 78704, US.\n\n## Optional\n- [Full service reference](/llms-full.txt): Detailed service capabilities and FAQs.\n- [Machine readable services](/services.json): Service URLs, descriptions and capabilities.\n`;
 const full = `# Silxor Group Holding\n\n> Enterprise technology consultancy. Detailed public service reference.\n\nWebsite: ${SITE}/\nEmail: ${business.email}\nTelephone: ${business.telephone}\nAssessment: ${SITE}/book\nTelegram: https://t.me/+19795003390\nWhatsApp: https://wa.me/19795003390\n\nCapabilities are scoped per agreement, not blanket guarantees. Vendor names do not establish affiliations. Private AI is designed for dedicated environments without sending sensitive data to third party model providers.\n\n${services.map(s=>`## ${s.name}\n\n[Service page](${s.path})\n\n${s.intro}\n\n${s.blocks.map(b=>`- ${b.title}: ${b.line}`).join("\n")}\n`).join("\n")}\n## Engagement and process\n${resourcePages.filter(p=>["/engagement","/process"].includes(p.path)).map(p=>`\n[${p.title}](${p.path}): ${p.lead}\n${p.sections.map(s=>`- ${s.title}: ${s.body} ${s.details??""}`).join("\n")}`).join("\n")}\n\n## Frequently asked questions\n${faqs.map(f=>`- ${f.q} ${f.a}`).join("\n")}\n\n## Public pages\n${pages.map(p=>`- [${p === "/" ? "Home" : p.slice(1)}](${p}): Public Silxor page.`).join("\n")}\n`;
 return {"services.json":JSON.stringify({name:business.name,url:SITE,services:directory},null,2),"llms.txt":summary,"llms-full.txt":full,"sitemap.xml":`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p=>`  <url><loc>${SITE}${p}</loc>${contentModifiedAt[p]?`<lastmod>${contentModifiedAt[p]}</lastmod>`:""}</url>`).join("\n")}\n</urlset>\n`};
}
