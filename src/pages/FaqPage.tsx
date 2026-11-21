import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import QuestionList from "@/components/QuestionList";
import CtaBand from "@/components/CtaBand";
import { faqs } from "@/data/site";
export default function FaqPage() {
  return (
    <PageShell
      title="Frequently Asked Questions | Silxor"
      description="Answers about Silxor enterprise IT services, engagement scope, private AI, data hosting, service levels and getting started."
      path="/faq"
    >
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lead="Direct answers to the questions senior leaders ask first."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <section className="ed-section">
        <div className="container-content ed-questions-layout">
          <div>
            <p className="ed-kicker">Common decisions</p>
            <h2 className="ed-h2">Scope. People. Responsibilities.</h2>
          </div>
          <QuestionList questions={faqs} />
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
