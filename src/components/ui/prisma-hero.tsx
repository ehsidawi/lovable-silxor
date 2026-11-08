import { ArrowUpRight, ArrowDown } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";

/** Lightweight editorial hero, isolated from the multi-page shell. */
export const PrismaHero = () => (
  <section className="dark-band relative isolate overflow-hidden" aria-labelledby="home-title">
    <img src="/silxor-infrastructure-1600.webp" srcSet="/silxor-infrastructure-768.webp 768w, /silxor-infrastructure-1600.webp 1600w" sizes="100vw" alt="" aria-hidden="true" width={1920} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
    <div className="hero-shade absolute inset-0 -z-10" aria-hidden="true" />
    <div className="container-content pb-7 pt-12 md:pt-20">
      <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase text-on-ink-muted"><span className="h-2 w-2 bg-primary" />Silxor Group Holding</div>
      <h1 id="home-title" className="home-hero-title max-w-3xl font-display font-bold text-on-ink">SILXOR.<br />Built for the<br /><span className="text-primary">critical.</span></h1>
      <p className="mt-7 max-w-lg text-base leading-relaxed text-on-ink-muted md:text-lg">Enterprise technology consulting across IT strategy, infrastructure, cybersecurity, identity, software and hardware. We design, build, migrate and operate on premises, hybrid and cloud systems.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-12 rounded-sm px-6"><SmartLink to="/book">Book an Assessment <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
        <Button asChild variant="outline" className="h-12 rounded-sm border-on-ink/40 bg-transparent px-6 text-on-ink hover:border-primary hover:bg-forest"><SmartLink to="/services">Explore Services <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
      </div>
      <div className="mt-12 flex items-center justify-between gap-5 border-t border-on-ink/20 pt-6 md:mt-16">
        <span className="font-mono text-[10px] uppercase text-on-ink-muted sm:text-xs">Architecture. Engineering. Accountability.</span>
        <a href="#capabilities" aria-label="Explore Silxor capabilities" className="flex h-11 w-11 shrink-0 items-center justify-center border border-on-ink/30 text-primary"><ArrowDown className="h-5 w-5" aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);
