import { ArrowUpRight, ArrowDown } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import engineeringHero from "@/assets/silxor-integrated-engineering.webp";
import engineeringHeroSmall from "@/assets/silxor-integrated-engineering-small.webp";

/** Lightweight editorial hero, isolated from the multi-page shell. */
export const PrismaHero = () => (
  <section className="dark-band relative isolate overflow-hidden" aria-labelledby="home-title">
    <img src={engineeringHero} srcSet={`${engineeringHeroSmall} 768w, ${engineeringHero} 1536w`} sizes="100vw" alt="Illustrative interconnected titanium modules representing integrated technology, security and engineering" width={1536} height={1024} {...{ fetchpriority: "high" }} className="hero-engineering-image absolute inset-0 -z-20 h-full w-full object-cover object-right" />
    <div className="hero-shade absolute inset-0 -z-10" aria-hidden="true" />
    <div className="container-content pb-6 pt-10 md:pt-14">
      <div className="mb-5 flex items-center gap-3 text-xs uppercase text-on-ink-muted"><span className="h-2 w-2 bg-primary" />Silxor Group Holding</div>
      <h1 id="home-title" className="home-hero-title max-w-3xl font-display font-bold text-on-ink">SILXOR</h1>
      <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-on-ink md:text-3xl">Enterprise technology.<br />From strategy to operations.</h2>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-on-ink-muted">IT strategy, infrastructure, cybersecurity, identity, software and hardware. Scoped to your environment. Delivered with clear accountability.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild size="lg"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
        <Button asChild variant="outline" size="lg" className="border-on-ink/40 text-on-ink hover:border-on-ink hover:bg-on-ink/10"><SmartLink to="/services">Explore Services <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
      </div>
      <div className="mt-8 flex items-center justify-between gap-5 border-t border-on-ink/20 pt-4 md:mt-10">
        <span className="font-mono text-[10px] uppercase text-on-ink-muted sm:text-xs">Architecture. Engineering. Accountability.</span>
        <Button asChild variant="outline" size="icon" className="border-on-ink/30 text-on-ink hover:border-on-ink hover:bg-on-ink/10"><a href="#capabilities" aria-label="Explore Silxor capabilities"><ArrowDown className="h-5 w-5" aria-hidden="true" /></a></Button>
      </div>
    </div>
  </section>
);
