import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const categories = [
  { title: "Cloud & Hyperscale", body: "Public and hybrid platforms, mix selected per engagement." },
  { title: "Security & Threat Defense", body: "Endpoint, network, and detection tooling integrated per environment." },
  { title: "Identity & Access", body: "Identity, governance, and privileged access platforms at client scale." },
  { title: "Private & Enterprise AI", body: "Open and commercial models chosen on residency and governance needs." },
  { title: "Infrastructure & Data Center", body: "Virtualization, compute, and storage for on premises to cloud native." },
  { title: "Automation & DevOps", body: "Infrastructure as code, CI/CD, and observability in every pipeline." },
];

const RULE = "1px solid rgba(255,255,255,0.08)";

const Partners = () => {
  useEffect(() => {
    document.title = "Partnership Approach | Silxor";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container-content flex-1" style={{ paddingTop: 40, paddingBottom: 48 }}>
        <div style={{ marginBottom: 20 }}>
          <div className="section-eyebrow">{"PARTNERSHIP APPROACH"}</div>
          <h1
            className="font-display font-[700]"
            style={{ fontSize: 34, color: "#FFFFFF", lineHeight: 1.1 }}
          >
            {"Platform agnostic by design."}
          </h1>
          <p
            className="font-body font-[300] mt-3"
            style={{ fontSize: 15, color: "#B8BCC2", maxWidth: 560, lineHeight: 1.6 }}
          >
            {"Technology is chosen per client requirement. Vendor relationships are confirmed during scoping."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10" style={{ borderTop: RULE }}>
          {categories.map((c) => (
            <article key={c.title} style={{ borderBottom: RULE, padding: "14px 0" }}>
              <h2 className="font-display font-[600]" style={{ fontSize: 16, color: "#FFFFFF", marginBottom: 4 }}>
                {c.title}
              </h2>
              <p className="font-body font-[300]" style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.55 }}>
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
