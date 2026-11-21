import { useParams } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import SmartLink from "@/components/SmartLink";
import CtaBand from "@/components/CtaBand";
import EditorialDocument from "@/components/editorial/EditorialDocument";
import { insights, insightPath, readingTime } from "@/data/insights";
import { getService } from "@/data/services";
import NotFound from "./NotFound";
import { useWebMCP } from "use-webmcp-tool";
import { runWebMCPTool } from "@/lib/webmcp-telemetry";
export default function InsightsPage() {
  const { slug } = useParams();
  const article = slug ? insights.find((a) => a.slug === slug) : undefined;
  useWebMCP({
    name: "read_insights",
    description:
      "Read the article currently shown, or the titles and summaries in the visible insights index.",
    enabled: !slug || Boolean(article),
    annotations: { readOnlyHint: true },
    execute: () =>
      runWebMCPTool("read_insights", () =>
        article
          ? `${article.title}\n${article.description}\n${article.sections.map((s) => `${s.title}\n${s.paragraphs.join("\n")}`).join("\n\n")}`
          : insights
              .map((a) => `${a.title}: ${a.description} (${insightPath(a)})`)
              .join("\n"),
      ),
  });
  if (slug && !article) return <NotFound />;
  return (
    <PageShell
      title={`${article?.title ?? "Insights"} | Silxor`}
      description={
        article?.description ??
        "Educational guides to enterprise identity, cybersecurity and infrastructure from Silxor."
      }
      path={article ? insightPath(article) : "/insights"}
    >
      <PageHero
        eyebrow="Insights"
        title={article?.title ?? "Enterprise technology insights"}
        lead={
          article?.description ??
          "Clear explanations of identity, security and infrastructure decisions."
        }
        crumbs={
          article
            ? [
                { label: "Home", to: "/" },
                { label: "Insights", to: "/insights" },
                { label: article.title },
              ]
            : [{ label: "Home", to: "/" }, { label: "Insights" }]
        }
      />
      {article ? (
        <>
          <EditorialDocument
            sections={article.sections}
            label="Article contents"
          >
            <p className="ed-note">Silxor · {readingTime(article)} min read</p>
          </EditorialDocument>
          <section className="ed-section">
            <nav
              className="container-content ed-guidance"
              aria-label="Related services"
            >
              {article.services
                .map((slug) => getService(slug))
                .filter((s) => s !== undefined)
                .map((s) => (
                  <SmartLink key={s.slug} to={s.path}>
                    {s.name}
                  </SmartLink>
                ))}
              <SmartLink to="/insights">All insights</SmartLink>
            </nav>
          </section>
        </>
      ) : (
        <section className="ed-section">
          <div className="container-content ed-insight-list">
            {insights.map((a) => (
              <article key={a.slug}>
                <p className="ed-mini">{readingTime(a)} min read</p>
                <h2>
                  <SmartLink to={insightPath(a)}>{a.title}</SmartLink>
                </h2>
                <p>{a.description}</p>
                <SmartLink to={insightPath(a)} className="ed-text-link">
                  Read article<span className="sr-only">: {a.title}</span> ↗
                </SmartLink>
              </article>
            ))}
          </div>
        </section>
      )}

      <CtaBand />
    </PageShell>
  );
}
