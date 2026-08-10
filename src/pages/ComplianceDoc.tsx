import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blocks = [
  {
    title: "ISO/IEC 27001 & NIST CSF Alignment",
    status: "FRAMEWORK ALIGNED",
    statusColor: "#F0F1F3",
    body: "Our security practices are designed in alignment with ISO/IEC 27001 and NIST Cybersecurity Framework control families covering information security management, risk treatment, and incident response. This describes our design approach, not an achieved third-party certification. Clients requiring a specific certification should confirm current status and scope directly with us.",
  },
  {
    title: "SOC 2 Control Objectives",
    status: "CONTROL MAPPING",
    statusColor: "#F0F1F3",
    body: "Where engagements require SOC 2-aligned practices, we map delivery controls to the Security, Availability, and Confidentiality trust service criteria. We do not currently hold a SOC 2 attestation report; timelines for pursuing one are discussed per client requirement.",
  },
  {
    title: "Infrastructure Resilience",
    status: "TARGET DESIGN",
    statusColor: "#F0F1F3",
    body: "Production workloads are architected for redundancy and resilience appropriate to each client's contracted tier. Specific facilities, redundancy ratings, and uptime targets are defined per engagement and documented in the relevant statement of work — not asserted generally on this page.",
  },
  {
    title: "GDPR-Aligned Data Handling",
    status: "IN PROGRESS",
    statusColor: "#F0F1F3",
    body: "Silxor data handling practices are being aligned with GDPR principles, including data minimization, consent management, and data subject rights fulfillment, for engagements involving EU resident data. Formal compliance status should be verified as part of contracting for regulated engagements.",
  },
];

const ComplianceDoc = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-spacing" style={{ paddingTop: 120 }}>
        <div className="container-content" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-eyebrow">COMPLIANCE APPROACH</div>
          <h1 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 8 }}>
            Compliance & Control Alignment Framework
          </h1>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 48 }}>
            This page describes how we design and align our controls with recognized industry frameworks. It is not a
            certification, audit report, or attestation. Any specific compliance claim relevant to a project is confirmed
            in writing during scoping and contracting.
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
            For questions about our current compliance posture or documentation needs for a specific engagement, contact: hello@silxor.com
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComplianceDoc;
