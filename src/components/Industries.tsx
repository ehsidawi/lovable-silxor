import {
  Landmark,
  Shield,
  Banknote,
  Smartphone,
  LineChart,
  HeartPulse,
  Zap,
  Factory,
  Truck,
  Plane,
  ShoppingBag,
  GraduationCap,
  Radio,
  Cpu,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";

const Industries = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Landmark, label: t("Government", "الحكومة") },
    { icon: Shield, label: t("Defense", "الدفاع") },
    { icon: Banknote, label: t("Banking", "المصارف") },
    { icon: Smartphone, label: t("Digital Banking", "الخدمات الرقمية") },
    { icon: LineChart, label: t("Financial Services", "الخدمات المالية") },
    { icon: HeartPulse, label: t("Healthcare", "الرعاية الصحية") },
    { icon: Zap, label: t("Energy", "الطاقة") },
    { icon: Factory, label: t("Manufacturing", "التصنيع") },
    { icon: Truck, label: t("Transportation", "النقل") },
    { icon: Plane, label: t("Airports", "المطارات") },
    { icon: ShoppingBag, label: t("Retail", "التجزئة") },
    { icon: GraduationCap, label: t("Education", "التعليم") },
    { icon: Radio, label: t("Telecommunications", "الاتصالات") },
    { icon: Cpu, label: t("Critical Infrastructure", "بنية حيوية") },
  ];

  return (
    <section id="industries" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 20 }}>
          <div className="section-eyebrow">{t("INDUSTRIES", "القطاعات")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("Built for Regulated Industries", "مصمم للقطاعات المنظّمة")}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-[2px]">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Card
                key={it.label}
                className="surface-elevated rounded-none border-0 bg-transparent text-inherit shadow-none group"
                style={{ padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 4,
                    border: "1px solid rgba(240, 241, 243,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon style={{ width: 16, height: 16, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.15em", color: "#F0F1F3" }}
                >
                  {it.label}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
