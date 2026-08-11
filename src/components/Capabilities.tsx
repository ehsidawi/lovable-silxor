import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const practices = [
  {
    title: "Advisory & Strategy",
    summary: "Board level advisory on transformation, architecture, and risk.",
    items: ["Digital Transformation", "Enterprise Architecture", "AI Strategy", "CIO & CISO Advisory", "Technology Roadmaps", "Operating Model", "Business Continuity"],
  },
  {
    title: "Infrastructure & Cloud",
    summary: "Hybrid and multi cloud engineering built for resilience.",
    items: ["Cloud Architecture", "Azure · AWS · Google Cloud", "Data Center Modernization", "Kubernetes · VMware", "Networking · Storage", "High Availability · DR", "DevSecOps"],
  },
  {
    title: "Cybersecurity & GRC",
    summary: "Zero Trust architecture, identity, and audit ready compliance.",
    items: ["Security Architecture · Zero Trust", "IAM · CIAM · IGA · PAM · PKI", "SSO · MFA · Passwordless", "SOC · MDR · Incident Response", "Threat Hunting · Pen Testing", "NIST · ISO 27001 Alignment", "PCI DSS · HIPAA · FedRAMP · CMMC"],
  },
  {
    title: "Managed Services",
    summary: "NOC and SOC operations with SLA tiers scoped per engagement.",
    items: ["Managed Infrastructure", "Managed Security", "Managed Cloud", "SOC as a Service", "NOC · Service Desk", "Monitoring · Observability", "Backup · Disaster Recovery"],
  },
];

const platforms = [
  "Core Banking",
  "Citizen & National Digital Identity",
  "Fraud Detection",
  "Sovereign & Private Cloud",
  "Private AI · LLM Security · AI Governance",
  "Agentic AI & Automation",
];

const Capabilities = () => (
  <Chapter
    id="capabilities"
    index={1}
    eyebrow="Capabilities"
    title="Four practices. One accountable partner."
    lede="Advisory, infrastructure, security, and managed operations delivered by a single engineering team under one SLA."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4" style={{ borderTop: RULE }}>
      {practices.map((p) => (
        <article
          key={p.title}
          className="flex flex-col"
          style={{ borderBottom: RULE, padding: "22px 0", paddingInlineEnd: 24 }}
        >
          <h3 className="font-display font-[600]" style={{ fontSize: 17, color: INK, letterSpacing: "-0.01em" }}>
            {p.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, marginTop: 8, marginBottom: 14 }}>
            {p.summary}
          </p>
          <ul className="flex flex-col gap-1.5 mt-auto">
            {p.items.map((it) => (
              <li key={it} className="font-mono" style={{ fontSize: 11, letterSpacing: "0.04em", color: "#F0F1F3", opacity: 0.85 }}>
                {it}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>

    <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-10">
      <p
        className="font-mono uppercase lg:col-span-3"
        style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, marginBottom: 10 }}
      >
        Platforms we build
      </p>
      <ul className="lg:col-span-9 flex flex-wrap gap-x-6 gap-y-2">
        {platforms.map((p) => (
          <li key={p} className="font-body font-[300]" style={{ fontSize: 14, color: "#F0F1F3" }}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  </Chapter>
);

export default Capabilities;
