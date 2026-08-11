import { Separator } from "@/components/ui/separator";

const ProcessFlow = () => {

  const stages = [
    { title: "Request Assessment", description: "Technical evaluation and feasibility analysis" },
    { title: "Architect & Design", description: "Infrastructure planning and security review" },
    { title: "Engineer & Build", description: "Development and integration with quality assurance" },
    { title: "Deploy & Host", description: "Production deployment to resilient, monitored infrastructure" },
    { title: "Manage & Iterate", description: "Continuous monitoring and improvement" },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <div className="section-eyebrow justify-center">{"PROCESS"}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF" }}>
            {"How We Deliver"}
          </h2>
          <p className="font-body font-[300] mx-auto" style={{ fontSize: 16, color: "#B8BCC2", maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            {"A five stage delivery model applied to every engagement, from infrastructure to AI, with clear owners and measurable outcomes at each stage."}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            <Separator className="absolute top-4 left-0 right-0 bg-transparent h-px" style={{ height: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between">
              {stages.map((stage, index) => (
                <div key={index} className="relative flex flex-col items-center" style={{ flex: 1, maxWidth: 200 }}>
                  <div className="relative z-10 flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(240, 241, 243,0.4)", backgroundColor: "#141414" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#F0F1F3" }} />
                  </div>
                  <div className="text-center" style={{ marginTop: 24 }}>
                    <div className="font-mono font-[400]" style={{ fontSize: 10, color: "#F0F1F3", letterSpacing: "0.15em", marginBottom: 8 }}>
                      {"STAGE"} {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#FFFFFF", marginBottom: 6 }}>{stage.title}</h3>
                    <p className="font-body font-[300]" style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.6 }}>{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          {stages.map((stage, index) => (
            <div key={index} className="flex gap-2" style={{ marginBottom: index < stages.length - 1 ? 32 : 0 }}>
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(240, 241, 243,0.4)", backgroundColor: "#141414" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#F0F1F3" }} />
                </div>
                {index < stages.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="flex-1 bg-transparent w-px h-auto"
                    style={{ width: 1, backgroundColor: "rgba(255,255,255,0.08)", marginTop: 4 }}
                  />
                )}
              </div>
              <div style={{ paddingBottom: 8 }}>
                <div className="font-mono font-[400]" style={{ fontSize: 10, color: "#F0F1F3", letterSpacing: "0.15em", marginBottom: 4 }}>
                  {"STAGE"} {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-body font-[500]" style={{ fontSize: 15, color: "#FFFFFF", marginBottom: 4 }}>{stage.title}</h3>
                <p className="font-body font-[300]" style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.6 }}>{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
