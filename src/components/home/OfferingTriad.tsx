import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const offers = [
  { n: "01", label: "Technology", title: "Enterprise Technology Consulting", line: "Strategy, infrastructure, cybersecurity, identity, software, private AI and hardware. Designed, built, secured and operated.", points: ["Architecture & cloud strategy", "Cybersecurity & identity", "Managed IT & operations"], to: "/services", cta: "Technology services" },
  { n: "02", label: "Talent", title: "International Recruitment & Staffing", line: "Executive search, leadership hiring and specialist recruitment from the engineering floor to the boardroom. Permanent roles, contract staffing and complete teams.", points: ["CIO, CTO, CISO & CDO search", "Senior specialist recruitment", "Contract staffing & team building"], to: "/services/talent-acquisition", cta: "Talent Acquisition" },
  { n: "03", label: "Technology + Talent", title: "C-Level Advisory", line: "Strategic counsel for boards, CEOs and senior leadership. Technology investment, risk and operating models considered alongside talent strategy and leadership succession.", points: ["Board & executive counsel", "Technology & talent strategy", "Leadership structure & succession"], to: "/services/advisory", cta: "Advisory" },
];

const OfferingTriad = () => (
  <section className="r-section" aria-labelledby="offer-title">
    <div className="container-content">
      <div className="mx-offer-head">
        <span className="r-eyebrow">What We Offer</span>
        <h2 id="offer-title" className="r-title">We build systems and the teams that run them.</h2>
      </div>
      <div className="mx-offers">
        {offers.map((o) => (
          <article key={o.n} className="mx-offer">
            <p className="mx-offer-meta"><span>{o.n}</span>{o.label}</p>
            <h3>{o.title}</h3>
            <p className="mx-offer-line">{o.line}</p>
            <ul>{o.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <Link to={o.to} className="mx-offer-link">{o.cta} <ArrowRight aria-hidden size={14} /></Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default OfferingTriad;
