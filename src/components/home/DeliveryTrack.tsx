import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
const steps=[{title:"Assess",line:"Technical evaluation and feasibility."},{title:"Architect",line:"Design and security review."},{title:"Build",line:"Engineer, integrate, assure quality."},{title:"Deploy",line:"Production on monitored infrastructure."},{title:"Manage",line:"Operate, secure, and improve."}];
/** Horizontal five stage stepper. */
const DeliveryTrack = () => (
  <section className="r-section delivery-board"><div className="container-content">
    <div className="tile-head"><span className="r-eyebrow">How we work</span><h2 className="r-title">The whole journey.<br /><span className="text-primary">Not just the build.</span></h2><div className="justify-self-start md:justify-self-end"><Button asChild variant="outline"><SmartLink to="/delivery">Delivery model <ArrowUpRight aria-hidden="true" /></SmartLink></Button></div></div>
    <ol className="stepper">{steps.map((s,i) => <li key={s.title}><span className="stepper-dot">0{i+1}</span><h3>{s.title}</h3><p>{s.line}</p></li>)}</ol>
  </div></section>
);
export default DeliveryTrack;
