import { Users, ShieldCheck, FileCheck, GaugeCircle, Layers, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import WhySilxor from "@/components/WhySilxor";
import Team from "@/components/Team";


const posture = [
  { icon: Users, title: "One Accountable Team", line: "Advisory, build, and operations under one owner." },
  { icon: ShieldCheck, title: "Security by Design", line: "Identity and controls built in from day one." },
  { icon: FileCheck, title: "Framework Aligned", line: "NIST CSF and ISO 27001 control families, evidenced." },
  { icon: GaugeCircle, title: "Scoped per Engagement", line: "SLA tiers and reporting defined at assessment." },
];

const staffing = [
  { icon: Layers, title: "Matched to Scope", line: "Engineers matched to the practices your program actually involves." },
  { icon: Users, title: "Senior by Default", line: "A single named senior team, no vendor handoffs and no hidden subcontracting." },
  { icon: ClipboardCheck, title: "Scoped at Assessment", line: "Seniority, cadence, and reporting are defined in the proposal before work starts." },
];

const serves = [
  "Non technical founders taking an idea to production",
  "Companies without an internal senior engineering leadership layer",
  "Regulated institutions with availability and sovereignty obligations",
  "Teams replacing multiple vendors with one accountable partner",
];

const AboutPage = () => (
  <PageShell
    title="About Silxor | Senior Engineering and Technology Partner"
    description="Silxor is a senior engineering and technology partner focused on accountable architecture and delivery: one accountable partner, senior engineers, direct accountability, no handoffs."
    path="/about"
  >
    <PageHero
      eyebrow="About"
      title="Senior Engineers. Direct Accountability."
      lead="Silxor is an engineering and technology partner built around one idea: the people who design your platform should be the people who build and run it."
      crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
    />

    <section className="r-section">
      <div className="container-content">
        <div className="r-panel" style={{ borderRadius: 40 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-8 lg:gap-12">
            <div>
              <span className="r-eyebrow">Who We Are</span>
              <h2 className="r-title" style={{ marginTop: 16 }}>One Partner. Full Stack.</h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-body font-[300]" style={{ fontSize: 15, color: "#C6CAD0", lineHeight: 1.75 }}>
                We architect, build, secure, host, and operate platforms for institutions and founders who cannot
                afford a failed program. Advisory, product delivery, cloud, cybersecurity, private AI, identity, and
                managed services sit under one contract and one line of accountability.
              </p>
              <p className="font-body font-[300]" style={{ fontSize: 15, color: "#C6CAD0", lineHeight: 1.75 }}>
                That structure removes the most common cause of failure we see: work passed between a strategy firm,
                a development shop, a security vendor, and a managed provider, with no one owning the outcome.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4" style={{ marginTop: 20 }}>
          {posture.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="r-card" style={{ padding: 22, borderRadius: 26 }}>
                <div className="r-node" style={{ width: 44, height: 44 }}>
                  <Icon style={{ width: 18, height: 18, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-body font-[600]" style={{ fontSize: 15, color: "#FFFFFF", marginTop: 14 }}>{p.title}</h3>
                <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.6, marginTop: 6 }}>
                  {p.line}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="r-section" style={{ paddingTop: 0 }}>
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="r-panel" style={{ borderRadius: 36 }}>
            <span className="r-eyebrow">How We Staff</span>
            <div className="flex flex-col gap-5" style={{ marginTop: 20 }}>
              {staffing.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="flex items-start gap-4">
                    <div className="r-node" style={{ width: 42, height: 42 }}>
                      <Icon style={{ width: 17, height: 17, color: "#F0F1F3" }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display font-[600]" style={{ fontSize: 15.5, color: "#FFFFFF" }}>{s.title}</h3>
                      <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.6, marginTop: 5 }}>
                        {s.line}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="r-panel" style={{ borderRadius: 36 }}>
            <span className="r-eyebrow">Who We Serve</span>
            <ul className="flex flex-col gap-3" style={{ marginTop: 20, listStyle: "none", padding: 0 }}>
              {serves.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: "#F0F1F3", marginTop: 8, flexShrink: 0 }} />
                  <span className="font-body font-[300]" style={{ fontSize: 14, color: "#C6CAD0", lineHeight: 1.65 }}>{s}</span>
                </li>
              ))}
            </ul>
            <Link to="/delivery" className="r-cta-ghost" style={{ marginTop: 22 }}>
              See the Delivery Model
            </Link>
          </div>
        </div>
      </div>
    </section>

    <WhySilxor />
    <Team />

    <CtaBand />

  </PageShell>
);

export default AboutPage;
