import { Compass, Server, ShieldCheck, Activity } from "lucide-react";
import { useHashNav } from "@/lib/hashNav";

const practices = [
  {
    icon: Compass,
    title: "Advisory & Strategy",
    line: "Board level guidance on transformation, architecture, and risk.",
    tags: ["Digital Transformation", "Enterprise Architecture", "AI Strategy", "CIO / CISO Advisory"],
  },
  {
    icon: Server,
    title: "Infrastructure & Cloud",
    line: "Sovereign, hybrid, and multi cloud engineering built for resilience.",
    tags: ["Azure · AWS · GCP", "Kubernetes · VMware", "Data Center", "High Availability · DR"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & GRC",
    line: "Zero Trust architecture, identity, and audit ready compliance.",
    tags: ["Zero Trust", "IAM · PAM · IGA", "SOC · MDR · IR", "NIST · ISO 27001"],
  },
  {
    icon: Activity,
    title: "Managed Services",
    line: "NOC and SOC operations under SLA tiers scoped per engagement.",
    tags: ["Managed Security", "Managed Cloud", "Observability", "Backup · Recovery"],
  },
];

const Services = () => {
  const hashNav = useHashNav();

  return (
    <section className="r-section">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4" style={{ marginBottom: 32 }}>
          <span className="r-eyebrow">Services</span>
          <h2 className="r-title">Four Practices. One Partner.</h2>
          <p className="r-lead" style={{ maxWidth: 560 }}>
            Delivered alongside our flagship{" "}
            <a
              href="/#product-team"
              onClick={(e) => hashNav(e, "/#product-team")}
              style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: 4 }}
            >
              Full Product Team as a Service
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {practices.map((p, index) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="r-card" style={{ padding: "26px 24px", borderRadius: 28 }}>
                <div className="flex items-start gap-4">
                  <div className="r-node relative" style={{ width: 54, height: 54 }}>
                    <Icon style={{ width: 22, height: 22, color: "#F0F1F3" }} strokeWidth={1.5} />
                    <span
                      className="r-node font-mono"
                      style={{
                        position: "absolute",
                        top: -6,
                        insetInlineEnd: -6,
                        width: 22,
                        height: 22,
                        fontSize: 9,
                        color: "#C6CAD0",
                        background: "#141414",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-[600]" style={{ fontSize: 18, color: "#FFFFFF" }}>
                      {p.title}
                    </h3>
                    <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.6, marginTop: 6 }}>
                      {p.line}
                    </p>
                    <div className="flex flex-wrap gap-2" style={{ marginTop: 14 }}>
                      {p.tags.map((t) => (
                        <span key={t} className="r-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
