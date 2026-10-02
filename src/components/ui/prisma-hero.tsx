import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/silxor-hero-color.mp4.asset.json";
import heroPoster from "@/assets/silxor-hero-color-poster.jpg.asset.json";

/** Supplied Prisma hero: full-color looping video backdrop with the original gradient overlay. */
export const PrismaHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const tryPlay = () => {
      video.play().catch(() => undefined);
    };
    tryPlay();
    // Some phones block autoplay until the first touch; resume on any interaction.
    const events = ["touchstart", "pointerdown", "scroll", "visibilitychange"] as const;
    events.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }));
    video.addEventListener("canplay", tryPlay);
    return () => {
      events.forEach((e) => window.removeEventListener(e, tryPlay));
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <section className="silxor-hero w-full px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="relative h-full min-h-[inherit] w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroPoster.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />

        <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between px-4 py-6 sm:px-6 md:px-10 md:py-10">
          <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase text-foreground/90 sm:text-xs">
            <span>SLXR // 2026</span>
            <span>Architect · Build · Secure</span>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild className="h-12 rounded-full px-5 font-mono text-xs uppercase sm:px-6">
              <SmartLink to="/book">Book an Assessment <ArrowUpRight aria-hidden="true" /></SmartLink>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-foreground/50 bg-background/20 px-5 font-mono text-xs uppercase text-foreground hover:bg-background/50 sm:px-6">
              <SmartLink to="/services">Explore Services <ArrowUpRight aria-hidden="true" /></SmartLink>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
