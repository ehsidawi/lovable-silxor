import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
const steps=[{title:"Assess",line:"Technical evaluation and feasibility."},{title:"Architect",line:"Design and security review."},{title:"Build",line:"Engineer, integrate, assure quality."},{title:"Deploy",line:"Production on monitored infrastructure."},{title:"Manage",line:"Operate, secure, and improve."}];
const DeliveryTrack = () => (
  <section className="r-section bg-secondary"><div className="container-content">
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="r-eyebrow">03 / Delivery Model</span><h2 className="r-title mt-4 max-w-xl">One path from assessment to operations.</h2></div><SmartLink to="/delivery" className="inline-flex items-center gap-2 text-sm font-semibold">Delivery model <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink></div>
    <ol className="grid gap-5 lg:grid-cols-5">{steps.map((s,i) => <li key={s.title} className="grid grid-cols-[40px_1fr] gap-4 border-t border-border pt-5 lg:block"><span className="font-display text-3xl font-bold text-forest">0{i+1}</span><div><h3 className="font-display text-xl font-bold lg:mt-8">{s.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.line}</p></div></li>)}</ol>
  </div></section>
);
export default DeliveryTrack;
