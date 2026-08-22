import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SmartLink from "@/components/SmartLink";
import { prefetchHandlers } from "@/lib/routePrefetch";
import TopologyDiagram from "@/components/home/TopologyDiagram";
import SpecSheetCard from "@/components/home/SpecSheetCard";


const facts = [
  { k: "Architecture", v: "to Operations" },
  { k: "Institutions", v: "and Founders" },
  { k: "One Team", v: "One Owner" },
];

/** Homepage hero: split layout, technical topology, two clear CTAs. */
const HomeHero = () => {
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      className="relative overflow-hidden border-b"
      style={{
        backgroundColor: "#141414",
        borderColor: "#25282C",
        paddingTop: "clamp(40px, 6vw, 76px)",
        paddingBottom: "clamp(40px, 6vw, 76px)",
      }}
    >
      {/* System grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.5,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(120% 90% at 20% 0%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(120% 90% at 20% 0%, #000 30%, transparent 80%)",
        }}
      />

      <div className="relative container-content" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,470px)] gap-10 lg:gap-14 items-center">
          <motion.div initial={initial} animate={animate} transition={{ duration: 0.7, ease }}>
            <span className="r-eyebrow">Enterprise Technology Partner</span>

            <h1
              className="font-display font-[700]"
              style={{
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1.03,
                fontSize: "clamp(31px, 4.1vw, 52px)",
                marginTop: 20,
                maxWidth: 640,
              }}
            >
              We architect, build, secure, and operate the systems your business runs on.
            </h1>

            <p
              className="r-lead"
              style={{ marginTop: 18, maxWidth: 560, fontSize: "clamp(15px, 1.5vw, 18px)" }}
            >
              Cloud and infrastructure, cybersecurity and identity, private AI, and full product
              delivery for institutions and founders who need results, not a vendor list.
            </p>

            <div className="flex flex-wrap items-center gap-3" style={{ marginTop: 28 }}>
              <button
                type="button"
                className="r-cta"
                onClick={() => navigate("/book")}
                {...prefetchHandlers("/book")}
              >
                Book an Assessment
              </button>
              <SmartLink to="/services" className="r-cta-ghost">
                Explore Services
              </SmartLink>
            </div>

            <div
              className="flex flex-wrap items-center"
              style={{ marginTop: 30, gap: "14px 26px" }}
            >
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline gap-2">
                  <span
                    aria-hidden
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: "rgba(240,241,243,0.55)",
                      display: "inline-block",
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{ fontSize: 11, letterSpacing: "0.1em", color: "#F0F1F3" }}
                  >
                    {f.k}
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: 11, letterSpacing: "0.1em", color: "#8E949B" }}
                  >
                    {f.v}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="font-body font-[300]"
              style={{ fontSize: 13.5, color: "#C6CAD0", marginTop: 16 }}
            >
              One accountable senior team from architecture to operations.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={animate}
            transition={{ duration: 0.8, ease, delay: reduce ? 0 : 0.12 }}
            className="flex flex-col gap-4 w-full min-w-0"
          >
            <div className="hidden sm:block">
              <TopologyDiagram />
            </div>
            <SpecSheetCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;
