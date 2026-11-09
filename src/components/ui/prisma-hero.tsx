import { ArrowDown } from "lucide-react";
import SmartLink from "@/components/SmartLink";

/** Full screen ignition style hero, isolated from the multi-page shell. */
export const PrismaHero = () => (
  <section className="ignite-hero dark-band relative isolate flex min-h-[calc(100svh-4rem)] flex-col items-center justify-between overflow-hidden px-6 py-8" aria-labelledby="home-title">
    <div className="ignite-glow absolute inset-0 -z-10" aria-hidden="true" />
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-on-ink-muted">Silxor Group Holding</p>

    <div className="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between md:gap-6">
      <h1 id="home-title" className="contents">
        <span className="ignite-word">BUILD</span>
        <span className="sr-only">Silxor enterprise technology, from strategy to operations</span>
      </h1>
      <SmartLink to="/book" className="ignite-button order-first md:order-none" aria-label="Book a Consultation">
        <span>Book a<br />Consultation</span>
      </SmartLink>
      <span className="ignite-word" aria-hidden="true">SECURE</span>
    </div>

    <div className="flex flex-col items-center gap-4 text-center">
      <p className="max-w-md text-sm leading-relaxed text-on-ink-muted">IT strategy, infrastructure, cybersecurity, identity, software and hardware. One accountable team.</p>
      <a href="#capabilities" className="font-mono text-xs uppercase tracking-[0.2em] text-on-ink hover:text-primary inline-flex min-h-11 items-center gap-2">
        [ Explore capabilities ] <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  </section>
);
