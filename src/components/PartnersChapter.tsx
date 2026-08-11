import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const categories = [
  { title: "Cloud & Hyperscale Platforms", body: "Public and hybrid cloud platforms, with the provider mix selected per engagement rather than a single fixed stack." },
  { title: "Security & Threat Defense", body: "Endpoint, network, and threat detection tooling categories integrated to fit each client's environment." },
  { title: "Identity & Access Management", body: "Identity, access governance, and privileged access platforms suited to each organization's scale and regulatory context." },
  { title: "Private & Enterprise AI", body: "Open and commercial model and infrastructure options chosen on data residency and governance requirements." },
  { title: "Infrastructure & Data Center", body: "Virtualization, compute, and storage technologies for on premises, hybrid, and cloud native deployments." },
  { title: "Automation & DevOps Tooling", body: "Widely adopted infrastructure as code, CI/CD, and observability tooling in every delivery pipeline." },
];

const PartnersChapter = () => (
  <Chapter
    id="partners"
    index={6}
    eyebrow="Partners"
    title="Platform agnostic by design."
    lede="We select technologies from mature, well supported categories based on each client's requirements. Vendor relationships for a given engagement are confirmed during scoping."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10" style={{ borderTop: RULE }}>
      {categories.map((c) => (
        <article key={c.title} style={{ borderBottom: RULE, padding: "18px 0" }}>
          <h3 className="font-display font-[600]" style={{ fontSize: 16, color: INK, marginBottom: 6 }}>
            {c.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>
            {c.body}
          </p>
        </article>
      ))}
    </div>
  </Chapter>
);

export default PartnersChapter;
