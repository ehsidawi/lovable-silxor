import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
const steps=[{title:"Assess",line:"Technical evaluation and feasibility."},{title:"Architect",line:"Design and security review."},{title:"Build",line:"Engineer, integrate, assure quality."},{title:"Deploy",line:"Production on monitored infrastructure."},{title:"Manage",line:"Operate, secure, and improve."}];
const DeliveryTrack = () => (
  <section className="r-section delivery-board"><div className="container-content grid gap-10 lg:grid-cols-[1fr_1.3fr]">
    <div><span className="r-eyebrow">04 / How we work</span><h2 className="r-title mt-5">The whole journey.<br /><span className="text-primary">Not just the build.</span></h2><SmartLink to="/delivery" className="mt-6 inline-flex min-h-11 items-center gap-3 font-mono text-xs uppercase">Delivery model <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink></div>
    <ol>{steps.map((s,i) => <li key={s.title} className="delivery-step grid grid-cols-[36px_1fr] items-start gap-5 border-t border-border py-6 sm:grid-cols-[36px_1fr_1fr]"><span className="pt-1 font-mono text-sm text-primary">0{i+1}</span><h3 className="font-display text-2xl font-bold">{s.title}</h3><p className="col-start-2 text-sm leading-relaxed text-muted-foreground sm:col-start-auto">{s.line}</p></li>)}</ol>
  </div></section>
);
export default DeliveryTrack;
