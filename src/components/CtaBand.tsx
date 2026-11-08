import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
type CtaBandProps = {eyebrow?:string;title?:string;lead?:string;};
const CtaBand = ({eyebrow="Engage",title="Start With a Technical Assessment",lead="No cost. Tell us what you are building and we scope how to deliver it."}:CtaBandProps) => (
  <section className="dark-band py-14 md:py-20"><div className="container-content grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
    <div><span className="r-eyebrow">{eyebrow}</span><h2 className="r-title mt-5 max-w-2xl">{title}</h2><p className="r-lead mt-5 max-w-xl">{lead}</p></div>
    <div className="flex flex-wrap gap-3 lg:justify-end"><Button asChild className="h-12 rounded-sm px-6"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="r-cta-ghost">hello@silxor.com</a></div>
  </div></section>
);
export default CtaBand;
