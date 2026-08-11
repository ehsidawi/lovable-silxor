import { Shield, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const { t } = useLanguage();

  const columns: { title: string; links: { label: string; to: string; external?: boolean }[] }[] = [
    {
      title: t("Services", "الخدمات"),
      links: [
        { label: t("Advisory & Strategy", "الاستشارات"), to: "/#services" },
        { label: t("Infrastructure & Cloud", "البنية والسحابة"), to: "/#services" },
        { label: t("Cybersecurity & GRC", "الأمن والحوكمة"), to: "/#services" },
        { label: t("Managed Services", "الخدمات المدارة"), to: "/#services" },
      ],
    },
    {
      title: t("Industries", "القطاعات"),
      links: [
        { label: t("Banking", "المصارف"), to: "/solutions" },
        { label: t("Government", "الحكومة"), to: "/solutions" },
        { label: t("Healthcare", "الرعاية الصحية"), to: "/#industries" },
        { label: t("Critical Infrastructure", "بنية حيوية"), to: "/#industries" },
      ],
    },
    {
      title: t("Company", "الشركة"),
      links: [
        { label: t("Partners", "الشركاء"), to: "/partners" },
        
        { label: t("Insights", "الرؤى"), to: "/#insights" },
        { label: t("Careers", "الوظائف"), to: "/#contact" },
        { label: t("About", "من نحن"), to: "/#about" },
        { label: t("Contact", "تواصل"), to: "/#contact" },
      ],
    },
    {
      title: t("Compliance", "الامتثال"),
      links: [
        { label: t("Privacy", "الخصوصية"), to: "/privacy" },
        { label: t("Compliance Documentation", "وثائق الامتثال"), to: "/compliance" },
        { label: t("Security Practices", "ممارسات الأمن"), to: "/compliance" },
        { label: t("SLA", "اتفاقية مستوى الخدمة"), to: "/sla" },
        { label: t("Accessibility", "إمكانية الوصول"), to: "/compliance" },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: "#141414", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 0 24px" }}>
      <div className="container-content">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-12" style={{ marginBottom: 48 }}>
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-3">
              <span className="font-display font-[800]" style={{ fontSize: 24, color: "#FFFFFF" }}>
                Silxor
                <span className="inline-block ml-1" style={{ width: 6, height: 6, backgroundColor: "#F0F1F3", verticalAlign: "middle", marginBottom: 2 }} />
              </span>
            </Link>
            <p className="font-body font-[300]" style={{ fontSize: 14, color: "#B8BCC2", lineHeight: 1.7 }}>
              {t(
                "Enterprise technology, cybersecurity, cloud, private AI, identity, and managed services.",
                "خدمات تقنية للمؤسسات وأمن سيبراني وحوسبة سحابية وذكاء اصطناعي خاص وهوية وخدمات مُدارة."
              )}
            </p>
            <div style={{ marginTop: 16 }}>
              <p className="font-body font-[300]" style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.7 }}>
                <bdi dir="ltr">{t("801 Barton Springs Rd, Austin, TX 78704", "801 Barton Springs Rd, Austin, TX 78704")}</bdi>
              </p>
              <a
                href="mailto:hello@silxor.com"
                className="font-body font-[300] transition-colors duration-200"
                style={{ fontSize: 13, color: "#B8BCC2" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F1F3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#B8BCC2")}
              >
                <bdi dir="ltr">hello@silxor.com</bdi>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="font-body font-[400] uppercase"
                style={{ fontSize: 11, letterSpacing: "0.12em", color: "#FFFFFF", marginBottom: 8 }}
              >
                {col.title}
              </h4>
              <nav className="space-y-3">
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="block font-body font-[300] transition-colors duration-200"
                    style={{ fontSize: 14, color: "#B8BCC2" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F1F3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#B8BCC2")}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, marginBottom: 12 }}>
          <p className="font-body font-[300]" style={{ fontSize: 12, color: "#B8BCC2", marginBottom: 8 }}>
            {t("Aligned to:", "متوافق مع:")}
          </p>
          <div className="flex flex-wrap gap-3">
            {["NIST CSF", "ISO 27001", "SOC 2 Practices", "GDPR"].map((framework) => (
              <Badge key={framework} className="badge-pill rounded-[2px] border-0 bg-transparent p-0 font-normal hover:bg-transparent">
                <Shield style={{ width: 10, height: 10 }} />
                {framework}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>
          <p className="font-body font-[300]" style={{ fontSize: 12, color: "#B8BCC2" }}>
            {t("© 2026 Silxor Group Holding.", "© 2026 مجموعة سيلكسور القابضة.")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/silxorllc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Silxor on LinkedIn"
              className="flex items-center gap-2 font-body font-[300] transition-colors duration-200"
              style={{ fontSize: 12, color: "#B8BCC2" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F1F3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#B8BCC2")}
            >
              <Linkedin style={{ width: 14, height: 14 }} strokeWidth={1.5} />
              {t("LinkedIn", "لينكدإن")}
            </a>
            <a
              href="https://www.linkedin.com/in/ehsidawi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-[300] transition-colors duration-200"
              style={{ fontSize: 12, color: "#B8BCC2" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F1F3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#B8BCC2")}
            >
              {t("Designed by Ehsan Nidawi", "Designed by Ehsan Nidawi")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
