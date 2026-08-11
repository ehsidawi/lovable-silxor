import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Cloud, ShieldCheck, Fingerprint, Cpu, Server, Network,
} from "lucide-react";

const Partners = () => {

  useEffect(() => {
    document.title = "Partnership Approach | Silxor";
  }, []);

  const categories = [
    {
      icon: Cloud,
      title: "Cloud & Hyperscale Platforms",
      body: "We design and operate on major public and hybrid cloud platforms, selecting the right provider mix per engagement rather than a single fixed stack.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Threat Defense",
      body: "Our security architecture draws on established endpoint, network, and threat-detection tooling categories, integrated to fit each client's environment.",
    },
    {
      icon: Fingerprint,
      title: "Identity & Access Management",
      body: "We implement identity, access governance, and privileged access solutions using vetted platforms suited to each organization's scale and regulatory context.",
    },
    {
      icon: Cpu,
      title: "Private & Enterprise AI",
      body: "Our AI engagements are built on a mix of open and commercial model and infrastructure options, chosen based on data residency and governance requirements.",
    },
    {
      icon: Server,
      title: "Infrastructure & Data Center",
      body: "We work with infrastructure, virtualization, and storage technologies appropriate to on-premises, hybrid, and cloud-native deployments.",
    },
    {
      icon: Network,
      title: "Automation & DevOps Tooling",
      body: "Delivery pipelines are built with widely adopted infrastructure-as-code, CI/CD, and observability tooling categories.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-content" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div style={{ marginBottom: 24 }}>
          <div className="section-eyebrow">{"PARTNERSHIP APPROACH"}</div>
          <h1
            className="font-display font-[700]"
            style={{ fontSize: 40, color: "#FFFFFF", lineHeight: 1.1 }}
          >
            {"How We Build Our Technology Ecosystem"}
          </h1>
          <p
            className="font-body font-[300] mt-3"
            style={{ fontSize: 15, color: "#B8BCC2", maxWidth: 640, lineHeight: 1.7 }}
          >
            {"Silxor is platform-agnostic. We select technologies from mature, well-supported categories based on each client's requirements rather than committing to a single fixed vendor stack. Specific vendor relationships for a given engagement are confirmed during scoping."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Card
                key={c.title}
                className="surface-elevated rounded-[4px] border-0 bg-transparent text-inherit shadow-none"
                style={{ padding: 24 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 4,
                      border: "1px solid rgba(240, 241, 243,0.25)",
                      background: "rgba(240, 241, 243,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon style={{ width: 16, height: 16, color: "#F0F1F3" }} strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display font-[600]" style={{ fontSize: 15, color: "#FFFFFF" }}>
                    {c.title}
                  </h2>
                </div>
                <p
                  className="font-body font-[300]"
                  style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.7 }}
                >
                  {c.body}
                </p>
              </Card>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
