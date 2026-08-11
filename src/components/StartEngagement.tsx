import { Server, Code, Shield, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const paths = [
  { icon: Server, label: "Infrastructure & Hosting" },
  { icon: Code, label: "Software or AI Project" },
  { icon: Shield, label: "Strategic Advisory" },
];

const StartEngagement = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="r-section">
      <div className="container-content">
        <div className="r-panel flex flex-col items-center text-center" style={{ borderRadius: 40 }}>
          <span className="r-eyebrow">Engage</span>
          <h2 className="r-title" style={{ marginTop: 16, maxWidth: 620 }}>
            Start With a Technical Assessment
          </h2>
          <p className="r-lead" style={{ marginTop: 12, maxWidth: 520 }}>
            No cost. Tell us what you are building and we scope how to deliver it.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5" style={{ marginTop: 24 }}>
            {paths.map((p) => {
              const Icon = p.icon;
              return (
                <span key={p.label} className="r-pill" style={{ padding: "9px 16px 9px 9px", fontSize: 12 }}>
                  <span className="r-node" style={{ width: 24, height: 24 }}>
                    <Icon style={{ width: 12, height: 12, color: "#F0F1F3" }} strokeWidth={1.6} />
                  </span>
                  {p.label}
                </span>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4" style={{ marginTop: 32 }}>
            <button type="button" className="r-cta" onClick={() => navigate("/book")}>
              Book an Assessment
            </button>
            <a href="mailto:hello@silxor.com" className="r-cta-ghost">
              <Mail style={{ width: 14, height: 14, marginInlineEnd: 8 }} strokeWidth={1.6} />
              hello@silxor.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartEngagement;
