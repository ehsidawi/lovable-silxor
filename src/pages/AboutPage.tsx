import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Team from "@/components/Team";
import WhySilxor from "@/components/WhySilxor";
import material from "@/assets/hero-four-layers.webp";
export default function AboutPage() {
  return (
    <PageShell
      title="About Silxor | Technology & Talent"
      description="Silxor Group Holding brings together enterprise technology consulting, international recruitment and staffing, and C-level advisory across technology and talent."
      path="/about"
    >
      <PageHero
        eyebrow="Silxor Group Holding"
        title="One firm. Senior accountability."
        lead="Technology, operational defense, information governance and recruitment. Executive advisory connects the decisions across all four practices."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />
      <section className="ed-section">
        <div className="container-content ed-about-composition">
          <figure>
            <img
              src={material}
              alt="Four distinct physical materials interlocked into one structure"
              width={1536}
              height={1152}
              loading="lazy"
            />
            <figcaption>Material study. Not a company facility.</figcaption>
          </figure>
          <article className="ed-prose">
            <h2>Technology and leadership, under one standard.</h2>
            <p>
              We design, build, migrate, secure and operate technology for
              enterprise and corporate clients, institutions and founders. IT
              strategy, infrastructure, networking, data center, end user and
              managed IT, cybersecurity, identity, software, private AI and
              custom hardware engineering sit under one line of accountability
              across on premises, hybrid and cloud environments.
            </p>
            <p>
              We also support executive search, leadership hiring, specialist
              recruitment, contract staffing and team building, from engineering
              roles to CIO, CTO, CISO, CDO and other C-level positions. Board
              and executive advisory connects technology investment and risk
              with talent strategy, leadership structure and succession. Each
              engagement defines its scope and accountable lead.
            </p>
            <h3>Matched to scope</h3>
            <p>
              Seniority, cadence, reporting, service levels and any external
              contributions are agreed before work starts. Framework references
              describe scoped control alignment, not certification.
            </p>
          </article>
        </div>
      </section>
      <WhySilxor />
      <Team />
      <CtaBand />
    </PageShell>
  );
}
