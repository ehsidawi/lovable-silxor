import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import heroArtwork from "@/assets/silxor-norch-hero.webp.asset.json";

export const PrismaHero = () => (
  <section className="relative isolate overflow-hidden pb-20 pt-10 md:pb-28 md:pt-16" aria-labelledby="home-title">
    <div className="hero-glow pointer-events-none absolute -left-[30%] top-[-10%] -z-10 h-[120%] w-[90%]" aria-hidden="true" />
    <div className="container-content grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div className="relative order-2 overflow-hidden rounded-[32px] border border-border lg:order-1">
        <img src={heroArtwork.url} alt="" aria-hidden="true" width={900} height={1056} {...{ fetchpriority: "high" }} className="aspect-[4/3] h-full w-full object-cover lg:aspect-[9/10]" />
      </div>
      <div className="order-1 lg:order-2">
        <p className="r-eyebrow">Silxor Group Holding</p>
        <h1 id="home-title" className="home-hero-title mt-5 font-medium">Enterprise technology, built for the critical.</h1>
        <p className="r-lead mt-6 max-w-xl">Enterprise technology consulting across IT strategy, infrastructure, cybersecurity, identity, software and hardware. We design, build, migrate and operate on premises, hybrid and cloud systems.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button asChild size="lg"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
          <Button asChild variant="outline" size="lg"><SmartLink to="/services">Explore Services</SmartLink></Button>
        </div>
        <div className="mt-14 flex items-center gap-5 border-t border-border pt-7">
          <img src={heroArtwork.url} alt="" aria-hidden="true" width={72} height={72} className="h-16 w-16 shrink-0 rounded-2xl object-cover" />
          <p className="flex-1 text-sm leading-relaxed text-body-soft">Architecture, engineering and operations from one accountable senior team.</p>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="icon" className="h-12 w-12"><a href="#capabilities" aria-label="Previous: explore capabilities"><ArrowLeft aria-hidden="true" /></a></Button>
            <Button asChild variant="outline" size="icon" className="h-12 w-12"><a href="#services-overview" aria-label="Next: service overview"><ArrowRight aria-hidden="true" /></a></Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
