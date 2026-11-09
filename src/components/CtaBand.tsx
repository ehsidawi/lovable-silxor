import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
type CtaBandProps = {eyebrow?:string;title?:string;lead?:string;};
const CtaBand = ({eyebrow="Engage",title="Start With a Technical Assessment",lead="No cost. Tell us what you are building and we scope how to deliver it."}:CtaBandProps) => (
  <section className="editorial-finale py-12 md:py-16"><div className="container-content grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
    <div><span className="r-eyebrow">{eyebrow}</span><h2 className="r-title mt-5 max-w-2xl">{title}</h2><p className="r-lead mt-5 max-w-xl">{lead}</p></div>
    <div className="flex flex-col items-start gap-5 lg:items-end"><span className="finale-seal" aria-hidden="true">BUILD <span>+</span> PROTECT</span><Button asChild className="h-12 px-6"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="text-sm underline underline-offset-4">hello@silxor.com</a></div>
  </div></section>
);
export default CtaBand;
