import { ArrowRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
type CtaBandProps = { eyebrow?: string; title?: string; lead?: string; to?: string; };
/** Closing band shared by every page: serif statement and booking action on the dark field. */
const CtaBand = ({ eyebrow = "Engage", title = "A confidential first conversation", lead = "Outline the decision in front of you. We respond with a considered view of scope, approach and the people required.", to = "/book" }: CtaBandProps) => (
  <section className="mx-cta"><div className="container-content mx-cta-grid">
    <div>
      <span className="mx-label">{eyebrow}</span>
      <h2 className="r-title mt-5 max-w-3xl">{title}</h2>
    </div>
    <div>
      <p className="r-lead">{lead}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4"><Button asChild><SmartLink to={to}>Book a Consultation <ArrowRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="mx-inline-link">hello@silxor.com</a></div>
    </div>
  </div></section>
);
export default CtaBand;
