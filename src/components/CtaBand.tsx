import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
type CtaBandProps = {eyebrow?:string;title?:string;lead?:string;};
/** Signal amber closing tile shared by every page. */
const CtaBand = ({eyebrow="Engage",title="Start With a Technical Assessment",lead="No cost. Tell us what you are building and we scope how to deliver it."}:CtaBandProps) => (
  <section className="cta-tile compact-closing"><div className="container-content relative">
    <span className="r-eyebrow">{eyebrow}</span>
    <h2 className="r-title mt-6 max-w-3xl">{title}</h2>
    <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <p className="r-lead max-w-xl">{lead}</p>
      <div className="flex flex-wrap items-center gap-5"><Button asChild><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="text-sm font-semibold underline underline-offset-4">hello@silxor.com</a></div>
    </div>
  </div></section>
);
export default CtaBand;
