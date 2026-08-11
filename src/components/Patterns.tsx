import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const patterns = [
  {
    tag: "Infrastructure",
    sector: "Financial Services",
    title: "Cloud Migration & Modernization",
    body: "A phased migration pattern for moving regulated workloads from legacy or public cloud environments into a resilient, access controlled environment with minimal downtime.",
  },
  {
    tag: "Identity",
    sector: "Public Sector",
    title: "Enterprise Identity Program",
    body: "A greenfield IAM pattern covering single sign on, privileged access vaulting, and identity governance lifecycle for large organizations.",
  },
  {
    tag: "Software + AI",
    sector: "Energy",
    title: "Private AI Operations Platform",
    body: "A pattern for deploying self hosted models to automate internal operations while keeping data inside the client's own environment.",
  },
];

const Patterns = () => (
  <Chapter
    id="patterns"
    index={4}
    eyebrow="Solution Patterns"
    title="Representative ways we deliver."
    lede="Illustrative patterns across infrastructure, identity, and AI. References and detailed case discussions are available on request during the assessment."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10" style={{ borderTop: RULE }}>
      {patterns.map((p) => (
        <article key={p.title} style={{ borderBottom: RULE, padding: "22px 0" }}>
          <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 12 }}>
            <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.16em", color: "#F0F1F3" }}>
              {p.tag}
            </span>
            <span aria-hidden style={{ width: 10, height: 1, background: "rgba(255,255,255,0.25)" }} />
            <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}>
              {p.sector}
            </span>
          </div>
          <h3 className="font-display font-[600]" style={{ fontSize: 19, lineHeight: 1.2, color: INK, marginBottom: 8 }}>
            {p.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.65 }}>
            {p.body}
          </p>
        </article>
      ))}
    </div>
  </Chapter>
);

export default Patterns;
