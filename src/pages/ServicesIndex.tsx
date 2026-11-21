import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import CtaBand from "@/components/CtaBand";
import TechnologyPlatforms from "@/components/TechnologyPlatforms";
import SolutionsSection from "@/components/SolutionsSection";
import { services } from "@/data/services";
import { useWebMCP } from "use-webmcp-tool";
import { runWebMCPTool } from "@/lib/webmcp-telemetry";

const ServicesIndex = () => {
  const navigate = useNavigate();
  const flagship = services.find((s) => s.slug === "talent-acquisition") ?? services[0];
  const rest = services.filter((s) => s.slug !== flagship.slug);
  useWebMCP({
    name: "read_services",
    description: "Read the services currently listed on this page and their destinations.",
    annotations: { readOnlyHint: true },
    execute: () => runWebMCPTool("read_services", () => services.map(s => `${s.name}: ${s.outcome} (${s.path})`).join("\n")),
  });

  return (
    <PageShell
      title="Services | Silxor"
      description="Talent Acquisition and enterprise IT strategy, infrastructure, networking, cybersecurity, identity, managed IT, custom software, private AI, hardware and product delivery from Silxor."
      path="/services"
    >
      <PageHero
        eyebrow="Services"
        title="Technology and Talent."
        lead="Talent Acquisition alongside strategy, infrastructure, security, identity, software and hardware. Design, build and operations scoped to your needs."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="r-section">
        <div className="container-content">
          <span className="r-eyebrow">Technology &amp; Talent</span>
          <h2 className="r-title" style={{ marginTop: 16 }}>We build. We protect. We staff.</h2>
          <div className="mx-pillars" style={{ marginTop: 28 }}>
            {[
              { label: "Technology", lead: "Strategy, infrastructure, security, identity, software and hardware.", items: rest },
              { label: "Talent", lead: flagship.outcome, items: [flagship] },
            ].map((p) => (
              <div key={p.label} className="mx-pillar">
                <h3 className="font-display" style={{ fontSize: 28 }}>{p.label}</h3>
                <p className="r-lead" style={{ marginTop: 8 }}>{p.lead}</p>
                <ul className="mx-pillar-list">
                  {p.items.map((s) => (
                    <li key={s.slug}><Link to={s.path}><span>{s.name}</span><small>{p.items.length > 1 ? <ArrowRight aria-hidden style={{ width: 14, height: 14 }} /> : s.blocks.slice(0, 3).map((b) => b.title).join(", ")}</small></Link></li>
                  ))}
                </ul>
                {p.items.length === 1 && (
                  <div className="flex flex-wrap gap-3" style={{ marginTop: 20 }}>
                    <Link to={flagship.path} className="r-cta">Explore the Service</Link>
                    <Button variant="outline" className="r-cta-ghost" onClick={() => navigate("/book")}>Book a Consultation</Button>
                  </div>
                )}
              </div>
            ))}
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
