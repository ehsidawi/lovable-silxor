import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/silxor-hero.mp4.asset.json";
import heroPoster from "@/assets/silxor-hero-poster.jpg.asset.json";

// Local Vite does not proxy project asset pointers; use the project's public asset host there.
const assetUrl = (path: string) =>
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? `https://silxor.com${path}`
    : path;

/** Adapted from the supplied Prisma hero: moving backdrop, oversized wordmark, compact editorial copy. */
export const PrismaHero = () => {
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (reduceMotion || videoFailed) return;
    const video = document.querySelector<HTMLVideoElement>(".silxor-hero-video");
    if (!video) return;
    video.play().catch(() => setVideoFailed(true));
  }, [reduceMotion, videoFailed]);

  return (
    <section aria-labelledby="home-title" className="silxor-hero relative isolate overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0" aria-hidden="true">
        <img src={assetUrl(heroPoster.url)} alt="" className="h-full w-full object-cover" />
        {!reduceMotion && !videoFailed && (
          <video
            className="silxor-hero-video absolute inset-0 h-full w-full object-cover"
            src={assetUrl(heroVideo.url)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={assetUrl(heroPoster.url)}
            onError={() => setVideoFailed(true)}
          />
        )}
        <div className="silxor-hero-shade absolute inset-0" />
      </div>

      <div className="container-content relative z-10 flex h-full min-h-[inherit] flex-col justify-between py-8 md:py-10">
        <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase text-foreground/80 sm:text-xs">
          <span>SLXR // 2026</span>
          <span>Architect · Build · Secure</span>
        </div>

        <div>
          <motion.h1
            id="home-title"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="silxor-hero-wordmark font-display font-extrabold uppercase text-foreground"
          >
            SILXOR
          </motion.h1>

          <div className="mt-5 grid gap-6 border-t border-foreground/30 pt-5 md:mt-7 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] md:items-end md:gap-12 md:pt-7">
            <div>
              <p className="font-mono text-[10px] uppercase text-foreground/80 sm:text-xs">Enterprise Technology Partner</p>
              <h2 className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                Systems built to perform. Teams built to deliver.
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
      </div>
    </section>
  );
};