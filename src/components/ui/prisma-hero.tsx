import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import engineeringField from "@/assets/hardware-software-hero.webp";
import { servicePillars } from "@/data/services";

/** Bento opening: headline tile, image tile, booking tile and four service chips. */
export const PrismaHero = () => (
  <section className="bento-hero" aria-labelledby="home-title">
    <div className="bento-hero-main">
      <div className="flex flex-wrap items-center justify-between gap-3"><span className="r-eyebrow">Enterprise technology partner</span><span className="font-mono text-[11px] uppercase text-muted-foreground">Engineer + Defend</span></div>
      <h1 id="home-title" className="bento-hero-title"><small>Silxor</small>We build.<em>We protect.</em></h1>
      <div className="bento-hero-foot">
        <p>From the systems people see to the infrastructure and security behind them.</p>
        <Button asChild variant="outline"><a href="#capabilities">Explore capabilities <ArrowUpRight aria-hidden="true" /></a></Button>
      </div>
    </div>
    <figure className="bento-hero-media">
      <img src={engineeringField} alt="Illustrative enterprise hardware components alongside software code and dashboards" width={1536} height={1024} fetchPriority="high" />
      <figcaption><span>Build</span><span>Protect</span></figcaption>
    </figure>
    <SmartLink to="/book" className="bento-hero-book">
      <span className="flex items-start justify-between gap-4"><span className="font-mono text-[11px] uppercase">Let’s talk</span><span className="book-arrow" aria-hidden="true"><ArrowUpRight className="h-7 w-7" /></span></span>
      <strong>Book a Consultation</strong>
    </SmartLink>
    {servicePillars.slice(0, 4).map((s, i) => (
      <SmartLink key={s.slug} to={s.path} className="bento-hero-chip">
        <span><span>{String(i + 1).padStart(2, "0")}</span><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
        <strong>{s.navLabel}</strong>
      </SmartLink>
    ))}
  </section>
);
