import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = [
  { metric: "Availability target", starter: "Standard business hours", business: "Extended coverage", enterprise: "24/7 coverage" },
  { metric: "P1 response target", starter: "Defined per contract", business: "Defined per contract", enterprise: "Defined per contract" },
  { metric: "P2 response target", starter: "Defined per contract", business: "Defined per contract", enterprise: "Defined per contract" },
  { metric: "P3 response target", starter: "Defined per contract", business: "Defined per contract", enterprise: "Defined per contract" },
  { metric: "Backup frequency", starter: "Weekly", business: "Daily", enterprise: "Continuous, where supported" },
  { metric: "Recovery time objective (RTO)", starter: "Defined per contract", business: "Defined per contract", enterprise: "Defined per contract" },
  { metric: "Recovery point objective (RPO)", starter: "Defined per contract", business: "Defined per contract", enterprise: "Defined per contract" },
  { metric: "Support coverage", starter: "Business hours", business: "Extended hours", enterprise: "24/7" },
  { metric: "Support channels", starter: "Email", business: "Email + phone", enterprise: "Email + phone + dedicated channel" },
];

const SLADoc = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-spacing" style={{ paddingTop: 120 }}>
        <div className="container-content" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-eyebrow">SERVICE LEVEL FRAMEWORK</div>
          <h1 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 8 }}>
            Service Level Commitment Framework
          </h1>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 24 }}>
            This page describes the structure of service level commitments we offer across support tiers. It is a template,
            not a record of an executed agreement. Exact figures, response times, and recovery objectives are negotiated
            and confirmed in the master service agreement for each engagement.
          </p>

          <Card
            className="rounded-[4px] border-0 shadow-none text-inherit"
            style={{ backgroundColor: "#25282C", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}
          >
            <Table style={{ width: "100%", borderCollapse: "collapse" }}>
              <TableHeader>
                <TableRow style={{ backgroundColor: "#25282C" }} className="border-0 hover:bg-transparent">
                  {["Metric", "Starter tier", "Business tier", "Enterprise tier"].map((h) => (
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
            All figures above are illustrative starting points and are subject to change based on scope, infrastructure, and
            regulatory requirements. Final service levels, credit terms, and measurement methodology are set out in the signed
            agreement. Questions: hello@silxor.com
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SLADoc;
