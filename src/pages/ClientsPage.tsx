import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SelectedWork from "@/components/SelectedWork";
import SmartLink from "@/components/SmartLink";
export default function ClientsPage() {
  return (
    <PageShell
      title="Clients & Proof | Silxor"
      description="How Silxor works with private and enterprise clients, including a private client testimonial published with the client's identity withheld by agreement."
      path="/clients"
    >
      <PageHero
        eyebrow="Clients"
        title="Discretion is part of the work."
        lead="Most of our work sits under confidentiality. What we can share, we share plainly."
        crumbs={[{ label: "Home", to: "/" }, { label: "Clients" }]}
      />
      <section className="ed-section">
        <figure className="container-content ed-testimony">
          <p className="ed-kicker">Client perspective</p>
          <blockquote>
            After going through a lot of development vendors, we hired Silxor,
            and this is exactly what they are about. We are still working with
            them today. They are built to support non technical founders and
            give you a full team of experts without you having to find, vet, and
            hire them.
          </blockquote>
          <figcaption>
            Founder · Private Client · Identity withheld by agreement
          </figcaption>
          <SmartLink to="/services/product-team" className="ed-text-link">
            Full Product Team ↗
          </SmartLink>
        </figure>
      </section>
      <section className="ed-section">
        <div className="container-content ed-client-standards">
          <h2 className="ed-h2">What we disclose.</h2>
          <dl className="ed-principles">
            <dt>Confidentiality First</dt>
            <dd>
              Client names, logos, and program details stay private unless a
              client asks us to publish them.
            </dd>
            <dt>No Invented Proof</dt>
            <dd>
              We do not publish metrics, rankings, or case facts we cannot stand
              behind.
            </dd>
            <dt>Long Engagements</dt>
            <dd>
              Our work is measured by clients who keep us after delivery, not by
              logo walls.
            </dd>
          </dl>
        </div>
      </section>
      <SelectedWork />
      <CtaBand
        eyebrow="References"
        title="References available under NDA."
        lead="Where a client agrees, we arrange direct reference conversations during evaluation."
      />
    </PageShell>
  );
}
