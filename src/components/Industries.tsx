import {
  Landmark, Shield, Banknote, Smartphone, LineChart, HeartPulse, Zap,
  Factory, Truck, Plane, ShoppingBag, GraduationCap, Radio, Cpu,
} from "lucide-react";

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

const Industries = () => {
  return (
    <section id="industries" className="r-section">
      <div className="container-content">
        <div className="r-panel">
          <div className="flex flex-col items-start gap-4" style={{ marginBottom: 24 }}>
            <span className="r-eyebrow">Industries</span>
            <h2 className="r-title">Built for Regulated Sectors</h2>
          </div>
          <ul className="flex flex-wrap gap-2.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <li key={it.label} className="r-pill" style={{ padding: "9px 16px 9px 10px", fontSize: 12 }}>
                  <span className="r-node" style={{ width: 24, height: 24 }}>
                    <Icon style={{ width: 12, height: 12, color: "#F0F1F3" }} strokeWidth={1.6} />
                  </span>
                  {it.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Industries;
