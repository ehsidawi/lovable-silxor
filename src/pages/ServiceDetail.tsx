import { useParams } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { getService, services } from "@/data/services";
import { practiceForService, inquiryHref } from "@/data/practices";
import { serviceFaqs } from "@/data/site";
import { diagrams } from "@/data/diagrams";
import ReferenceBrief from "@/components/editorial/ReferenceBrief";
import SectionHeading from "@/components/editorial/SectionHeading";
import SmartLink from "@/components/SmartLink";
import QuestionList from "@/components/QuestionList";
import NotFound from "./NotFound";
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;
  const practice = practiceForService(service.slug);
  const to = practice ? inquiryHref(practice.id, service.slug) : "/book";
  const related = services
    .filter(
      (s) =>
        s.slug !== service.slug &&
        (practice?.services.includes(s.slug) ||
          ["advisory", "identity", "talent-acquisition"].includes(s.slug)),
    )
    .slice(0, 4);
  return (
    <PageShell
      title={service.seoTitle}
      description={service.seoDescription}
      path={service.path}
    >
      <PageHero
        eyebrow={practice ? `${practice.code} · ${practice.name}` : "Service"}
        title={service.name}
        lead={service.heroLead}
        primaryCta={{ label: "Book a Consultation", to }}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.navLabel },
        ]}
      />
      <section className="ed-section">
        <div className="container-content ed-service-introduction">
          <div>
            <p className="ed-kicker">The mandate</p>
            <h2 className="ed-h2">{service.outcome}</h2>
          </div>
          <div>
            <h3>What is {service.name.toLowerCase()}?</h3>
            <p className="ed-lead">{service.intro}</p>
            <p className="ed-note">
              Deliverables, responsibilities, access requirements and acceptance
              criteria are agreed during assessment. Work is scoped around your
              environment, not a fixed package.
            </p>
          </div>
        </div>
      </section>
      <section className="ed-section">
        <div className="container-content">
          <SectionHeading
            label="Scope of work"
            title={
              service.flagship
                ? "The team you get."
                : "Responsibilities, made clear."
            }
          >
            Choose a discipline to read its scope. Acceptance criteria and
            ownership are established in the engagement.
          </SectionHeading>
          <div className="ed-scope-layout">
            <aside>
              <h3 className="ed-mini">Capabilities</h3>
              <ul className="ed-capability-list">
                {service.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              {service.slug === "talent-acquisition" && (
                <SmartLink to="/careers" className="ed-text-link">
                  For candidates: careers ↗
                </SmartLink>
              )}
            </aside>
            <div className="ed-scope-briefs">
              {service.blocks.map((b, i) => (
                <details id={b.id} key={b.title} open={i === 0}>
                  <summary>
                    <span className="ed-mini">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{b.title}</h3>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{b.line}</p>
                  <SmartLink to={to} className="ed-text-link">
                    Book a Consultation
                    <span className="sr-only"> about {b.title}</span> ↗
                  </SmartLink>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      {diagrams[service.slug] && (
        <ReferenceBrief data={diagrams[service.slug]} />
      )}
      {service.flagship && (
        <section className="ed-section">
          <div className="container-content ed-testimony">
            <p className="ed-kicker">Private client perspective</p>
            <blockquote>
              After going through a lot of development vendors, we hired Silxor,
              and this is exactly what they are about. We are still working with
              them today. They are built to support non technical founders and
              give you a full team of experts without you having to find, vet,
              and hire them.
            </blockquote>
            <p className="ed-mini">
              Founder · Private Client · Identity withheld by agreement
            </p>
            <SmartLink to="/clients" className="ed-text-link">
              Client perspective ↗
            </SmartLink>
          </div>
        </section>
      )}
      <section className="ed-section">
        <div className="container-content ed-questions-layout">
          <div>
            <p className="ed-kicker">Before you decide</p>
            <h2 className="ed-h2">Questions about this service.</h2>
          </div>
          <QuestionList questions={serviceFaqs(service)} />
        </div>
      </section>
      <section className="ed-section">
        <div className="container-content">
          <p className="ed-kicker">Connected disciplines</p>
          <ul className="ed-linked-list">
            {related.map((s) => (
              <li key={s.slug}>
                <SmartLink to={s.path}>
                  <h2>{s.name}</h2>
                  <span>{s.outcome}</span>
                  <b aria-hidden="true">↗</b>
                </SmartLink>
              </li>
            ))}
          </ul>
          <nav className="ed-guidance" aria-label="Related guidance">
            <SmartLink to="/industries">Industry requirements</SmartLink>
            <SmartLink to="/engagement">Engagement models</SmartLink>
            <SmartLink to="/faq">All frequently asked questions</SmartLink>
          </nav>
        </div>
      </section>
      <CtaBand to={to} />
    </PageShell>
  );
}
