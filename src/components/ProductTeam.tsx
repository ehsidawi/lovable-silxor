import { Layers, Map, PenTool, Code2, TestTube2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    icon: Layers,
    title: "Senior Software Architect",
    line: "Secure, scalable architecture designed with operating cost under control.",
  },
  {
    icon: Map,
    title: "Product Manager",
    line: "Business goals turned into requirements, roadmap, priorities, and buildable specs.",
  },
  {
    icon: PenTool,
    title: "Product & UX Designer",
    line: "The full experience and interface designed around your customer and product goals.",
  },
  {
    icon: Code2,
    title: "Software Engineers",
    line: "Product built end to end, from first release to production scale.",
  },
  {
    icon: TestTube2,
    title: "QA & Testing",
    line: "Every flow, device, edge case, and release tested before customers meet a problem.",
  },
  {
    icon: Users,
    title: "Delivery Leadership",
    line: "We coordinate the whole team, so you never have to find, vet, hire, or manage specialists.",
  },
];

const ProductTeam = () => {
  const navigate = useNavigate();

  return (
    <section id="product-team" className="r-section">
      <div className="container-content">
        <div className="r-panel" style={{ borderRadius: 40 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-8 lg:gap-14 items-start">
            <div className="flex flex-col items-start gap-4">
              <span className="r-eyebrow">Flagship Service</span>
              <h2 className="r-title">Full Product Team as a Service</h2>
              <p className="r-lead">
                You do not just need engineers. You need a product team.
              </p>
              <p
                className="font-body font-[300]"
                style={{ fontSize: 14, color: "#C6CAD0", lineHeight: 1.7, maxWidth: 460 }}
              >
                Silxor becomes the senior product organization behind non technical founders and
                companies. One accountable partner takes an idea from concept to production and
                scale, with architecture, product, design, engineering, and testing already in place.
              </p>
              <button
                type="button"
                className="r-cta"
                style={{ marginTop: 8 }}
                onClick={() => navigate("/book")}
              >
                Book an Assessment
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="r-card" style={{ padding: "22px 20px", borderRadius: 26 }}>
                    <div className="flex items-start gap-3.5">
                      <div className="r-node shrink-0" style={{ width: 44, height: 44 }}>
                        <Icon style={{ width: 18, height: 18, color: "#F0F1F3" }} strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <span
                          className="font-mono block"
                          style={{ fontSize: 10, color: "#8E949B", letterSpacing: "0.12em" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className="font-display font-[600]"
                          style={{ fontSize: 15.5, color: "#FFFFFF", marginTop: 2 }}
                        >
                          {r.title}
                        </h3>
                        <p
                          className="font-body font-[300]"
                          style={{ fontSize: 13, color: "#C6CAD0", lineHeight: 1.6, marginTop: 6 }}
                        >
                          {r.line}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTeam;
