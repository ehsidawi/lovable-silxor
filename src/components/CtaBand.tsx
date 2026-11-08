import { ArrowUpRight, Check } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import { servicePillars } from "@/data/services";
type CtaBandProps = {eyebrow?:string;title?:string;lead?:string;};
const CtaBand = ({eyebrow="Contact",title="Start With a Technical Review",lead="Tell us what you are building and we scope how to deliver it."}:CtaBandProps) => (
  <section className="r-section"><div className="container-content grid items-center gap-12 lg:grid-cols-2">
    <div><span className="r-eyebrow">{eyebrow}</span><h2 className="r-title mt-5 max-w-2xl">{title}</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">{servicePillars.map(s => <li key={s.slug} className="flex items-center gap-3 text-body-soft"><span className="r-node h-7 w-7"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>{s.navLabel}</li>)}</ul>
    </div>
    <div className="r-card p-8 md:p-12">
      <h3 className="text-[22px] font-medium">Book a Consultation</h3>
      <p className="r-lead mt-4">{lead}</p>
      <div className="mt-8 flex flex-wrap gap-4"><Button asChild size="lg"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="r-cta-ghost">hello@silxor.com</a></div>
    </div>
  </div></section>
);
export default CtaBand;
