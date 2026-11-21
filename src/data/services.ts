import {
  Users, UserSearch, Compass, Server, ShieldCheck, Activity, Cpu, Fingerprint, CircuitBoard, ScrollText,
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
    outcome: "A senior product team accountable for the outcome, from architecture to release.",
    seoTitle: "Full Product Team as a Service | Silxor",
    seoDescription:
      "Silxor gives non technical founders and companies a complete senior product team: architecture, product management, design, engineering, QA, and delivery leadership.",
    heroLead: "Product delivery led by senior practitioners.",
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
    outcome: "Board and executive counsel connecting technology decisions, talent strategy and business priorities.",
    seoTitle: "Advisory & Strategy | Silxor",
    seoDescription:
      "C-level and board advisory across technology and talent strategy, leadership structure, investment, risk, architecture and modernization from Silxor.",
    heroLead: "Independent counsel, grounded in delivery.",
    intro:
      "We advise boards, CEOs, CIOs, CTOs, CISOs, CDOs and senior leadership on technology decisions and talent strategy together. Counsel can cover investment priorities, risk, operating models, leadership structure, succession and strategic hiring, alongside architecture and modernization. Recommendations connect the systems you need with the people accountable for running them. Scope, decision responsibilities and confidentiality are agreed per engagement.",
    blocks: [
      { id: "executive-advisory", title: "C-Level & Board Advisory", line: "Independent strategic counsel for boards, CEOs and senior leadership on technology investment, risk, governance and organizational capability." },
      { id: "talent-strategy", title: "Technology & Talent Strategy", line: "Align technology roadmaps with leadership structure, workforce capability, succession priorities and strategic hires. Advisory and recruitment can be scoped together or separately." },
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
      "Board & CEO Counsel", "CIO / CTO / CISO / CDO Advisory", "Talent Strategy", "Leadership Succession", "Cost & Risk Planning", "Due Diligence",
    ],
  },
  {
    slug: "cloud",
    path: "/services/cloud",
    name: "Infrastructure, Networking & Cloud",
    navLabel: "Infrastructure & Networking",
    icon: Server,
    outcome: "Sovereign, private and hybrid platforms designed for continuity.",
    seoTitle: "Infrastructure & Cloud | Silxor",
    seoDescription:
      "Sovereign cloud, private cloud, hybrid infrastructure, hosting, migration, platform engineering, resilience, disaster recovery, and observability by Silxor.",
    heroLead: "Infrastructure for workloads where availability is not optional.",
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
    outcome: "Operational defense: detecting, containing and recovering from attacks, and being ready before one happens.",
    seoTitle: "Cybersecurity Defense & Incident Readiness | Silxor",
    seoDescription:
      "Operational cyber defense from Silxor: security architecture, hardening, monitoring and detection, vulnerability management, penetration testing and incident response readiness.",
    heroLead: "Defend the estate. Be ready for the incident.",
    intro:
      "Cybersecurity is the operational side of protection: the controls, monitoring and response that stand between your systems and an attacker. We design defenses around identity and segmentation, test them, watch them and prepare your team to act when something goes wrong. Policy, risk and data handling sit with our Information Security practice.",
    blocks: [
      { title: "Security Architecture", line: "Controls designed into the platform from the first diagram." },
      { title: "Security Assessments", line: "Gap analysis against your threat model and control baseline." },
      { title: "Zero Trust", line: "Identity centric access, segmentation, and continuous verification." },
      { title: "Hardening", line: "Baselines for endpoints, servers, cloud, and pipelines." },
      { title: "SOC & Security Monitoring", line: "Detection engineering, log integration, alert triage and security operations tailored to your environment." },
      { title: "Vulnerability Management", line: "Asset discovery, vulnerability assessment, prioritization, remediation tracking and validation." },
      { title: "Penetration Testing", line: "Authorized testing of networks, applications and APIs against an agreed scope, with findings and remediation guidance." },
      { title: "Incident Response", line: "Preparation, investigation, containment and recovery with defined escalation paths and engagement scope." },
    ],
    capabilities: [
      "Zero Trust", "Incident Response", "Tabletop Exercises", "Cloud Security Posture", "Hardening Baselines", "SOC & Monitoring", "Vulnerability Management", "Penetration Testing",
    ],
  },
  {
    slug: "information-security",
    path: "/services/information-security",
    name: "Information Security",
    navLabel: "Information Security",
    icon: ScrollText,
    outcome: "Information governance: knowing what data you hold, who may use it, what the risks are and which policies apply.",
    seoTitle: "Information Security, Governance, Risk & Data Handling | Silxor",
    seoDescription: "Information security governance from Silxor: risk assessment, policies and standards, data classification and handling, supplier risk and control mapping for audit readiness.",
    heroLead: "Govern information before you have to defend it.",
    intro: "Information Security (InfoSec) is the governance side of protection. It decides what information matters, how it is classified and handled, which risks are accepted and who owns each control. We build the policies, registers and evidence that let leadership answer those questions plainly. Monitoring, detection and incident response sit with our Cybersecurity practice.",
    blocks: [
      { id: "governance", title: "Information Security Governance", line: "Roles, ownership and decision rights for information security, from the board to system owners." },
      { id: "risk", title: "Risk Assessment & Register", line: "Identify, rate and track information risks with clear owners, treatment decisions and review dates." },
      { id: "policy", title: "Policies & Standards", line: "Acceptable use, access, retention and security policies written in plain language and kept current." },
      { id: "data-handling", title: "Data Classification & Handling", line: "Classification schemes, handling rules and retention for the information you create, store and share." },
      { id: "supplier-risk", title: "Third Party & Supplier Risk", line: "Due diligence, contract requirements and periodic review for vendors that handle your information." },
      { id: "control-mapping", title: "Control Mapping & Audit Readiness", line: "Map existing controls to agreed frameworks and prepare evidence. This describes readiness work, not certification." },
      { id: "privacy", title: "Privacy & Records Alignment", line: "Align data handling with privacy obligations and records requirements agreed with your counsel." },
      { id: "awareness", title: "Policy Awareness", line: "Briefings that explain policies and handling rules to the people expected to follow them." },
    ],
    capabilities: ["ISO 27001 Control Families", "NIST CSF Govern", "Risk Register", "Policy Lifecycle", "Data Classification", "Retention Schedules", "Supplier Risk", "Audit Evidence", "PCI DSS Readiness"],
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
    heroLead: "Accountability continues after go live.",
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
    heroLead: "A single, governed control model for every identity and access path.",
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
    heroLead: "Hardware and software engineered as one system.",
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
  {
    slug: "talent-acquisition",
    path: "/services/talent-acquisition",
    name: "Talent Acquisition",
    navLabel: "Talent Acquisition",
    icon: UserSearch,
    outcome: "Executive search, senior recruitment and technology staffing, assessed rigorously and placed internationally in confidence.",
    seoTitle: "Executive Search, Recruitment & Technology Staffing | Silxor",
    seoDescription: "International executive search, C-level and leadership hiring, senior technology recruitment and staffing for cybersecurity, cloud, identity and engineering, from Silxor.",
    heroLead: "Senior appointments, handled with discretion.",
    intro: "We recruit internationally from the boardroom to the engineering floor: C-level and executive search, senior leadership hiring, specialist technology recruitment and flexible staffing. Search, assessment and selection are led with engineering and leadership judgment, so candidates are evaluated against the systems, teams and decisions they will actually own. Role scope, process and terms are agreed per engagement.",
    blocks: [
      { id: "executive-search", title: "C-Level & Executive Search", line: "Confidential international search for CIO, CTO, CISO, CDO and other C-level positions. Mandates, leadership requirements and selection criteria are defined with your board and executive team." },
      { id: "leadership-advisory", title: "C-Level & Leadership Hiring Advisory", line: "Strategic counsel for boards, CEOs and senior leaders on talent strategy, leadership structure, role design, succession and strategic hires, aligned with technology priorities." },
      { id: "specialist-recruitment", title: "Senior & Specialist Recruitment", line: "Targeted international search for permanent leadership and specialist roles across architecture, cybersecurity, cloud, identity and engineering." },
      { id: "contract-staffing", title: "Technology & Contract Staffing", line: "Contract and project staffing for defined periods, capacity and deliverables. Reporting lines, responsibilities, location requirements and engagement terms are agreed before placement." },
      { id: "team-building", title: "Team Building", line: "Complete teams assembled around a program or platform, with roles, seniority and ramp up planned together." },
      { id: "assessment", title: "Technical & Leadership Assessment", line: "Structured evaluation by engineers and senior leaders who understand the architecture and responsibilities involved." },
      { id: "role-definition", title: "Role Definition", line: "Responsibilities, required skills, seniority and success criteria defined with your hiring team before search begins." },
      { id: "onboarding", title: "Selection & Onboarding Support", line: "Shortlists, interview coordination and handover support agreed with your team through the offer stage." },
    ],
    capabilities: ["Executive Search", "C-Level Hiring", "Leadership Advisory", "Contract Staffing", "Technology Staffing", "Technology Recruiting", "Cybersecurity Hiring", "Cloud & Platform Roles", "Identity Specialists", "Engineering Leadership", "Technical Assessment", "International Search", "Team Building"],
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);


export const servicePillars = [
  "talent-acquisition", "advisory", "cloud", "managed-services", "cybersecurity", "information-security", "identity", "software-engineering", "hardware-engineering",
].map(slug => services.find(service => service.slug === slug)).filter((service): service is Service => Boolean(service));
