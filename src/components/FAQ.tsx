import QuestionList from "@/components/QuestionList";
import SmartLink from "@/components/SmartLink";
import { faqs } from "@/data/site";
const FAQ = () => <section className="ed-section"><div className="container-content ed-questions-layout"><div><span className="ed-kicker">FAQ</span><h2 className="ed-h2">Answers before you decide</h2><SmartLink to="/faq" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">Read all frequently asked questions</SmartLink></div><QuestionList questions={faqs.slice(0,5)} /></div></section>;
export default FAQ;
