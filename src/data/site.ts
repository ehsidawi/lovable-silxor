export const SITE = "https://silxor.com";
export const business = { name: "Silxor Group Holding", email: "hello@silxor.com", telephone: "+1 979 500 3390", url: `${SITE}/`, sameAs: ["https://www.linkedin.com/company/silxorllc/"] };
export type Question = { q: string; a: string };
export const faqs: Question[] = [
  { q: "What does Silxor help with?", a: "Silxor helps organizations plan, build, secure and operate enterprise technology. Scope can include IT strategy, infrastructure, networking, managed IT, cybersecurity, identity, custom software, private AI and hardware engineering." },
  { q: "How do we start?", a: "Use Book a Consultation to share your service interests, company context and contact preferences. We review your request and reply by email. Meeting details and next steps are confirmed separately." },
  { q: "Can you work with our existing IT team?", a: "Yes. An engagement can complement your team through a scoped project, staff augmentation, advisory retainer or managed service. Responsibilities and access are agreed in writing." },
  { q: "Where is project data hosted?", a: "Data location, access and hosting requirements are defined during review and recorded in the agreement. On premises, hybrid and private environments can be included in scope. Private AI is designed to keep sensitive data away from third party model providers." },
  { q: "Do you provide certified compliance?", a: "We help map controls and prepare evidence against agreed frameworks. Framework references describe capabilities, not a claim of certification or an audit opinion. Required attestations and certification status must be confirmed during contracting." },
  { q: "What service levels are available?", a: "Coverage hours, severity levels, response targets, backup frequency and recovery objectives depend on the agreed environment and service scope. Only the signed agreement establishes service commitments." },
  { q: "Who owns the deliverables?", a: "Ownership, licensing, source code access and handover requirements are specified in the agreement. Raise these requirements during review so the proposal addresses them." },
  { q: "Can you share client references?", a: "Public content does not identify clients without permission. Ask about evaluation materials during review; availability and disclosure depend on client consent and confidentiality obligations." },
];
export const engagements = [
  { id: "review", title: "Review", body: "Understand the current environment, goals and risks before selecting a solution.", details: "Agree the review boundary, gather relevant information and discuss priorities. The next engagement and any deliverables are scoped together." },
  { id: "project", title: "Project delivery", body: "A defined outcome with an agreed scope, milestones and acceptance criteria.", details: "Specify dependencies, responsibilities, testing, change control and handover in a statement of work. Review progress at agreed milestones." },
  { id: "augmentation", title: "Staff augmentation", body: "Add specific expertise to your existing team for an agreed period.", details: "Agree the skills needed, reporting line, access, capacity and working cadence. Your team retains its defined decision and delivery responsibilities." },
  { id: "managed", title: "Managed service", body: "Ongoing operation and support for a clearly defined environment.", details: "Document the service boundary, coverage, escalation paths, maintenance windows, reporting and recovery requirements before transition." },
  { id: "retainer", title: "Advisory retainer", body: "Recurring access to technology guidance and reviews.", details: "Agree the advisory areas, availability, review cadence and outputs. Delivery and operational work are scoped separately when needed." },
];
export const methodology = [
  { id: "discover", title: "Discover", body: "Understand goals, people, systems and constraints.", details: "Review the current estate and identify dependencies, data handling needs and risks. Agree the problem to solve and how progress will be measured." },
  { id: "design", title: "Design", body: "Turn requirements into a reviewed plan.", details: "Document architecture, responsibilities, security controls, acceptance criteria and migration or release plans. Record key tradeoffs before implementation." },
  { id: "build", title: "Build and validate", body: "Implement in reviewable increments.", details: "Use code and configuration reviews, testing and demonstrations appropriate to the work. Track changes, risks and open decisions with your team." },
  { id: "release", title: "Release and hand over", body: "Move into use with an agreed transition plan.", details: "Validate readiness, recovery steps and access controls. Deliver the agreed documentation, training and ownership handover." },
  { id: "operate", title: "Operate and improve", body: "Keep the environment maintained and review what comes next.", details: "Where included in scope, monitor services, manage changes and review incidents and improvements against agreed service levels." },
];
export const resourceLinks = [
  { label: "Engagement models", to: "/engagement" }, { label: "Our process", to: "/process" }, { label: "FAQ", to: "/faq" }, { label: "Careers", to: "/careers" }, { label: "Privacy Policy", to: "/privacy" }, { label: "Terms of Use", to: "/terms" }, { label: "Cookie notice", to: "/cookies" }, { label: "Security & Disclosure", to: "/security" },
];
export function serviceFaqs(service: { name: string; intro: string; capabilities: string[] }): Question[] {
  return [
    { q: `What is ${service.name.toLowerCase()} and how does Silxor help?`, a: service.intro },
    { q: "What can an engagement include?", a: `Depending on your requirements, the scope can include ${service.capabilities.join(", ")}. Deliverables, responsibilities and acceptance criteria are agreed before work begins.` },
    { q: "How do we discuss requirements?", a: "Use Book a Consultation to submit your requirements and contact preferences. Do not include passwords, private keys or sensitive production data. We reply by email and agree the next steps." },
  ];
}
