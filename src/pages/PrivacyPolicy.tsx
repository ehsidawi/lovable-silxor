import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Data Controller",
    body: "Silxor Group Holding, New York, USA.\nContact: privacy@silxor.com",
  },
  {
    title: "2. Data We Collect",
    body: "We collect information you provide directly name, organization, email address, and message content submitted through our assessment request and contact forms. We do not collect payment information directly on this site.",
  },
  {
    title: "3. How We Use Your Data",
    body: "Contact information is used solely to respond to assessment requests and service inquiries. We do not sell, share, or transfer personal data to third parties for marketing purposes.",
  },
  {
    title: "4. Data Residency",
    body: "All data submitted through Silxor systems is processed and stored within our sovereign infrastructure. No personal data is routed through international third party cloud providers without explicit consent.",
  },
  {
    title: "5. Cookies",
    body: "This site uses no advertising or tracking cookies. We may use anonymous analytics to understand site performance. No personally identifiable data is captured through cookies.",
  },
  {
    title: "6. Your Rights",
    body: "You have the right to request access to, correction of, or deletion of personal data we hold. Submit requests to privacy@silxor.com. We respond within 30 days.",
  },
  {
    title: "7. Contact",
    body: "For all privacy inquiries: privacy@silxor.com\nSilxor Group Holding, New York, USA",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-spacing" style={{ paddingTop: 120 }}>
        <div className="container-content" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="section-eyebrow">LEGAL</div>
          <h1 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 8 }}>
            Privacy Policy
          </h1>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: "#B8BCC2", marginBottom: 48 }}>
            Last updated: March 2026
          </p>

          {sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 className="font-body font-[500]" style={{ fontSize: 17, color: "#FFFFFF", marginBottom: 12 }}>
                {section.title}
              </h2>
              <p className="font-body font-[300]" style={{ fontSize: 15, color: "#B8BCC2", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
