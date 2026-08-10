import { Compass, Server, ShieldCheck, Activity } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";

const Services = () => {
  const { t } = useLanguage();

  const practices = [
    {
      icon: Compass,
      title: t("Advisory & Strategy", "الاستشارات والاستراتيجية"),
      summary: t("Board level advisory on transformation, architecture, and risk.", "استشارات على مستوى المجلس حول التحول والبنية والمخاطر."),
      items: [
        "Digital Transformation",
        "Enterprise Architecture",
        "AI Strategy",
        "CIO Advisory",
        "CISO Advisory",
        "Technology Roadmaps",
        "Operating Model",
        "Business Continuity",
        "Enterprise Assessment",
      ],
    },
    {
      icon: Server,
      title: t("Infrastructure & Cloud", "البنية التحتية والسحابة"),
      summary: t("Sovereign, hybrid, and multi cloud engineering built for resilience.", "هندسة سحابية سيادية وهجينة ومتعددة مصممة للمرونة."),
      items: [
        "Enterprise Infrastructure",
        "Cloud Architecture",
        "Azure · AWS · Google Cloud",
        "Hybrid Cloud",
        "Data Center Modernization",
        "Kubernetes · VMware",
        "Networking · Storage",
        "High Availability · DR",
        "DevSecOps",
      ],
    },
    {
      icon: ShieldCheck,
      title: t("Cybersecurity & GRC", "الأمن السيبراني والحوكمة"),
      summary: t("Zero Trust architecture, identity, and audit ready compliance programs.", "هندسة الثقة الصفرية والهوية وبرامج امتثال جاهزة للتدقيق."),
      items: [
        "Security Architecture · Zero Trust",
        "Identity & Access Management",
        "PAM · IGA · PKI",
        "SOC · MDR · Incident Response",
        "Threat Hunting · Pen Testing",
        "Vulnerability Management",
        "Governance · Risk · Compliance",
        "NIST · ISO 27001 Alignment",
        "PCI DSS · HIPAA · FedRAMP · CMMC",
      ],
    },
    {
      icon: Activity,
      title: t("Managed Services", "الخدمات المدارة"),
      summary: t("NOC and SOC operations with SLA tiers scoped to each engagement.", "عمليات مركز الشبكة والأمن مع مستويات اتفاقية خدمة تُحدَّد لكل تعاون."),
      items: [
        "Managed Infrastructure",
        "Managed Security",
        "Managed Cloud",
        "SOC as a Service",
        "NOC · Service Desk",
        "Monitoring · Observability",
        "Backup · Disaster Recovery",
        "Continuous Optimization",
      ],
    },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 20 }}>
          <div className="section-eyebrow">{t("SERVICES", "الخدمات")}</div>
          <h2
            className="font-display font-[700]"
            style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}
          >
            {t("Four Practices. One Accountable Partner.", "أربع ممارسات. شريك واحد مسؤول.")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#B8BCC2", maxWidth: 620, marginTop: 8, lineHeight: 1.7 }}>
            {t(
              "Advisory, infrastructure, security, and managed operations delivered by a single engineering team under one SLA.",
              "استشارات وبنية تحتية وأمن وعمليات مُدارة يقدمها فريق هندسي واحد تحت اتفاقية مستوى خدمة واحدة."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {practices.map((p, index) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} className="surface-elevated rounded-none border-0 bg-transparent text-inherit shadow-none relative overflow-hidden" style={{ padding: 22 }}>
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 4,
                        border: "1px solid rgba(240, 241, 243,0.25)",
                        background: "rgba(240, 241, 243,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon style={{ width: 16, height: 16, color: "#F0F1F3" }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div
                        className="font-mono uppercase"
                        style={{ fontSize: 9, letterSpacing: "0.2em", color: "#B8BCC2" }}
                      >
                        {t("PRACTICE", "ممارسة")} {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display font-[600]" style={{ fontSize: 18, color: "#FFFFFF" }}>
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <p
                  className="font-body font-[300] relative z-10"
                  style={{ fontSize: 13, color: "#F0F1F3", marginBottom: 14, lineHeight: 1.6 }}
                >
                  {p.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 relative z-10">
                  {p.items.map((it) => (
                    <div
                      key={it}
                      className="font-mono"
                      style={{
                        fontSize: 11,
                        color: "#F0F1F3",
                        letterSpacing: "0.03em",
                        paddingLeft: 12,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 8,
                          width: 6,
                          height: 1,
                          background: "#B8BCC2",
                        }}
                      />
                      {it}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
