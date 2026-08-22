import { Compass, Users, Server, ShieldCheck, Cpu, Activity } from "lucide-react";
import SmartLink from "@/components/SmartLink";

const layers = [
  { icon: Compass, label: "Strategy / Architecture", to: "/services/advisory", line: "Decide before you spend." },
  { icon: Users, label: "Product / Engineering", to: "/services/product-team", line: "Concept to production." },
  { icon: Server, label: "Cloud / Infrastructure", to: "/services/cloud", line: "Platforms that stay up." },
  { icon: ShieldCheck, label: "Security / Identity", to: "/services/cybersecurity", line: "Controls and evidence." },
  { icon: Cpu, label: "Private AI", to: "/services/private-ai", line: "Your data stays yours." },
  { icon: Activity, label: "Managed Operations", to: "/services/managed-services", line: "Ownership after go live." },
];

/** One connected delivery system rather than six separate vendors. */
const SystemMap = () => (
  <section className="r-section">
    <div className="container-content">
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        style={{ marginBottom: 26 }}
      >
        <div className="flex flex-col items-start gap-4">
          <span className="r-eyebrow">What Silxor Is</span>
          <h2 className="r-title" style={{ maxWidth: 560 }}>
            Six capabilities. One delivery system.
          </h2>
        </div>
        <p className="r-lead" style={{ maxWidth: 340 }}>
          Each layer is owned by the same team, so handoffs, gaps, and finger pointing disappear.
        </p>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="hidden lg:block absolute"
          style={{
            top: 44,
            left: "8%",
            right: "8%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(240,241,243,0.22) 12%, rgba(240,241,243,0.22) 88%, transparent)",
          }}
        />
        <ul
          className="grid grid-cols-2 lg:grid-cols-6 gap-3 relative"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {layers.map((l, i) => {
            const Icon = l.icon;
            return (
              <li key={l.label}>
                <SmartLink
                  to={l.to}
                  className="r-card flex flex-col items-start h-full"
                  style={{ padding: "18px 16px", borderRadius: 22 }}
                >
                  <div className="r-node" style={{ width: 44, height: 44, background: "#141414" }}>
                    <Icon style={{ width: 18, height: 18, color: "#F0F1F3" }} strokeWidth={1.5} />
                  </div>
                  <span
                    className="font-mono block"
                    style={{ fontSize: 10, color: "#8E949B", letterSpacing: "0.14em", marginTop: 14 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-body font-[600]"
                    style={{ fontSize: 14, color: "#FFFFFF", marginTop: 4, lineHeight: 1.3 }}
                  >
                    {l.label}
                  </h3>
                  <p
                    className="font-body font-[300]"
                    style={{ fontSize: 12.5, color: "#C6CAD0", lineHeight: 1.5, marginTop: 6 }}
                  >
                    {l.line}
                  </p>
                </SmartLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);

export default SystemMap;
