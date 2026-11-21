import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import SmartLink from "@/components/SmartLink";
import EditorialDocument from "@/components/editorial/EditorialDocument";
const sections = [
  {
    id: "contact",
    title: "Who we are",
    body: "Silxor Group Holding. Contact hello@silxor.com about this notice or information you share with us.",
  },
  {
    id: "information",
    title: "Information you provide",
    body: "The consultation form collects selected service areas and identity disciplines, company, role, company size range, environment, timeline, a short description, name, work email, optional phone, preferred contact method, preferred meeting time windows and time zone. You can also contact us directly by email. The website does not take payments.",
  },
  {
    id: "purpose",
    title: "How correspondence is used",
    body: "The consultation form prepares a validated email draft. You send it through your email app to hello@silxor.com. The website does not store new consultation requests. Correspondence is used to review your needs, respond by email and coordinate a potential conversation or engagement. Choosing phone contact helps us plan a conversation; the first reply is by email. Do not send passwords, private keys, financial records or sensitive production data through initial contact channels. Project data handling requirements are agreed separately before work begins.",
  },
  {
    id: "storage",
    title: "Site storage and connection data",
    body: "Your theme preference is stored in your browser as silxor-theme. The consultation draft stays in page memory only and is not saved to browser storage. The form opens your chosen email app only after validation. Sending and delivery are handled by your email provider. The hosting platform measures page visits and performance. Media, font and hosting providers receive normal connection metadata. See the Cookie notice for details.",
  },
  {
    id: "retention",
    title: "Retention and data requests",
    body: "Correspondence may be retained for inquiry handling and relevant legal or contractual requirements. Contact hello@silxor.com to request access, correction or deletion of information you provided. Applicable requirements and the nature of the request determine what can be fulfilled.",
  },
  {
    id: "external",
    title: "Other services",
    body: "LinkedIn and your email provider operate independently. Your email provider processes correspondence you choose to send. Review their policies before sharing information. This notice describes the public website, not a client system or a project specific data processing agreement.",
  },
];
export default function PrivacyPolicy() {
  return (
    <PageShell
      title="Privacy Policy | Silxor"
      description="How Silxor collects and uses consultation requests, contact details and browser preferences. Contact hello@silxor.com for privacy questions."
      path="/privacy"
    >
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="What we collect, why we use it and how to request access, correction or deletion."
        crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      />
      <EditorialDocument sections={sections} label="Privacy topics" />
      <section className="ed-section">
        <nav
          aria-label="Privacy resources"
          className="container-content ed-guidance"
        >
          <SmartLink to="/cookies">Cookie notice</SmartLink>
          <SmartLink to="/terms">Terms of Use</SmartLink>
          <a href="mailto:hello@silxor.com?subject=Privacy%20inquiry">
            Email a privacy inquiry
          </a>
        </nav>
      </section>
    </PageShell>
  );
}
