import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import SmartLink from "@/components/SmartLink";
import { practices, inquiryHref } from "@/data/practices";
export default function ContactPage() {
  return (
    <PageShell
      title="Contact Silxor | Enterprise Technology Consultancy"
      description="Contact Silxor at hello@silxor.com or +1 979 500 3390, or prepare a consultation email about your technology or talent needs."
      path="/contact"
    >
      <PageHero
        eyebrow="Contact"
        title="A confidential conversation."
        lead="Outline your environment, objectives and constraints. We review your request and reply by email."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="ed-section">
        <div className="container-content ed-contact">
          <div>
            <p className="ed-kicker">Direct contact</p>
            <h2 className="ed-h2">Reach Silxor.</h2>
            <a href="mailto:hello@silxor.com" className="ed-contact-address">
              hello@silxor.com
            </a>
            <p className="mt-5 text-muted-foreground">+1 979 500 3390</p>
            <a
              href="https://www.linkedin.com/company/silxorllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="ed-text-link mt-5"
            >
              Silxor on LinkedIn ↗
            </a>
          </div>
          <div>
            <p className="ed-kicker">Choose the mandate</p>
            <p className="ed-lead">
              Start with the practice that fits your request. Your email draft
              includes the selected practice and your context.
            </p>
            <ul className="ed-linked-list">
              {practices.map((p) => (
                <li key={p.id}>
                  <SmartLink to={inquiryHref(p.id)}>
                    <h3>{p.name}</h3>
                    <span>Book a Consultation</span>
                    <b aria-hidden="true">↗</b>
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FAQ />
    </PageShell>
  );
}
