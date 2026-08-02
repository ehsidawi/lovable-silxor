import { User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";

const Team = () => {
  const { t } = useLanguage();

  const leaders = [
    {
      name: "Ehsan Nidawi",
      title: "FOUNDER & PRINCIPAL, CYBERSECURITY",
      bio: t("Principal cybersecurity architect and identity ecosystem lead. Prior engineering leadership at CISA, Ally Financial, Meta, Google, Dell, and Apple.", "مهندس رئيسي في الأمن السيبراني وقائد منظومة الهوية. خبرة قيادية سابقة في CISA وAlly Financial وMeta وGoogle وDell وApple."),
      linkedin: "https://www.linkedin.com/in/ehsidawi",
    },
    {
      name: t("To Be Announced", "سيُعلن لاحقاً"),
      title: "CHIEF TECHNOLOGY OFFICER",
      bio: t("Infrastructure and cloud leader with Tier IV operational experience and deep expertise in sovereign systems.", "قائد بنية تحتية وسحابة بخبرة تشغيل من المستوى الرابع وخبرة عميقة في الأنظمة السيادية."),
      linkedin: "",
    },
    {
      name: t("To Be Announced", "سيُعلن لاحقاً"),
      title: "HEAD OF AI & SOFTWARE ENGINEERING",
      bio: t("AI and software engineering leader focused on private LLM deployments and enterprise platform delivery.", "قائد ذكاء اصطناعي وهندسة برمجيات متخصص في نشر النماذج اللغوية الخاصة وتسليم المنصات المؤسسية."),
      linkedin: "",
    },
  ];

  return (
    <section id="about" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 64 }}>
          <div className="section-eyebrow">{t("LEADERSHIP", "الفريق")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("Senior Engineers. Direct Accountability.", "مهندسون أقدم. مساءلة مباشرة.")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: "#B8BCC2", maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            {t("Silxor is led by operators with backgrounds spanning hyperscale infrastructure, cybersecurity, and enterprise software delivery.", "تقود Silxor مجموعة من المهنيين ذوي خلفيات تمتد من البنية التحتية فائقة الحجم إلى الأمن السيبراني وتسليم البرمجيات المؤسسية.")}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="text-center rounded-[4px] border-0 bg-transparent text-inherit shadow-none"
              style={{
                backgroundColor: "#25282C",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4,
                padding: 14,
              }}
            >
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(240, 241, 243,0.13), rgba(240, 241, 243,0.03))",
                  border: "1px solid rgba(240, 241, 243,0.2)",
                }}
              >
                <User style={{ width: 28, height: 28, color: "#F0F1F3" }} />
              </div>

              <div className="font-mono font-[400] uppercase" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#F0F1F3", marginTop: 16 }}>
                {leader.title}
              </div>

              <h4 className="font-body font-[500]" style={{ fontSize: 17, color: "#FFFFFF", marginTop: 8 }}>
                {leader.linkedin ? (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: "#F0F1F3" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F1F3")}
                  >
                    {leader.name}
                  </a>
                ) : (
                  leader.name
                )}
              </h4>

              <p className="font-body font-[300]" style={{ fontSize: 14, color: "#B8BCC2", lineHeight: 1.7, marginTop: 12 }}>
                {leader.bio}
              </p>
            </Card>
          ))}
        </div>

        <p className="font-body font-[300] text-center" style={{ fontSize: 13, color: "#B8BCC2", fontStyle: "italic", marginTop: 32 }}>
          {t("Full leadership profiles and additional bios available on request during the assessment.", "ملفات القيادة الكاملة والسير الإضافية متاحة عند الطلب خلال التقييم.")}
        </p>
      </div>
    </section>
  );
};

export default Team;
