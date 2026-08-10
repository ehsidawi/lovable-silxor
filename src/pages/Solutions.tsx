import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Smartphone, Landmark, ShieldCheck, Cpu, Server, Fingerprint,
} from "lucide-react";

const Solutions = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Solutions for Banking, Digital Banking & Government | Silxor";
  }, []);

  const cards = [
    {
      icon: Smartphone,
      title: t("Digital Banking", "الخدمات المصرفية الرقمية"),
      items: ["Core Banking", "Identity Platform", "Fraud Detection", "Cyber Defense", "Cloud Modernization"],
    },
    {
      icon: Landmark,
      title: t("Government", "الحكومة"),
      items: ["Citizen Identity", "National Digital Identity", "Zero Trust", "Sovereign Cloud", "FedRAMP", "Mission Critical Systems"],
    },
    {
      icon: ShieldCheck,
      title: t("Financial Compliance", "الامتثال المالي"),
      items: ["PCI DSS", "GLBA", "SOX", "AML", "KYC", "Risk", "Audit"],
    },
    {
      icon: Cpu,
      title: t("AI Platform", "منصة الذكاء الاصطناعي"),
      items: ["Enterprise AI", "Private AI", "AI Governance", "LLM Security", "Agentic AI", "Automation"],
    },
    {
      icon: Server,
      title: t("Infrastructure", "البنية التحتية"),
      items: ["Data Centers", "Hybrid Cloud", "Networking", "Storage", "Disaster Recovery", "Business Continuity"],
    },
    {
      icon: Fingerprint,
      title: t("Identity", "الهوية"),
      items: ["CIAM", "IAM", "IGA", "PAM", "SSO", "MFA", "Passwordless"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-spacing" style={{ paddingTop: 56 }}>
          <div className="container-content">
            <div className="section-eyebrow">{t("SOLUTIONS", "الحلول")}</div>
            <h1
              className="font-display font-[700]"
              style={{ fontSize: 40, lineHeight: 1.1, color: "#FFFFFF", maxWidth: 900 }}
            >
              {t(
                "Secure Digital Platforms for Banking & Government",
                "منصات رقمية آمنة للمصارف والحكومة"
              )}
            </h1>
            <p
              className="font-body font-[300] mt-4"
              style={{ fontSize: 16, color: "#B8BCC2", maxWidth: 720, lineHeight: 1.7 }}
            >
              {t(
                "Compliant, AI enabled digital ecosystems engineered for financial institutions and the public sector.",
                "منظومات رقمية متوافقة ومُمكَّنة بالذكاء الاصطناعي للمؤسسات المالية والقطاع العام."
              )}
            </p>
            <Button
              asChild
              variant="ghost"
              className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit mt-6"
            >
              <Link
                to="/book"
                className="font-mono font-[400] uppercase transition-all duration-200 inline-flex items-center"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  backgroundColor: "#F0F1F3",
                  color: "#0B0B0B",
                  padding: "14px 28px",
                  borderRadius: 2,
                  minHeight: 44,
                }}
              >
                {t("Book an Assessment", "احجز تقييماً")}
              </Link>
            </Button>
          </div>
        </section>

        {/* Solution cards */}
        <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <Card
                    key={c.title}
                    className="surface-elevated rounded-[4px] border-0 bg-transparent text-inherit shadow-none"
                    style={{ padding: 20 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
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
                      <h3 className="font-display font-[600]" style={{ fontSize: 16, color: "#FFFFFF" }}>
                        {c.title}
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {c.items.map((it) => (
                        <li
                          key={it}
                          className="font-mono"
                          style={{
                            fontSize: 11,
                            color: "#F0F1F3",
                            letterSpacing: "0.05em",
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
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Horizontal capability rail */}
        <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-content">
            <div className="section-eyebrow">{t("CAPABILITY RAIL", "خط القدرات")}</div>
            <Card
              className="surface-elevated rounded-[4px] border-0 bg-transparent text-inherit shadow-none"
              style={{ padding: 22 }}
            >
              <div className="relative" style={{ height: 6, background: "#25282C", borderRadius: 3 }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, #B8BCC2, #F0F1F3, #FFFFFF)",
                    borderRadius: 3,
                  }}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
                {[
                  { n: 1, k: t("Advise", "استشارة") },
                  { n: 2, k: t("Architect", "تصميم") },
                  { n: 3, k: t("Engineer", "هندسة") },
                  { n: 4, k: t("Secure", "تأمين") },
                  { n: 5, k: t("Operate", "تشغيل") },
                  { n: 6, k: t("Optimize", "تحسين") },
                ].map((s) => (
                  <div key={s.n} className="flex flex-col items-start">
                    <div
                      className="font-mono"
                      style={{ fontSize: 9, letterSpacing: "0.2em", color: "#B8BCC2" }}
                    >
                      STEP {String(s.n).padStart(2, "0")}
                    </div>
                    <div className="font-display font-[600]" style={{ fontSize: 16, color: "#FFFFFF" }}>
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
