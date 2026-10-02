import { motion, useReducedMotion } from "framer-motion";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const headline = "Systems built to perform. Teams built to deliver.";

/** Oversized SILXOR statement band. Shares the hero's palette (background, foreground, mono metadata). */
const WordmarkStatement = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="home-title"
      className="relative isolate overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.08,
          backgroundImage:
            "linear-gradient(to bottom right, transparent 49.5%, rgba(255,255,255,0.5) 50%, transparent 50.5%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="container-content relative z-10 py-10 md:py-14">
        <motion.h1
          id="home-title"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="silxor-hero-wordmark font-display font-extrabold uppercase text-foreground"
        >
          SILXOR
        </motion.h1>

        <div className="mt-5 grid gap-6 border-t border-foreground/30 pt-5 md:mt-7 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] md:items-end md:gap-12 md:pt-7">
          <div>
            <p className="font-mono text-[10px] uppercase text-foreground/80 sm:text-xs">Enterprise Technology Partner</p>
            <h2
              className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl"
              aria-label={headline}
            >
              {headline.split(" ").map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  aria-hidden="true"
                  className="inline-block"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.1 + index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}{"\u00a0"}
                </motion.span>
              ))}
            </h2>
          </div>
          <div>
            <p className="max-w-md text-sm leading-relaxed text-foreground/90 sm:text-base">
              We architect, build, secure, and operate the systems your business runs on. One accountable senior team from architecture to operations.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button asChild className="h-12 rounded-sm px-5 font-mono text-xs uppercase sm:px-6">
                <SmartLink to="/book">Book an Assessment <ArrowUpRight aria-hidden="true" /></SmartLink>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-sm border-foreground/50 bg-background/20 px-5 font-mono text-xs uppercase text-foreground hover:bg-background/50 sm:px-6">
                <SmartLink to="/services">Explore Services <ArrowUpRight aria-hidden="true" /></SmartLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordmarkStatement;
