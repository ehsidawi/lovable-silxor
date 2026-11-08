import { ArrowUpRight, ArrowDown } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import heroArtwork from "@/assets/silxor-bohemian-hero.webp.asset.json";

export const PrismaHero = () => (
  <section className="bohemian-hero relative isolate overflow-hidden" aria-labelledby="home-title">
    <img src={heroArtwork.url} alt="" aria-hidden="true" width={1600} height={1024} {...{ fetchpriority: "high" }} className="bohemian-hero-art absolute inset-0 -z-20 h-full w-full object-cover" />
    <div className="hero-shade absolute inset-0 -z-10" aria-hidden="true" />
    <div className="container-content pb-7 pt-14 md:pt-20">
      <p className="r-eyebrow">Silxor Group Holding</p>
      <h1 id="home-title" className="home-hero-title mt-7 max-w-3xl font-display text-foreground">SILXOR.<br />Built for the<br /><span className="text-primary">critical.</span></h1>
      <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">Enterprise technology consulting across IT strategy, infrastructure, cybersecurity, identity, software and hardware. We design, build, migrate and operate on premises, hybrid and cloud systems.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-12 px-6"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
        <Button asChild variant="outline" className="h-12 px-6"><SmartLink to="/services">Explore Services <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
      </div>
      <div className="hero-footer mt-12 flex items-center justify-between gap-5 border-t pt-6 md:mt-14">
        <span className="text-xs text-muted-foreground sm:text-sm">Architecture. Engineering. Accountability.</span>
        <Button asChild variant="outline" size="icon" className="h-11 w-11 shrink-0"><a href="#capabilities" aria-label="Explore Silxor capabilities"><ArrowDown aria-hidden="true" /></a></Button>
      </div>
    </div>
  </section>
);
