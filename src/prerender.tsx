import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import ServicesIndex from "@/pages/ServicesIndex";
import ServiceDetail from "@/pages/ServiceDetail";
import IndustriesPage from "@/pages/IndustriesPage";
import DeliveryPage from "@/pages/DeliveryPage";
import ClientsPage from "@/pages/ClientsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ConsultationPage from "@/pages/ConsultationPage";
import TechnologiesPage from "@/pages/TechnologiesPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ComplianceDoc from "@/pages/ComplianceDoc";
import SLADoc from "@/pages/SLADoc";
import ResourcePage from "@/pages/ResourcePage";
import FaqPage from "@/pages/FaqPage";
import NotFound from "@/pages/NotFound";
import { services } from "@/data/services";
import { resourcePages } from "@/data/resources";
import { SITE, business, faqs } from "@/data/site";
import InsightsPage from "@/pages/InsightsPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import { insights, insightPath } from "@/data/insights";
import { caseStudies } from "@/data/caseStudies";
export const pages = ["/", "/services", ...services.map(s=>s.path), "/industries", "/delivery", "/clients", "/about", "/contact", "/book", "/technologies", "/privacy", "/compliance", "/sla", ...resourcePages.map(p=>p.path), "/faq", '/insights', ...insights.map(insightPath), ...(caseStudies.length ? ['/case-studies',...caseStudies.map(s=>`/case-studies/${s.slug}`)] : [])];
export const extraPrerenderPages = ['/case-studies'];
// Editorial timestamps for significant content authored in this pass, not build time.
export const contentModifiedAt: Record<string, string> = Object.fromEntries([
 ...resourcePages.map(p=>p.path), "/faq", "/privacy", "/book", "/contact", "/industries", "/", "/about", '/insights', ...insights.map(insightPath), ...services.map(s=>s.path),
].map(p=>[p,"2026-11-08"]));
const routes = [{path:"/",component:Index},{path:"/services",component:ServicesIndex},{path:"/services/:slug",component:ServiceDetail},{path:"/industries",component:IndustriesPage},{path:"/delivery",component:DeliveryPage},{path:"/clients",component:ClientsPage},{path:"/about",component:AboutPage},{path:"/contact",component:ContactPage},{path:"/book",component:ConsultationPage},{path:"/technologies",component:TechnologiesPage},{path:"/privacy",component:PrivacyPolicy},{path:"/compliance",component:ComplianceDoc},{path:"/sla",component:SLADoc},{path:"/faq",component:FaqPage},...resourcePages.map(p=>({path:p.path,component:ResourcePage})),{path:"*",component:NotFound}];
export function renderPage(path: string) {
 const context: Record<string, any> = {};
 const body = renderToString(<HelmetProvider context={context}><TooltipProvider><StaticRouter location={path}><Routes><Route path="/insights" element={<InsightsPage />} /><Route path="/insights/:slug" element={<InsightsPage />} /><Route path="/case-studies" element={<CaseStudiesPage />} /><Route path="/case-studies/:slug" element={<CaseStudiesPage />} />{routes.map(r=><Route key={r.path} path={r.path} element={<r.component />} />)}</Routes></StaticRouter></TooltipProvider></HelmetProvider>);
 const h=context.helmet;
 return {body,head:[h.title,h.meta,h.link,h.script].map(x=>x.toString()).join("\n")};
}
export function discoveryFiles() {
 const directory = services.map(s=>({name:s.name,slug:s.slug,url:`${SITE}${s.path}`,description:s.intro,summary:s.outcome,capabilities:s.capabilities}));
 const summary = `# Silxor Group Holding\n\n> Enterprise technology consultancy for enterprise and corporate clients.\n\nSilxor helps organizations plan, build, migrate, secure and operate technology across on premises, hybrid and cloud environments. Offerings describe capabilities; scope is agreed per engagement. Technology names do not imply vendor affiliation or certification. This directory makes no client or performance claims.\n\n## Services\n${services.map(s=>`- [${s.name}](${s.path}): ${s.outcome}`).join("\n")}\n\n## Pages\n${pages.filter(p=>p!=="/"&&!p.startsWith("/services/")&&p!=="/services").map(p=>`- [${p.slice(1).replace(/-/g," ")}](${p}): Public information about Silxor ${p.slice(1).replace(/-/g," ")}.`).join("\n")}\n\n## Contact\n- [Book a Consultation](/book): Submit service interests, company context and contact preferences through a three step consultation form. We reply by email; meeting details are confirmed separately.\n- [Email](mailto:hello@silxor.com): hello@silxor.com.\n- Telephone: +1 979 500 3390.\n- [LinkedIn](${business.sameAs[0]}): Existing company profile.\n\n## Optional\n- [Full service reference](/llms-full.txt): Detailed service capabilities and FAQs.\n- [Machine readable services](/services.json): Service URLs, descriptions and capabilities.\n`;
 const full = `# Silxor Group Holding\n\n> Enterprise technology consultancy. Detailed public service reference.\n\nWebsite: ${SITE}/\nEmail: ${business.email}\nTelephone: ${business.telephone}\nConsultation: ${SITE}/book\nRequests collect service interests, company context, contact details and meeting preferences. Requests are privately stored in Lovable Cloud. We reply by email. Deletion requests: hello@silxor.com.\n\nCapabilities are scoped per agreement, not blanket guarantees. Vendor names do not establish affiliations. Private AI is designed for dedicated environments without sending sensitive data to third party model providers.\n\n${services.map(s=>`## ${s.name}\n\n[Service page](${s.path})\n\n${s.intro}\n\n${s.blocks.map(b=>`- ${b.title}: ${b.line}`).join("\n")}\n`).join("\n")}\n## Engagement and process\n${resourcePages.filter(p=>["/engagement","/process"].includes(p.path)).map(p=>`\n[${p.title}](${p.path}): ${p.lead}\n${p.sections.map(s=>`- ${s.title}: ${s.body} ${s.details??""}`).join("\n")}`).join("\n")}\n\n## Frequently asked questions\n${faqs.map(f=>`- ${f.q} ${f.a}`).join("\n")}\n\n## Public pages\n${pages.map(p=>`- [${p === "/" ? "Home" : p.slice(1)}](${p}): Public Silxor page.`).join("\n")}\n`;
 return {"services.json":JSON.stringify({name:business.name,url:SITE,contact:{email:business.email,telephone:business.telephone,consultationUrl:`${SITE}/book`},services:directory},null,2),"llms.txt":summary,"llms-full.txt":full,"sitemap.xml":`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p=>`  <url><loc>${SITE}${p}</loc>${contentModifiedAt[p]?`<lastmod>${contentModifiedAt[p]}</lastmod>`:""}</url>`).join("\n")}\n</urlset>\n`};
}
