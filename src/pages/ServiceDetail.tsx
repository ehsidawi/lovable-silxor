import { Navigate, useParams, Link } from "react-router-dom";
import { Check, Quote } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { getService, services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell title={service.seoTitle} description={service.seoDescription} path={service.path}>
      <PageHero
        eyebrow={service.flagship ? "Flagship Service" : "Service"}
        title={service.name}
        lead={service.heroLead}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.navLabel }]}
      />

      {/* Outcome + capabilities */}
      <section className="r-section">
        <div className="container-content">
          <div className="r-panel" style={{ borderRadius: 40 }}>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 lg:gap-12">
              <div>
                <div className="r-node" style={{ width: 52, height: 52 }}>
                  <Icon style={{ width: 21, height: 21, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <h2 className="r-title" style={{ marginTop: 18, maxWidth: 620 }}>{service.outcome}</h2>
                <p
                  className="font-body font-[300]"
                  style={{ fontSize: 15, color: "#C6CAD0", lineHeight: 1.75, marginTop: 16, maxWidth: 620 }}
                >
                  {service.intro}
                </p>
              </div>
              <div>
                <h3 className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#FFFFFF", marginBottom: 14 }}>
                  Capabilities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.capabilities.map((c) => (
                    <span key={c} className="r-pill" style={{ padding: "9px 15px 9px 9px", fontSize: 11.5 }}>
                      <span className="r-node" style={{ width: 20, height: 20, background: "#F0F1F3", border: "none" }}>
                        <Check style={{ width: 11, height: 11, color: "#0B0B0B" }} strokeWidth={3} />
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

      {/* What we cover */}
      <section className="r-section" style={{ paddingTop: 0 }}>
        <div className="container-content">
          <div className="flex flex-col items-start gap-4" style={{ marginBottom: 24 }}>
            <span className="r-eyebrow">What We Cover</span>
            <h2 className="r-title">{service.flagship ? "The Team You Get" : "Scope of Work"}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {service.blocks.map((b, i) => (
              <div key={b.title} className="r-card" style={{ padding: 24, borderRadius: 26 }}>
                <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "#8E949B" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-[600]" style={{ fontSize: 16.5, color: "#FFFFFF", marginTop: 6 }}>
                  {b.title}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.65, marginTop: 8 }}>
                  {b.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship testimonial */}
      {service.flagship && (
        <section className="r-section" style={{ paddingTop: 0 }}>
          <div className="container-content">
            <div className="r-panel" style={{ borderRadius: 40 }}>
              <div className="r-node" style={{ width: 46, height: 46 }}>
                <Quote style={{ width: 19, height: 19, color: "#F0F1F3" }} strokeWidth={1.5} />
              </div>
              <blockquote
                className="font-display font-[500]"
                style={{ fontSize: "clamp(18px, 2.2vw, 26px)", color: "#FFFFFF", lineHeight: 1.45, marginTop: 18, maxWidth: 820 }}
              >
                After going through a lot of development vendors, we hired Silxor, and this is exactly what they are
                about. We are still working with them today. They are built to support non technical founders and give
                you a full team of experts without you having to find, vet, and hire them.
              </blockquote>
              <figcaption
                className="font-mono"
                style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8E949B", marginTop: 20 }}
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
          <h2 className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#FFFFFF", marginBottom: 14 }}>
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.slug} to={r.path} className="r-card" style={{ padding: 20, borderRadius: 24 }}>
                <h3 className="font-display font-[600]" style={{ fontSize: 15, color: "#FFFFFF" }}>{r.name}</h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "#C6CAD0", lineHeight: 1.6, marginTop: 6 }}>
                  {r.outcome}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
};

export default ServiceDetail;
