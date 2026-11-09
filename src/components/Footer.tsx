import { ArrowUpRight, Linkedin } from "lucide-react";
import { services } from "@/data/services";
import SmartLink from "@/components/SmartLink";
import { resourceLinks } from "@/data/site";
import BackToTop from "@/components/BackToTop";
import { caseStudies } from "@/data/caseStudies";
const columns = [
  {title:"Expertise", links:services.map(s => ({label:s.navLabel,to:s.path}))},
  {title:"Company",links:[{label:"Industries",to:"/industries"},{label:"Delivery Model",to:"/delivery"},{label:"Clients",to:"/clients"},{label:"About",to:"/about"},{label:"Insights",to:"/insights"},...(caseStudies.length?[{label:"Case studies",to:"/case-studies"}]:[]),{label:"Technologies & Platforms",to:"/partners"},{label:"Contact",to:"/contact"}]},
  {title:"Resources",links:[...resourceLinks,{label:"Compliance Documentation",to:"/compliance"},{label:"SLA",to:"/sla"},{label:"Book a Consultation",to:"/book"}]},
];
const Footer = () => (
  <footer className="editorial-footer bg-secondary pb-6 pt-10"><div className="container-content">
    <div className="footer-wordmark mb-8 border-b border-border pb-6" aria-hidden="true">SILXOR<span className="text-primary">.</span></div>
    <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div><SmartLink to="/" className="flex items-center gap-2.5 font-display text-3xl font-extrabold"><span className="h-3 w-3 bg-forest" aria-hidden="true" />SILXOR</SmartLink><p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Enterprise IT consulting, infrastructure and networking, cybersecurity, identity, managed IT, custom software, private AI and hardware engineering.</p><a href="mailto:hello@silxor.com" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">hello@silxor.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a><p className="mt-3 text-sm text-muted-foreground">+1 979 500 3390</p></div>
      {columns.map(c => <div key={c.title}><h2 className="mb-5 font-mono text-xs uppercase text-muted-foreground">{c.title}</h2><nav aria-label={c.title} className="flex flex-col gap-0">{c.links.map(l => <SmartLink key={l.to} to={l.to} className="text-sm hover:text-forest hover:underline underline-offset-4">{l.label}</SmartLink>)}</nav></div>)}
    </div>
    <div className="mt-9 border-t border-border pt-6"><p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">Technology names identify platforms we work with, not vendor affiliations. Framework references describe control alignment capabilities, not certification or attestation.</p><div className="mt-4 flex flex-wrap gap-5 text-xs"><a href="/llms.txt" className="underline underline-offset-4">AI site summary</a><a href="/services.json" className="underline underline-offset-4">Service directory</a></div></div>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6 text-xs text-muted-foreground"><p>© 2026 Silxor Group Holding.</p><div className="flex flex-wrap gap-5"><a href="https://www.linkedin.com/company/silxorllc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-forest"><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a><a href="https://www.linkedin.com/in/ehsidawi" target="_blank" rel="noopener noreferrer" className="hover:text-forest">Designed by Ehsan Nidawi</a></div></div>
  </div><BackToTop /></footer>
);
export default Footer;
