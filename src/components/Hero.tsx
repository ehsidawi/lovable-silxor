import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useHashNav } from "@/lib/hashNav";


const Hero = () => {
  const navigate = useNavigate();
  const hashNav = useHashNav();
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 };
  const animate = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section
      className="relative overflow-hidden border-b"
      style={{
        minHeight: "auto",
        backgroundColor: "#141414",
        color: "#FFFFFF",
        borderColor: "#25282C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "clamp(110px, 14vh, 140px)",
        paddingBottom: "clamp(48px, 7vw, 96px)",
      }}
    >
      {/* Technical Header */}
      <div className="absolute container-content flex flex-col gap-2" style={{ top: 40, insetInline: 0 }}>
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

      <div className="relative container-content" style={{ width: "100%", zIndex: 1 }}>
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
            <button type="button" className="r-cta" onClick={() => navigate("/book")}>
              {"Book an Assessment"}
            </button>
            <Link to="/services" className="r-cta-ghost">
              {"Explore Services"}
            </Link>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
