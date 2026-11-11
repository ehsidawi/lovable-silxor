import { ArrowDown, ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import engineeringField from "@/assets/industrial-engineering-field.webp";

/** Full bleed industrial opening using existing website wording. */
export const PrismaHero = () => (
  <section className="industrial-hero" aria-labelledby="home-title">
    <img className="industrial-hero-media" src={engineeringField} alt="Illustrative precision electronics and hardware engineering workbench" width={1536} height={1024} fetchPriority="high" />
    <div className="industrial-hero-shade" aria-hidden="true" />
    <div className="container-content industrial-hero-content">
      <p className="industrial-kicker">Enterprise technology partner <span>Engineer + Defend</span></p>
      <h1 id="home-title" className="industrial-brand">SILXOR<span>.</span></h1>
      <div className="industrial-hero-bottom">
        <h2>We build.<br /><span>We protect.</span></h2>
        <div className="industrial-hero-actions">
          <p>From the systems people see to the infrastructure and security behind them.</p>
          <Button asChild className="r-cta"><SmartLink to="/book">Book a Consultation <ArrowUpRight className="h-5 w-5" aria-hidden="true" /></SmartLink></Button>
        </div>
      </div>
      <a className="industrial-scroll" href="#capabilities">Scroll <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
    </div>
  </section>
);
