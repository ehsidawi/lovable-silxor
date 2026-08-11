import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { scrollToHash } from "@/lib/hashNav";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 };
  const animate = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#141414",
        paddingTop: "clamp(56px, 8vh, 96px)",
        paddingBottom: "clamp(40px, 6vw, 72px)",
      }}
    >
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(to right, #F0F1F3 1px, transparent 1px)",
          backgroundSize: "12.5% 100%",
        }}
      />

      <div className="relative container-content" style={{ zIndex: 1 }}>
        <motion.div initial={initial} animate={animate} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
            <span aria-hidden style={{ width: 24, height: 1, background: "#F0F1F3" }} />
            <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.22em", color: "#B8BCC2" }}>
              Enterprise Technology Partner
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-display font-[700]"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              maxWidth: 1000,
            }}
          >
            Enterprise technology, engineered to be accountable.
          </h1>
        </motion.div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : 0.12 }}
          className="lg:grid lg:grid-cols-12 lg:gap-12 items-end"
          style={{ marginTop: 28 }}
        >
          <p
            className="font-body font-[300] lg:col-span-7"
            style={{ fontSize: "clamp(15px, 1.35vw, 19px)", lineHeight: 1.6, color: "#F0F1F3", maxWidth: 680 }}
          >
            Cybersecurity, cloud, private AI, identity, and managed services for institutions that need a single
            accountable partner.
          </p>

          <div className="lg:col-span-5 flex flex-wrap items-center gap-5" style={{ marginTop: 24 }}>
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/book")}
              className="h-auto rounded-none font-mono uppercase inline-flex items-center justify-center hover:bg-white hover:text-inherit transition-colors"
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                backgroundColor: "#FFFFFF",
                color: "#0B0B0B",
                padding: "16px 32px",
                minHeight: 44,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Book an Assessment
            </Button>

            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#capabilities");
              }}
              className="font-mono uppercase inline-flex items-center gap-2 transition-colors"
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "#B8BCC2",
                minHeight: 44,
                borderBottom: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Start the tour
              <span aria-hidden>↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
