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
import { Card } from "@/components/ui/card";

const Industries = () => {

  const items = [
    { icon: Landmark, label: "Government" },
    { icon: Shield, label: "Defense" },
    { icon: Banknote, label: "Banking" },
    { icon: Smartphone, label: "Digital Banking" },
    { icon: LineChart, label: "Financial Services" },
    { icon: HeartPulse, label: "Healthcare" },
    { icon: Zap, label: "Energy" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Truck, label: "Transportation" },
    { icon: Plane, label: "Airports" },
    { icon: ShoppingBag, label: "Retail" },
    { icon: GraduationCap, label: "Education" },
    { icon: Radio, label: "Telecommunications" },
    { icon: Cpu, label: "Critical Infrastructure" },
  ];

  return (
    <section id="industries" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 20 }}>
          <div className="section-eyebrow">{"INDUSTRIES"}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}>
            {"Built for Regulated Industries"}
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
