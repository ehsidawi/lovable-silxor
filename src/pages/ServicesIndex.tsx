import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import CtaBand from "@/components/CtaBand";
import TechnologyPlatforms from "@/components/TechnologyPlatforms";
import SolutionsSection from "@/components/SolutionsSection";
import { services } from "@/data/services";
import { infrastructureMedia, serviceMedia } from "@/data/serviceMedia";

const ServicesIndex = () => {
  const navigate = useNavigate();
  const flagship = services.find((s) => s.flagship) ?? services[0];
  const rest = services.filter((s) => !s.flagship);

  return (
    <PageShell
      title="Services | Silxor"
      description="Enterprise IT strategy, infrastructure, networking, cybersecurity, identity, managed IT, custom software, private AI, hardware and product delivery from Silxor."
      path="/services"
    >
      <PageHero
        eyebrow="Services"
        title="Your entire IT estate."
        lead="Strategy, infrastructure, security, identity, software and hardware. Design, build and operations scoped to your needs."
        media={infrastructureMedia}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="r-section">
        <div className="container-content">
          {/* Flagship */}
          <div className="r-panel" style={{ borderRadius: 4 }}>
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
                <Button variant="outline" className="r-cta-ghost" onClick={() => navigate("/book")}>
                  Book a Consultation
                </Button>
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
                  style={{ padding: 24, borderRadius: 4 }}
                >
                  {serviceMedia[s.slug] && <img src={serviceMedia[s.slug].small} alt={serviceMedia[s.slug].alt} width={768} height={512} loading="lazy" className="mb-4 aspect-[16/7] w-full rounded-md object-cover object-right" />}
                  <div className="r-node" style={{ width: 46, height: 46 }}>
                    <Icon style={{ width: 19, height: 19, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display font-[600]" style={{ fontSize: 17, color: "hsl(var(--foreground))", marginTop: 16 }}>
                    {s.name}
                  </h2>
                  <p className="font-body font-[400]" style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.6, marginTop: 8 }}>
                    {s.outcome}
                  </p>
                  <span
                    className="font-mono inline-flex items-center gap-2"
                    style={{ fontSize: 10.5, letterSpacing: 0, textTransform: "uppercase", color: "hsl(var(--foreground))", marginTop: "auto", paddingTop: 18 }}
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

      <TechnologyPlatforms />

      <CtaBand />
    </PageShell>
  );
};

export default ServicesIndex;
