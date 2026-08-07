import { Check, Star, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PackageItem {
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  specs: string[];
  specsAr: string[];
  cta: string;
  ctaAr: string;
  popular?: boolean;
  domain: string;
  domainAr: string;
  coord: { en: string; ar: string };
  mailto: string;
}

const allPackages: PackageItem[] = [
  // Infrastructure
  {
    name: "Sovereign Starter",
    nameAr: "السيادي الأساسي",
    tagline: "For startups and small teams entering sovereign hosting",
    taglineAr: "للشركات الناشئة والفرق الصغيرة التي تدخل الاستضافة السيادية",
    specs: ["2 vCPU / 8GB RAM / 100GB SSD", "Shared NOC monitoring", "99.9% Uptime SLA", "Standard support <4hr P1 response", "Weekly backups"],
    specsAr: ["2 vCPU / 8GB RAM / 100GB SSD", "مراقبة NOC مشتركة", "99.9% SLA وقت التشغيل", "دعم قياسي <4 ساعات استجابة P1", "نسخ احتياطي أسبوعي"],
    cta: "Get Started", ctaAr: "ابدأ الآن",
    domain: "INFRA", domainAr: "بنية تحتية",
    coord: { en: "33.3°N · 44.4°E", ar: "٣٣.٣° ش · ٤٤.٤° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Sovereign%20Starter%20Package%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Sovereign%20Starter%20infrastructure%20package.%0A%0AOrganization%3A%20%0AMessage%3A%20",
  },
  {
    name: "Sovereign Business",
    nameAr: "السيادي للأعمال",
    tagline: "For growing enterprises and regulated fintechs",
    taglineAr: "للمؤسسات النامية والتقنية المالية المنظمة",
    specs: ["8 vCPU / 32GB RAM / 500GB SSD", "Dedicated NOC coverage", "99.99% Uptime SLA", "Priority support <1hr P1 response", "Daily backups + <30s RTO", "Compliance reporting"],
    specsAr: ["8 vCPU / 32GB RAM / 500GB SSD", "تغطية NOC مخصصة", "99.99% SLA وقت التشغيل", "دعم أولوية <1 ساعة استجابة P1", "نسخ احتياطي يومي + <30 ثانية RTO", "تقارير الامتثال"],
    cta: "Get Started", ctaAr: "ابدأ الآن",
    popular: true,
    domain: "INFRA", domainAr: "بنية تحتية",
    coord: { en: "36.2°N · 44.0°E", ar: "٣٦.٢° ش · ٤٤.٠° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Sovereign%20Business%20Package%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Sovereign%20Business%20infrastructure%20package.%0A%0AOrganization%3A%20%0AMessage%3A%20",
  },
  {
    name: "Sovereign Enterprise",
    nameAr: "السيادي المؤسسي",
    tagline: "For government, banking, and critical infrastructure",
    taglineAr: "للحكومة والبنوك والبنية التحتية الحيوية",
    specs: ["Dedicated bare metal or private cloud", "24/7 New York + Virginia dual NOC", "99.995% Uptime SLA", "<15min P1 response", "Custom redundancy architecture", "Full compliance documentation + audit support", "Air gap available on request"],
    specsAr: ["خادم مخصص أو سحابة خاصة", "NOC مزدوج نيويورك + فيرجينيا 24/7", "99.995% SLA وقت التشغيل", "<15 دقيقة استجابة P1", "بنية تكرار مخصصة", "توثيق امتثال كامل + دعم تدقيق", "عزل هوائي متاح عند الطلب"],
    cta: "Request Assessment", ctaAr: "طلب تقييم",
    domain: "INFRA", domainAr: "بنية تحتية",
    coord: { en: "30.5°N · 47.8°E", ar: "٣٠.٥° ش · ٤٧.٨° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Sovereign%20Enterprise%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20an%20assessment%20for%20the%20Sovereign%20Enterprise%20package.%0A%0AOrganization%3A%20%0AMessage%3A%20",
  },
  // Software
  {
    name: "Build Essentials",
    nameAr: "أساسيات البناء",
    tagline: "For MVPs, internal tools, and first digital products",
    taglineAr: "للمنتجات الأولية والأدوات الداخلية والمنتجات الرقمية الأولى",
    specs: ["Up to 5 delivery sprints", "Web or mobile platform (one)", "Basic QA and UAT", "3 months post launch support"],
    specsAr: ["حتى 5 دورات تسليم", "منصة ويب أو موبايل (واحدة)", "ضمان جودة أساسي واختبار قبول", "3 أشهر دعم بعد الإطلاق"],
    cta: "Start a Project", ctaAr: "ابدأ مشروعاً",
    domain: "SOFTWARE", domainAr: "برمجيات",
    coord: { en: "34.0°N · 43.5°E", ar: "٣٤.٠° ش · ٤٣.٥° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Build%20Essentials%20Project%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Build%20Essentials%20software%20package.%0A%0AOrganization%3A%20%0AProject%20Description%3A%20",
  },
  {
    name: "Build Professional",
    nameAr: "البناء الاحترافي",
    tagline: "For enterprise platforms and government portals",
    taglineAr: "لمنصات المؤسسات والبوابات الحكومية",
    specs: ["Up to 15 delivery sprints", "Web + mobile + API development", "Full QA pipeline + security review", "6 months managed support + SLA", "Integration with third party systems"],
    specsAr: ["حتى 15 دورة تسليم", "تطوير ويب + موبايل + API", "خط ضمان جودة كامل + مراجعة أمنية", "6 أشهر دعم مُدار + SLA", "تكامل مع أنظمة الطرف الثالث"],
    cta: "Start a Project", ctaAr: "ابدأ مشروعاً",
    popular: true,
    domain: "SOFTWARE", domainAr: "برمجيات",
    coord: { en: "35.5°N · 45.4°E", ar: "٣٥.٥° ش · ٤٥.٤° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Build%20Professional%20Project%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Build%20Professional%20software%20package.%0A%0AOrganization%3A%20%0AProject%20Description%3A%20",
  },
  {
    name: "Build Enterprise",
    nameAr: "البناء المؤسسي",
    tagline: "For mission critical national systems",
    taglineAr: "للأنظمة الوطنية ذات المهام الحرجة",
    specs: ["Dedicated engineering team", "Multi platform + full systems integration", "Security audit + compliance documentation", "12 months managed support", "Custom SLA and delivery governance"],
    specsAr: ["فريق هندسي مخصص", "منصات متعددة + تكامل أنظمة كامل", "تدقيق أمني + توثيق امتثال", "12 شهر دعم مُدار", "SLA مخصص وحوكمة التسليم"],
    cta: "Request Assessment", ctaAr: "طلب تقييم",
    domain: "SOFTWARE", domainAr: "برمجيات",
    coord: { en: "32.6°N · 44.0°E", ar: "٣٢.٦° ش · ٤٤.٠° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Build%20Enterprise%20Assessment%20Request&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20an%20assessment%20for%20the%20Build%20Enterprise%20package.%0A%0AOrganization%3A%20%0AProject%20Description%3A%20",
  },
  // AI
  {
    name: "AI Foundation",
    nameAr: "أساس الذكاء الاصطناعي",
    tagline: "For organizations deploying their first sovereign AI system",
    taglineAr: "للمنظمات التي تنشر أول نظام ذكاء اصطناعي سيادي",
    specs: ["1 sovereign LLM deployment (7B 14B)", "Basic RAG pipeline + document ingestion", "Hosted on Silxor sovereign infrastructure", "Standard monitoring dashboard", "No data leaves American control"],
    specsAr: ["نشر LLM سيادي واحد (7B 14B)", "خط RAG أساسي + استيعاب المستندات", "مستضاف على بنية Silxor السيادية", "لوحة مراقبة قياسية", "لا تغادر البيانات السيطرة الأمريكية"],
    cta: "Get Started", ctaAr: "ابدأ الآن",
    domain: "AI", domainAr: "ذكاء اصطناعي",
    coord: { en: "33.3°N · 44.4°E", ar: "٣٣.٣° ش · ٤٤.٤° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20AI%20Foundation%20Package%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20AI%20Foundation%20package.%0A%0AOrganization%3A%20%0AUse%20Case%3A%20",
  },
  {
    name: "AI Professional",
    nameAr: "الذكاء الاصطناعي الاحترافي",
    tagline: "For enterprise automation and intelligent operations",
    taglineAr: "لأتمتة المؤسسات والعمليات الذكية",
    specs: ["Up to 3 LLM deployments", "Multi source RAG + vector search", "Agentic workflow automation (up to 5 workflows)", "Model monitoring + retraining pipeline", "API integration with existing systems", "No data leaves American control"],
    specsAr: ["حتى 3 عمليات نشر LLM", "RAG متعدد المصادر + بحث متجهي", "أتمتة سير عمل وكيلي (حتى 5 سير عمل)", "مراقبة النموذج + خط إعادة التدريب", "تكامل API مع الأنظمة الحالية", "لا تغادر البيانات السيطرة الأمريكية"],
    cta: "Get Started", ctaAr: "ابدأ الآن",
    popular: true,
    domain: "AI", domainAr: "ذكاء اصطناعي",
    coord: { en: "36.2°N · 44.0°E", ar: "٣٦.٢° ش · ٤٤.٠° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20AI%20Professional%20Package%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20AI%20Professional%20package.%0A%0AOrganization%3A%20%0AUse%20Case%3A%20",
  },
  {
    name: "AI Sovereign Enterprise",
    nameAr: "الذكاء الاصطناعي السيادي المؤسسي",
    tagline: "For government AI and national scale intelligent systems",
    taglineAr: "للذكاء الاصطناعي الحكومي والأنظمة الذكية الوطنية",
    specs: ["Unlimited model deployments", "Full agentic infrastructure + orchestration layer", "Air gap deployment available", "Custom model fine tuning + data pipelines", "Dedicated AI engineering team", "Full audit trail and explainability reporting"],
    specsAr: ["عمليات نشر نماذج غير محدودة", "بنية تحتية وكيلية كاملة + طبقة تنسيق", "نشر معزول هوائياً متاح", "ضبط دقيق للنموذج + خطوط بيانات مخصصة", "فريق هندسة ذكاء اصطناعي مخصص", "مسار تدقيق كامل وتقارير القابلية للتفسير"],
    cta: "Request Assessment", ctaAr: "طلب تقييم",
    domain: "AI", domainAr: "ذكاء اصطناعي",
    coord: { en: "30.5°N · 47.8°E", ar: "٣٠.٥° ش · ٤٧.٨° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20AI%20Sovereign%20Enterprise%20Assessment&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20request%20an%20assessment%20for%20the%20AI%20Sovereign%20Enterprise%20package.%0A%0AOrganization%3A%20%0AUse%20Case%3A%20",
  },
  // Consulting
  {
    name: "Advisory Sprint",
    nameAr: "سباق استشاري",
    tagline: "2 week focused engagement",
    taglineAr: "مشاركة مركزة لمدة أسبوعين",
    specs: ["Architecture or security assessment", "Written findings and recommendations report", "Executive summary for leadership", "1 follow up strategy session", "Deliverable: Assessment Report"],
    specsAr: ["تقييم معماري أو أمني", "تقرير نتائج وتوصيات مكتوب", "ملخص تنفيذي للقيادة", "جلسة استراتيجية متابعة واحدة", "المخرج: تقرير تقييم"],
    cta: "Book a Sprint", ctaAr: "احجز سباقاً",
    domain: "CONSULT", domainAr: "استشارات",
    coord: { en: "33.3°N · 44.4°E", ar: "٣٣.٣° ش · ٤٤.٤° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Advisory%20Sprint%20Booking&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20book%20an%20Advisory%20Sprint%20engagement.%0A%0AOrganization%3A%20%0AFocus%20Area%3A%20",
  },
  {
    name: "Transformation Program",
    nameAr: "برنامج التحول",
    tagline: "3 month modernization engagement",
    taglineAr: "مشاركة تحديث لمدة 3 أشهر",
    specs: ["Full digital transformation roadmap", "Zero Trust and IAM architecture design", "Vendor selection and procurement advisory", "Program governance and delivery framework", "Deliverable: Transformation Playbook"],
    specsAr: ["خارطة طريق التحول الرقمي الكاملة", "تصميم بنية Zero Trust و IAM", "اختيار الموردين واستشارات المشتريات", "حوكمة البرنامج وإطار التسليم", "المخرج: دليل التحول"],
    cta: "Start Program", ctaAr: "ابدأ البرنامج",
    domain: "CONSULT", domainAr: "استشارات",
    coord: { en: "35.5°N · 45.4°E", ar: "٣٥.٥° ش · ٤٥.٤° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Transformation%20Program%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Transformation%20Program%20engagement.%0A%0AOrganization%3A%20%0AScope%3A%20",
  },
  {
    name: "Strategic Partner",
    nameAr: "شريك استراتيجي",
    tagline: "Ongoing retainer embedded expertise",
    taglineAr: "عقد مستمر خبرة مدمجة",
    specs: ["Dedicated senior architect on call", "Monthly security and architecture reviews", "Compliance monitoring and audit preparation", "Quarterly technology roadmap sessions", "Priority access across all Silxor business units"],
    specsAr: ["مهندس معماري أول مخصص تحت الطلب", "مراجعات أمنية ومعمارية شهرية", "مراقبة الامتثال وإعداد التدقيق", "جلسات خارطة طريق تقنية ربع سنوية", "وصول أولوية عبر جميع وحدات أعمال Silxor"],
    cta: "Become a Partner", ctaAr: "كن شريكاً",
    domain: "CONSULT", domainAr: "استشارات",
    coord: { en: "32.6°N · 44.0°E", ar: "٣٢.٦° ش · ٤٤.٠° شر" },
    mailto: "mailto:hello@silxor.com?subject=Silxor%20-%20Strategic%20Partner%20Retainer%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Strategic%20Partner%20retainer%20engagement.%0A%0AOrganization%3A%20%0AScope%3A%20",
  },
];

/* ── Tier Comparison Table ── */
const comparisonRows = [
  { feature: "Uptime SLA", starter: "99.9%", business: "99.99%", enterprise: "99.995%" },
  { feature: "P1 Response", starter: "<4hr", business: "<1hr", enterprise: "<15min" },
  { feature: "NOC Coverage", starter: "Shared", business: "Dedicated", enterprise: "24/7 Dual" },
  { feature: "Backups", starter: "Weekly", business: "Daily", enterprise: "Continuous" },
  { feature: "RTO", starter: "<4hr", business: "<30min", enterprise: "<30sec" },
  { feature: "RPO", starter: "24hr", business: "1hr", enterprise: "15min" },
  { feature: "Air Gap", starter: null, business: null, enterprise: true },
  { feature: "Compliance Docs", starter: null, business: true, enterprise: true },
  { feature: "Dedicated Mgr", starter: null, business: null, enterprise: true },
];

const CellValue = ({ value }: { value: string | boolean | null }) => {
  if (value === true) return <Check style={{ width: 16, height: 16, color: "hsl(var(--primary))", margin: "0 auto" }} />;
  if (value === null) return <Minus style={{ width: 16, height: 16, color: "hsl(var(--muted-foreground) / 0.3)", margin: "0 auto" }} />;
  return <span>{value}</span>;
};

const TierComparisonTable = () => {
  const { t } = useLanguage();
  return (
    <div style={{ marginBottom: 40 }}>
      <div className="font-mono font-[400] uppercase" style={{ fontSize: 11, letterSpacing: "0.15em", color: "hsl(var(--primary))", marginBottom: 8 }}>
        {t("TIER COMPARISON", "مقارنة المستويات")}
      </div>
      <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 8 }}>
        {t("At a Glance What Changes Across Tiers", "نظرة سريعة ما يتغير عبر المستويات")}
      </h3>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
          <thead>
            <tr className="surface-elevated">
              {[t("Feature", "الميزة"), t("Starter", "أساسي"), t("Business", "أعمال"), t("Enterprise", "مؤسسي")].map((h, i) => (
                <th
                  key={h}
                  className="font-mono font-[400]"
                  style={{
                    fontSize: 11,
                    color: "hsl(var(--primary))",
                    padding: "12px 16px",
                    textAlign: i === 0 ? "left" : "center",
                    borderBottom: "1px solid hsl(var(--border))",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr
                key={row.feature}
                style={{
                  borderBottom: i < comparisonRows.length - 1 ? "1px solid hsl(var(--border))" : "none",
                  transition: "background 200ms",
                }}
              >
                <td className="font-body font-[400]" style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", padding: "10px 16px" }}>
                  {row.feature}
                </td>
                <td className="font-mono font-[400]" style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", padding: "10px 16px", textAlign: "center" }}>
                  <CellValue value={row.starter} />
                </td>
                <td className="font-mono font-[400]" style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", padding: "10px 16px", textAlign: "center", borderLeft: "1px solid hsl(var(--primary) / 0.2)", borderRight: "1px solid hsl(var(--primary) / 0.2)" }}>
                  <CellValue value={row.business} />
                </td>
                <td className="font-mono font-[400]" style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", padding: "10px 16px", textAlign: "center" }}>
                  <CellValue value={row.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-body font-[300]" style={{ fontSize: 11, color: "hsl(var(--muted-foreground) / 0.5)", marginTop: 6, textAlign: "center" }}>
        {t("Full SLA terms available at silxor.com/sla", "شروط SLA الكاملة متوفرة على silxor.com/sla")}
      </p>
    </div>
  );
};

const ServicePackages = () => {
  const { t } = useLanguage();

  // Group by domain
  const domains = ["INFRA", "SOFTWARE", "AI", "CONSULT"];
  const domainLabels: Record<string, { en: string; ar: string }> = {
    INFRA: { en: "Infrastructure Packages", ar: "حزم البنية التحتية" },
    SOFTWARE: { en: "Software Development Packages", ar: "حزم تطوير البرمجيات" },
    AI: { en: "AI & Automation Packages", ar: "حزم الذكاء الاصطناعي والأتمتة" },
    CONSULT: { en: "Consulting Packages", ar: "حزم الاستشارات" },
  };

  return (
    <section id="packages" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 12 }}>
          <div className="section-eyebrow">{t("PACKAGES", "الحزم")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "hsl(var(--foreground))" }}>
            {t("Transparent Service Packages", "حزم خدمات شفافة")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", maxWidth: 520, marginTop: 6, lineHeight: 1.7 }}>
            {t("Every engagement starts with clarity. Choose your entry point across any of our four technology domains.", "كل مشاركة تبدأ بالوضوح. اختر نقطة دخولك عبر أي من مجالاتنا التقنية الأربعة.")}
          </p>
        </div>

        <TierComparisonTable />

        {domains.map((domain) => {
          const domainPackages = allPackages.filter((p) => p.domain === domain);
          const label = domainLabels[domain];
          return (
            <div key={domain} style={{ marginBottom: 40 }}>
              <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 8 }}>
                {t(label.en, label.ar)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
                {domainPackages.map((pkg, index) => {
                  const tierLabel = index === 0 ? t("STARTER", "أساسي") : index === 1 ? t("GROWTH", "نمو") : t("ENTERPRISE", "مؤسسي");
                  return (
                    <div
                      key={index}
                      className="group relative surface-elevated flex flex-col"
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

                      {/* Popular badge */}
                      {pkg.popular && (
                        <div
                          className="absolute font-mono font-[400] uppercase"
                          style={{
                            top: 0,
                            right: 0,
                            backgroundColor: "hsl(var(--primary))",
                            color: "hsl(var(--background))",
                            fontSize: 8,
                            letterSpacing: "0.15em",
                            padding: "3px 8px",
                            borderRadius: "0 2px 0 4px",
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                            zIndex: 10,
                          }}
                        >
                          <Star style={{ width: 8, height: 8 }} /> {t("Popular", "الأكثر طلباً")}
                        </div>
                      )}

                      {/* Coordinate tag */}
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
                          <span
                            className="font-mono font-[400] uppercase"
                            style={{
                              fontSize: 8,
                              letterSpacing: "0.1em",
                              color: "hsl(var(--muted-foreground))",
                              backgroundColor: "hsl(var(--primary) / 0.08)",
                              border: "1px solid hsl(var(--primary) / 0.15)",
                              padding: "1px 6px",
                              borderRadius: 2,
                            }}
                          >
                            {tierLabel}
                          </span>
                        </div>
                        <span
                          className="font-mono font-[300]"
                          style={{ fontSize: 9, color: "hsl(var(--muted-foreground))", letterSpacing: "0.05em" }}
                        >
                          {t(pkg.coord.en, pkg.coord.ar)}
                        </span>
                      </div>

                      {/* Domain + Content */}
                      <div className="relative z-10 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="font-mono font-[500] uppercase"
                            style={{
                              fontSize: 9,
                              letterSpacing: "0.12em",
                              color: "hsl(var(--primary))",
                              backgroundColor: "hsl(var(--primary) / 0.08)",
                              border: "1px solid hsl(var(--primary) / 0.2)",
                              padding: "2px 8px",
                              borderRadius: 2,
                            }}
                          >
                            {t(pkg.domain, pkg.domainAr)}
                          </span>
                        </div>

                        <h4 className="font-body font-[500]" style={{ fontSize: 15, color: "hsl(var(--foreground))", marginBottom: 4 }}>
                          {t(pkg.name, pkg.nameAr)}
                        </h4>
                        <p className="font-body font-[300]" style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginBottom: 14, lineHeight: 1.6 }}>
                          {t(pkg.tagline, pkg.taglineAr)}
                        </p>

                        <ul className="flex-1" style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 8 }}>
                          {(t(pkg.specs.join("|||"), pkg.specsAr.join("|||"))).split("|||").map((spec, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Check style={{ width: 13, height: 13, color: "hsl(var(--primary))", flexShrink: 0, marginTop: 1 }} />
                              <span className="font-body font-[300]" style={{ fontSize: 12, color: "hsl(var(--muted-foreground))" }}>{spec}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Per-card CTAs removed — single section CTA below */}
                      </div>

                      {/* Corner crosshair accent */}
                      <div
                        className="absolute pointer-events-none"
                        style={{ top: 10, right: 10, width: 14, height: 14, opacity: 0.15 }}
                      >
                        <div style={{ position: "absolute", top: 6, left: 0, width: 14, height: 1, backgroundColor: "hsl(var(--primary))" }} />
                        <div style={{ position: "absolute", top: 0, left: 6, width: 1, height: 14, backgroundColor: "hsl(var(--primary))" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div
          className="font-body font-[300]"
          style={{
            background: "hsl(var(--primary) / 0.04)",
            border: "1px solid hsl(var(--primary) / 0.12)",
            borderLeft: "3px solid hsl(var(--primary))",
            borderRadius: 4,
            padding: "14px 20px",
            fontSize: 12,
            color: "hsl(var(--muted-foreground))",
            lineHeight: 1.7,
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          {t("All packages include an initial technical discovery session. Enterprise and Government engagements begin with a formal Request for Assessment. Custom packages available for multi domain engagements spanning infrastructure, software, AI, and consulting.", "تتضمن جميع الحزم جلسة اكتشاف تقني أولية. تبدأ مشاركات المؤسسات والحكومة بطلب تقييم رسمي. حزم مخصصة متاحة للمشاركات متعددة المجالات التي تشمل البنية التحتية والبرمجيات والذكاء الاصطناعي والاستشارات.")}
        </div>

        <div className="flex justify-center" style={{ marginTop: 28 }}>
          <a
            href="mailto:hello@silxor.com?subject=Silxor%20-%20Package%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20a%20Silxor%20package.%0A%0AOrganization%3A%20%0APackage%20of%20Interest%3A%20%0AMessage%3A%20"
            className="font-mono font-[400] uppercase transition-all duration-200"
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              padding: "14px 28px",
              borderRadius: 2,
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--background))",
            }}
          >
            {t("Inquire About Packages", "استفسر عن الحزم")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
