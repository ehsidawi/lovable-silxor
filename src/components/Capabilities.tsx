import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const practices = [
  {
    title: "Advisory & Strategy",
    summary: "Board level advisory on transformation, architecture, and risk.",
    items: ["Digital transformation", "Enterprise architecture", "AI strategy", "CIO & CISO advisory", "Operating model & continuity"],
  },
  {
    title: "Infrastructure & Cloud",
    summary: "Hybrid and multi cloud engineering built for resilience.",
    items: ["Cloud architecture", "Azure · AWS · Google Cloud", "Data center modernization", "Kubernetes · VMware", "High availability · DR · DevSecOps"],
  },
  {
    title: "Cybersecurity & GRC",
    summary: "Zero Trust architecture, identity, and audit ready compliance.",
    items: ["Zero Trust architecture", "IAM · PAM · IGA · PKI", "SSO · MFA · passwordless", "SOC · MDR · incident response", "NIST · ISO 27001 · PCI DSS"],
  },
  {
    title: "Managed Services",
    summary: "NOC and SOC operations under SLAs scoped per engagement.",
    items: ["Managed infrastructure", "Managed security & cloud", "SOC as a service", "NOC · service desk", "Monitoring · backup · DR"],
  },
];

const platforms = [
  "Core banking",
  "Digital identity",
  "Fraud detection",
  "Sovereign & private cloud",
  "Private AI & governance",
  "Agentic automation",
];

const Capabilities = () => (
  <Chapter
    id="capabilities"
    index={1}
    eyebrow="Capabilities"
    title="Four practices. One accountable partner."
    lede="Advisory, infrastructure, security, and managed operations from one engineering team, under one SLA."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4" style={{ borderTop: RULE }}>
      {practices.map((p) => (
        <article
          key={p.title}
          className="flex flex-col"
          style={{ borderBottom: RULE, padding: "18px 0", paddingInlineEnd: 24 }}
        >
          <h3 className="font-display font-[600]" style={{ fontSize: 17, color: INK, letterSpacing: "-0.01em" }}>
            {p.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.55, marginTop: 6, marginBottom: 12 }}>
            {p.summary}
          </p>
          <ul className="flex flex-col gap-1 mt-auto">
            {p.items.map((it) => (
              <li key={it} className="font-mono" style={{ fontSize: 11, letterSpacing: "0.04em", color: "#F0F1F3", opacity: 0.85 }}>
                {it}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>

    <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-10">
      <p
        className="font-mono uppercase lg:col-span-3"
        style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, marginBottom: 8 }}
      >
        Platforms
      </p>
      <ul className="lg:col-span-9 flex flex-wrap gap-x-6 gap-y-1">
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
