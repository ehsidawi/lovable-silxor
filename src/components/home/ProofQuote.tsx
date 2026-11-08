import { Quote } from "lucide-react";
import SmartLink from "@/components/SmartLink";

/** Single high impact proof excerpt; the full testimonial lives on /clients. */
const ProofQuote = () => (
  <section className="r-section">
    <div className="container-content">
      <div
        style={{
          border: "1px solid hsl(var(--border))",
          borderRadius: 4,
          background: "hsl(var(--background))",
          padding: 48,
        }}
      >
        <div className="r-node" style={{ width: 44, height: 44 }}>
          <Quote style={{ width: 18, height: 18, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
        </div>
        <blockquote
          className="font-display font-[500]"
          style={{
            fontSize: 30,
            color: "hsl(var(--foreground))",
            lineHeight: 1.4,
            letterSpacing: 0,
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
            style={{ fontSize: 11, letterSpacing: 0, color: "hsl(var(--muted-foreground))" }}
          >
            Founder · Private Client · Identity withheld by agreement
          </span>
          <SmartLink
            to="/clients"
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: 0, color: "hsl(var(--foreground))" }}
          >
            Client proof →
          </SmartLink>
        </div>
      </div>
    </div>
  </section>
);

export default ProofQuote;
