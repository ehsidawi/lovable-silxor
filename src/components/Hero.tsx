import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 };
  const animate = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section
      className="relative overflow-hidden border-b"
      style={{
        minHeight: "calc(100vh - 80px)",
        backgroundColor: "#141414",
        color: "#FFFFFF",
        borderColor: "#25282C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "clamp(24px, 5vw, 80px)",
        paddingTop: "clamp(140px, 18vh, 200px)",
      }}
    >
      {/* Technical Header */}
      <div className="absolute flex flex-col gap-2" style={{ top: 40, insetInlineStart: "clamp(24px, 5vw, 80px)" }}>
        <span
          className="uppercase font-mono"
          style={{ fontSize: 11, letterSpacing: "0.2em", color: "#B8BCC2", fontWeight: 700 }}
        >
          {"Enterprise Technology Partner"}
        </span>
        <div aria-hidden style={{ height: 1, width: 128, backgroundColor: "#25282C" }} />
      </div>

      {/* Diagonal texture */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          insetInlineEnd: 0,
          width: "33%",
          height: "50%",
          opacity: 0.1,
          backgroundImage:
            "linear-gradient(to bottom right, transparent 49.5%, #25282C 50%, transparent 50.5%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative" style={{ maxWidth: 1200, width: "100%", zIndex: 1 }}>
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono font-[700]"
          style={{
            color: "#F0F1F3",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            fontSize: "clamp(4.5rem, 14vw, 10rem)",
            marginBottom: 32,
          }}
        >
          SIL<span style={{ color: "#FFFFFF" }}>XOR</span>
        </motion.h1>

        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : 0.15 }}
          className="flex flex-col gap-6"
          style={{ maxWidth: 640 }}
        >
          <p
            className="font-body"
            style={{
              fontSize: "clamp(16px, 1.6vw, 22px)",
              lineHeight: 1.55,
              color: "#F0F1F3",
              maxWidth: 460,
              fontWeight: 300,
            }}
          >
            {"Enterprise technology, cybersecurity, cloud, private AI, identity, and managed services for organizations that need a single accountable partner."}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="ghost"
              type="button"
              onClick={() => navigate("/book")}
              className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit inline-flex items-center justify-center uppercase transition-colors"
              style={{
                fontSize: 12,
                letterSpacing: "0.2em",
                backgroundColor: "#FFFFFF",
                color: "#0B0B0B",
                padding: "16px 32px",
                minHeight: 44,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F0F1F3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
            >
              {"Book an Assessment"}
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit inline-flex items-center justify-center uppercase transition-colors"
            >
              <a
                href="/#solutions"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  border: "1px solid #25282C",
                  color: "#FFFFFF",
                  padding: "16px 32px",
                  minHeight: 44,
                  fontWeight: 700,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#25282C")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {"Explore Solutions"}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
