import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const patterns = [
  {
    tag: "Infrastructure",
    sector: "Financial Services",
    title: "Cloud Migration & Modernization",
    body: "Phased migration of regulated workloads into a resilient, access controlled environment with minimal downtime.",
  },
  {
    tag: "Identity",
    sector: "Public Sector",
    title: "Enterprise Identity Program",
    body: "Greenfield IAM covering single sign on, privileged access vaulting, and identity governance.",
  },
  {
    tag: "Software + AI",
    sector: "Energy",
    title: "Private AI Operations Platform",
    body: "Self hosted models automating internal operations, with data kept inside the client environment.",
  },
];

const Patterns = () => (
  <Chapter
    id="patterns"
    index={4}
    eyebrow="Solution Patterns"
    title="Representative ways we deliver."
    lede="Illustrative patterns. References available on request during the assessment."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10" style={{ borderTop: RULE }}>
      {patterns.map((p) => (
        <article key={p.title} style={{ borderBottom: RULE, padding: "18px 0" }}>
          <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 8 }}>
            <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.16em", color: "#F0F1F3" }}>
              {p.tag}
            </span>
            <span aria-hidden style={{ width: 10, height: 1, background: "rgba(255,255,255,0.25)" }} />
            <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}>
              {p.sector}
            </span>
          </div>
          <h3 className="font-display font-[600]" style={{ fontSize: 18, lineHeight: 1.2, color: INK, marginBottom: 6 }}>
            {p.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.55 }}>
            {p.body}
          </p>
        </article>
      ))}
    </div>
  </Chapter>
);

export default Patterns;
