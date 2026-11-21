import { ArrowRight, ArrowDownRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import SystemBlueprint, { SystemBlueprintCompact } from "@/components/home/SystemBlueprint";

const offers = [
  { code: "01", label: "Technology", title: "Enterprise Technology Consulting", to: "/services" },
  { code: "02", label: "Talent", title: "International Recruitment & Staffing", to: "/services/talent-acquisition" },
  { code: "03", label: "Advisory", title: "C-Level Advisory", to: "/services/advisory" },
];

/** Precision Future opening: grotesk proposition, three offer index and an engineered blueprint. */
export const PrismaHero = () => (
  <section className="px-hero" aria-labelledby="home-title">
    <div className="px-hero-grid-lines" aria-hidden="true" />
    <div className="container-content px-hero-layout">
      <div className="px-hero-copy">
        <p className="px-kicker"><span className="px-dot" aria-hidden="true" />We build. We protect. We staff.</p>
        <h1 id="home-title" className="px-hero-title">Technology. Talent. <span>Senior accountability.</span></h1>
        <p className="px-hero-lead">Enterprise technology consulting, international recruitment and staffing, and C-level advisory, delivered with discretion and senior accountability.</p>
        <div className="px-hero-actions">
          <Button asChild size="lg"><SmartLink to="/book">Book a Consultation <ArrowRight aria-hidden="true" /></SmartLink></Button>
          <a href="#capabilities" className="px-ghost-link">View capabilities <ArrowDownRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </div>
      <figure className="px-hero-figure">
        <SystemBlueprint />
        <SystemBlueprintCompact />
        <figcaption><span>FIG. 01</span>Advisory, technology and talent under one accountable lead</figcaption>
      </figure>
    </div>
    <div className="container-content">
      <nav aria-label="Core offers" className="px-offer-index">
        {offers.map(o => (
          <SmartLink key={o.code} to={o.to} className="px-offer-index-item">
            <span className="px-mono">{o.code} / {o.label}</span>
            <strong>{o.title}</strong>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </SmartLink>
        ))}
      </nav>
    </div>
  </section>
);
