import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { practices, inquiryHref } from "@/data/practices";
import { services } from "@/data/services";

/** Four typographic practice rows. Each expands to explain the practice, give examples and open a preselected inquiry. */
const CapabilityIndex = () => {
  const [open, setOpen] = useState<string>(practices[0].id);
  return (
    <section id="capabilities" className="ed-section ed-index" aria-labelledby="capabilities-title">
      <div className="container-content">
        <div className="ed-section-head">
          <p className="ed-kicker">Capabilities</p>
          <h2 id="capabilities-title" className="ed-h2">Four practices. Equal weight.</h2>
          <p className="ed-lead">Cybersecurity defends systems in operation. Information security governs the information itself. Recruitment staffs both, alongside the technology teams that run them.</p>
        </div>
        <ol className="ed-rows">
          {practices.map(p => {
            const isOpen = open === p.id;
            const panel = `practice-${p.id}`;
            const linked = services.filter(s => p.services.includes(s.slug));
            return (
              <li key={p.id} className={`ed-row ${isOpen ? "is-open" : ""}`}>
                <h3 className="ed-row-heading">
                  <button type="button" className="ed-row-trigger" aria-expanded={isOpen} aria-controls={panel} onClick={() => setOpen(isOpen ? "" : p.id)}>
                    <span className="ed-row-code">{p.code}</span>
                    <span className="ed-row-name">{p.name}</span>
                    <span className="ed-row-summary">{p.summary}</span>
                    <Plus className="ed-row-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={panel} className="ed-row-panel" hidden={!isOpen}>
                  <p className="ed-row-explain">{p.explanation}</p>
                  <div>
                    <p className="ed-mini">For example</p>
                    <ul className="ed-examples">{p.examples.map(e => <li key={e}>{e}</li>)}</ul>
                  </div>
                  <div className="ed-row-actions">
                    <p className="ed-mini">{p.id === "recruitment" ? "For employers" : "Services"}</p>
                    <ul className="ed-row-services">{linked.map(s => <li key={s.slug}><SmartLink to={s.path}>{s.name}</SmartLink></li>)}</ul>
                    <SmartLink to={inquiryHref(p.id)} className="ed-inquiry">Book a Consultation<span className="sr-only"> about {p.name}</span> <ArrowRight className="h-4 w-4" aria-hidden="true" /></SmartLink>
                    <SmartLink to={p.path} className="ed-text-link">Read about {p.name}</SmartLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
export default CapabilityIndex;
