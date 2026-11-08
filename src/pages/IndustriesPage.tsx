import {
  Banknote, Landmark, HeartPulse, Zap, Factory, Truck, GraduationCap, Cpu, ShoppingBag,
} from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

const industries = [
  { icon: ShoppingBag, title: "Retail & Commerce", line: "Customer platforms, store connectivity, inventory integrations and secure digital transactions designed around business operations.", tags: ["Customer Identity", "Integration", "Payment Security"] },
  {
    icon: Banknote,
    title: "Finance & Banking",
    line: "Core platforms, digital channels, fraud, and identity built to survive audit and peak load.",
    tags: ["PCI DSS", "GLBA", "High Availability"],
  },
  {
    icon: Landmark,
    title: "Government",
    line: "Citizen services and internal platforms with sovereignty and Zero Trust access requirements.",
    tags: ["Data Residency", "Zero Trust", "Records Retention"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    line: "Clinical and administrative systems where privacy and uptime are patient safety issues.",
    tags: ["PHI Handling", "Access Governance", "Continuity"],
  },
  {
    icon: Zap,
    title: "Energy",
    line: "Operational and corporate environments separated, monitored, and recoverable.",
    tags: ["OT / IT Separation", "Monitoring", "Disaster Recovery"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    line: "Plant systems, integration layers, and analytics that keep production lines moving.",
    tags: ["Edge Compute", "Integration", "Resilience"],
  },
  {
    icon: Truck,
    title: "Transportation",
    line: "Distributed, latency sensitive systems across sites, fleets, and terminals.",
    tags: ["Distributed Sites", "Latency", "Availability"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    line: "Identity at scale, shared platforms, and controlled access for large user populations.",
    tags: ["SSO at Scale", "Shared Platforms", "Cost Control"],
  },
  {
    icon: Cpu,
    title: "Critical Infrastructure",
    line: "Environments where availability, segmentation, and recovery targets are non negotiable.",
    tags: ["Segmentation", "Hardening", "Recovery Targets"],
  },
];

const IndustriesPage = () => (
  <PageShell
    title="Industries | Silxor"
    description="Silxor adapts architecture to the regulatory, availability, sovereignty, and security needs of banking, government, healthcare, energy, manufacturing, transportation, education, and critical infrastructure."
    path="/industries"
  >
    <PageHero
      eyebrow="Industries"
      title="Architecture Adapted to Your Regulator, Not a Template"
      lead="Regulatory obligation, availability targets, sovereignty, and security posture shape the design before technology choices are made."
      crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
    />

    <section className="r-section">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {industries.map((it) => {
            const Icon = it.icon;
            return (
              <article key={it.title} className="r-card" style={{ padding: 24, borderRadius: 4 }}>
                <div className="r-node" style={{ width: 46, height: 46 }}>
                  <Icon style={{ width: 19, height: 19, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
                </div>
                <h2 className="font-display font-[600]" style={{ fontSize: 17, color: "hsl(var(--foreground))", marginTop: 16 }}>
                  {it.title}
                </h2>
                <p className="font-body font-[400]" style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.65, marginTop: 8 }}>
                  {it.line}
                </p>
                <div className="flex flex-wrap gap-2" style={{ marginTop: 14 }}>
                  {it.tags.map((t) => (
                    <span key={t} className="r-pill">{t}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="border-b border-border py-8"><div className="container-content"><p className="text-sm leading-relaxed text-muted-foreground">These are capability areas, not a list of clients or completed projects. Sector requirements and applicable controls are confirmed during review.</p><nav aria-label="Related services" className="mt-5 flex flex-wrap gap-6"><a href="/services/cybersecurity" className="underline underline-offset-4">Cybersecurity and control alignment</a><a href="/services/identity" className="underline underline-offset-4">Enterprise identity services</a><a href="/services/cloud" className="underline underline-offset-4">Infrastructure and cloud design</a><a href="/faq" className="underline underline-offset-4">Engagement questions</a></nav></div></section>
    <CtaBand
      eyebrow="Sector Fit"
      title="Tell Us What You Must Comply With"
      lead="We map obligations to architecture during the review, before any build decision."
    />
  </PageShell>
);

export default IndustriesPage;
