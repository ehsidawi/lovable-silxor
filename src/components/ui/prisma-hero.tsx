import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/silxor-hero-color.mp4.asset.json";
import heroWebm from "@/assets/silxor-hero-color.webm.asset.json";
import heroPoster from "@/assets/silxor-hero-color-poster.jpg.asset.json";

/** Supplied Prisma hero: full-color looping video backdrop with the original gradient overlay. */
export const PrismaHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Safari Low Power Mode blocks <video> autoplay and shows a play button.
  // Safari plays muted mp4 inside <img> regardless, so swap to that when blocked.
  const [useImgFallback, setUseImgFallback] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // React does not reliably render the muted attribute; iOS needs it for autoplay.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.controls = false;
    let blockedCount = 0;
    const tryPlay = () => {
      if (!video.paused) return;
      video.play().then(() => {
        blockedCount = 0;
        setUseImgFallback(false);
      }).catch((err: DOMException) => {
        if (err?.name === "NotAllowedError" && ++blockedCount >= 1) setUseImgFallback(true);
      });
    };
    tryPlay();
    const interval = window.setInterval(tryPlay, 1000);
    const events = ["touchstart", "pointerdown", "scroll", "visibilitychange", "focus"] as const;
    events.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }));
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("pause", tryPlay);
    return () => {
      window.clearInterval(interval);
      events.forEach((e) => window.removeEventListener(e, tryPlay));
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("pause", tryPlay);
    };
  }, []);

  return (
    <section className="silxor-hero w-full px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="relative h-full min-h-[inherit] w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          ref={videoRef}
          className="silxor-hero-video pointer-events-none absolute inset-0 h-full w-full object-cover"
          poster={heroPoster.url}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          tabIndex={-1}
          aria-hidden="true"
        >
          <source src={heroVideo.url} type="video/mp4" />
          <source src={heroWebm.url} type="video/webm" />
        </video>
        {useImgFallback && !imgFailed && (
          <img
            src={heroVideo.url}
            alt=""
            aria-hidden="true"
            onError={() => setImgFailed(true)}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        )}

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
