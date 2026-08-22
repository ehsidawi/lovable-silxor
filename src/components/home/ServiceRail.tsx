import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import SmartLink from "@/components/SmartLink";

/** Full service index as scannable rows: name plus one sharp outcome line. */
const ServiceRail = () => (
  <section className="r-section">
    <div className="container-content">
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        style={{ marginBottom: 24 }}
      >
        <div className="flex flex-col items-start gap-4">
          <span className="r-eyebrow">Services</span>
          <h2 className="r-title">Seven practices, one contract.</h2>
        </div>
        <SmartLink
          to="/services"
          className="font-mono uppercase"
          style={{ fontSize: 11, letterSpacing: "0.16em", color: "#FFFFFF" }}
        >
          All services →
        </SmartLink>
      </div>

      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 32,
          overflow: "hidden",
          background: "#191B1F",
        }}
      >
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <SmartLink
              key={s.slug}
              to={s.path}
              className="group flex items-center gap-4 sm:gap-6 transition-colors duration-200"
              style={{
                padding: "18px clamp(16px, 2.4vw, 28px)",
                borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.07)",
                background: s.flagship ? "rgba(240,241,243,0.045)" : "transparent",
                minHeight: 76,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(240,241,243,0.075)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = s.flagship
                  ? "rgba(240,241,243,0.045)"
                  : "transparent")
              }
            >
              <span
                className="font-mono hidden sm:block"
                style={{ fontSize: 10.5, color: "#8E949B", letterSpacing: "0.14em", width: 24 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="r-node" style={{ width: 40, height: 40, background: "#141414" }}>
                <Icon style={{ width: 17, height: 17, color: "#F0F1F3" }} strokeWidth={1.5} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="flex flex-wrap items-center gap-2">
                  <span
                    className="font-display font-[600]"
                    style={{ fontSize: "clamp(15px, 1.7vw, 18px)", color: "#FFFFFF" }}
                  >
                    {s.name}
                  </span>
                  {s.flagship && (
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.18em",
                        color: "#0B0B0B",
                        background: "#F0F1F3",
                        borderRadius: 999,
                        padding: "3px 9px",
                      }}
                    >
                      Flagship
                    </span>
                  )}
                </span>
                <span
                  className="font-body font-[300] block"
                  style={{ fontSize: 13, color: "#C6CAD0", lineHeight: 1.5, marginTop: 3 }}
                >
                  {s.outcome}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ width: 18, height: 18, color: "#8E949B", flexShrink: 0 }}
                strokeWidth={1.6}
              />
            </SmartLink>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServiceRail;
