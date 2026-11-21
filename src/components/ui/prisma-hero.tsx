import { ArrowRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import engineeringField from "@/assets/hardware-software-hero.webp";

/** Executive opening: serif headline, dual Technology and Talent ledger, framed illustration. */
export const PrismaHero = () => (
  <section className="mx-hero" aria-labelledby="home-title">
    <div className="container-content">
      <div className="mx-hero-grid">
        <div className="mx-hero-copy">
          <span className="mx-label">Silxor · Technology &amp; Talent</span>
          <h1 id="home-title" className="mx-hero-title">We build. We protect. <em>We staff.</em></h1>
          <p className="mx-hero-lead">Counsel, systems and leadership for institutions that cannot afford to get either wrong.</p>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">Enterprise technology consulting, international recruitment and staffing, and C-level advisory, delivered with discretion and senior accountability.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button asChild size="lg"><SmartLink to="/book">Book a Consultation <ArrowRight aria-hidden="true" /></SmartLink></Button>
            <a href="#capabilities" className="mx-inline-link">View capabilities <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="mx-hero-figure">
          <img src={engineeringField} alt="Illustrative enterprise hardware components alongside software code and dashboards" width={1536} height={1024} fetchPriority="high" />
        </figure>
      </div>
      <div className="mx-ledger">
        <SmartLink to="/services" className="mx-ledger-item">
          <span className="mx-label">Technology</span>
          <strong>Systems designed, secured and operated with care.</strong>
          <span className="text-sm text-muted-foreground">Infrastructure, cloud, cybersecurity, identity, software, private AI and hardware.</span>
          <span className="mx-inline-link">Technology services <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
        </SmartLink>
        <SmartLink to="/services/talent-acquisition" className="mx-ledger-item">
          <span className="mx-label">Talent</span>
          <strong>Leadership and teams placed with judgment.</strong>
          <span className="text-sm text-muted-foreground">Executive search, leadership hiring, specialist recruitment and contract staffing, from senior specialists to the boardroom.</span>
          <span className="mx-inline-link">Talent Acquisition <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
        </SmartLink>
      </div>
    </div>
  </section>
);
