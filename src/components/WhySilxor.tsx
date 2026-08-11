import { Check } from "lucide-react";

const capabilities = [
  "Strategy", "Engineering", "Security", "Cloud", "AI",
  "Managed Services", "24×7 Operations", "End to End", "One Partner",
];

const WhySilxor = () => {
  return (
    <section className="r-section">
      <div className="container-content">
        <div className="r-panel" style={{ borderRadius: 40 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-12 items-center">
            <div className="flex flex-col items-start gap-4">
              <span className="r-eyebrow">Why Silxor</span>
              <h2 className="r-title">One Partner. Full Stack.</h2>
              <p className="r-lead">Every discipline your program needs, no handoffs.</p>
            </div>

            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              {capabilities.map((c) => (
                <span key={c} className="r-pill" style={{ padding: "9px 16px 9px 9px", fontSize: 12 }}>
                  <span
                    className="r-node"
                    style={{ width: 22, height: 22, background: "#F0F1F3", border: "none" }}
                  >
                    <Check style={{ width: 12, height: 12, color: "#0B0B0B" }} strokeWidth={3} />
                  </span>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySilxor;
