import { Quote, Lock, ShieldCheck, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SelectedWork from "@/components/SelectedWork";


const trust = [
  { icon: Lock, title: "Confidentiality First", line: "Client names, logos, and program details stay private unless a client asks us to publish them." },
  { icon: ShieldCheck, title: "No Invented Proof", line: "We do not publish metrics, rankings, or case facts we cannot stand behind." },
  { icon: Handshake, title: "Long Engagements", line: "Our work is measured by clients who keep us after delivery, not by logo walls." },
];

const ClientsPage = () => (
  <PageShell
    title="Clients & Proof | Silxor"
    description="How Silxor works with private and enterprise clients, including a private client testimonial published with the client's identity withheld by agreement."
    path="/clients"
  >
    <PageHero
      eyebrow="Clients"
      title="Proof Without Exposing Our Clients"
      lead="Most of our work sits under confidentiality. What we can share, we share plainly."
      crumbs={[{ label: "Home", to: "/" }, { label: "Clients" }]}
    />

    <section className="r-section">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,340px)] gap-4">
          <figure className="r-panel" style={{ borderRadius: 40, margin: 0 }}>
            <div className="r-node" style={{ width: 48, height: 48 }}>
              <Quote style={{ width: 20, height: 20, color: "#F0F1F3" }} strokeWidth={1.5} />
            </div>
            <blockquote
              className="font-display font-[500]"
              style={{ fontSize: "clamp(19px, 2.4vw, 27px)", color: "#FFFFFF", lineHeight: 1.45, marginTop: 20, maxWidth: 760 }}
            >
              After going through a lot of development vendors, we hired Silxor, and this is exactly what they are
              about. We are still working with them today. They are built to support non technical founders and give
              you a full team of experts without you having to find, vet, and hire them.
            </blockquote>
            <figcaption
              className="font-mono"
              style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8E949B", marginTop: 24 }}
            >
              Founder · Private Client
            </figcaption>
          </figure>

          <div className="r-card flex flex-col justify-center" style={{ padding: "28px 24px", borderRadius: 32 }}>
            <p className="font-body font-[300]" style={{ fontSize: 15, color: "#F0F1F3", lineHeight: 1.65 }}>
              A great product needs more than engineers. It needs senior architecture, product management, design,
              engineering, and testing working as one team.
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: 18 }}>
              {["Architecture", "Product", "Design", "Engineering", "QA"].map((t) => (
                <span key={t} className="r-pill">{t}</span>
              ))}
            </div>
            <p className="font-mono" style={{ fontSize: 10.5, letterSpacing: "0.12em", color: "#8E949B", marginTop: 18 }}>
              CLIENT IDENTITY WITHHELD BY AGREEMENT
            </p>
            <Link to="/services/product-team" className="r-cta-ghost" style={{ marginTop: 20 }}>
              Full Product Team
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: 20 }}>
          {trust.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="r-card" style={{ padding: 24, borderRadius: 28 }}>
                <div className="r-node" style={{ width: 44, height: 44 }}>
                  <Icon style={{ width: 18, height: 18, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <h2 className="font-display font-[600]" style={{ fontSize: 16.5, color: "#FFFFFF", marginTop: 14 }}>{t.title}</h2>
                <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.65, marginTop: 8 }}>
                  {t.line}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <SelectedWork />

    <CtaBand
      eyebrow="References"
      title="References Available Under NDA"
      lead="Where a client agrees, we arrange direct reference conversations during evaluation."
    />
  </PageShell>
);

export default ClientsPage;
