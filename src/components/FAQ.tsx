import QuestionList from "@/components/QuestionList";
import SmartLink from "@/components/SmartLink";
import { faqs } from "@/data/site";
const FAQ = () => <section className="r-section"><div className="container-content grid gap-8 lg:grid-cols-[300px_1fr]"><div><span className="r-eyebrow">FAQ</span><h2 className="r-title mt-4">Answers before you decide</h2><SmartLink to="/faq" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">Read all frequently asked questions</SmartLink></div><QuestionList questions={faqs.slice(0,5)} /></div></section>;
export default FAQ;
