import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const categories = [
  { title: "Cloud & Hyperscale", body: "Public and hybrid platforms, mix selected per engagement." },
  { title: "Security & Threat Defense", body: "Endpoint, network, and detection tooling integrated per environment." },
  { title: "Identity & Access", body: "Identity, governance, and privileged access platforms at client scale." },
  { title: "Private & Enterprise AI", body: "Open and commercial models chosen on residency and governance needs." },
  { title: "Infrastructure & Data Center", body: "Virtualization, compute, and storage for on premises to cloud native." },
  { title: "Automation & DevOps", body: "Infrastructure as code, CI/CD, and observability in every pipeline." },
];

const PartnersChapter = () => (
  <Chapter
    id="partners"
    index={6}
    eyebrow="Partners"
    title="Platform agnostic by design."
    lede="Technology is chosen per client requirement. Vendor relationships are confirmed during scoping."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10" style={{ borderTop: RULE }}>
      {categories.map((c) => (
        <article key={c.title} style={{ borderBottom: RULE, padding: "14px 0" }}>
          <h3 className="font-display font-[600]" style={{ fontSize: 16, color: INK, marginBottom: 4 }}>
            {c.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: MUTED, lineHeight: 1.55 }}>
            {c.body}
          </p>
        </article>
      ))}
    </div>
  </Chapter>
);

export default PartnersChapter;
