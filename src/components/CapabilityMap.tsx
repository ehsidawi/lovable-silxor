import SmartLink from "@/components/SmartLink";
import { getService, type Service } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

const taxonomy = [
  { code: "A", title: "Advise", note: "Direction and decisions", slugs: ["advisory", "product-team"] },
  { code: "B", title: "Build", note: "Systems engineered", slugs: ["software-engineering", "private-ai", "hardware-engineering"] },
  { code: "C", title: "Protect & run", note: "Continuity and control", slugs: ["cloud", "cybersecurity", "identity", "managed-services"] },
  { code: "D", title: "Staff", note: "Leadership and teams", slugs: ["talent-acquisition"] },
];

/** Capability taxonomy: four lanes of services plus the identity discipline schematic. */
export default function CapabilityMap() {
  const identity = getService("identity");
  return (
    <section id="capabilities" className="px-section px-capabilities" aria-labelledby="capability-map-title">
      <div className="container-content">
        <header className="px-section-head">
          <p className="px-mono">§ 02 · Capabilities</p>
          <h2 id="capability-map-title" className="px-h2">From counsel to operation, under one line of accountability.</h2>
          <p className="px-lead">Ten practices organised by the work they do: advise, build, protect and run, staff.</p>
        </header>
        <nav aria-label="Service capability map" className="px-lanes">
          {taxonomy.map(lane => (
            <div key={lane.code} className="px-lane">
              <div className="px-lane-head"><span className="px-lane-code">{lane.code}</span><div><h3>{lane.title}</h3><p className="px-mono">{lane.note}</p></div></div>
              <ul>
                {lane.slugs.map(slug => getService(slug)).filter((s): s is Service => Boolean(s)).map(s => {
                  const Icon = s.icon;
                  return <li key={s.slug}><SmartLink to={s.path} className="px-cap capability-link">
                    <Icon className="px-cap-icon" strokeWidth={1.4} aria-hidden="true" />
                    <span><strong>{s.navLabel}</strong><span>{s.outcome}</span></span>
                    <ArrowUpRight className="px-cap-arrow" aria-hidden="true" />
                  </SmartLink></li>;
                })}
              </ul>
            </div>
          ))}
        </nav>
        {identity && <div className="px-identity">
          <div><p className="px-mono">Identity discipline</p><h3>Identity, at every layer.</h3></div>
          <nav aria-label="Identity disciplines" className="px-identity-grid">
            {identity.blocks.map((b, i) => <SmartLink key={b.id} to={`${identity.path}#${b.id}`} className="px-identity-node capability-link"><span className="px-mono">{String(i + 1).padStart(2, "0")}</span>{b.title}</SmartLink>)}
          </nav>
        </div>}
      </div>
    </section>
  );
}
