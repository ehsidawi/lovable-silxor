import { Users, ShieldCheck, FileCheck, GaugeCircle } from "lucide-react";

const posture = [
  { icon: Users, title: "One Accountable Team", line: "Advisory, build, and operations under one owner." },
  { icon: ShieldCheck, title: "Security by Design", line: "Identity and controls built in from day one." },
  { icon: FileCheck, title: "Framework Aligned", line: "NIST CSF and ISO 27001 control families, evidenced." },
  { icon: GaugeCircle, title: "Scoped per Engagement", line: "SLA tiers and reporting defined at assessment." },
];

const ExecutiveDashboard = () => {
  return (
    <section className="r-section">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4" style={{ marginBottom: 32 }}>
          <span className="r-eyebrow">Operating Model</span>
          <h2 className="r-title">How We Operate</h2>
        </div>

        <div className="r-panel">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {posture.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex flex-col items-start gap-3">
                  <div className="r-node" style={{ width: 48, height: 48 }}>
                    <Icon style={{ width: 20, height: 20, color: "#F0F1F3" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-body font-[600]" style={{ fontSize: 15, color: "#FFFFFF" }}>
                    {p.title}
                  </h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.6 }}>
                    {p.line}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveDashboard;
