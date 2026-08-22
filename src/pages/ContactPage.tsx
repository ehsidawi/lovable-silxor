import { Mail, MapPin, Linkedin, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";


const ContactPage = () => (
  <PageShell
    title="Contact Silxor | Austin, Texas"
    description="Contact Silxor by email at hello@silxor.com, visit us at 801 Barton Springs Rd, Austin, TX 78704, or book a technical assessment directly."
    path="/contact"
  >
    <PageHero
      eyebrow="Contact"
      title="Start With a Technical Assessment"
      lead="Tell us the environment, the obligation, and the deadline. We will tell you what the work actually involves."
      crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
    />

    <section className="r-section">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] gap-4">
          <div className="r-panel" style={{ borderRadius: 40 }}>
            <span className="r-eyebrow">Direct Contact</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginTop: 22 }}>
              <a href="mailto:hello@silxor.com" className="r-card" style={{ padding: 22, borderRadius: 26 }}>
                <div className="r-node" style={{ width: 42, height: 42 }}>
                  <Mail style={{ width: 17, height: 17, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <h2 className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.18em", color: "#8E949B", marginTop: 14 }}>
                  Email
                </h2>
                <p className="font-body font-[500]" style={{ fontSize: 15, color: "#FFFFFF", marginTop: 6 }}>hello@silxor.com</p>
              </a>

              <a
                href="https://www.linkedin.com/company/silxorllc/"
                target="_blank"
                rel="noopener noreferrer"
                className="r-card"
                style={{ padding: 22, borderRadius: 26 }}
              >
                <div className="r-node" style={{ width: 42, height: 42 }}>
                  <Linkedin style={{ width: 17, height: 17, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <h2 className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.18em", color: "#8E949B", marginTop: 14 }}>
                  LinkedIn
                </h2>
                <p className="font-body font-[500]" style={{ fontSize: 15, color: "#FFFFFF", marginTop: 6 }}>@silxorllc</p>
              </a>

              <div className="r-card sm:col-span-2" style={{ padding: 22, borderRadius: 26 }}>
                <div className="r-node" style={{ width: 42, height: 42 }}>
                  <MapPin style={{ width: 17, height: 17, color: "#F0F1F3" }} strokeWidth={1.5} />
                </div>
                <h2 className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.18em", color: "#8E949B", marginTop: 14 }}>
                  Office
                </h2>
                <address className="font-body font-[300]" style={{ fontSize: 15, color: "#F0F1F3", marginTop: 6, fontStyle: "normal", lineHeight: 1.6 }}>
                  801 Barton Springs Rd
                  <br />
                  Austin, TX 78704
                </address>
              </div>
            </div>
          </div>

          <div className="r-panel flex flex-col justify-center" style={{ borderRadius: 40 }}>
            <div className="r-node" style={{ width: 48, height: 48 }}>
              <CalendarCheck style={{ width: 20, height: 20, color: "#F0F1F3" }} strokeWidth={1.5} />
            </div>
            <h2 className="r-title" style={{ marginTop: 18 }}>Book an Assessment</h2>
            <p className="font-body font-[300]" style={{ fontSize: 14, color: "#C6CAD0", lineHeight: 1.7, marginTop: 12 }}>
              A 60 minute technical session with a senior engineer. No sales script, no obligation.
            </p>
            <Link to="/book" className="r-cta" style={{ marginTop: 22, alignSelf: "flex-start" }}>
              Book an Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>

    <FAQ />

  </PageShell>
);

export default ContactPage;
