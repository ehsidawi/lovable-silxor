import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import QuestionList from "@/components/QuestionList";
import CtaBand from "@/components/CtaBand";
import { faqs } from "@/data/site";
export default function FaqPage() { return <PageShell title="Frequently Asked Questions | Silxor" description="Answers about Silxor enterprise IT services, engagement scope, private AI, data hosting, service levels and getting started." path="/faq"><PageHero eyebrow="FAQ" title="Frequently asked questions" lead="Clear answers before you commit to an engagement." crumbs={[{label:"Home",to:"/"},{label:"FAQ"}]} /><section className="r-section"><div className="container-content max-w-5xl"><QuestionList questions={faqs} /></div></section><CtaBand /></PageShell>; }
