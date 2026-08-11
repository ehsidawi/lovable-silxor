import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const patterns = [
  {
    tag: "INFRASTRUCTURE",
    title: "Cloud Migration & Modernization",
    titleAr: "ترحيل السحابة وتحديثها",
    body: "A phased migration pattern for moving regulated workloads from legacy or public cloud environments into a resilient, access-controlled environment with minimal downtime.",
    bodyAr: "نمط ترحيل متدرج لنقل الأحمال المنظمة من بيئات قديمة أو سحابية عامة إلى بيئة مرنة ومتحكم بالوصول إليها مع أقل توقف ممكن.",
    sector: "Financial Services",
    sectorAr: "الخدمات المالية",
  },
  {
    tag: "IDENTITY",
    title: "Enterprise Identity Program",
    titleAr: "برنامج الهوية المؤسسية",
    body: "A greenfield IAM pattern covering single sign-on, privileged access vaulting, and identity governance lifecycle for large organizations.",
    bodyAr: "نمط منظومة هوية جديدة يشمل تسجيل الدخول الموحّد وخزنة الحسابات المميزة وحوكمة دورة حياة الهوية للمؤسسات الكبيرة.",
    sector: "Public Sector",
    sectorAr: "القطاع العام",
  },
  {
    tag: "SOFTWARE + AI",
    title: "Private AI Operations Platform",
    titleAr: "منصة عمليات الذكاء الاصطناعي الخاصة",
    body: "A pattern for deploying self-hosted models to automate internal operations while keeping data inside the client's own environment.",
    bodyAr: "نمط لنشر نماذج مستضافة ذاتياً لأتمتة العمليات الداخلية مع إبقاء البيانات داخل بيئة العميل.",
    sector: "Energy",
    sectorAr: "الطاقة",
  },
];

const SelectedWork = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 24 }}>
          <div className="section-eyebrow">{t("ENGAGEMENT MODELS", "نماذج التعاون")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}>
            {t("Example Solution Patterns", "أنماط حلول توضيحية")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", maxWidth: 620, marginTop: 6, lineHeight: 1.7 }}>
            {t(
              "Illustrative solution patterns across infrastructure, identity, and AI. These describe how we approach common problems, not specific verified client work.",
              "أنماط حلول توضيحية عبر البنية التحتية والهوية والذكاء الاصطناعي. تصف طريقة تعاملنا مع مشكلات شائعة، وليست أعمالاً محددة موثّقة لعملاء."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {patterns.map((pattern, index) => (
            <Card
              key={index}
              className="group relative surface-elevated border-0 bg-transparent text-inherit shadow-none"
              style={{
                borderRadius: 2,
                padding: "24px 22px",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="flex flex-wrap items-center gap-2 mb-3 relative z-10">
                <span
                  className="font-mono font-[400] uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.12em", color: "hsl(var(--primary))" }}
                >
                  {pattern.tag}
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
                  {t(pattern.sector, pattern.sectorAr)}
                </Badge>
              </div>

              <div className="relative z-10">
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 6 }}>
                  {t(pattern.title, pattern.titleAr)}
                </h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>
                  {t(pattern.body, pattern.bodyAr)}
                </p>
              </div>

              <div
                className="absolute pointer-events-none"
                style={{ top: 10, insetInlineEnd: 10, width: 14, height: 14, opacity: 0.15 }}
              >
                <div style={{ position: "absolute", top: 6, insetInlineStart: 0, width: 14, height: 1, backgroundColor: "hsl(var(--primary))" }} />
                <div style={{ position: "absolute", top: 0, insetInlineStart: 6, width: 1, height: 14, backgroundColor: "hsl(var(--primary))" }} />
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
          {t("References and detailed case discussions available on request during the assessment.", "المراجع ومناقشات الحالات التفصيلية متاحة عند الطلب خلال التقييم.")}
        </p>
      </div>
    </section>
  );
};

export default SelectedWork;
