import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

const topics = [
  { title: "Security framework references", body: "ISO/IEC 27001 and NIST CSF can guide control selection, risk assessment and evidence planning. Applicable controls, ownership and review requirements are agreed for each engagement. Framework references are not a certification claim." },
  { title: "Audit and assurance requirements", body: "Where SOC 2 or another assurance framework is relevant, the scope should identify required evidence and independent review. This website does not assert an audit report, attestation or certification." },
  { title: "Resilience and recovery", body: "Availability, backups, recovery objectives and incident responsibilities depend on the environment and signed agreement. There is no sitewide uptime or recovery guarantee." },
  { title: "Privacy and regulatory requirements", body: "Data categories, applicable jurisdictions, residency, retention and access requirements should be established before work begins. GDPR and other legal obligations depend on the specific processing and must be reviewed with qualified legal advisers." },
];

export default function ComplianceDoc() {
  return <PageShell title="Compliance Approach | Silxor" description="How Silxor scopes security frameworks, assurance, resilience and regulatory requirements without asserting certification or blanket compliance." path="/compliance">
    <PageHero eyebrow="Compliance approach" title="Requirements first. Evidence matters." lead="Security frameworks inform the work. Legal obligations and assurance requirements are defined for each engagement, not assumed." crumbs={[{ label: "Home", to: "/" }, { label: "Compliance approach" }]} />
    <section className="r-section"><div className="container-content grid gap-6 md:grid-cols-2">{topics.map(topic => <div key={topic.title} className="border-t border-border pt-5"><h2 className="text-xl font-semibold">{topic.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{topic.body}</p></div>)}</div></section>
    <CtaBand title="Discuss your requirements" lead="Confirm the scope, documentation and review responsibilities before an engagement starts." />
  </PageShell>;
}