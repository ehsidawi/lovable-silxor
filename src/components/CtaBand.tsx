import { ArrowRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
type CtaBandProps = { eyebrow?: string; title?: string; lead?: string; };
/** Closing band shared by every page: serif statement and booking action on the dark field. */
const CtaBand = ({ eyebrow = "Engage", title = "Start With a Technical Assessment", lead = "No cost. Tell us what you are building and we scope how to deliver it." }: CtaBandProps) => (
  <section className="mx-cta"><div className="container-content mx-cta-grid">
    <div>
      <span className="mx-label">{eyebrow}</span>
      <h2 className="r-title mt-5 max-w-3xl">{title}</h2>
    </div>
    <div>
      <p className="r-lead">{lead}</p>
      <div className="mt-8 flex flex-wrap items-center gap-6"><Button asChild><SmartLink to="/book">Book a Consultation <ArrowRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="mx-inline-link">hello@silxor.com</a></div>
    </div>
  </div></section>
);
export default CtaBand;
