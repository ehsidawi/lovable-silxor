import { services } from "@/data/services";
import SmartLink from "@/components/SmartLink";

const flagship = services.find((s) => s.flagship) ?? services[0];

/** Condensed flagship highlight; the full story lives on the detail page. */
const FlagshipTeam = () => (
  <section className="r-section">
    <div className="container-content">
      <div className="r-panel" style={{ borderRadius: 4 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,400px)_1fr] gap-8 lg:gap-12 items-start">
          <div className="flex flex-col items-start gap-4">
            <span className="r-eyebrow">Flagship</span>
            <h2 className="r-title">
              You do not just need developers. You need the entire senior product team.
            </h2>
            <p className="r-lead" style={{ maxWidth: 420 }}>
              {flagship.outcome}
            </p>

            <figure
              style={{
                margin: 0,
                borderInlineStart: "1px solid hsl(var(--border-highlight))",
                paddingInlineStart: 16,
              }}
            >
              <blockquote
                className="font-body font-[400]"
                style={{ fontSize: 13.5, color: "hsl(var(--foreground))", lineHeight: 1.65, margin: 0 }}
              >
                “After going through a lot of development vendors, we hired Silxor. We are still
                working with them today.”
              </blockquote>
              <figcaption
                className="font-mono uppercase"
                style={{ fontSize: 10, letterSpacing: 0, color: "hsl(var(--muted-foreground))", marginTop: 8 }}
              >
                Founder · Private Client
              </figcaption>
            </figure>

            <SmartLink to={flagship.path} className="r-cta" style={{ marginTop: 6 }}>
              See the Full Product Team
            </SmartLink>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {flagship.blocks.map((b, i) => (
              <li
                key={b.title}
                className="flex items-start gap-4"
                style={{
                  padding: "14px 0",
                  borderBottom: "1px solid hsl(var(--border))",
                }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: 10.5, color: "hsl(var(--muted-foreground))", letterSpacing: 0, paddingTop: 3 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-body font-[600]" style={{ fontSize: 14.5, color: "hsl(var(--foreground))" }}>
                    {b.title}
                  </h3>
                  <p
                    className="font-body font-[400]"
                    style={{ fontSize: 12.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.55, marginTop: 4 }}
                  >
                    {b.line}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default FlagshipTeam;
