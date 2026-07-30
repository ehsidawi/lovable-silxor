import { useLanguage } from "@/context/LanguageContext";

const announcements = [
  {
    date: "March 2026",
    dateAr: "مارس 2026",
    title: "Silxor Achieves ISO/IEC 27001:2022 Certification",
    titleAr: "Silxor تحصل على شهادة ISO/IEC 27001:2022",
    body: "Silxor Group Holding has completed ISO/IEC 27001:2022 certification, validating our information security management system across all service delivery operations.",
    bodyAr: "أتمّت سيلكسور تك وسايبر العالمية شهادة ISO/IEC 27001:2022، مما يؤكد نظام إدارة أمن المعلومات عبر جميع عمليات تقديم الخدمات.",
  },
  {
    date: "February 2026",
    dateAr: "فبراير 2026",
    title: "Sovereign AI Infrastructure Now Available",
    titleAr: "البنية التحتية للذكاء الاصطناعي السيادي متاحة الآن",
    body: "Silxor launches private LLM deployment services for American enterprises and government agencies fully air gapped options included.",
    bodyAr: "Silxor تطلق خدمات نشر النماذج اللغوية الخاصة للمؤسسات والجهات الحكومية الأمريكية مع خيارات معزولة بالكامل.",
  },
  {
    date: "January 2026",
    dateAr: "يناير 2026",
    title: "Identity Services Practice Launched",
    titleAr: "إطلاق ممارسة خدمات الهوية الرقمية",
    body: "Silxor formally launches its Identity & Access Management practice, covering PAM, CIAM, IGA, ITDR, and Zero Trust identity architecture.",
    bodyAr: "Silxor تطلق رسمياً ممارسة إدارة الهوية والوصول، تشمل PAM و CIAM و IGA و ITDR وبنية هوية الثقة المعدومة.",
  },
];

const PressAnnouncements = () => {
  const { t } = useLanguage();

  return (
    <section id="press" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 12 }}>
          <div className="section-eyebrow">{t("ANNOUNCEMENTS", "الإعلانات")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("Latest from Silxor", "آخر أخبار Silxor")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#B8BCC2", maxWidth: 520, marginTop: 6, lineHeight: 1.7 }}>
            {t("Updates on Silxor infrastructure, partnerships, certifications, and technology developments.", "تحديثات حول بنية Silxor التحتية والشراكات والشهادات والتطورات التقنية.")}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="surface-elevated flex flex-col"
              style={{ padding: 12 }}
            >
              <div className="font-mono font-[400]" style={{ fontSize: 11, color: "#F0F1F3", marginBottom: 12 }}>
                {t(item.date, item.dateAr)}
              </div>
              <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#FFFFFF", marginBottom: 10 }}>
                {t(item.title, item.titleAr)}
              </h3>
              <p className="font-body font-[300] flex-1" style={{ fontSize: 14, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 8 }}>
                {t(item.body, item.bodyAr)}
              </p>
              <a
                href="mailto:contact@silxor.com?subject=Silxor%20-%20Announcement%20Inquiry&body=Hello%20Silxor%20Team%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20a%20recent%20Silxor%20announcement.%0A%0AOrganization%3A%20%0AInquiry%3A%20"
                className="font-body font-[400] transition-colors duration-200"
                style={{ fontSize: 13, color: "#F0F1F3" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F1F3")}
              >
                {t("Read Announcement →", "اقرأ الإعلان ←")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressAnnouncements;
