import { ArrowUpRight, Linkedin } from "lucide-react";
import { services } from "@/data/services";
import SmartLink from "@/components/SmartLink";
import { resourceLinks } from "@/data/site";
import BackToTop from "@/components/BackToTop";
import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
const columns = [
  {title:"Expertise", links:services.map(s => ({label:s.navLabel,to:s.path}))},
  {title:"Company",links:[{label:"Industries",to:"/industries"},{label:"Delivery Model",to:"/delivery"},{label:"Clients",to:"/clients"},{label:"About",to:"/about"},{label:"Insights",to:"/insights"},...(caseStudies.length?[{label:"Case studies",to:"/case-studies"}]:[]),{label:"Technologies & Platforms",to:"/partners"},{label:"Contact",to:"/contact"}]},
  {title:"Resources",links:[...resourceLinks,{label:"Compliance Documentation",to:"/compliance"},{label:"SLA",to:"/sla"},{label:"Book a Consultation",to:"/book"}]},
];
const Footer = () => (
  <footer className="site-footer"><div className="container-content">
    <div className="footer-directory">
      <div>
        <span className="r-eyebrow">Engineer + Defend</span>
        <p className="mt-6 max-w-sm font-display text-3xl font-semibold leading-tight">We build. We protect.</p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">Enterprise IT consulting, infrastructure and networking, cybersecurity, identity, managed IT, custom software, private AI and hardware engineering.</p>
        <Button asChild className="mt-7"><a href="mailto:hello@silxor.com">hello@silxor.com <ArrowUpRight aria-hidden="true" /></a></Button>
        <p className="mt-4 text-sm text-muted-foreground">+1 979 500 3390</p>
      </div>
      <div className="footer-navigation">{columns.map(c => <details key={c.title} className="footer-link-group"><summary>{c.title}</summary><nav aria-label={c.title}>{c.links.map(l => <SmartLink key={l.to} to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></SmartLink>)}</nav></details>)}</div>
    </div>
    <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground lg:flex-row lg:items-start lg:justify-between">
      <p className="max-w-2xl leading-relaxed">Technology names identify platforms we work with, not vendor affiliations. Framework references describe control alignment capabilities, not certification or attestation.</p>
      <div className="flex flex-wrap gap-5"><a href="/llms.txt" className="underline underline-offset-4">AI site summary</a><a href="/services.json" className="underline underline-offset-4">Service directory</a></div>
    </div>
    <div className="mt-6 flex flex-wrap items-center justify-between gap-5 text-xs text-muted-foreground"><p>© 2026 Silxor Group Holding.</p><div className="flex flex-wrap gap-5"><a href="https://www.linkedin.com/company/silxorllc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a><a href="https://www.linkedin.com/in/ehsidawi" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Designed by Ehsan Nidawi</a></div></div>
  </div>
  <div className="footer-wordmark mt-10 pl-[3%]" aria-hidden="true">silxor<i /></div>
  <BackToTop /></footer>
);
export default Footer;
