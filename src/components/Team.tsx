import { User, Layers, Users, ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";

const Team = () => {
  const { t } = useLanguage();

  const staffing = [
    {
      icon: Layers,
      title: t("Matched to Scope", "مطابق للنطاق"),
      desc: t("Engagements are staffed with engineers matched to the specific practice areas involved.", "يُشكَّل فريق التعاون من مهندسين مطابقين لمجالات الممارسة المعنية."),
    },
    {
      icon: Users,
      title: t("One Accountable Team", "فريق واحد مسؤول"),
      desc: t("A single named team leads delivery end to end, without handoffs between vendors.", "يقود فريق واحد محدد التسليم من البداية إلى النهاية دون تسليمات بين موردين."),
    },
    {
      icon: ClipboardCheck,
      title: t("Scoped During Assessment", "يُحدَّد خلال التقييم"),
      desc: t("Seniority, headcount, and reporting cadence are defined in the proposal following the technical assessment.", "تُحدَّد الخبرة وعدد الفريق وتكرار التقارير في الاقتراح الذي يلي التقييم التقني."),
    },
  ];

  return (
    <section id="about" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">{t("HOW WE STAFF ENGAGEMENTS", "كيف نُشكّل فرق التعاون")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("Senior Engineers. Direct Accountability.", "مهندسون أقدم. مساءلة مباشرة.")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: "#B8BCC2", maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            {t("Every engagement is led by a founder or senior practice lead, with a small dedicated team scoped to the work.", "يقود كل تعاون أحد المؤسسين أو قائد ممارسة أقدم، مع فريق صغير مخصص للعمل.")}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
          {staffing.map((s, index) => {
            const Icon = s.icon;
            return (
              <Card
                key={index}
                className="rounded-[4px] border-0 bg-transparent text-inherit shadow-none"
                style={{
                  backgroundColor: "#25282C",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 4,
                  padding: 20,
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, rgba(240, 241, 243,0.13), rgba(240, 241, 243,0.03))",
                    border: "1px solid rgba(240, 241, 243,0.2)",
                    marginBottom: 16,
                  }}
                >
                  <Icon style={{ width: 20, height: 20, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <h4 className="font-body font-[500]" style={{ fontSize: 16, color: "#FFFFFF", marginBottom: 8 }}>
                  {s.title}
                </h4>
                <p className="font-body font-[300]" style={{ fontSize: 14, color: "#B8BCC2", lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </Card>
            );
          })}
        </div>

        <Card
          className="rounded-[4px] border-0 bg-transparent text-inherit shadow-none mt-3"
          style={{
            backgroundColor: "#25282C",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 4,
            padding: 20,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(240, 241, 243,0.13), rgba(240, 241, 243,0.03))",
              border: "1px solid rgba(240, 241, 243,0.2)",
            }}
          >
            <User style={{ width: 22, height: 22, color: "#F0F1F3" }} />
          </div>
          <div>
            <div className="font-mono font-[400] uppercase" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#F0F1F3", marginBottom: 4 }}>
              {t("FOUNDER", "المؤسس")}
            </div>
            <a
              href="https://www.linkedin.com/in/ehsidawi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-[500] transition-colors duration-200"
              style={{ fontSize: 16, color: "#FFFFFF" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#B8BCC2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            >
              {t("Ehsan Nidawi", "إحسان نداوي")}
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Team;
