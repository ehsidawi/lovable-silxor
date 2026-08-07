import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = [
  { metric: "Uptime SLA", starter: "99.9%", business: "99.99%", enterprise: "99.995%" },
  { metric: "P1 Response", starter: "<4 hours", business: "<1 hour", enterprise: "<15 minutes" },
  { metric: "P2 Response", starter: "<8 hours", business: "<4 hours", enterprise: "<1 hour" },
  { metric: "P3 Response", starter: "<24 hours", business: "<8 hours", enterprise: "<4 hours" },
  { metric: "Backup Frequency", starter: "Weekly", business: "Daily", enterprise: "Continuous" },
  { metric: "RTO", starter: "<4 hours", business: "<30 minutes", enterprise: "<30 seconds" },
  { metric: "RPO", starter: "24 hours", business: "1 hour", enterprise: "15 minutes" },
  { metric: "NOC Coverage", starter: "Business hours", business: "16/5", enterprise: "24/7" },
  { metric: "Support Channels", starter: "Email", business: "Email + Phone", enterprise: "Email + Phone + Dedicated Slack" },
];

const SLADoc = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-spacing" style={{ paddingTop: 120 }}>
        <div className="container-content" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-eyebrow">SERVICE LEVELS</div>
          <h1 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 8 }}>
            SLA Documentation
          </h1>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 48 }}>
            Contractual service level commitments by infrastructure tier. Every figure below is written into the master service agreement.
          </p>

          <Card
            className="rounded-[4px] border-0 shadow-none text-inherit"
            style={{ backgroundColor: "#25282C", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}
          >
            <Table style={{ width: "100%", borderCollapse: "collapse" }}>
              <TableHeader>
                <TableRow style={{ backgroundColor: "#25282C" }} className="border-0 hover:bg-transparent">
                  {["Metric", "Sovereign Starter", "Sovereign Business", "Sovereign Enterprise"].map((h) => (
                    <TableHead
                      key={h}
                      className="font-mono font-[400] uppercase text-left h-auto align-top"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        color: "#F0F1F3",
                        padding: "14px 20px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {h}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={i}
                    className="border-0 hover:bg-transparent"
                    style={{ transition: "background 200ms" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <TableCell className="font-body font-[400] align-top" style={{ fontSize: 14, color: "#FFFFFF", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      {row.metric}
                    </TableCell>
                    <TableCell className="font-body font-[300] align-top" style={{ fontSize: 14, color: "#B8BCC2", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      {row.starter}
                    </TableCell>
                    <TableCell className="font-body font-[300] align-top" style={{ fontSize: 14, color: "#B8BCC2", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      {row.business}
                    </TableCell>
                    <TableCell className="font-body font-[300] align-top" style={{ fontSize: 14, color: "#B8BCC2", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      {row.enterprise}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <p className="font-body font-[300] text-center" style={{ fontSize: 13, color: "#B8BCC2", fontStyle: "italic", marginTop: 48 }}>
            SLA credits apply for downtime exceeding committed thresholds. Full SLA terms and credit calculation methodology available upon contract execution. Contact: hello@silxor.com
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SLADoc;
