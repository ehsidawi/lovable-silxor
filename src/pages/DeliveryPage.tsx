import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SmartLink from "@/components/SmartLink";
const steps = [
  {
    title: "Assess",
    line: "Review the environment, objectives, constraints and risks. Scope and commercial terms are agreed before the assessment begins.",
  },
  {
    title: "Architect & Design",
    line: "Target architecture, security model, product requirements, and user experience designed and reviewed before build starts.",
  },
  {
    title: "Engineer & Build",
    line: "Senior engineers build in reviewed increments, with testing, quality gates, and demos on a fixed cadence.",
  },
  {
    title: "Deploy & Host",
    line: "Production release on monitored infrastructure, in the hosting model and jurisdiction agreed at assessment.",
  },
  {
    title: "Manage & Iterate",
    line: "Ongoing operations, patching, security, optimization, and a shared improvement backlog under agreed SLA tiers.",
  },
];
export default function DeliveryPage() {
  return (
    <PageShell
      title="Delivery Model | Silxor"
      description="Silxor coordinates assessment, architecture, engineering, deployment and operations with scope, responsibilities and handover agreed for each engagement."
      path="/delivery"
    >
      <PageHero
        eyebrow="Delivery model"
        title="From assessment to operations."
        lead="Five stages with responsibilities, review points and handover defined for your engagement."
        crumbs={[{ label: "Home", to: "/" }, { label: "Delivery" }]}
      />
      <section className="ed-section">
        <div className="container-content ed-delivery-full">
          <aside>
            <p className="ed-kicker">Senior accountability</p>
            <h2 className="ed-h2">Ownership at every stage.</h2>
            <dl className="ed-principles">
              <dt>Single Accountability</dt>
              <dd>
                Advisory, delivery and operations held by one accountable lead.
              </dd>
              <dt>Full Stack</dt>
              <dd>
                Architecture, product, engineering, security and operations
                coordinated within the agreed scope.
              </dd>
              <dt>Planned Handover</dt>
              <dd>
                Delivery, handover and ongoing ownership are planned together.
              </dd>
            </dl>
          </aside>
          <ol className="ed-narrative ed-narrative--large">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="ed-narrative-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.line}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="ed-section">
        <nav
          className="container-content ed-guidance"
          aria-label="Delivery guidance"
        >
          <SmartLink to="/engagement">Compare engagement models</SmartLink>
          <SmartLink to="/process">Review our methodology</SmartLink>
          <SmartLink to="/faq">Frequently asked questions</SmartLink>
        </nav>
      </section>
      <CtaBand />
    </PageShell>
  );
}
