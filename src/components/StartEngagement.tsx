import { Server, Code, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const StartEngagement = () => {
  const navigate = useNavigate();

  const paths = [
    {
      icon: Server,
      title: "Infrastructure & Hosting",
      description: "Begin with a sovereignty, resilience, and compliance review of your current hosting footprint.",
    },
    {
      icon: Code,
      title: "Software or AI Project",
      description: "Share your platform or AI requirements and receive a scoped delivery proposal within 5 business days.",
    },
    {
      icon: Shield,
      title: "Strategic Advisory",
      description: "Book a 60 minute architecture or security session with a senior Silxor engineer.",
    },
  ];

  return (
    <section id="contact" className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <div className="section-eyebrow justify-center">{"ENGAGE"}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF" }}>
            {"Start With a Technical Assessment"}
          </h2>
          <p className="font-body font-[300] mx-auto" style={{ fontSize: 16, color: "#B8BCC2", maxWidth: 560, marginTop: 16, lineHeight: 1.7 }}>
            {"Every Silxor engagement starts with a no cost technical assessment. Tell us what you are building and we will scope exactly how to deliver it."}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Card key={index} className="surface-elevated flex flex-col rounded-[4px] border-0 bg-transparent text-inherit shadow-none" style={{ padding: 14 }}>
                <Icon className="mb-5" style={{ width: 32, height: 32, color: "#F0F1F3" }} strokeWidth={1.5} />
                <h3 className="font-body font-[500]" style={{ fontSize: 17, color: "#FFFFFF", marginBottom: 10 }}>
                  {path.title}
                </h3>
                <p className="font-body font-[300] flex-1" style={{ fontSize: 14, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 10 }}>
                  {path.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4" style={{ marginTop: 48 }}>
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("/book")}
            className="h-auto rounded-none font-mono font-[400] uppercase transition-all duration-200 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-inherit"
            style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              backgroundColor: "#F0F1F3",
              color: "#0B0B0B",
              padding: "16px 32px",
              minHeight: 44,
              borderRadius: 2,
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F0F1F3")}
          >
            {"Book an Assessment"}
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-auto rounded-none font-mono font-[400] uppercase transition-all duration-200 flex items-center gap-2"
          >
            <a
              href="/#solutions"
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                border: "1px solid #25282C",
                color: "#FFFFFF",
                padding: "16px 32px",
                minHeight: 44,
                borderRadius: 2,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#25282C")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {"Explore Solutions"}
            </a>
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default StartEngagement;
