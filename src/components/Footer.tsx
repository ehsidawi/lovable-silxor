import { ArrowRight, Linkedin } from "lucide-react";
import { services } from "@/data/services";
import SmartLink from "@/components/SmartLink";
import { resourceLinks } from "@/data/site";
import BackToTop from "@/components/BackToTop";
import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";

const columns = [
  { title: "Services", links: services.map(s => ({ label: s.navLabel, to: s.path })) },
  { title: "Company", links: [{ label: "Industries", to: "/industries" }, { label: "Delivery Model", to: "/delivery" }, { label: "Clients", to: "/clients" }, { label: "About", to: "/about" }, { label: "Insights", to: "/insights" }, ...(caseStudies.length ? [{ label: "Case studies", to: "/case-studies" }] : []), { label: "Technologies & Platforms", to: "/partners" }, { label: "Contact", to: "/contact" }] },
  { title: "Resources", links: [...resourceLinks, { label: "Compliance Documentation", to: "/compliance" }, { label: "SLA", to: "/sla" }] },
];

/** Institutional footer: statement, contact and three link columns over a hairline grid. */
const Footer = () => (
  <footer className="mx-footer">
    <div className="container-content">
      <div className="mx-footer-top">
        <div>
          <p className="mx-footer-statement">We build systems and the teams that run them.</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button asChild><SmartLink to="/book">Book a Consultation <ArrowRight aria-hidden="true" /></SmartLink></Button>
            <a href="mailto:hello@silxor.com" className="mx-inline-link">hello@silxor.com</a>
            <a href="tel:+19795003390" className="text-sm text-muted-foreground hover:text-foreground">+1 979 500 3390</a>
          </div>
        </div>
      </div>
      <div className="mx-footer-cols">
        {columns.map(c => (
          <nav key={c.title} aria-label={c.title}>
            <span className="mx-label">{c.title}</span>
            <ul className="mt-4 space-y-1">{c.links.map(l => <li key={l.to}><SmartLink to={l.to} className="mx-footer-link">{l.label}</SmartLink></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="mx-footer-legal">
        <p className="max-w-2xl">Technology names identify platforms we work with, not vendor affiliations. Framework references describe control alignment capabilities, not certification or attestation.</p>
        <div className="flex flex-wrap gap-5"><a href="/llms.txt" className="hover:text-foreground">AI site summary</a><a href="/services.json" className="hover:text-foreground">Service directory</a></div>
      </div>
      <div className="mx-footer-legal border-0 pt-0">
        <p>© 2026 Silxor Group Holding.</p>
        <div className="flex flex-wrap gap-5"><a href="https://www.linkedin.com/company/silxorllc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a><a href="https://www.linkedin.com/in/ehsidawi" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Designed by Ehsan Nidawi</a></div>
      </div>
    </div>
    <BackToTop />
  </footer>
);
export default Footer;
