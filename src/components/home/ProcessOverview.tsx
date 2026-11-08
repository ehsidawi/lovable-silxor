import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { methodology } from "@/data/site";
const ProcessOverview = () => (
  <section className="r-section bg-secondary"><div className="container-content">
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="r-eyebrow">Working together</span><h2 className="r-title mt-4 max-w-xl">One path from review to operations.</h2></div><SmartLink to="/delivery" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold">Delivery model <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink></div>
    <ol className="grid gap-7 lg:grid-cols-5">{methodology.map((s,i) => <li key={s.id} className="grid grid-cols-[40px_1fr] gap-4 border-t border-border pt-6 lg:block"><span className="font-display text-3xl text-forest">0{i+1}</span><div><h3 className="font-display text-xl lg:mt-7">{s.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p></div></li>)}</ol>
  </div></section>
);
export default ProcessOverview;
