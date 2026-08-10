import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Who We Are",
    body: "Silxor, 801 Barton Springs Rd, Austin, TX 78704.\nContact: hello@silxor.com",
  },
  {
    title: "2. Information We Collect",
    body: "When you submit our assessment request or contact form, we collect the information you provide: full name, organization, work email, optional phone number, service interest, timeline, and your project summary. We do not collect payment information on this site.",
  },
  {
    title: "3. How Submissions Are Handled",
    body: "Unless a specific backend integration has been configured for this deployment, form submissions are not stored on a server. Instead, the form prepares an email containing your submitted details and asks you to send it to hello@silxor.com from your own email client. If an integration is configured, submissions are sent to that endpoint instead and this policy will be updated accordingly.",
  },
  {
    title: "4. How We Use Your Data",
    body: "Information you submit is used solely to respond to your assessment request or inquiry. We do not sell or share personal data with third parties for marketing purposes.",
  },
  {
    title: "5. Analytics and Cookies",
    body: "This site does not run analytics or tracking cookies by default. If analytics tooling is added in the future, this policy will be updated to describe what is collected and why.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of personal data you have shared with us by contacting hello@silxor.com. We aim to respond within 30 days.",
  },
  {
    title: "7. Contact",
    body: "For all privacy inquiries: hello@silxor.com\nSilxor, 801 Barton Springs Rd, Austin, TX 78704",
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
