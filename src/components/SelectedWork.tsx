import SectionHeading from "@/components/editorial/SectionHeading";
import SmartLink from "@/components/SmartLink";
const patterns = [
  {
    title: "Cloud Migration & Modernization",
    line: "Phased moves of regulated workloads with minimal downtime.",
    sector: "Financial Services",
    to: "/services/cloud",
  },
  {
    title: "Enterprise Identity Program",
    line: "SSO, privileged access vaulting, and identity governance.",
    sector: "Public Sector",
    to: "/services/identity",
  },
  {
    title: "Private AI Operations",
    line: "Self hosted models with data kept inside your environment.",
    sector: "Energy",
    to: "/services/private-ai",
  },
];
export default function SelectedWork() {
  return (
    <section id="work" className="ed-section">
      <div className="container-content">
        <SectionHeading
          label="Solution patterns"
          title="How we approach problems."
        >
          Illustrative patterns, not specific client work.
        </SectionHeading>
        <dl className="ed-brief-list">
          {patterns.map((p) => (
            <div key={p.title}>
              <dt>
                <SmartLink to={p.to}>{p.title} ↗</SmartLink>
              </dt>
              <dd>
                <span className="ed-mini">{p.sector}</span>
                <p>{p.line}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
