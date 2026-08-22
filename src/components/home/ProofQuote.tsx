import { Quote } from "lucide-react";
import SmartLink from "@/components/SmartLink";

/** Single high impact proof excerpt; the full testimonial lives on /clients. */
const ProofQuote = () => (
  <section className="r-section">
    <div className="container-content">
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 40,
          background: "#191B1F",
          padding: "clamp(24px, 3.4vw, 48px)",
        }}
      >
        <div className="r-node" style={{ width: 44, height: 44 }}>
          <Quote style={{ width: 18, height: 18, color: "#F0F1F3" }} strokeWidth={1.5} />
        </div>
        <blockquote
          className="font-display font-[500]"
          style={{
            fontSize: "clamp(19px, 2.6vw, 30px)",
            color: "#FFFFFF",
            lineHeight: 1.4,
            letterSpacing: "-0.015em",
            margin: "20px 0 0",
            maxWidth: 860,
          }}
        >
          “They are built to support non technical founders and give you a full team of experts
          without you having to find, vet, and hire them.”
        </blockquote>
        <div
          className="flex flex-wrap items-center justify-between gap-4"
          style={{ marginTop: 26 }}
        >
          <span
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.14em", color: "#8E949B" }}
          >
            Founder · Private Client · Identity withheld by agreement
          </span>
          <SmartLink
            to="/clients"
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.16em", color: "#FFFFFF" }}
          >
            Client proof →
          </SmartLink>
        </div>
      </div>
    </div>
  </section>
);

export default ProofQuote;
