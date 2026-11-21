import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const techLayers = ["Strategy & architecture", "Infrastructure & cloud", "Cybersecurity & identity", "Software & private AI", "Managed operations"];
const ladder = ["Senior specialists", "Technical leads", "Heads of function", "CIO · CTO · CISO · CDO", "Board"];

/** Architected feature area: three offers, each with its own visual grammar. */
const OfferingTriad = () => (
  <section className="px-section px-offers-section" aria-labelledby="offer-title">
    <div className="container-content">
      <header className="px-section-head">
        <p className="px-mono">§ 01 · What we offer</p>
        <h2 id="offer-title" className="px-h2">Three offers. One standard of judgment.</h2>
      </header>
      <div className="px-offers">
        <article className="px-offer px-offer--tech">
          <p className="px-mono">01 / Technology</p>
          <h3>Enterprise Technology Consulting</h3>
          <p>Strategy, infrastructure, cybersecurity, identity, software, private AI and hardware. Advice grounded in delivery, with accountability through operation.</p>
          <ol className="px-stack" aria-label="Technology layers">
            {techLayers.map((l, i) => <li key={l}><span>L{i + 1}</span>{l}</li>)}
          </ol>
          <Link to="/services" className="px-arrow-link">Technology services <ArrowRight aria-hidden size={16} /></Link>
        </article>
        <article className="px-offer px-offer--talent">
          <p className="px-mono">02 / Talent</p>
          <h3>International Recruitment &amp; Staffing</h3>
          <p>Executive search, leadership hiring and specialist recruitment for senior and board level appointments. Permanent roles, contract staffing and complete teams, handled in confidence.</p>
          <ol className="px-ladder" aria-label="Seniority covered">
            {ladder.map((l, i) => <li key={l} style={{ ["--step" as string]: i }}>{l}</li>)}
          </ol>
          <Link to="/services/talent-acquisition" className="px-arrow-link">Talent Acquisition <ArrowRight aria-hidden size={16} /></Link>
        </article>
        <article className="px-offer px-offer--advisory">
          <p className="px-mono">03 / Technology + Talent</p>
          <h3>C-Level Advisory</h3>
          <p>Independent counsel for boards, CEOs and senior leadership. Technology investment, risk and operating models weighed alongside leadership structure and succession.</p>
          <div className="px-bridge" aria-hidden="true"><span>Technology</span><i /><b>Counsel</b><i /><span>Talent</span></div>
          <ul className="px-tags"><li>Board &amp; executive counsel</li><li>Technology &amp; talent strategy</li><li>Leadership structure &amp; succession</li></ul>
          <Link to="/services/advisory" className="px-arrow-link">Advisory <ArrowRight aria-hidden size={16} /></Link>
        </article>
      </div>
    </div>
  </section>
);
export default OfferingTriad;
