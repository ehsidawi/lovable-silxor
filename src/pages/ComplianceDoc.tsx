import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blocks = [
  {
    title: "ISO/IEC 27001:2022",
    status: "CERTIFIED",
    statusColor: "#2A9D5C",
    body: "Silxor Group Holding holds ISO/IEC 27001:2022 certification covering information security management across all service delivery operations. Annual third party audit conducted. Certificate available upon request under NDA.",
  },
  {
    title: "SOC 2 Type II",
    status: "ATTESTED",
    statusColor: "#F0F1F3",
    body: "SOC 2 Type II attestation covering Security, Availability, and Confidentiality trust service criteria. Report available to enterprise clients upon execution of NDA.",
  },
  {
    title: "Tier IV Infrastructure",
    status: "CERTIFIED",
    statusColor: "#2A9D5C",
    body: "All production workloads are hosted on Uptime Institute Tier IV certified infrastructure at Equinix Ashburn, VA. Fault tolerance, N+2 power redundancy, and concurrent maintainability are standard.",
  },
  {
    title: "GDPR Readiness",
    status: "READY",
    statusColor: "#F0F1F3",
    body: "Silxor data handling practices are aligned with GDPR requirements including data minimization, consent management, and data subject rights fulfillment. Applicable to engagements involving EU resident data.",
  },
];

const ComplianceDoc = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-spacing" style={{ paddingTop: 120 }}>
        <div className="container-content" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-eyebrow">COMPLIANCE</div>
          <h1 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 8 }}>
            Compliance Documentation
          </h1>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 48 }}>
            Independently audited controls across information security, data residency, and operational resilience. Evidence packages are released to enterprise clients under NDA.
          </p>

          <div className="space-y-6">
            {blocks.map((block, i) => (
              <Card
                key={i}
                className="surface-elevated rounded-[4px] border-0 bg-transparent text-inherit shadow-none"
                style={{ padding: 32 }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                  <h2 className="font-body font-[500]" style={{ fontSize: 17, color: "#FFFFFF" }}>
                    {block.title}
                  </h2>
                  <Badge
                    className="badge-pill rounded-[2px] border-0 bg-transparent p-0 font-normal hover:bg-transparent font-mono font-[400] uppercase"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.15em",
                      color: block.statusColor,
                      border: `1px solid ${block.statusColor}40`,
                      padding: "3px 10px",
                      borderRadius: 2,
                    }}
                  >
                    {block.status}
                  </Badge>
                </div>
                <p className="font-body font-[300]" style={{ fontSize: 15, color: "#B8BCC2", lineHeight: 1.8 }}>
                  {block.body}
                </p>
              </Card>
            ))}
          </div>

          <p className="font-body font-[300] text-center" style={{ fontSize: 13, color: "#B8BCC2", fontStyle: "italic", marginTop: 48 }}>
            For compliance documentation requests, audit support, or to obtain certificates under NDA, contact: compliance@silxor.com
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComplianceDoc;
