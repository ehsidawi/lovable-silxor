import SmartLink from "@/components/SmartLink";
import SectionHeading from "@/components/editorial/SectionHeading";
const briefs = [
  {
    title: "Digital Banking",
    terms: "Core banking, fraud and identity",
    to: "/industries",
  },
  {
    title: "Government",
    terms: "Citizen identity, Zero Trust and FedRAMP requirements",
    to: "/industries",
  },
  {
    title: "Financial Compliance",
    terms: "PCI DSS, GLBA and SOX requirements",
    to: "/services/information-security",
  },
  {
    title: "AI Platform",
    terms: "Private AI, governance and agent systems",
    to: "/services/private-ai",
  },
  {
    title: "Infrastructure",
    terms: "Hybrid cloud, networking and disaster recovery",
    to: "/services/cloud",
  },
  {
    title: "Identity",
    terms: "IAM, PAM and passwordless access",
    to: "/services/identity",
  },
];
export default function SolutionsSection() {
  return (
    <section className="ed-section">
      <div className="container-content">
        <SectionHeading
          label="Applied capabilities"
          title="Requirements in context."
        >
          Illustrative capability areas, not completed client projects or
          compliance guarantees. Controls and technology choices are agreed for
          each engagement.
        </SectionHeading>
        <dl className="ed-brief-list">
          {briefs.map((b, i) => (
            <div key={b.title}>
              <dt>
                <span className="ed-mini">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <SmartLink to={b.to}>
                  {b.title} <span aria-hidden="true">↗</span>
                </SmartLink>
              </dt>
              <dd>{b.terms}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
