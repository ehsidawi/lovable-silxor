import { ArrowUpRight, Linkedin } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import { resourceLinks } from "@/data/site";
import { services } from "@/data/services";
import BackToTop from "@/components/BackToTop";
import { caseStudies } from "@/data/caseStudies";

const columns = [
  { title: "Company", links: [{label:"Services",to:"/services"},{label:"Industries",to:"/industries"},{label:"Delivery Model",to:"/delivery"},{label:"Clients",to:"/clients"},{label:"About",to:"/about"},{label:"Insights",to:"/insights"},...(caseStudies.length?[{label:"Case studies",to:"/case-studies"}]:[]),{label:"Technologies & Platforms",to:"/technologies"},{label:"Contact",to:"/contact"}] },
  { title: "Support", links: [...resourceLinks,{label:"Compliance Documentation",to:"/compliance"},{label:"SLA",to:"/sla"}] },
  { title: "Expertise", links: services.map(s => ({label:s.navLabel,to:s.path})) },
];

const Footer = () => (
  <footer className="border-t border-border pb-8 pt-20"><div className="container-content">
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div>
        <h2 className="text-2xl font-medium">Start a conversation</h2>
        <p className="r-lead mt-4 max-w-xs">Tell us what you are planning and we will reply by email.</p>
        <Button asChild className="mt-7"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
      </div>
      {columns.map(c => <div key={c.title}><h2 className="mb-5 text-base font-medium">{c.title}</h2><nav aria-label={c.title} className="flex flex-col gap-1">{c.links.map(l => <SmartLink key={l.to} to={l.to} className="text-nav text-sm hover:text-foreground">{l.label}</SmartLink>)}</nav></div>)}
    </div>
    <div className="mt-14 border-t border-border pt-8 grid gap-6 lg:grid-cols-[1.3fr_3fr]">
      <SmartLink to="/" className="flex items-center gap-2.5 text-2xl font-semibold"><span className="h-3 w-3 rounded-full bg-foreground" aria-hidden="true" />Silxor</SmartLink>
      <p className="max-w-2xl text-sm leading-relaxed text-body-soft">Enterprise IT consulting, infrastructure and networking, cybersecurity, identity, managed IT, custom software, private AI and hardware engineering. Technology names identify platforms we work with, not vendor affiliations. Framework references describe control alignment capabilities, not certification or attestation.</p>
    </div>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6 text-sm text-body-soft">
      <p>© 2026 Silxor Group Holding</p>
      <div className="flex flex-wrap items-center gap-6">
        <a href="mailto:hello@silxor.com" className="hover:text-foreground">hello@silxor.com</a>
        <span>+1 979 500 3390</span>
        <a href="https://www.linkedin.com/company/silxorllc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a>
        <a href="/llms.txt" className="hover:text-foreground">AI site summary</a>
        <a href="/services.json" className="hover:text-foreground">Service directory</a>
        <a href="https://www.linkedin.com/in/ehsidawi" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Designed by Ehsan Nidawi</a>
      </div>
    </div>
  </div><BackToTop /></footer>
);
export default Footer;
