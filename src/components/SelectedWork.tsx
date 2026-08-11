const patterns = [
  {
    tag: "Infrastructure",
    title: "Cloud Migration & Modernization",
    line: "Phased moves of regulated workloads with minimal downtime.",
    sector: "Financial Services",
  },
  {
    tag: "Identity",
    title: "Enterprise Identity Program",
    line: "SSO, privileged access vaulting, and identity governance.",
    sector: "Public Sector",
  },
  {
    tag: "Software + AI",
    title: "Private AI Operations",
    line: "Self hosted models with data kept inside your environment.",
    sector: "Energy",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="r-section">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4" style={{ marginBottom: 32 }}>
          <span className="r-eyebrow">Solution Patterns</span>
          <h2 className="r-title">How We Approach Problems</h2>
          <p className="r-lead" style={{ maxWidth: 560 }}>
            Illustrative patterns, not specific client work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {patterns.map((p) => (
            <article key={p.title} className="r-card" style={{ padding: 24, borderRadius: 28 }}>
              <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: 14 }}>
                <span className="r-pill" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  {p.tag}
                </span>
                <span className="r-pill" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  {p.sector}
                </span>
              </div>
              <h3 className="font-display font-[600]" style={{ fontSize: 17, color: "#FFFFFF", marginBottom: 8 }}>
                {p.title}
              </h3>
              <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.65 }}>
                {p.line}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
