import { useLocation } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SmartLink from "@/components/SmartLink";
import { resourcePages } from "@/data/resources";
import NotFound from "./NotFound";
import ReferenceBrief from "@/components/editorial/ReferenceBrief";
import EditorialDocument from "@/components/editorial/EditorialDocument";
import { diagrams } from "@/data/diagrams";
export default function ResourcePage() {
  const { pathname } = useLocation();
  const page = resourcePages.find((p) => p.path === pathname);
  if (!page) return <NotFound />;
  const informational = [
    "/terms",
    "/cookies",
    "/security",
    "/careers",
  ].includes(pathname);
  return (
    <PageShell
      title={`${page.title} | Silxor`}
      description={page.description}
      path={page.path}
    >
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lead={page.lead}
        crumbs={[{ label: "Home", to: "/" }, { label: page.title }]}
      />
      {pathname === "/process" && <ReferenceBrief data={diagrams.process} />}
      <EditorialDocument
        sections={page.sections}
        label={`${page.title} topics`}
        actions={(id) => (
          <>
            {id === "apply" && (
              <a
                href="mailto:hello@silxor.com?subject=Careers%20expression%20of%20interest"
                className="ed-text-link mt-5"
              >
                Email your expression of interest ↗
              </a>
            )}
            {id === "report" && (
              <a
                href="mailto:hello@silxor.com?subject=Security%20disclosure"
                className="ed-text-link mt-5"
              >
                Report a security concern ↗
              </a>
            )}
            {id === "security-file" && (
              <a href="/.well-known/security.txt" className="ed-text-link mt-5">
                Read security.txt ↗
              </a>
            )}
          </>
        )}
      />
      <section className="ed-section">
        <nav
          aria-label="Related guidance"
          className="container-content flex flex-wrap gap-x-8 gap-y-4"
        >
          {[
            { to: "/services", label: "Explore our services" },
            { to: "/engagement", label: "Compare engagement models" },
            { to: "/process", label: "Review our process" },
            { to: "/faq", label: "Frequently asked questions" },
            { to: "/privacy", label: "Privacy Policy" },
            { to: "/security", label: "Responsible disclosure" },
          ]
            .filter((l) => l.to !== pathname)
            .map((l) => (
              <SmartLink
                key={l.to}
                to={l.to}
                className="min-h-11 py-2 text-sm font-medium underline underline-offset-4"
              >
                {l.label}
              </SmartLink>
            ))}
        </nav>
      </section>
      {!informational && <CtaBand />}
    </PageShell>
  );
}
