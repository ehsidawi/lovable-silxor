import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WhySilxor = () => {
  const { t } = useLanguage();

  const rows = [
    { label: t("Strategy", "الاستراتيجية") },
    { label: t("Engineering", "الهندسة") },
    { label: t("Security", "الأمن") },
    { label: t("Cloud", "السحابة") },
    { label: t("AI", "الذكاء الاصطناعي") },
    { label: t("Managed Services", "الخدمات المدارة") },
    { label: t("24×7 Operations", "عمليات ٢٤×٧") },
    { label: t("End to End", "من البداية للنهاية") },
    { label: t("One Partner", "شريك واحد") },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 20 }}>
          <div className="section-eyebrow">{t("WHY SILXOR", "لماذا سيلكسور")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("One Partner. Full Stack. No Handoffs.", "شريك واحد. حزمة كاملة. بدون تسليمات.")}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#B8BCC2", maxWidth: 620, marginTop: 8, lineHeight: 1.7 }}>
            {t(
              "Every discipline your program needs, delivered end to end by one accountable team.",
              "كل تخصص يحتاجه برنامجك، يُسلّم من البداية إلى النهاية بواسطة فريق واحد مسؤول."
            )}
          </p>
        </div>

        <div className="surface-elevated" style={{ padding: 22 }}>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-[1px]"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {rows.map((r) => (
              <div
                key={r.label}
                style={{
                  background: "#141414",
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: 11, letterSpacing: "0.15em", color: "#F0F1F3" }}
                >
                  {r.label}
                </span>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 2,
                    background: "#F0F1F3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check style={{ width: 12, height: 12, color: "#0B0B0B" }} strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySilxor;
