import {
  Users, Compass, Server, ShieldCheck, Activity, Cpu, Fingerprint, CircuitBoard,
  type LucideIcon,
} from "lucide-react";

export type ServiceBlock = { title: string; line: string; id?: string };

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
      "Silxor coordinates product delivery for founders and companies moving from concept to production. An engagement can cover architecture, product management, design, engineering and testing, with responsibilities and staffing agreed in the proposal.",
    blocks: [
      { title: "Senior Software Architect", line: "Secure, scalable architecture designed with operating cost under control." },
      { title: "Product Manager", line: "Business goals turned into requirements, roadmap, priorities, and buildable specifications." },
      { title: "Product & UX Designer", line: "The full experience and interface designed around your customer and product goals." },
      { title: "Software Engineers", line: "The product built end to end, from first release to production scale." },
      { title: "QA & Testing", line: "Testing of agreed user flows, devices, integrations and release criteria." },
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
    name: "IT Strategy & Advisory",
    navLabel: "IT Strategy & Advisory",
    icon: Compass,
    outcome: "Decisions on architecture, platforms, and risk made with senior engineering judgment.",
    seoTitle: "Advisory & Strategy | Silxor",
    seoDescription:
      "Architecture and cloud strategy, digital transformation, technical assessments, modernization roadmaps, governance, and vendor selection from senior Silxor engineers.",
    heroLead: "Strategy written by the people who will build it.",
    intro:
      "We help enterprise and corporate leadership teams plan their entire IT estate, from business strategy and governance to infrastructure, networking, end user services, security and applications. Every recommendation is grounded in what we can design, build, migrate and operate.",
    blocks: [
      { title: "Architecture Strategy", line: "Target state architecture aligned to business goals and constraints." },
      { title: "Cloud Strategy", line: "Public, private, hybrid, and sovereign positioning with cost modeling." },
      { title: "Technical Assessments", line: "Independent review of current systems, risk, and readiness." },
      { title: "Modernization Roadmaps", line: "Phased plans that sequence value, risk, and downtime." },
      { title: "Enterprise IT Planning", line: "Operating models, end user technology, networking and data center roadmaps aligned to business needs." },
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
    name: "Infrastructure, Networking & Cloud",
    navLabel: "Infrastructure & Networking",
    icon: Server,
    outcome: "Resilient sovereign, private, and hybrid platforms engineered to stay up.",
    seoTitle: "Infrastructure & Cloud | Silxor",
    seoDescription:
      "Sovereign cloud, private cloud, hybrid infrastructure, hosting, migration, platform engineering, resilience, disaster recovery, and observability by Silxor.",
    heroLead: "Infrastructure built for workloads that cannot fail.",
    intro:
      "We design, build, migrate and operate on premises, hybrid and cloud environments for enterprise and corporate clients. Data center, compute, storage, networking, virtualization and cloud platforms are designed as one coherent estate, with security and recovery considered from the start.",
    blocks: [
      { title: "Sovereign & Private Cloud", line: "Deployments where data location and control are contractual requirements." },
      { title: "Hybrid Infrastructure", line: "On premises and cloud estates operated as one platform." },
      { title: "Enterprise Networking", line: "LAN, WAN, wireless, routing, switching and secure connectivity across offices, data centers and cloud environments." },
      { title: "Data Center Engineering", line: "Compute, storage, virtualization and capacity planning for on premises and hybrid workloads." },
      { title: "Solution Design & Build", line: "Requirements, detailed design, implementation and validation across on premises, hybrid and cloud estates." },
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
    name: "Cybersecurity",
    navLabel: "Cybersecurity",
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
      { title: "SOC & Security Monitoring", line: "Detection engineering, log integration, alert triage and security operations tailored to your environment." },
      { title: "Vulnerability Management", line: "Asset discovery, vulnerability assessment, prioritization, remediation tracking and validation." },
      { title: "Penetration Testing", line: "Authorized testing of networks, applications and APIs against an agreed scope, with findings and remediation guidance." },
      { title: "Incident Response", line: "Preparation, investigation, containment and recovery with defined escalation paths and engagement scope." },
    ],
    capabilities: [
      "Zero Trust", "NIST CSF", "ISO 27001 Control Families", "PCI DSS Readiness",
      "Incident Response", "Cloud Security Posture", "SOC & Monitoring", "Vulnerability Management", "Penetration Testing",
    ],
  },
  {
    slug: "managed-services",
    path: "/services/managed-services",
    name: "Managed IT & End User Services",
    navLabel: "Managed IT & End User",
    icon: Activity,
    outcome: "Senior ownership of your platform after go live, under agreed SLA tiers.",
    seoTitle: "Managed Services | Silxor",
    seoDescription:
      "Silxor operates, monitors, maintains, patches, secures, and improves the platforms we deliver, with senior ongoing ownership under scoped SLA tiers.",
    heroLead: "Delivery does not end at go live.",
    intro:
      "We operate and support enterprise IT across end user devices, workplace platforms, networks, data centers, cloud and applications. Monitoring, service management, patching and lifecycle planning sit under one accountable team. Coverage, response targets and escalation paths are agreed per engagement.",
    blocks: [
      { title: "Operate & Monitor", line: "Continuous monitoring with defined alerting and escalation." },
      { title: "Maintain & Patch", line: "Scheduled patching and lifecycle management with change control." },
      { title: "End User Computing", line: "Device provisioning, endpoint management, workplace applications and employee technology support." },
      { title: "IT Service Management", line: "Service desk workflows, incident and request handling, asset records and change governance." },
      { title: "Support", line: "Named senior engineers, severity levels, and agreed response targets." },
      { title: "Optimize", line: "Performance and cost tuning reviewed on a recurring cadence." },
      { title: "Secure", line: "Ongoing hardening, vulnerability handling, and control validation." },
      { title: "Improve", line: "A backlog of platform improvements owned with you, not handed off." },
    ],
    capabilities: [
      "Managed Cloud", "Managed Security", "Observability", "Backup & Recovery",
      "SLA Tiers", "Change Management", "End User Computing", "Service Desk", "Microsoft 365", "Endpoint Management",
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
    name: "Identity & Access Management",
    navLabel: "Identity & Access Management",
    icon: Fingerprint,
    outcome: "Govern human, customer, privileged and machine identities across your enterprise.",
    seoTitle: "Identity & Access Management | Silxor",
    seoDescription:
      "IAM, Entra ID, authentication and authorization, PAM and PIM, IGA, SSO, MFA and passwordless, Zero Trust identity, and identity architecture and governance.",
    heroLead: "Every identity. Every access path. One coherent control model.",
    intro:
      "We design, implement, migrate and operate identity services across workforce, customer, privileged and machine access. Identity architecture, lifecycle governance, directories, federation and strong authentication span on premises, hybrid and cloud environments.",
    blocks: [
      { id: "iam", title: "IAM / Workforce Identity", line: "Workforce IAM architecture, provisioning, authentication and authorization for employees and contractors. Directory services, role and attribute based access, and lifecycle automation aligned to least privilege." },
      { id: "ciam", title: "CIAM / Customer Identity", line: "Customer registration, sign in, account recovery, consent and secure access for web, mobile and API experiences. Customer identity journeys designed for usability and controlled data handling." },
      { id: "pam", title: "PAM / Privileged Access Management", line: "Privileged credential vaulting, session controls, credential rotation and administrative access for teams, vendors and emergency access paths." },
      { id: "pim", title: "PIM / Privileged Identity Management", line: "Time limited role activation, approvals, eligibility reviews and audit trails for privileged identities, reducing persistent administrative access." },
      { id: "nhi", title: "NHI / Non Human Identity", line: "Inventory, ownership and lifecycle controls for service accounts, machine identities, workloads, secrets and certificates. Credential rotation and workload authentication across applications and infrastructure." },
      { id: "iga", title: "IGA / Identity Governance & Administration", line: "Joiner, mover and leaver processes, access requests, access reviews, separation of duties and entitlement governance with evidence for audit teams." },
      { id: "federation", title: "SSO & Federation", line: "Single sign on and federation using SAML, OIDC and OAuth 2.0, with application integration and trust configuration across the enterprise." },
      { id: "authentication", title: "MFA & Passwordless", line: "Multifactor authentication, passwordless and FIDO2 deployment, enrollment, recovery and conditional access designed around user needs and risk." },
      { id: "directories", title: "Zero Trust & Directory Services", line: "Identity driven Zero Trust, continuous verification, directory consolidation and integration across on premises and cloud identity estates." },
    ],
    capabilities: [
      "Workforce IAM", "CIAM", "PAM", "PIM", "NHI", "IGA", "SSO", "SAML", "OIDC", "OAuth 2.0",
      "MFA", "Passwordless / FIDO2", "Zero Trust", "Directory Services", "Entra ID",
    ],
  },
  {
    slug: "software-engineering",
    path: "/services/software-engineering",
    name: "Custom Software Engineering",
    navLabel: "Software & Integrations",
    icon: Cpu,
    outcome: "Custom applications, platforms and integrations built around your business.",
    seoTitle: "Custom Software Engineering | Silxor",
    seoDescription: "Custom enterprise web and mobile software, platforms, APIs, integrations and private AI engineering from Silxor.",
    heroLead: "Software designed for the way your business works.",
    intro: "We design, build, integrate and operate custom software for enterprise and corporate clients. Architecture, user experience, engineering, quality assurance and delivery cover web, mobile, internal platforms, APIs and private AI integrations.",
    blocks: [
      { title: "Web Applications", line: "Business applications and customer experiences with secure architecture and accessible interfaces." },
      { title: "Mobile Applications", line: "Mobile products and enterprise workflows with device aware design, integration and testing." },
      { title: "Enterprise Platforms", line: "Internal tools and custom platforms aligned to operating processes, identity and governance." },
      { title: "APIs & Integrations", line: "API design, system integration and controlled data exchange across enterprise applications." },
      { title: "Private AI Integration", line: "AI enabled workflows and application capabilities on dedicated infrastructure with access and audit controls." },
      { title: "Testing & Operations", line: "Automated testing, reviewed releases, observability and ongoing application maintenance." },
    ],
    capabilities: ["Web", "Mobile", "Platforms", "APIs", "System Integrations", "Private AI", "Automated Testing", "Application Operations"],
  },
  {
    slug: "hardware-engineering",
    path: "/services/hardware-engineering",
    name: "Custom Hardware, Embedded & IoT",
    navLabel: "Hardware, Embedded & IoT",
    icon: CircuitBoard,
    outcome: "Connected hardware and embedded systems engineered alongside your software.",
    seoTitle: "Custom Hardware, Embedded & IoT Engineering | Silxor",
    seoDescription: "Custom hardware design, embedded systems, firmware and IoT engineering with enterprise integration and device lifecycle planning from Silxor.",
    heroLead: "Engineering beyond the screen.",
    intro: "We scope, design and build custom hardware, embedded systems and IoT solutions with the software and infrastructure they depend on. Electronics, firmware, connectivity and enterprise integration are considered together from prototype through deployment and operations.",
    blocks: [
      { title: "Hardware Design", line: "Requirements, component selection and electronics design matched to the intended environment and use." },
      { title: "Embedded Systems", line: "Firmware and device software for reliable operation, interfaces and lifecycle management." },
      { title: "Prototyping & Validation", line: "Iterative prototypes, integration testing and validation against agreed engineering requirements." },
      { title: "IoT Connectivity", line: "Device connectivity, gateways, telemetry and secure data exchange with enterprise systems." },
      { title: "Device Security", line: "Device identity, secure provisioning, credential handling and controlled firmware updates." },
      { title: "Integration & Operations", line: "APIs, monitoring and device management connected to on premises, hybrid or cloud environments." },
    ],
    capabilities: ["Custom Hardware", "Embedded Systems", "Firmware", "IoT", "Prototyping", "Device Identity", "Enterprise Integration", "Device Management"],
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);


export const servicePillars = [
  "advisory", "cloud", "managed-services", "cybersecurity", "identity", "software-engineering", "hardware-engineering",
].map(slug => services.find(service => service.slug === slug)).filter((service): service is Service => Boolean(service));
