import { ArrowDown, MousePointer2 } from "lucide-react";
import SmartLink from "@/components/SmartLink";

/** Split screen hero: build side and protect side, isolated from the multi-page shell. */
export const PrismaHero = () => (
  <section className="split-hero relative isolate grid min-h-[calc(100svh-4rem)] overflow-hidden md:grid-cols-2" aria-labelledby="home-title">
    <h1 id="home-title" className="sr-only">Silxor builds and protects enterprise technology, from strategy to operations</h1>

    {/* Build side */}
    <div className="split-paper relative flex flex-col px-6 pb-16 pt-10 md:px-12">
      <p className="split-word text-right" aria-hidden="true">WE <span className="text-primary">BUILD</span></p>
      <div className="mx-auto mt-10 w-full max-w-md" aria-hidden="true">
        <div className="split-window">
          <div className="split-window-bar bg-primary"><i /><i /><i /></div>
          <div className="space-y-3 p-6">
            <div className="h-5 w-3/5 bg-paper-foreground" />
            <div className="h-2 w-full bg-paper-foreground/20" />
            <div className="h-2 w-4/5 bg-paper-foreground/20" />
            <div className="relative mt-4 inline-flex h-9 w-28 items-center rounded-full bg-primary">
              <MousePointer2 className="absolute -bottom-4 right-0 h-7 w-7 fill-paper-foreground text-paper-foreground" />
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <div className="grid h-16 w-20 place-items-center bg-paper-foreground/10 font-display text-3xl font-bold text-paper-foreground">Aa</div>
          <div className="flex h-8 w-14 items-center justify-end rounded-full bg-primary p-1"><span className="h-6 w-6 rounded-full bg-paper" /></div>
        </div>
      </div>
    </div>

    {/* Protect side */}
    <div className="split-dark relative flex flex-col px-6 pb-16 pt-10 md:px-12">
      <p className="split-word" aria-hidden="true">WE <span className="text-primary">PROTECT</span></p>
      <div className="mx-auto mt-10 w-full max-w-md font-mono text-sm" aria-hidden="true">
        <div className="split-window split-terminal">
          <div className="split-window-bar"><i /><i /><i /></div>
          <div className="space-y-2 p-6 text-on-ink-muted">
            <p>$ verify identity --policy zero-trust</p>
            <p className="text-primary">OK  access paths verified</p>
            <p>$ monitor estate --all</p>
            <p className="text-primary">OK  signals streaming</p>
            <p><span className="split-caret" /></p>
          </div>
        </div>
      </div>
    </div>

    {/* Center seal */}
    <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center">
      <div className="split-pill pointer-events-auto">
        <span className="text-primary">ENGINEER</span>
        <span className="split-hex">+</span>
        <span className="text-on-ink">DEFEND</span>
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-5 z-10 flex flex-wrap items-center justify-center gap-3 px-6">
      <SmartLink to="/book" className="r-cta r-cta--sm">Book a Consultation</SmartLink>
      <a href="#capabilities" className="r-cta-ghost r-cta--sm bg-ink/60 text-on-ink">Scroll <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
    </div>
  </section>
);
