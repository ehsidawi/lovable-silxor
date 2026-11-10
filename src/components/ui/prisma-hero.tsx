import { ArrowDown, ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";

/** Signal hero: one unified command surface built from the existing Silxor wording. */
export const PrismaHero = () => (
  <section className="signal-hero flex flex-col" aria-labelledby="home-title">
    <h1 id="home-title" className="sr-only">Silxor builds and protects enterprise technology, from strategy to operations</h1>

    <div className="container-content flex flex-1 flex-col justify-center gap-10 py-12 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
      <div className="lg:col-span-7">
        <p className="signal-meta flex items-center gap-3"><span className="signal-dot" aria-hidden="true" /> Engineer + Defend</p>
        <p className="mt-6" aria-hidden="true">
          <span className="signal-word block">We</span>
          <span className="signal-word signal-word--outline block">Build</span>
          <span className="signal-word signal-word--signal block">Protect</span>
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <SmartLink to="/book" className="r-cta">Book a Consultation <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink>
          <a href="#capabilities" className="r-cta-ghost text-on-ink">Scroll <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </div>

      <div className="lg:col-span-5" aria-hidden="true">
        <div className="signal-console">
          <div className="signal-console-bar signal-meta"><span>silxor / estate</span><span className="text-primary">live</span></div>
          <div className="space-y-3 p-6 text-on-ink-muted">
            <p>$ verify identity --policy zero-trust</p>
            <p className="text-primary">OK  access paths verified</p>
            <p>$ monitor estate --all</p>
            <p className="text-primary">OK  signals streaming</p>
            <p><span className="split-caret" /></p>
          </div>
        </div>
      </div>
    </div>

    <div className="signal-ticker signal-meta" aria-hidden="true">
      <span>01 Engineer</span><span>02 Defend</span><span>03 Build</span><span className="text-primary">04 Protect</span>
    </div>
  </section>
);
