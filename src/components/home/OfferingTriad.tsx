import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const offers = [
  { n: "01", label: "Technology", title: "Enterprise Technology Consulting", line: "Strategy, infrastructure, cybersecurity, identity, software, private AI and hardware. Advice grounded in delivery, with accountability through operation.", points: ["Architecture & cloud strategy", "Cybersecurity & identity", "Managed IT & operations"], to: "/services", cta: "Technology services" },
  { n: "02", label: "Talent", title: "International Recruitment & Staffing", line: "Executive search, leadership hiring and specialist recruitment for senior and board level appointments. Permanent roles, contract staffing and complete teams, handled in confidence.", points: ["CIO, CTO, CISO & CDO search", "Senior specialist recruitment", "Contract staffing & team building"], to: "/services/talent-acquisition", cta: "Talent Acquisition" },
  { n: "03", label: "Technology + Talent", title: "C-Level Advisory", line: "Independent counsel for boards, CEOs and senior leadership. Technology investment, risk and operating models weighed alongside leadership structure and succession.", points: ["Board & executive counsel", "Technology & talent strategy", "Leadership structure & succession"], to: "/services/advisory", cta: "Advisory" },
];

const OfferingTriad = () => (
  <section className="r-section" aria-labelledby="offer-title">
    <div className="container-content">
      <div className="mx-offer-head">
        <span className="r-eyebrow">What We Offer</span>
        <h2 id="offer-title" className="r-title">Three offers. One standard of judgment.</h2>
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
