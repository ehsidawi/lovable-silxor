const stages = [
  { title: "Assess", line: "Technical evaluation and feasibility" },
  { title: "Architect", line: "Design and security review" },
  { title: "Engineer", line: "Build, integrate, assure quality" },
  { title: "Deploy", line: "Production on monitored infrastructure" },
  { title: "Operate", line: "Continuous monitoring and improvement" },
];

const ProcessFlow = () => {
  return (
    <section className="r-section">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4" style={{ marginBottom: 40 }}>
          <span className="r-eyebrow">Process</span>
          <h2 className="r-title">Five Stages. Clear Owners.</h2>
        </div>

        <div className="r-panel" style={{ borderRadius: 40 }}>
          {/* Desktop curved rail */}
          <div className="hidden lg:block relative">
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 27,
                left: "6%",
                right: "6%",
                height: 1,
                background: "rgba(255,255,255,0.12)",
              }}
            />
            <div className="grid grid-cols-5 gap-4 relative">
              {stages.map((s, i) => (
                <div key={s.title} className="flex flex-col items-center text-center">
                  <div className="r-node font-mono" style={{ width: 56, height: 56, background: "#191B1F", fontSize: 12, color: "#F0F1F3" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-body font-[600]" style={{ fontSize: 16, color: "#FFFFFF", marginTop: 18 }}>
                    {s.title}
                  </h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13, color: "#C6CAD0", lineHeight: 1.6, marginTop: 6, maxWidth: 180 }}>
                    {s.line}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet */}
          <div className="lg:hidden flex flex-col gap-5">
            {stages.map((s, i) => (
              <div key={s.title} className="flex items-center gap-4">
                <div className="r-node font-mono" style={{ width: 44, height: 44, fontSize: 11, color: "#F0F1F3" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <h3 className="font-body font-[600]" style={{ fontSize: 15, color: "#FFFFFF" }}>{s.title}</h3>
                  <p className="font-body font-[300]" style={{ fontSize: 13, color: "#C6CAD0", lineHeight: 1.55 }}>{s.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
