import { useParams, Link } from "react-router-dom";
import { Check, Quote } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { getService, services } from "@/data/services";
import NotFound from "./NotFound";
import QuestionList from "@/components/QuestionList";
import { serviceFaqs } from "@/data/site";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";
import { diagrams } from "@/data/diagrams";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <NotFound />;

  const Icon = service.icon;
  const relatedSlugs: Record<string, string[]> = { identity: ["cybersecurity", "managed-services", "software-engineering"], cybersecurity: ["identity", "cloud", "managed-services"], cloud: ["managed-services", "cybersecurity", "advisory"], "private-ai": ["software-engineering", "cloud", "identity"], "hardware-engineering": ["software-engineering", "cloud", "cybersecurity"], "software-engineering": ["product-team", "identity", "private-ai"], "product-team": ["software-engineering", "advisory", "cloud"], advisory: ["cloud", "cybersecurity", "identity"], "managed-services": ["cloud", "cybersecurity", "identity"] };
  const related = services.filter(s => relatedSlugs[service.slug]?.includes(s.slug));

  return (
    <PageShell title={service.seoTitle} description={service.seoDescription} path={service.path}>
      <PageHero
        eyebrow={service.flagship ? "Flagship Service" : "Service"}
        title={service.name}
        lead={service.heroLead}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.navLabel }]}
      />

      <section className="border-b border-border py-8"><div className="container-content"><h2 className="font-display text-2xl font-medium">What is {service.name.toLowerCase()}?</h2><p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">{service.intro}</p></div></section>
      {diagrams[service.slug] && <ArchitectureDiagram data={diagrams[service.slug]} />}
      {/* Outcome + capabilities */}
      <section className="r-section">
        <div className="container-content">
          <div className="r-panel" style={{ borderRadius: 4 }}>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 lg:gap-12">
              <div>
                <div className="r-node" style={{ width: 52, height: 52 }}>
                  <Icon style={{ width: 21, height: 21, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
                </div>
                <h2 className="r-title" style={{ marginTop: 18, maxWidth: 620 }}>{service.outcome}</h2>
                <p
                  className="font-body font-[400]"
                  style={{ fontSize: 15, color: "hsl(var(--muted-foreground))", lineHeight: 1.75, marginTop: 16, maxWidth: 620 }}
                >
                  Deliverables, responsibilities, access requirements and acceptance criteria are agreed during review. Work is scoped around your environment, not a fixed package.
                </p>
              </div>
              <div>
                <h3 className="font-body uppercase" style={{ fontSize: 10, letterSpacing: 0, color: "hsl(var(--foreground))", marginBottom: 14 }}>
                  Capabilities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.capabilities.map((c) => (
                    <span key={c} className="r-pill" style={{ padding: "9px 15px 9px 9px", fontSize: 11.5 }}>
                      <span className="r-node" style={{ width: 20, height: 20, background: "hsl(var(--primary))", border: "none" }}>
                        <Check style={{ width: 11, height: 11, color: "hsl(var(--primary-foreground))" }} strokeWidth={3} />
                      </span>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.slug === "identity" && (
        <section className="border-y border-border bg-secondary py-5">
          <nav aria-label="Identity disciplines" className="container-content flex flex-wrap gap-3">
            {service.blocks.map(block => <a key={block.id} href={`#${block.id}`} className="inline-flex min-h-11 items-center rounded-2xl border border-border bg-card px-4 text-sm font-medium hover:border-forest">{block.title.split(" / ")[0]}</a>)}
          </nav>
        </section>
      )}

      {/* What we cover */}
      <section className="r-section" style={{ paddingTop: 0 }}>
        <div className="container-content">
          <div className="flex flex-col items-start gap-4" style={{ marginBottom: 24 }}>
            <span className="r-eyebrow">What We Cover</span>
            <h2 className="r-title">{service.flagship ? "The Team You Get" : "Scope of Work"}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {service.blocks.map((b, i) => (
              <section id={b.id} key={b.title} className="r-card scroll-mt-28" style={{ padding: 24, borderRadius: 4 }}>
                <span className="font-body" style={{ fontSize: 10, letterSpacing: 0, color: "hsl(var(--muted-foreground))" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-[600]" style={{ fontSize: 16.5, color: "hsl(var(--foreground))", marginTop: 6 }}>
                  {b.title}
                </h3>
                <p className="font-body font-[400]" style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.65, marginTop: 8 }}>
                  {b.line}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship testimonial */}
      {service.flagship && (
        <section className="r-section" style={{ paddingTop: 0 }}>
          <div className="container-content">
            <div className="r-panel" style={{ borderRadius: 4 }}>
              <div className="r-node" style={{ width: 46, height: 46 }}>
                <Quote style={{ width: 19, height: 19, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
              </div>
              <blockquote
                className="font-display font-[500]"
                style={{ fontSize: 26, color: "hsl(var(--foreground))", lineHeight: 1.45, marginTop: 18, maxWidth: 820 }}
              >
                After going through a lot of development vendors, we hired Silxor, and this is exactly what they are
                about. We are still working with them today. They are built to support non technical founders and give
                you a full team of experts without you having to find, vet, and hire them.
              </blockquote>
              <figcaption
                className="font-body"
                style={{ fontSize: 11, letterSpacing: 0, textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginTop: 20 }}
              >
                Founder · Private Client · Identity withheld by agreement
              </figcaption>
              <Link to="/clients" className="r-cta-ghost" style={{ marginTop: 22 }}>
                See Client Proof
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="r-section" style={{ paddingTop: 0 }}>
        <div className="container-content">
          <h2 className="font-body uppercase" style={{ fontSize: 10, letterSpacing: 0, color: "hsl(var(--foreground))", marginBottom: 14 }}>
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.slug} to={r.path} className="r-card" style={{ padding: 20, borderRadius: 4 }}>
                <h3 className="font-display font-[600]" style={{ fontSize: 15, color: "hsl(var(--foreground))" }}>{r.name}</h3>
                <p className="font-body font-[400]" style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.6, marginTop: 6 }}>
                  {r.outcome}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {service.slug === "identity" && <section className="r-section"><div className="container-content"><h2 className="r-title">Identity terms</h2><dl className="mt-8 grid gap-6 sm:grid-cols-2">{service.blocks.slice(0,6).map(b => <div key={b.id} className="border-t border-border pt-4"><dt className="font-semibold">{b.title}</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.line}</dd></div>)}</dl></div></section>}
      <section className="r-section"><div className="container-content"><h2 className="r-title">Questions about this service</h2><div className="mt-7"><QuestionList questions={serviceFaqs(service)} /></div><nav aria-label="Related guidance" className="mt-7 flex flex-wrap gap-6 text-sm font-medium"><Link to="/industries" className="underline underline-offset-4">Industry requirements</Link><Link to="/engagement" className="underline underline-offset-4">Engagement models</Link><Link to="/faq" className="underline underline-offset-4">All frequently asked questions</Link></nav></div></section>
      <CtaBand />
    </PageShell>
  );
};

export default ServiceDetail;
