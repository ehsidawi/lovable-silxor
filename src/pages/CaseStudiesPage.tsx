import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SmartLink from "@/components/SmartLink";
import { caseStudies } from "@/data/caseStudies";
import NotFound from "./NotFound";
import EditorialDocument from "@/components/editorial/EditorialDocument";
export default function CaseStudiesPage() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);
  if (slug && !study) return <NotFound />;
  return (
    <PageShell
      title={`${study?.title ?? "Case studies"} | Silxor`}
      description={
        study?.summary ??
        "Silxor publishes case studies only when approved facts and publication permission are available."
      }
      path={study ? `/case-studies/${study.slug}` : "/case-studies"}
    >
      {!caseStudies.length && (
        <Helmet>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
      )}
      <PageHero
        eyebrow="Case studies"
        title={study?.title ?? "Case studies"}
        lead={
          study?.summary ??
          "No public case studies are available here yet. We publish project details only with permission and approved facts."
        }
        crumbs={[
          { label: "Home", to: "/" },
          ...(study ? [{ label: "Case studies", to: "/case-studies" }] : []),
          { label: study?.title ?? "Case studies" },
        ]}
      />
      {study ? (
        <EditorialDocument
          sections={study.sections}
          label="Case study contents"
        />
      ) : (
        <section className="ed-section">
          <div className="container-content">
            {caseStudies.length ? (
              <ul className="ed-linked-list">
                {caseStudies.map((s) => (
                  <li key={s.slug}>
                    <SmartLink to={`/case-studies/${s.slug}`}>
                      <h2>{s.title}</h2>
                      <span>{s.summary}</span>
                      <b aria-hidden="true">↗</b>
                    </SmartLink>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="ed-empty">
                <p className="ed-kicker">Publication requires permission</p>
                <h2>No public case studies yet.</h2>
                <p>
                  Project details are published only with approved facts and
                  permission. No client identities or outcomes are inferred
                  here.
                </p>
                <SmartLink to="/clients" className="ed-text-link">
                  Our approach to confidentiality ↗
                </SmartLink>
              </div>
            )}
          </div>
        </section>
      )}

      <CtaBand />
    </PageShell>
  );
}
