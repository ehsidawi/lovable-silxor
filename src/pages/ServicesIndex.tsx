import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TechnologyPlatforms from "@/components/TechnologyPlatforms";
import { practices, inquiryHref } from "@/data/practices";
import SmartLink from "@/components/SmartLink";
import SolutionsSection from "@/components/SolutionsSection";
import { services } from "@/data/services";
import { useWebMCP } from "use-webmcp-tool";
import { runWebMCPTool } from "@/lib/webmcp-telemetry";

const ServicesIndex = () => {
  useWebMCP({
    name: "read_services",
    description:
      "Read the services currently listed on this page and their destinations.",
    annotations: { readOnlyHint: true },
    execute: () =>
      runWebMCPTool("read_services", () =>
        services.map((s) => `${s.name}: ${s.outcome} (${s.path})`).join("\n"),
      ),
  });

  return (
    <PageShell
      title="Services | Silxor"
      description="Silxor services across four equal practices: information technology, cybersecurity defense, information security governance and recruitment for employers."
      path="/services"
    >
      <PageHero
        eyebrow="Services"
        title="Four practices, equal weight."
        lead="Information technology, cybersecurity, information security and recruitment. Choose a practice to see what it covers and start an inquiry already set up for it."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <nav aria-label="Practices" className="ed-practice-jump">
        <div className="container-content">
          {practices.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              <span>{p.code}</span>
              {p.name}
            </a>
          ))}
        </div>
      </nav>

      {practices.map((p) => {
        const items = services.filter((s) => p.services.includes(s.slug));
        return (
          <section
            key={p.id}
            id={p.id}
            className="ed-section ed-practice"
            aria-labelledby={`${p.id}-title`}
          >
            <div className="container-content ed-practice-grid">
              <header>
                <p className="ed-row-code">{p.code}</p>
                <h2 id={`${p.id}-title`} className="ed-h2">
                  {p.name}
                </h2>
                <p className="ed-lead">{p.explanation}</p>
                <SmartLink to={inquiryHref(p.id)} className="ed-inquiry">
                  Book a Consultation
                  <span className="sr-only"> about {p.name}</span>{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </SmartLink>
              </header>
              <div>
                <p className="ed-mini">
                  {p.id === "recruitment" ? "For employers" : "Services"}
                </p>
                <ul className="ed-service-list">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link to={s.path}>
                        <strong>{s.name}</strong>
                        <span>{s.outcome}</span>
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
                {p.id === "recruitment" && (
                  <ul
                    className="mx-talent-practices"
                    aria-label="Talent practices"
                  >
                    {items[0].blocks.map((b) => (
                      <li key={b.id}>
                        <Link to={`${items[0].path}#${b.id}`}>
                          <span>{b.title}</span>
                          <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {p.id === "recruitment" && (
                  <SmartLink to="/careers" className="ed-text-link mt-6">
                    For candidates: careers ↗
                  </SmartLink>
                )}
                <p className="ed-mini mt-6">For example</p>
                <ul className="ed-examples">
                  {p.examples.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      <SolutionsSection />

      <TechnologyPlatforms />

      <CtaBand />
    </PageShell>
  );
};

export default ServicesIndex;
