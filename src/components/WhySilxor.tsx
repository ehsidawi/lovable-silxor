import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhySilxor = () => {

  const rows = [
    { label: "Strategy" },
    { label: "Engineering" },
    { label: "Security" },
    { label: "Cloud" },
    { label: "AI" },
    { label: "Managed Services" },
    { label: "24×7 Operations" },
    { label: "End to End" },
    { label: "One Partner" },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 20 }}>
          <div className="section-eyebrow">{"WHY SILXOR"}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}>
            {"One Partner. Full Stack. No Handoffs."}
          </h2>
          <p className="font-body font-[300]" style={{ fontSize: 14, color: "#B8BCC2", maxWidth: 620, marginTop: 8, lineHeight: 1.7 }}>
            {"Every discipline your program needs, delivered end to end by one accountable team."}
          </p>
        </div>

        <Card className="surface-elevated rounded-none border-0 bg-transparent text-inherit shadow-none" style={{ padding: 22 }}>
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
        </Card>
      </div>
    </section>
  );
};

export default WhySilxor;
