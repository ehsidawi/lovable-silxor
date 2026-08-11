import { Layers, Users, ClipboardCheck, User } from "lucide-react";

const staffing = [
  { icon: Layers, title: "Matched to Scope", line: "Engineers matched to the practices involved." },
  { icon: Users, title: "One Accountable Team", line: "A single named team, no vendor handoffs." },
  { icon: ClipboardCheck, title: "Scoped at Assessment", line: "Seniority and cadence defined in the proposal." },
];

const Team = () => {
  return (
    <section id="about" className="r-section">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4" style={{ marginBottom: 32 }}>
          <span className="r-eyebrow">How We Staff</span>
          <h2 className="r-title">Senior Engineers. Direct Accountability.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {staffing.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="r-card flex items-start gap-4" style={{ padding: 22, borderRadius: 24 }}>
                <div className="r-node" style={{ width: 44, height: 44 }}>
                  <Icon style={{ width: 18, height: 18, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-body font-[600]" style={{ fontSize: 15, color: "#FFFFFF" }}>{s.title}</h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.6, marginTop: 4 }}>
                    {s.line}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="r-card flex items-center gap-4"
          style={{ padding: 20, borderRadius: 999, marginTop: 16, maxWidth: 420 }}
        >
          <div className="r-node" style={{ width: 52, height: 52 }}>
            <User style={{ width: 22, height: 22, color: "#F0F1F3" }} strokeWidth={1.5} />
          </div>
          <div>
            <div className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#C6CAD0" }}>
              Founder
            </div>
            <a
              href="https://www.linkedin.com/in/ehsidawi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-[500] transition-colors duration-200 hover:text-[#C6CAD0]"
              style={{ fontSize: 16, color: "#FFFFFF" }}
            >
              Ehsan Nidawi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
