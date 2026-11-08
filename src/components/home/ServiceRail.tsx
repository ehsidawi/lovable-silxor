import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import SmartLink from "@/components/SmartLink";
const ServiceRail = () => (
  <section className="r-section"><div className="container-content grid gap-9 lg:grid-cols-[1fr_1.5fr]">
    <div><span className="r-eyebrow">Practices</span><h2 className="r-title mt-4">Seven practices,<br />one contract.</h2><SmartLink to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">All services <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink></div>
    <div>{services.map((s,i) => <SmartLink key={s.slug} to={s.path} className="group flex items-center gap-4 border-b border-border py-5 hover:text-forest"><span className="font-mono text-xs text-muted-foreground">0{i+1}</span><span className="flex-1"><span className="font-display text-lg font-bold">{s.name}</span><span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{s.outcome}</span></span><ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" /></SmartLink>)}</div>
  </div></section>
);
export default ServiceRail;
