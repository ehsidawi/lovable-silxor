import { Card } from "@/components/ui/card";

const ExecutiveDashboard = () => {

  const posture = [
    {
      title: "Single Accountable Team",
      desc: "One engineering team owns advisory, build, and operations for each engagement.",
    },
    {
      title: "Security by Design",
      desc: "Security and identity controls are built into architecture decisions from day one.",
    },
    {
      title: "Framework-Aligned",
      desc: "Programs are aligned to NIST CSF and ISO 27001 control families; documentation is evidenced during delivery.",
    },
    {
      title: "Available on Request",
      desc: "SLA tiers, staffing models, and reporting cadence are scoped per engagement during assessment.",
    },
  ];

  const practices = [
    "Advisory & Strategy",
    "Infrastructure & Cloud",
    "Cybersecurity & GRC",
    "Managed Services",
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 20 }}>
          <div className="section-eyebrow">{"OPERATING MODEL"}</div>
          <h2
            className="font-display font-[700]"
            style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}
          >
            {"How We Operate"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {posture.map((p, i) => (
            <Card key={i} className="surface-elevated rounded-[4px] border-0 bg-transparent text-inherit shadow-none" style={{ padding: "20px 18px" }}>
              <div
                className="font-body font-[500]"
                style={{ fontSize: 15, color: "#FFFFFF", marginBottom: 8 }}
              >
                {p.title}
              </div>
              <div
                className="font-body font-[300]"
                style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.6 }}
              >
                {p.desc}
              </div>
            </Card>
          ))}
        </div>

        <Card className="surface-elevated rounded-[4px] border-0 bg-transparent text-inherit shadow-none mt-[2px]" style={{ padding: 22 }}>
          <div
            className="font-mono uppercase mb-4"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "#F0F1F3" }}
          >
            {"PRACTICE AREAS"}
          </div>
          <div className="flex flex-wrap gap-2">
            {practices.map((p) => (
              <span
                key={p}
                className="font-mono uppercase"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "#F0F1F3",
                  border: "1px solid rgba(240, 241, 243,0.2)",
                  borderRadius: 4,
                  padding: "8px 12px",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExecutiveDashboard;
