import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { servicePillars } from "@/data/services";
const pillars = servicePillars.map(s => ({icon: s.icon, label: s.name, to: s.path, line: s.outcome}));
const SystemMap = () => (
  <section id="capabilities" className="r-section scroll-mt-20">
    <div className="container-content">
      <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><span className="r-eyebrow">01 / Capabilities</span><h2 className="r-title mt-4 max-w-xl">Every layer.<br />One accountable partner.</h2></div>
        <p className="r-lead max-w-sm">A coordinated approach to the disciplines you need, with ownership and handover responsibilities agreed from the start.</p>
      </div>
      <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p,i) => <SmartLink key={p.label} to={p.to} className="service-pillar group flex flex-col bg-card p-7 transition-colors hover:bg-secondary">
          <div className="flex items-center justify-between"><p.icon className="h-7 w-7 text-forest" strokeWidth={1.5} aria-hidden="true" /><span className="font-mono text-xs text-muted-foreground">0{i+1}</span></div>
          <h3 className="mt-8 font-display text-xl font-bold">{p.label}</h3><p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{p.line}</p><ArrowUpRight className="ml-auto mt-4 h-5 w-5 text-forest transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
        </SmartLink>)}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
        <SmartLink to="/services/private-ai" className="inline-flex items-center gap-2">Private AI platforms <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink>
        <SmartLink to="/services/product-team" className="inline-flex items-center gap-2">Full product team delivery <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink>
      </div>
    </div>
  </section>
);
export default SystemMap;
