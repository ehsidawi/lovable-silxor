import { Users, ShieldCheck, FileCheck, GaugeCircle, Layers, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import WhySilxor from "@/components/WhySilxor";
import Team from "@/components/Team";


const posture = [
  { icon: Users, title: "One Accountable Team", line: "Technology, recruitment and executive advisory under an agreed engagement lead." },
  { icon: ShieldCheck, title: "Security by Design", line: "Identity and controls considered from the first decision." },
  { icon: FileCheck, title: "Framework Informed", line: "Control frameworks and evidence requirements scoped to the engagement." },
  { icon: GaugeCircle, title: "Scoped per Engagement", line: "SLA tiers and reporting defined at assessment." },
];

const staffing = [
  { icon: Layers, title: "Matched to Scope", line: "Executive search, specialist recruitment and contract staffing matched to the responsibilities your team needs." },
  { icon: Users, title: "Senior Judgment", line: "Roles, expertise, reporting and any external contributions are agreed in the engagement scope." },
  { icon: ClipboardCheck, title: "Scoped at Assessment", line: "Seniority, cadence, and reporting are defined in the proposal before work starts." },
];

const serves = [
  "Enterprise and corporate IT leaders planning and operating complex technology estates",
  "Security and identity leaders strengthening access, controls and governance",
  "Regulated institutions with availability and sovereignty obligations",
  "Growing companies developing their technology capabilities and delivery capacity",
];

const AboutPage = () => (
  <PageShell
    title="About Silxor | Technology & Talent"
    description="Silxor Group Holding brings together enterprise technology consulting, international recruitment and staffing, and C-level advisory across technology and talent."
    path="/about"
  >
    <PageHero
      eyebrow="About"
      title="Technology and leadership, under one standard."
      lead="Silxor Group Holding advises boards and senior leadership and brings enterprise technology consulting, international recruitment and staffing, and C-level advisory together under senior accountability."
      crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
    />

    <section className="r-section">
      <div className="container-content">
        <div className="r-panel" style={{ borderRadius: 4 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-8 lg:gap-12">
            <div>
              <span className="r-eyebrow">Who We Are</span>
              <h2 className="r-title" style={{ marginTop: 16 }}>One firm. Senior accountability.</h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-body font-[400]" style={{ fontSize: 15, color: "hsl(var(--muted-foreground))", lineHeight: 1.75 }}>
                We design, build, migrate, secure and operate technology for enterprise and corporate clients,
                institutions and founders. IT strategy, infrastructure, networking, data center, end user and managed
                IT, cybersecurity, identity, software, private AI and custom hardware engineering sit under one line
                of accountability across on premises, hybrid and cloud environments.
              </p>
              <p className="font-body font-[400]" style={{ fontSize: 15, color: "hsl(var(--muted-foreground))", lineHeight: 1.75 }}>
                We also support executive search, leadership hiring, specialist recruitment, contract staffing and team building, from engineering roles to CIO, CTO, CISO, CDO and other C-level positions. Board and executive advisory connects technology investment and risk with talent strategy, leadership structure and succession. Each engagement defines its scope and accountable lead.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4" style={{ marginTop: 20 }}>
          {posture.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="r-card" style={{ padding: 22, borderRadius: 4 }}>
                <div className="r-node" style={{ width: 44, height: 44 }}>
                  <Icon style={{ width: 18, height: 18, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-body font-[600]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginTop: 14 }}>{p.title}</h3>
                <p className="font-body font-[400]" style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.6, marginTop: 6 }}>
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
          <div className="r-panel" style={{ borderRadius: 4 }}>
            <span className="r-eyebrow">How We Staff</span>
            <div className="flex flex-col gap-5" style={{ marginTop: 20 }}>
              {staffing.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="flex items-start gap-4">
                    <div className="r-node" style={{ width: 42, height: 42 }}>
                      <Icon style={{ width: 17, height: 17, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display font-[600]" style={{ fontSize: 15.5, color: "hsl(var(--foreground))" }}>{s.title}</h3>
                      <p className="font-body font-[400]" style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.6, marginTop: 5 }}>
                        {s.line}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="r-panel" style={{ borderRadius: 4 }}>
            <span className="r-eyebrow">Who We Serve</span>
            <ul className="flex flex-col gap-3" style={{ marginTop: 20, listStyle: "none", padding: 0 }}>
              {serves.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span style={{ width: 6, height: 6, borderRadius: 4, background: "hsl(var(--foreground))", marginTop: 8, flexShrink: 0 }} />
                  <span className="font-body font-[400]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{s}</span>
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
