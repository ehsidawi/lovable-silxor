import {
  Users, Compass, Server, ShieldCheck, Activity, Cpu, Fingerprint,
  type LucideIcon,
} from "lucide-react";

export type ServiceBlock = { title: string; line: string };

export type Service = {
  slug: string;
  path: string;
  name: string;
  navLabel: string;
  icon: LucideIcon;
  outcome: string;
  seoTitle: string;
  seoDescription: string;
  heroLead: string;
  intro: string;
  blocks: ServiceBlock[];
  capabilities: string[];
  flagship?: boolean;
};

export const services: Service[] = [
  {
    slug: "product-team",
    path: "/services/product-team",
    name: "Full Product Team as a Service",
    navLabel: "Full Product Team",
    icon: Users,
    outcome: "A complete senior product team behind your idea, not just developers.",
    seoTitle: "Full Product Team as a Service | Silxor",
    seoDescription:
      "Silxor gives non technical founders and companies a complete senior product team: architecture, product management, design, engineering, QA, and delivery leadership.",
    heroLead: "You do not just need engineers. You need a product team.",
    intro:
      "Silxor becomes the senior product organization behind founders and companies who need to move from concept to production and scale. One accountable partner covers architecture, product, design, engineering, and testing, so you never have to find, vet, hire, and manage separate specialists.",
    blocks: [
      { title: "Senior Software Architect", line: "Secure, scalable architecture designed with operating cost under control." },
      { title: "Product Manager", line: "Business goals turned into requirements, roadmap, priorities, and buildable specifications." },
      { title: "Product & UX Designer", line: "The full experience and interface designed around your customer and product goals." },
      { title: "Software Engineers", line: "The product built end to end, from first release to production scale." },
      { title: "QA & Testing", line: "Every flow, device, edge case, and release tested before customers meet a problem." },
      { title: "Delivery Leadership", line: "We coordinate the entire team so you keep one point of accountability." },
    ],
    capabilities: [
      "Concept to Production", "MVP to Scale", "Product Roadmap", "Design Systems",
      "Web & Mobile", "APIs & Integrations", "Automated Testing", "Release Management",
    ],
    flagship: true,
  },
  {
    slug: "advisory",
    path: "/services/advisory",
    name: "Advisory & Strategy",
    navLabel: "Advisory & Strategy",
    icon: Compass,
    outcome: "Decisions on architecture, platforms, and risk made with senior engineering judgment.",
    seoTitle: "Advisory & Strategy | Silxor",
    seoDescription:
      "Architecture and cloud strategy, digital transformation, technical assessments, modernization roadmaps, governance, and vendor selection from senior Silxor engineers.",
    heroLead: "Strategy written by the people who will build it.",
    intro:
      "We help leadership teams choose the right architecture, platforms, and sequence of work before budget is committed. Every recommendation is grounded in what we can build and operate, not vendor marketing.",
    blocks: [
      { title: "Architecture Strategy", line: "Target state architecture aligned to business goals and constraints." },
      { title: "Cloud Strategy", line: "Public, private, hybrid, and sovereign positioning with cost modeling." },
      { title: "Technical Assessments", line: "Independent review of current systems, risk, and readiness." },
      { title: "Modernization Roadmaps", line: "Phased plans that sequence value, risk, and downtime." },
      { title: "Governance", line: "Standards, review gates, and decision records that outlast the project." },
      { title: "Vendor & Platform Selection", line: "Objective evaluation, scoring, and negotiation support." },
    ],
    capabilities: [
      "Digital Transformation", "Enterprise Architecture", "AI Strategy",
      "CIO / CISO Advisory", "Cost & Risk Planning", "Due Diligence",
    ],
  },
  {
    slug: "cloud",
    path: "/services/cloud",
    name: "Infrastructure & Cloud",
    navLabel: "Infrastructure & Cloud",
    icon: Server,
    outcome: "Resilient sovereign, private, and hybrid platforms engineered to stay up.",
    seoTitle: "Infrastructure & Cloud | Silxor",
    seoDescription:
      "Sovereign cloud, private cloud, hybrid infrastructure, hosting, migration, platform engineering, resilience, disaster recovery, and observability by Silxor.",
    heroLead: "Infrastructure built for workloads that cannot fail.",
    intro:
      "We design, migrate, and operate infrastructure for regulated and high availability workloads, from sovereign and private deployments to hybrid and multi cloud estates.",
    blocks: [
      { title: "Sovereign & Private Cloud", line: "Deployments where data location and control are contractual requirements." },
      { title: "Hybrid Infrastructure", line: "On premises and cloud estates operated as one platform." },
      { title: "Migration", line: "Phased moves of regulated workloads with minimal downtime." },
      { title: "Platform Engineering", line: "Kubernetes, automation, and internal platforms teams can self serve." },
      { title: "Resilience & DR", line: "High availability design, failover testing, and recovery objectives." },
      { title: "Observability", line: "Metrics, logs, and tracing that make incidents short." },
    ],
    capabilities: [
      "Azure · AWS · GCP", "Kubernetes · VMware", "Data Center", "Networking",
      "Backup & Recovery", "Infrastructure as Code", "Secure Architecture",
    ],
  },
  {
    slug: "cybersecurity",
    path: "/services/cybersecurity",
    name: "Cybersecurity & GRC",
    navLabel: "Cybersecurity & GRC",
    icon: ShieldCheck,
    outcome: "Security architecture and evidence that hold up to auditors and attackers.",
    seoTitle: "Cybersecurity & GRC | Silxor",
    seoDescription:
      "Security architecture, assessments, Zero Trust, governance risk and compliance, hardening, security operations strategy, and compliance readiness from Silxor.",
    heroLead: "Security designed in, not bolted on.",
    intro:
      "We build security architecture around identity, segmentation, and evidence, then align the program to the control frameworks your regulators and customers expect.",
    blocks: [
      { title: "Security Architecture", line: "Controls designed into the platform from the first diagram." },
      { title: "Security Assessments", line: "Gap analysis against your threat model and control baseline." },
      { title: "Zero Trust", line: "Identity centric access, segmentation, and continuous verification." },
      { title: "Governance, Risk & Compliance", line: "Policy, risk register, and control ownership that stay current." },
      { title: "Hardening", line: "Baselines for endpoints, servers, cloud, and pipelines." },
      { title: "Security Operations Strategy", line: "Detection, escalation, and response models scoped to your team." },
    ],
    capabilities: [
      "Zero Trust", "NIST CSF", "ISO 27001 Control Families", "PCI DSS Readiness",
      "Incident Response Planning", "Cloud Security Posture",
    ],
  },
  {
    slug: "managed-services",
    path: "/services/managed-services",
    name: "Managed Services",
    navLabel: "Managed Services",
    icon: Activity,
    outcome: "Senior ownership of your platform after go live, under agreed SLA tiers.",
    seoTitle: "Managed Services | Silxor",
    seoDescription:
      "Silxor operates, monitors, maintains, patches, secures, and improves the platforms we deliver, with senior ongoing ownership under scoped SLA tiers.",
    heroLead: "Delivery does not end at go live.",
    intro:
      "We keep the platform running, patched, monitored, and improving. Response targets, reporting, and escalation paths are defined per engagement rather than sold as a fixed package.",
    blocks: [
      { title: "Operate & Monitor", line: "Continuous monitoring with defined alerting and escalation." },
      { title: "Maintain & Patch", line: "Scheduled patching and lifecycle management with change control." },
      { title: "Support", line: "Named senior engineers, severity levels, and agreed response targets." },
      { title: "Optimize", line: "Performance and cost tuning reviewed on a recurring cadence." },
      { title: "Secure", line: "Ongoing hardening, vulnerability handling, and control validation." },
      { title: "Improve", line: "A backlog of platform improvements owned with you, not handed off." },
    ],
    capabilities: [
      "Managed Cloud", "Managed Security", "Observability", "Backup & Recovery",
      "SLA Tiers", "Change Management",
    ],
  },
  {
    slug: "private-ai",
    path: "/services/private-ai",
    name: "Private AI & AI Platforms",
    navLabel: "Private AI",
    icon: Cpu,
    outcome: "AI capability inside your own environment, with your data staying there.",
    seoTitle: "Private AI & AI Platforms | Silxor",
    seoDescription:
      "Private and local AI, enterprise AI platforms, AI infrastructure, secure model hosting, integrations, and agent systems deployed with a data privacy first approach.",
    heroLead: "AI you own, on infrastructure you control.",
    intro:
      "We build AI platforms that run on client dedicated infrastructure, so sensitive data is not sent to third party model providers. Governance, access, and auditability are part of the design.",
    blocks: [
      { title: "Private & Local AI", line: "Models hosted inside your environment or dedicated infrastructure." },
      { title: "Enterprise AI Platforms", line: "Shared internal platforms with access control and usage governance." },
      { title: "AI Infrastructure", line: "GPU, storage, and networking sized for training and inference." },
      { title: "Secure Model Hosting", line: "Isolation, secrets handling, and logging built into the serving layer." },
      { title: "AI Integrations", line: "Retrieval, workflow, and system integrations against your real data." },
      { title: "Agent Systems", line: "Task automation with human review points and audit trails." },
    ],
    capabilities: [
      "Data Privacy First", "Retrieval Augmented Generation", "Model Governance",
      "Air Gapped Options", "Evaluation & Guardrails", "GPU Infrastructure",
    ],
  },
  {
    slug: "identity",
    path: "/services/identity",
    name: "Identity & Access",
    navLabel: "Identity & Access",
    icon: Fingerprint,
    outcome: "One identity fabric governing who reaches what, everywhere.",
    seoTitle: "Identity & Access Management | Silxor",
    seoDescription:
      "IAM, Entra ID, authentication and authorization, PAM and PIM, IGA, SSO, MFA and passwordless, Zero Trust identity, and identity architecture and governance.",
    heroLead: "Identity is the perimeter.",
    intro:
      "We design and implement the identity layer that every other control depends on, covering workforce, customer, and privileged access across cloud and on premises systems.",
    blocks: [
      { title: "Identity Architecture", line: "A single, documented model for identities, roles, and trust." },
      { title: "Authentication", line: "SSO, MFA, and passwordless rollouts with low user friction." },
      { title: "Authorization", line: "Role and attribute based access aligned to least privilege." },
      { title: "Privileged Access", line: "PAM and PIM for administrators, vendors, and break glass paths." },
      { title: "Identity Governance", line: "IGA with joiner, mover, leaver flows and access certification." },
      { title: "Zero Trust Identity", line: "Conditional access and continuous verification across the estate." },
    ],
    capabilities: [
      "Entra ID", "SSO · SAML · OIDC", "MFA & Passwordless", "PAM · PIM",
      "IGA & Access Reviews", "Directory Consolidation",
    ],
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);
