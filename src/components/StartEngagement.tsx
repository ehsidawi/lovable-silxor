import { Server, Code, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const StartEngagement = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const paths = [
    {
      icon: Server,
      title: t("Infrastructure & Hosting", "البنية التحتية والاستضافة"),
      description: t("Begin with a sovereignty, resilience, and compliance review of your current hosting footprint.", "ابدأ بمراجعة السيادة والمرونة والامتثال لبيئة الاستضافة الحالية."),
    },
    {
      icon: Code,
      title: t("Software or AI Project", "مشروع برمجيات أو ذكاء اصطناعي"),
      description: t("Share your platform or AI requirements and receive a scoped delivery proposal within 5 business days.", "شارك متطلبات منصتك أو نظام الذكاء الاصطناعي واستلم اقتراحاً محدد النطاق خلال 5 أيام عمل."),
    },
    {
      icon: Shield,
      title: t("Strategic Advisory", "استشارات استراتيجية"),
      description: t("Book a 60 minute architecture or security session with a senior Silxor engineer.", "احجز جلسة 60 دقيقة حول البنية أو الأمن مع مهندس Silxor أقدم."),
    },
  ];

  return (
    <section id="contact" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <div className="section-eyebrow justify-center">{t("ENGAGE", "تعاون")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("Start With a Technical Assessment", "ابدأ بتقييم تقني")}
          </h2>
          <p className="font-body font-[300] mx-auto" style={{ fontSize: 16, color: "#B8BCC2", maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            {t("Every Silxor engagement starts with a no cost technical assessment. Tell us what you are building and we will scope exactly how to deliver it.", "يبدأ كل تعاون مع Silxor بتقييم تقني مجاني. أخبرنا بما تبنيه وسنُحدد نطاق تسليمه بدقة.")}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Card key={index} className="surface-elevated flex flex-col rounded-[4px] border-0 bg-transparent text-inherit shadow-none" style={{ padding: 14 }}>
                <Icon className="mb-5" style={{ width: 32, height: 32, color: "#F0F1F3" }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 17, color: "#FFFFFF", marginBottom: 10 }}>
                  {path.title}
                </h3>
                <p className="font-body font-[300] flex-1" style={{ fontSize: 14, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 10 }}>
                  {path.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center" style={{ marginTop: 48 }}>
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("/book")}
            className="h-auto rounded-none font-mono font-[400] uppercase transition-all duration-200 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-inherit"
            style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              backgroundColor: "#F0F1F3",
              color: "#0B0B0B",
              padding: "16px 32px",
              borderRadius: 2,
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F0F1F3")}
          >
            {t("Book an Assessment", "احجز تقييماً")}
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default StartEngagement;
