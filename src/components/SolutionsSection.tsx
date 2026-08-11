import { Smartphone, Landmark, ShieldCheck, Cpu, Server, Fingerprint } from "lucide-react";

const cards = [
  { icon: Smartphone, title: "Digital Banking", tags: ["Core Banking", "Fraud", "Identity"] },
  { icon: Landmark, title: "Government", tags: ["Citizen ID", "Zero Trust", "FedRAMP"] },
  { icon: ShieldCheck, title: "Financial Compliance", tags: ["PCI DSS", "GLBA", "SOX"] },
  { icon: Cpu, title: "AI Platform", tags: ["Private AI", "Governance", "Agentic"] },
  { icon: Server, title: "Infrastructure", tags: ["Hybrid Cloud", "Networking", "DR"] },
  { icon: Fingerprint, title: "Identity", tags: ["IAM", "PAM", "Passwordless"] },
];

const SolutionsSection = () => {
  return (
    <section className="r-section">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4" style={{ marginBottom: 32 }}>
          <span className="r-eyebrow">Solutions</span>
          <h2 className="r-title" style={{ maxWidth: 780 }}>
            Secure Platforms for Banking and Government
          </h2>
          <p className="r-lead" style={{ maxWidth: 560 }}>
            Compliant, AI enabled ecosystems for regulated institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="r-card" style={{ padding: 22 }}>
                <div className="flex items-center gap-3" style={{ marginBottom: 14 }}>
                  <div className="r-node" style={{ width: 42, height: 42 }}>
                    <Icon style={{ width: 18, height: 18, color: "#F0F1F3" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-[600]" style={{ fontSize: 16, color: "#FFFFFF" }}>
                    {c.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="r-pill">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
