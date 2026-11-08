import { ClipboardList, PencilRuler, Code2, Rocket, RefreshCw } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

const steps = [
  { icon: ClipboardList, title: "Request Assessment", line: "A no cost technical discovery covering environment, objectives, constraints, and risk. You leave with a scoped view of the work." },
  { icon: PencilRuler, title: "Architect & Design", line: "Target architecture, security model, product requirements, and user experience designed and reviewed before build starts." },
  { icon: Code2, title: "Engineer & Build", line: "Senior engineers build in reviewed increments, with testing, quality gates, and demos on a fixed cadence." },
  { icon: Rocket, title: "Deploy & Host", line: "Production release on monitored infrastructure, in the hosting model and jurisdiction agreed at assessment." },
  { icon: RefreshCw, title: "Manage & Iterate", line: "Ongoing operations, patching, security, optimization, and a shared improvement backlog under agreed SLA tiers." },
];

const principles = [
  { title: "One Partner", line: "Advisory, build, and operations under one contract and one owner." },
  { title: "Full Stack", line: "Architecture, product, engineering, security and operations coordinated within the agreed scope." },
  { title: "No Handoffs", line: "Delivery, handover and ongoing ownership are planned together." },
];

const DeliveryPage = () => (
  <PageShell
    title="Delivery Model | Silxor"
    description="Silxor delivery model: request assessment, architect and design, engineer and build, deploy and host, manage and iterate. One partner, full stack, no handoffs."
    path="/delivery"
  >
    <PageHero
      eyebrow="Delivery Model"
      title="One Partner. Full Stack. No Handoffs."
      lead="Five stages from first conversation to long term ownership, with the same accountable team throughout."
      crumbs={[{ label: "Home", to: "/" }, { label: "Delivery" }]}
    />

    <section className="r-section">
      <div className="container-content">
        <ol className="flex flex-col gap-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title} className="r-card" style={{ padding: "24px 22px", borderRadius: 4 }}>
                <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,1fr)] gap-4 sm:gap-6 items-start">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono font-[700]"
                      style={{ fontSize: 44, color: "hsl(var(--forest))", lineHeight: 1 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="r-node" style={{ width: 46, height: 46 }}>
                      <Icon style={{ width: 19, height: 19, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display font-[600]" style={{ fontSize: 19, color: "hsl(var(--foreground))" }}>{s.title}</h2>
                    <p className="font-body font-[400]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.7, marginTop: 8, maxWidth: 720 }}>
                      {s.line}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="r-panel" style={{ borderRadius: 4, marginTop: 20 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="font-display font-[600]" style={{ fontSize: 17, color: "hsl(var(--foreground))" }}>{p.title}</h3>
                <p className="font-body font-[400]" style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.65, marginTop: 8 }}>
                  {p.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="r-section"><nav aria-label="Delivery guidance" className="container-content flex flex-wrap gap-6"><a href="/engagement" className="font-medium underline underline-offset-4">Compare engagement models</a><a href="/process" className="font-medium underline underline-offset-4">Review our methodology</a><a href="/faq" className="font-medium underline underline-offset-4">Frequently asked questions</a></nav></section>
    <CtaBand />
  </PageShell>
);

export default DeliveryPage;
