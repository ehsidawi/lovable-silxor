import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    tag: "INFRASTRUCTURE",
    title: "Sovereign Cloud Migration",
    titleAr: "ترحيل السحابة السيادية",
    body: "Zero downtime cutover from public cloud to a Tier IV sovereign environment for a regulated financial institution.",
    bodyAr: "انتقال بدون توقف من السحابة العامة إلى بيئة سيادية من المستوى الرابع لمؤسسة مالية منظّمة.",
    sector: "Financial Services",
    sectorAr: "الخدمات المالية",
    coord: { en: "40.7°N · 74.0°W", ar: "٤٠.٧° ش · ٧٤.٠° غ" },
  },
  {
    tag: "IDENTITY",
    title: "Enterprise Identity Program",
    titleAr: "برنامج الهوية المؤسسية",
    body: "Greenfield IAM for a public sector agency: SSO, PAM vaulting, and full IGA lifecycle governance.",
    bodyAr: "منظومة إدارة هوية جديدة لجهة حكومية: تسجيل دخول موحّد، وخزنة الحسابات المميزة، وحوكمة دورة حياة الهوية.",
    sector: "Government",
    sectorAr: "الحكومة",
    coord: { en: "38.9°N · 77.0°W", ar: "٣٨.٩° ش · ٧٧.٠° غ" },
  },
  {
    tag: "SOFTWARE + AI",
    title: "Private AI Operations Platform",
    titleAr: "منصة عمليات الذكاء الاصطناعي الخاصة",
    body: "Agentic AI platform on privately hosted LLMs, automating operations for a national energy operator.",
    bodyAr: "منصة ذكاء اصطناعي مع نماذج لغوية خاصة، تُؤتمت عمليات مشغّل طاقة وطني.",
    sector: "Energy",
    sectorAr: "الطاقة",
    coord: { en: "29.7°N · 95.3°W", ar: "٢٩.٧° ش · ٩٥.٣° غ" },
  },
];

const SelectedWork = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 40 }}>
          <div className="section-eyebrow">{t("SELECTED WORK", "أعمالنا المختارة")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}>
            {t("Representative Engagements", "مشاريع تمثيلية")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", maxWidth: 560, marginTop: 6, lineHeight: 1.7 }}>
            {t("Infrastructure, identity, and AI programs delivered for institutions across financial services, government, and energy.", "برامج بنية تحتية وهوية وذكاء اصطناعي مُنجزة لمؤسسات في الخدمات المالية والحكومة والطاقة.")}
          </p>
        </div>

        {/* Map list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative surface-elevated border-0 bg-transparent text-inherit shadow-none"
              style={{
                borderRadius: 2,
                padding: "24px 22px",
                overflow: "hidden",
                transition: "background 0.3s ease",
              }}
            >
              {/* Grid overlay pattern */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Header: pin + coord */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "hsl(var(--primary))",
                      boxShadow: "0 0 8px hsl(var(--primary) / 0.5)",
                    }}
                  />
                  <span
                    className="font-mono font-[400] uppercase"
                    style={{ fontSize: 9, letterSpacing: "0.15em", color: "hsl(var(--primary))" }}
                  >
                    {t("PIN", "موقع")} {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span
                  className="font-mono font-[300]"
                  style={{ fontSize: 9, color: "hsl(var(--muted-foreground))", letterSpacing: "0.05em" }}
                >
                  {t(project.coord.en, project.coord.ar)}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3 relative z-10">
                <span
                  className="font-mono font-[400] uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.12em", color: "hsl(var(--primary))" }}
                >
                  {project.tag}
                </span>
                <Badge
                  className="badge-pill rounded-[2px] border-0 bg-transparent p-0 font-normal hover:bg-transparent font-mono font-[400]"
                  style={{
                    fontSize: 9,
                    color: "hsl(var(--primary))",
                    backgroundColor: "hsl(var(--primary) / 0.06)",
                    border: "1px solid hsl(var(--primary) / 0.2)",
                    padding: "2px 8px",
                    borderRadius: 2,
                  }}
                >
                  {t(project.sector, project.sectorAr)}
                </Badge>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 6 }}>
                  {t(project.title, project.titleAr)}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>
                  {t(project.body, project.bodyAr)}
                </p>
              </div>

              {/* Corner crosshair */}
              <div
                className="absolute pointer-events-none"
                style={{ top: 10, right: 10, width: 14, height: 14, opacity: 0.15 }}
              >
                <div style={{ position: "absolute", top: 6, left: 0, width: 14, height: 1, backgroundColor: "hsl(var(--primary))" }} />
                <div style={{ position: "absolute", top: 0, left: 6, width: 1, height: 14, backgroundColor: "hsl(var(--primary))" }} />
              </div>
            </Card>
          ))}
        </div>

        <p
          className="font-body font-[300] text-center"
          style={{
            fontSize: 13,
            color: "hsl(var(--muted-foreground))",
            fontStyle: "italic",
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {t("Additional case studies and references available under NDA during assessment.", "دراسات حالة ومراجع إضافية متاحة بموجب اتفاقية عدم إفشاء خلال التقييم.")}
        </p>
      </div>
    </section>
  );
};

export default SelectedWork;
