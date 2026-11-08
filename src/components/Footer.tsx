import { ArrowUpRight, Linkedin } from "lucide-react";
import SmartLink from "@/components/SmartLink";
const columns = [
  {title:"Expertise", links:[{label:"Full Product Team",to:"/services/product-team"},{label:"Advisory & Strategy",to:"/services/advisory"},{label:"Infrastructure & Cloud",to:"/services/cloud"},{label:"Cybersecurity & GRC",to:"/services/cybersecurity"},{label:"Private AI",to:"/services/private-ai"},{label:"Identity & Access",to:"/services/identity"},{label:"Managed Services",to:"/services/managed-services"}]},
  {title:"Company",links:[{label:"Industries",to:"/industries"},{label:"Delivery Model",to:"/delivery"},{label:"Clients",to:"/clients"},{label:"About",to:"/about"},{label:"Partners",to:"/partners"},{label:"Contact",to:"/contact"}]},
  {title:"Resources",links:[{label:"Privacy",to:"/privacy"},{label:"Compliance Documentation",to:"/compliance"},{label:"SLA",to:"/sla"},{label:"Book an Assessment",to:"/book"}]},
];
const Footer = () => (
  <footer className="bg-secondary pb-7 pt-14"><div className="container-content">
    <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div><SmartLink to="/" className="flex items-center gap-2.5 font-display text-3xl font-extrabold"><span className="h-3 w-3 bg-forest" aria-hidden="true" />SILXOR</SmartLink><p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Enterprise technology, cybersecurity, cloud, private AI, identity, and managed services.</p><a href="mailto:hello@silxor.com" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">hello@silxor.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a><address className="mt-3 max-w-xs text-sm not-italic leading-relaxed text-muted-foreground">801 Barton Springs Rd<br />Austin, TX 78704</address></div>
      {columns.map(c => <div key={c.title}><h2 className="mb-5 font-mono text-xs uppercase text-muted-foreground">{c.title}</h2><nav aria-label={c.title} className="flex flex-col gap-3">{c.links.map(l => <SmartLink key={l.to} to={l.to} className="text-sm hover:text-forest hover:underline underline-offset-4">{l.label}</SmartLink>)}</nav></div>)}
    </div>
    <div className="mt-9 flex flex-wrap gap-2">{["NIST CSF", "ISO 27001", "SOC 2 Practices", "GDPR"].map(f => <span key={f} className="r-pill">{f}</span>)}</div>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6 text-xs text-muted-foreground"><p>© 2026 Silxor Group Holding.</p><div className="flex flex-wrap gap-5"><a href="https://www.linkedin.com/company/silxorllc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-forest"><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a><a href="https://www.linkedin.com/in/ehsidawi" target="_blank" rel="noopener noreferrer" className="hover:text-forest">Designed by Ehsan Nidawi</a></div></div>
  </div></footer>
);
export default Footer;
