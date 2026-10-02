import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/silxor-hero.mp4.asset.json";
import heroWebm from "@/assets/silxor-hero.webm.asset.json";
import heroPoster from "@/assets/silxor-hero-poster.jpg.asset.json";



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
    <section className="silxor-hero relative isolate overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0" aria-hidden="true">
        <img src={heroPoster.url} alt="" className="h-full w-full object-cover" />
        {!reduceMotion && !videoFailed && (
          <video
            className="silxor-hero-video absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster.url}
            onError={() => setVideoFailed(true)}
          >
            <source src={heroWebm.url} type="video/webm" />
            <source src={heroVideo.url} type="video/mp4" />
          </video>
        )}
        <div className="silxor-hero-shade absolute inset-0" />
      </div>

      <div className="container-content relative z-10 flex h-full min-h-[inherit] flex-col justify-between py-8 md:py-10">
        <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase text-foreground/80 sm:text-xs">
          <span>SLXR // 2026</span>
          <span>Architect · Build · Secure</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild className="h-12 rounded-sm px-5 font-mono text-xs uppercase sm:px-6">
            <SmartLink to="/book">Book an Assessment <ArrowUpRight aria-hidden="true" /></SmartLink>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-sm border-foreground/50 bg-background/20 px-5 font-mono text-xs uppercase text-foreground hover:bg-background/50 sm:px-6">
            <SmartLink to="/services">Explore Services <ArrowUpRight aria-hidden="true" /></SmartLink>
          </Button>
        </div>
      </div>
    </section>
  );
};