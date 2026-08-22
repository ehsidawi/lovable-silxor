import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SolutionsSection from "@/components/SolutionsSection";
import { services } from "@/data/services";

const ServicesIndex = () => {
  const navigate = useNavigate();
  const flagship = services.find((s) => s.flagship)!;
  const rest = services.filter((s) => !s.flagship);

  return (
    <PageShell
      title="Services | Silxor"
      description="Silxor services: full product team as a service, advisory and strategy, infrastructure and cloud, cybersecurity and GRC, managed services, private AI, and identity and access."
      path="/services"
    >
      <PageHero
        eyebrow="Services"
        title="One Partner Across Every Layer of Your Platform"
        lead="Seven practices, delivered by senior engineers under a single line of accountability."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="r-section">
        <div className="container-content">
          {/* Flagship */}
          <div className="r-panel" style={{ borderRadius: 40 }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,320px)] gap-8 items-center">
              <div>
                <span className="r-eyebrow">Flagship Service</span>
                <h2 className="r-title" style={{ marginTop: 16 }}>{flagship.name}</h2>
                <p className="r-lead" style={{ marginTop: 12, maxWidth: 560 }}>{flagship.outcome}</p>
                <div className="flex flex-wrap gap-2" style={{ marginTop: 18 }}>
                  {flagship.blocks.slice(0, 6).map((b) => (
                    <span key={b.title} className="r-pill">{b.title}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link to={flagship.path} className="r-cta">Explore the Service</Link>
                <button type="button" className="r-cta-ghost" onClick={() => navigate("/book")}>
                  Book an Assessment
                </button>
              </div>
            </div>
          </div>

          {/* Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" style={{ marginTop: 20 }}>
            {rest.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={s.path}
                  className="r-card group flex flex-col"
                  style={{ padding: 24, borderRadius: 28 }}
                >
                  <div className="r-node" style={{ width: 46, height: 46 }}>
                    <Icon style={{ width: 19, height: 19, color: "#F0F1F3" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-[600]" style={{ fontSize: 17, color: "#FFFFFF", marginTop: 16 }}>
                    {s.name}
                  </h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.6, marginTop: 8 }}>
                    {s.outcome}
                  </p>
                  <span
                    className="font-mono inline-flex items-center gap-2"
                    style={{ fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF", marginTop: "auto", paddingTop: 18 }}
                  >
                    Learn more
                    <ArrowRight
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      style={{ width: 12, height: 12 }}
                      strokeWidth={2}
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SolutionsSection />

      <CtaBand />
    </PageShell>
  );
};

export default ServicesIndex;
