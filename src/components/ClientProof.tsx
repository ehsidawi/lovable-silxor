import { Quote } from "lucide-react";

const ClientProof = () => {
  return (
    <section id="client-proof" className="r-section">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4" style={{ marginBottom: 28 }}>
          <span className="r-eyebrow">Client Proof</span>
          <h2 className="r-title">In Their Words.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,340px)] gap-4">
          <div className="r-panel" style={{ borderRadius: 40 }}>
            <div className="r-node" style={{ width: 48, height: 48 }}>
              <Quote style={{ width: 20, height: 20, color: "#F0F1F3" }} strokeWidth={1.5} />
            </div>
            <blockquote
              className="font-display font-[500]"
              style={{
                fontSize: "clamp(19px, 2.4vw, 27px)",
                color: "#FFFFFF",
                lineHeight: 1.45,
                marginTop: 20,
                maxWidth: 760,
              }}
            >
              After going through a lot of development vendors, we hired Silxor, and this is exactly
              what they are about. We are still working with them today. They are built to support
              non technical founders and give you a full team of experts without you having to find,
              vet, and hire them.
            </blockquote>
            <figcaption
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8E949B",
                marginTop: 24,
              }}
            >
              Founder · Private Client
            </figcaption>
          </div>

          <div className="r-card flex flex-col justify-center" style={{ padding: "28px 24px", borderRadius: 32 }}>
            <p
              className="font-body font-[300]"
              style={{ fontSize: 15, color: "#F0F1F3", lineHeight: 1.65 }}
            >
              A great product needs more than engineers. It needs senior architecture, product
              management, design, engineering, and testing working as one team.
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: 18 }}>
              {["Architecture", "Product", "Design", "Engineering", "QA"].map((t) => (
                <span key={t} className="r-pill">{t}</span>
              ))}
            </div>
            <p
              className="font-mono"
              style={{ fontSize: 10.5, letterSpacing: "0.12em", color: "#8E949B", marginTop: 18 }}
            >
              CLIENT IDENTITY WITHHELD BY AGREEMENT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProof;
