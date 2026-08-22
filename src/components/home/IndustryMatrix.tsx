import SmartLink from "@/components/SmartLink";

const sectors = [
  "Government", "Defense", "Banking", "Digital Banking", "Financial Services",
  "Healthcare", "Energy", "Manufacturing", "Transportation", "Airports",
  "Retail", "Education", "Telecommunications", "Critical Infrastructure",
];

/** Compact sector matrix; scrolls horizontally on mobile, grids on desktop. */
const IndustryMatrix = () => (
  <section className="r-section">
    <div className="container-content">
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        style={{ marginBottom: 22 }}
      >
        <div className="flex flex-col items-start gap-4">
          <span className="r-eyebrow">Who We Build For</span>
          <h2 className="r-title" style={{ maxWidth: 520 }}>
            Regulated and critical environments.
          </h2>
        </div>
        <SmartLink
          to="/industries"
          className="font-mono uppercase"
          style={{ fontSize: 11, letterSpacing: "0.16em", color: "#FFFFFF" }}
        >
          Industries →
        </SmartLink>
      </div>

      <SmartLink to="/industries" className="block">
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 28,
            overflow: "hidden",
            background: "#191B1F",
          }}
        >
          {sectors.map((s) => (
            <li
              key={s}
              className="font-body font-[400] flex items-center"
              style={{
                fontSize: 12.5,
                color: "#E4E6E9",
                padding: "16px 14px",
                minHeight: 62,
                boxShadow: "inset -1px -1px 0 rgba(255,255,255,0.06)",
                lineHeight: 1.35,
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      </SmartLink>
    </div>
  </section>
);

export default IndustryMatrix;
