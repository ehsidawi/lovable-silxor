import { engagementTypes } from "../../supabase/functions/submit-consultation/options.ts";

/** The four equal practices. Each one owns services, concrete examples and a preselected inquiry. */
export type PracticeId = "information-technology" | "cybersecurity" | "information-security" | "recruitment";
export type Practice = {
  id: PracticeId;
  code: string;
  name: string;
  short: string;
  summary: string;
  explanation: string;
  examples: string[];
  services: string[];
  path: string;
  engagement: (typeof engagementTypes)[number];
  inquiryLabel: string;
};

export const practices: Practice[] = [
  {
    id: "information-technology", code: "01", name: "Information Technology", short: "IT",
    summary: "Plan, build and run the systems your organization depends on.",
    explanation: "Strategy, infrastructure, cloud, software, hardware and day to day operations, delivered by people who also answer for how they run afterwards.",
    examples: ["A hybrid cloud migration with a tested rollback plan", "Managed operations for servers, networks and end user devices", "Custom software or integrations between existing platforms", "A technology roadmap for the leadership team"],
    services: ["advisory", "cloud", "managed-services", "software-engineering", "hardware-engineering", "private-ai", "product-team"],
    path: "/services#information-technology", engagement: "Technology Consulting", inquiryLabel: "Information technology",
  },
  {
    id: "cybersecurity", code: "02", name: "Cybersecurity", short: "Cyber defense",
    summary: "Defend systems against attack and be ready when an incident happens.",
    explanation: "Operational defense: hardening, identity controls, monitoring and detection, testing, and a rehearsed plan for containing and recovering from an incident.",
    examples: ["An incident response plan and a tabletop exercise with your team", "Detection and alert triage connected to your existing logs", "Authorized penetration testing of an application or network", "Hardening baselines and privileged access controls"],
    services: ["cybersecurity", "identity"],
    path: "/services/cybersecurity", engagement: "Technology Consulting", inquiryLabel: "Cybersecurity defense and incident readiness",
  },
  {
    id: "information-security", code: "03", name: "Information Security", short: "InfoSec",
    summary: "Govern information: risk, data handling and policy.",
    explanation: "The governance side of protection: what information you hold, how it is classified and handled, which risks are accepted, and the policies and evidence that show it.",
    examples: ["A risk register with named owners and treatment decisions", "A data classification scheme and handling rules", "Plain language security and retention policies", "Control mapping and evidence ahead of an external audit"],
    services: ["information-security"],
    path: "/services/information-security", engagement: "Technology Consulting", inquiryLabel: "Information security governance, risk and data handling",
  },
  {
    id: "recruitment", code: "04", name: "Recruitment", short: "Hiring",
    summary: "Hire the leaders and specialists who run and protect your technology.",
    explanation: "For employers: executive search, senior and specialist recruitment, and contract staffing, with candidates assessed by people who understand the role.",
    examples: ["Confidential search for a CIO, CTO or CISO", "A senior cloud or identity specialist for a permanent role", "Contract engineers for a defined program", "A complete team assembled around a new platform"],
    services: ["talent-acquisition"],
    path: "/services/talent-acquisition", engagement: "Talent Acquisition", inquiryLabel: "Recruitment, hiring for your organization",
  },
];

export const getPractice = (id?: string | null) => practices.find(p => p.id === id);
export const practiceForService = (slug: string) => practices.find(p => p.services.includes(slug));
/** Booking link that preselects the practice and, when given, one specific service. */
export const inquiryHref = (id: PracticeId, service?: string) => `/book?practice=${id}${service ? `&service=${service}` : ""}`;
/** Initial form selections for a practice inquiry. Unknown values fall back to an empty form. */
export const inquiryPreset = (practiceId?: string | null, service?: string | null) => {
  const practice = getPractice(practiceId);
  if (!practice) return null;
  const chosen = service && practice.services.includes(service) ? service : practice.services[0];
  return { practice, engagement_type: practice.engagement, service_areas: [chosen] };
};
