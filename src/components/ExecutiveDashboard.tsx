import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";

const Ring = ({ pct, label, value }: { pct: number; label: string; value: string }) => {
  const r = 42;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: 108, height: 108 }}>
        <svg width="108" height="108" viewBox="0 0 108 108">
          <circle cx="54" cy="54" r={r} stroke="#25282C" strokeWidth="4" fill="none" />
          <circle
            cx="54"
            cy="54"
            r={r}
            stroke="#F0F1F3"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${dash} ${c}`}
            strokeLinecap="butt"
            transform="rotate(-90 54 54)"
            style={{ transition: "stroke-dasharray 1.2s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display font-[700]"
            style={{ fontSize: 20, color: "#FFFFFF" }}
          >
            {value}
          </span>
        </div>
      </div>
      <span
        className="font-mono uppercase mt-2"
        style={{ fontSize: 10, letterSpacing: "0.18em", color: "#B8BCC2" }}
      >
        {label}
      </span>
    </div>
  );
};

const Bar = ({ label, pct }: { label: string; pct: number }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span
        className="font-mono uppercase"
        style={{ fontSize: 10, letterSpacing: "0.15em", color: "#F0F1F3" }}
      >
        {label}
      </span>
      <span
        className="font-mono"
        style={{ fontSize: 10, color: "#B8BCC2" }}
      >
        {pct}%
      </span>
    </div>
    <div style={{ height: 4, background: "#25282C", borderRadius: 2, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: "linear-gradient(90deg, #B8BCC2, #F0F1F3)",
          transition: "width 1.4s ease",
        }}
      />
    </div>
  </div>
);

const ExecutiveDashboard = () => {
  const { t } = useLanguage();

  const kpis = [
    { prefix: "$", value: 350, suffix: "M+", label: t("Program Value", "قيمة البرامج") },
    { value: 250, suffix: "K+", label: t("Enterprise Users", "المستخدمون") },
    { value: 20, suffix: "+", label: t("Engagements", "المشاريع") },
    { value: 15, suffix: "+", label: t("Industries", "القطاعات") },
  ];

  const rings = [
    { pct: 99.99, label: t("Availability", "التوفر"), value: "99.99%" },
    { pct: 100, label: t("Operations", "العمليات"), value: "24×7" },
    { pct: 100, label: t("Security First", "الأمن أولاً"), value: "100%" },
    { pct: 95, label: t("AI Enabled", "الذكاء الاصطناعي"), value: "AI" },
  ];

  const bars = [
    { label: t("Advisory & Strategy", "الاستشارات"), pct: 92 },
    { label: t("Infrastructure & Cloud", "البنية والسحابة"), pct: 88 },
    { label: t("Cybersecurity & GRC", "الأمن السيبراني"), pct: 96 },
    { label: t("Managed Services", "الخدمات المدارة"), pct: 84 },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 20 }}>
          <div className="section-eyebrow">{t("BY THE NUMBERS", "الأرقام")}</div>
          <h2
            className="font-display font-[700]"
            style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}
          >
            {t("Enterprise Delivery at Scale", "تسليم مؤسسي بمقياس واسع")}
          </h2>
        </div>

        {/* KPI counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {kpis.map((k, i) => (
            <div key={i} className="surface-elevated" style={{ padding: "20px 18px" }}>
              <div
                className="font-display font-[700]"
                style={{ fontSize: 34, color: "#FFFFFF", lineHeight: 1.1 }}
              >
                <AnimatedCounter
                  value={k.value}
                  prefix={k.prefix}
                  suffix={k.suffix}
                />
              </div>
              <div
                className="font-mono uppercase mt-2"
                style={{ fontSize: 10, letterSpacing: "0.18em", color: "#B8BCC2" }}
              >
                {k.label}
              </div>
            </div>
          ))}
        </div>

        {/* Rings + practice bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] mt-[2px]">
          <div className="surface-elevated" style={{ padding: 22 }}>
            <div
              className="font-mono uppercase mb-4"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: "#F0F1F3" }}
            >
              {t("OPERATING POSTURE", "الوضع التشغيلي")}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {rings.map((r) => (
                <Ring key={r.label} {...r} />
              ))}
            </div>
          </div>
          <div className="surface-elevated" style={{ padding: 22 }}>
            <div
              className="font-mono uppercase mb-4"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: "#F0F1F3" }}
            >
              {t("PRACTICE MATURITY", "نضج الممارسات")}
            </div>
            <div className="flex flex-col gap-3">
              {bars.map((b) => (
                <Bar key={b.label} {...b} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveDashboard;
