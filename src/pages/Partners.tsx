import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";

const PARTNERS = [
  "Microsoft", "AWS", "Google Cloud", "Cisco", "VMware", "Dell Technologies",
  "HPE", "Palo Alto", "Fortinet", "CrowdStrike", "CyberArk", "SailPoint",
  "Okta", "HashiCorp", "Splunk", "ServiceNow", "Red Hat", "Nutanix",
  "Docker", "Kubernetes", "Terraform", "GitHub", "Azure AI", "OpenAI",
  "Microsoft Fabric", "Power BI",
];

const Partners = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = "Technology Partners | Silxor";
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-content" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div style={{ marginBottom: 24 }}>
          <div className="section-eyebrow">{t("PARTNERS", "الشركاء")}</div>
          <h1 className="font-display font-[700]" style={{ fontSize: 40, color: "#FFFFFF", lineHeight: 1.1 }}>
            {t("Technology Partners", "شركاء التقنية")}
          </h1>
          <p className="font-body font-[300] mt-3" style={{ fontSize: 15, color: "#B8BCC2", maxWidth: 620 }}>
            {t(
              "Hyperscalers, security leaders, and enterprise platforms integrated across every Silxor engagement.",
              "مزوّدو السحابة الكبار وقادة الأمن ومنصات المؤسسات مدمجون في كل تعاون مع Silxor."
            )}
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[1px]"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {PARTNERS.map((name) => (
            <Card
              key={name}
              className="group rounded-none border-0 text-inherit shadow-none"
              style={{
                background: "#141414",
                padding: "28px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 96,
                transition: "background 250ms ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#14171F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#141414")}
            >
              <span
                className="font-display font-[700] text-center transition-all duration-300 group-hover:text-white group-hover:scale-105"
                style={{
                  fontSize: 15,
                  letterSpacing: "-0.01em",
                  color: "#B8BCC2",
                  filter: "grayscale(100%)",
                }}
              >
                {name}
              </span>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
