import { useState } from "react";
import {
  Shield, Key, Users, GitBranch, Activity, AlertTriangle, Cpu, Database,
  Cloud, Link, Lock, Layers, Search, Map, Code, Upload, RefreshCw,
  Ambulance, Settings, FileCheck, Zap, Check, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── SUBSECTION 1: Identity Domains ── */
interface DomainCard {
  abbrev: string;
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string;
}

const domains: DomainCard[] = [
  { abbrev: "IAM", icon: Shield, title: "Identity & Access Management", body: "Authentication, authorization, and access policy at scale.", tags: "SAML • OIDC • OAuth • RBAC" },
  { abbrev: "PAM", icon: Key, title: "Privileged Access Management", body: "Vaulting, JIT access, and session recording for privileged accounts.", tags: "CyberArk • BeyondTrust • JIT" },
  { abbrev: "CIAM", icon: Users, title: "Customer Identity", body: "Citizen and customer identity with MFA and passwordless.", tags: "Auth0 • Keycloak • Okta" },
  { abbrev: "IGA", icon: GitBranch, title: "Identity Governance", body: "Automated provisioning, access certification, and role mining.", tags: "SailPoint • Saviynt • SCIM" },
  { abbrev: "ISPM", icon: Activity, title: "Identity Posture Management", body: "Continuous visibility into identity risk and posture drift.", tags: "Posture • Risk analytics" },
  { abbrev: "ITDR", icon: AlertTriangle, title: "Identity Threat Detection", body: "Real time detection of identity attacks with automated response.", tags: "UEBA • Behavioral • Automation" },
  { abbrev: "NHI", icon: Cpu, title: "Non Human Identity", body: "Secrets, service accounts, and workload identity.", tags: "SPIFFE • Vault • mTLS" },
  { abbrev: "DIR", icon: Database, title: "Directory Services", body: "Active Directory and Entra ID architecture and modernization.", tags: "AD • Entra ID • LDAP" },
  { abbrev: "CLOUD IAM", icon: Cloud, title: "Cloud & Multi Cloud IAM", body: "Federation and entitlement across AWS, Azure, and GCP.", tags: "AWS • Azure • GCP • CIEM" },
  { abbrev: "FED", icon: Link, title: "Federation & SSO", body: "Cross domain SSO and B2B identity integration.", tags: "SAML • OIDC • Azure B2B" },
  { abbrev: "PKI", icon: Lock, title: "PKI & Certificates", body: "CA design, cert automation, and mTLS for zero trust.", tags: "CA • ACME • mTLS • HSM" },
  { abbrev: "ZTI", icon: Layers, title: "Zero Trust Identity", body: "Continuous verification and least privilege everywhere.", tags: "ZTNA • Conditional Access" },
];

/* ── SUBSECTION 2: Engagement Items ── */
interface EngagementItem {
  icon: LucideIcon;
  label: string;
  detail: string;
}

const engagements: EngagementItem[] = [
  { icon: Search, label: "Assess", detail: "Audit gaps, risks, and attack surface." },
  { icon: Map, label: "Design", detail: "Zero Trust identity blueprints." },
  { icon: Code, label: "Build", detail: "Custom identity platform build and integration." },
  { icon: Upload, label: "Deploy", detail: "Zero downtime migration from legacy." },
  { icon: RefreshCw, label: "Modernize", detail: "Replace outdated IAM stacks." },
  { icon: Ambulance, label: "Recover", detail: "Emergency identity and breach recovery." },
  { icon: Settings, label: "Operate", detail: "24/7 identity operations and reviews." },
  { icon: FileCheck, label: "Comply", detail: "ISO 27001, NIST 800-63, SOC 2 evidence." },
  { icon: Zap, label: "Accelerate", detail: "MFA, SSO, PAM in days not months." },
];

/* ── SUBSECTION 3: Environment Categories ── */
const envCategories = [
  {
    header: "Deployment Models",
    items: ["On-Premise", "Cloud-Native", "Hybrid Identity", "Air-Gapped", "Sovereign Hosted"],
  },
  {
    header: "Cloud Platforms",
    items: ["Azure / Entra", "AWS", "GCP", "Multi-Cloud"],
  },
  {
    header: "Operating Systems & Infra",
    items: ["Active Directory", "Linux/Unix", "Windows Server", "Kubernetes Workloads", "CI/CD Pipelines", "Legacy Mainframe"],
  },
  {
    header: "Regulated Environments",
    items: ["OT / ICS Networks", "Government Networks", "Financial Core Systems"],
  },
];

/* ── SUBSECTION 4: Identity Packages ── */
interface IdPkg { name: string; tagline: string; specs: string[]; cta: string; mailto: string }

const identityPackages: IdPkg[] = [
  {
    name: "Identity Assessment & Roadmap",
    tagline: "2 3 week engagement",
    specs: [
      "Full identity environment discovery and mapping",
      "Risk and gap analysis across all IAM domains",
      "Attack surface assessment (PAM, orphaned accounts, shadow admins, credential exposure)",
      "Compliance alignment review (ISO 27001, NIST 800 63, FFIEC)",
      "Written Architecture Roadmap with prioritized remediation",
      "Executive and technical findings briefing",
    ],
    cta: "Book Assessment",
    mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Identity%20Assessment%20%26%20Roadmap%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20book%20an%20Identity%20Assessment%20%26%20Roadmap%20engagement.%0A%0AOrganization%3A%20%0AEnvironment%3A%20",
  },
  {
    name: "Identity Build & Deploy",
    tagline: "6 16 week delivery engagement",
    specs: [
      "Greenfield or brownfield identity architecture design",
      "Platform selection, procurement advisory, and vendor neutral engineering",
      "Full deployment: IAM, PAM, CIAM, IGA, or SSO/Federation",
      "Integration with existing applications and directories",
      "Policies, roles, and access model configuration",
      "Handover documentation and operations runbook",
    ],
    cta: "Start a Project",
    mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Identity%20Build%20%26%20Deploy%20Project&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Identity%20Build%20%26%20Deploy%20engagement.%0A%0AOrganization%3A%20%0AScope%3A%20",
  },
  {
    name: "Managed Identity Operations",
    tagline: "Ongoing retainer monthly",
    specs: [
      "24/7 identity platform monitoring and alerting",
      "Access review and certification campaign management",
      "Privilege account governance and rotation",
      "ITDR alert triage and identity incident response",
      "Monthly posture and compliance reporting",
      "Quarterly architecture review and roadmap refresh",
      "Direct access to senior identity architect",
    ],
    cta: "Become a Partner",
    mailto: "mailto:contact@silxor.com?subject=Silxor%20-%20Managed%20Identity%20Operations%20Retainer&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Managed%20Identity%20Operations%20retainer.%0A%0AOrganization%3A%20%0AEnvironment%3A%20",
  },
];

/* ── Identity Domain Map List ── */
const DomainMapList = () => {
  const coords = [
    "33.3°N · 44.4°E", "33.3°N · 44.4°E", "36.2°N · 44.0°E", "33.3°N · 44.4°E",
    "30.5°N · 47.8°E", "33.3°N · 44.4°E", "32.6°N · 44.0°E", "33.3°N · 44.4°E",
    "39.0°N · 77.5°W", "36.2°N · 44.0°E", "33.3°N · 44.4°E", "33.3°N · 44.4°E",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2px]">
      {domains.map((d, index) => {
        const Icon = d.icon;
        return (
          <div
            key={index}
            className="group relative surface-elevated"
            style={{
              borderRadius: 2,
              padding: "22px 20px",
              overflow: "hidden",
              transition: "background 0.3s ease",
            }}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Header: pin + coord */}
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: 8, height: 8, borderRadius: "50%",
                    backgroundColor: "hsl(var(--primary))",
                    boxShadow: "0 0 8px hsl(var(--primary) / 0.5)",
                  }}
                />
                <span className="font-mono font-[400] uppercase" style={{ fontSize: 9, letterSpacing: "0.15em", color: "hsl(var(--primary))" }}>
                  {d.abbrev}
                </span>
              </div>
              <span className="font-mono font-[300]" style={{ fontSize: 8, color: "hsl(var(--muted-foreground))", letterSpacing: "0.05em" }}>
                {coords[index]}
              </span>
            </div>

            {/* Icon + content */}
            <div className="relative z-10">
              <div
                className="mb-3"
                style={{
                  width: 34, height: 34, borderRadius: 4,
                  border: "1px solid hsl(var(--primary) / 0.25)",
                  backgroundColor: "hsl(var(--primary) / 0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Icon style={{ width: 15, height: 15, color: "hsl(var(--primary))" }} strokeWidth={1.5} />
              </div>

              <h4 className="font-body font-[500]" style={{ fontSize: 13, color: "hsl(var(--foreground))", marginBottom: 4 }}>
                {d.title}
              </h4>
              <p className="font-body font-[300]" style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>
                {d.body.split('—')[0].trim()}
              </p>
            </div>

            {/* Corner crosshair */}
            <div className="absolute pointer-events-none" style={{ top: 8, right: 8, width: 12, height: 12, opacity: 0.15 }}>
              <div style={{ position: "absolute", top: 5, left: 0, width: 12, height: 1, backgroundColor: "hsl(var(--primary))" }} />
              <div style={{ position: "absolute", top: 0, left: 5, width: 1, height: 12, backgroundColor: "hsl(var(--primary))" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ── Engagement Flow ── */
const EngagementFlow = () => (
  <div>
    {/* Desktop horizontal flow */}
    <div className="hidden md:block overflow-x-auto pb-4">
      <div className="flex items-start gap-0" style={{ minWidth: 'max-content' }}>
        {engagements.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-start">
              <div style={{ width: 140, flexShrink: 0 }}>
                <div className="font-mono font-[700]" style={{ fontSize: 32, color: '#F0F1F3', opacity: 0.3, lineHeight: 1, marginBottom: 8 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <Icon style={{ width: 20, height: 20, color: '#F0F1F3', marginBottom: 6 }} strokeWidth={1.5} />
                <div className="font-body font-[500]" style={{ fontSize: 14, color: '#FFFFFF', marginBottom: 2 }}>
                  {item.label}
                </div>
                <div className="font-body font-[300]" style={{ fontSize: 12, color: '#B8BCC2', lineHeight: 1.5, maxWidth: 120 }}>
                  {item.detail.split('—')[0].trim()}
                </div>
              </div>
              {i < engagements.length - 1 && (
                <div className="flex items-center self-center" style={{ padding: '0 4px', marginTop: 36 }}>
                  <ArrowRight style={{ width: 16, height: 16, color: 'rgba(240, 241, 243,0.3)' }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* Mobile vertical stack */}
    <div className="md:hidden space-y-4">
      {engagements.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex items-start gap-3">
            <div style={{ flexShrink: 0, width: 32 }}>
              <div className="font-mono font-[700]" style={{ fontSize: 20, color: '#F0F1F3', opacity: 0.3 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon style={{ width: 18, height: 18, color: '#F0F1F3', flexShrink: 0, marginTop: 2 }} strokeWidth={1.5} />
              <div>
                <div className="font-body font-[500]" style={{ fontSize: 13, color: '#FFFFFF', marginBottom: 2 }}>
                  {item.label}
                </div>
                <div className="font-body font-[300]" style={{ fontSize: 12, color: '#B8BCC2', lineHeight: 1.6 }}>
                  {item.detail}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

/* ── COMPONENT ── */
const IdentityServices = () => {
  return (
    <section id="identity" className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-content">
        {/* Section Header */}
        <div style={{ marginBottom: 12 }}>
          <div className="section-eyebrow">IDENTITY & ACCESS MANAGEMENT</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: '#FFFFFF' }}>
            End to End Identity Services
          </h2>
        </div>

        {/* ── Subsection 1: Radial Domain Map ── */}
        <div style={{ marginBottom: 24 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 8 }}>
            Every Identity Domain. One Partner.
          </h3>
          <DomainMapList />
        </div>

        {/* ── Subsection 2: Engagement Flow ── */}
        <div style={{ marginBottom: 24 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 8 }}>
            What We Deliver
          </h3>
          <EngagementFlow />
        </div>

        {/* ── Subsection 3: Categorized Environments ── */}
        <div style={{ marginBottom: 24 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 8 }}>
            Every Environment
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {envCategories.map((cat) => (
              <div
                key={cat.header}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 4,
                  padding: 16,
                }}
              >
                <div
                  className="font-mono font-[400] uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.15em', color: '#F0F1F3', marginBottom: 12 }}
                >
                  {cat.header}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((env) => (
                    <span
                      key={env}
                      className="font-mono font-[400]"
                      style={{
                        fontSize: 11,
                        color: '#F0F1F3',
                        backgroundColor: 'rgba(240, 241, 243,0.06)',
                        border: '1px solid rgba(240, 241, 243,0.2)',
                        padding: '6px 12px',
                        borderRadius: 2,
                      }}
                    >
                      {env}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Subsection 4: Identity Packages ── */}
        <div style={{ marginBottom: 12 }}>
          <h3 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 8 }}>
            Identity Service Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {identityPackages.map((pkg, i) => (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  backgroundColor: '#25282C',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 4,
                  padding: 10,
                  transition: 'all 250ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(240, 241, 243,0.3)';
                  e.currentTarget.style.backgroundColor = '#25282C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.backgroundColor = '#25282C';
                }}
              >
                <h4 className="font-body font-[500]" style={{ fontSize: 15, color: '#FFFFFF', marginBottom: 4 }}>{pkg.name}</h4>
                <p className="font-body font-[300]" style={{ fontSize: 12, color: '#B8BCC2', marginBottom: 8 }}>{pkg.tagline}</p>
                <ul className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 8 }}>
                  {pkg.specs.map((spec, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check style={{ width: 14, height: 14, color: '#F0F1F3', flexShrink: 0, marginTop: 1 }} />
                      <span className="font-body font-[300]" style={{ fontSize: 12, color: '#B8BCC2' }}>{spec}</span>
                    </li>
                  ))}
                </ul>
                {/* Per-card CTAs removed — consolidated CTA in callout banner below */}
              </div>
            ))}
          </div>
        </div>

        {/* ── Callout Banner ── */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{
            backgroundColor: 'rgba(240, 241, 243,0.05)',
            border: '1px solid rgba(240, 241, 243,0.15)',
            borderRadius: 4,
            padding: '40px 48px',
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <h4 className="font-display font-[700]" style={{ fontSize: 20, color: '#FFFFFF', marginBottom: 6 }}>
              Identity Is the Perimeter.
            </h4>
            <p className="font-body font-[300]" style={{ fontSize: 13, color: '#B8BCC2', lineHeight: 1.6 }}>
              Every breach starts with an identity. Silxor enforces verification at every layer.
            </p>
          </div>
          <a
            href="mailto:contact@silxor.com?subject=Silxor%20-%20Identity%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20an%20identity%20assessment.%0A%0AOrganization%3A%20%0AIdentity%20Environment%3A%20"
            className="font-mono font-[400] uppercase whitespace-nowrap transition-all duration-200 flex items-center gap-2"
            style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              backgroundColor: '#F0F1F3',
              color: '#0B0B0B',
              padding: '12px 24px',
              borderRadius: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F0F1F3')}
          >
            Request Identity Assessment
            <ArrowRight style={{ width: 14, height: 14 }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdentityServices;
