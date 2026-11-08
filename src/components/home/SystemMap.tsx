import { ArrowUpRight, Compass, Users, Server, ShieldCheck, Cpu, Activity, Fingerprint } from "lucide-react";
import SmartLink from "@/components/SmartLink";
const pillars = [
  {icon:ShieldCheck, label:"Cybersecurity", to:"/services/cybersecurity", line:"Controls, risk and resilience built into your platform."},
  {icon:Server, label:"Cloud & Infrastructure", to:"/services/cloud", line:"Architecture for availability, performance and control."},
  {icon:Cpu, label:"Private AI", to:"/services/private-ai", line:"Intelligence inside your environment. Your data stays yours."},
  {icon:Fingerprint, label:"Identity & Access", to:"/services/identity", line:"The right access. The right controls. Clear accountability."},
  {icon:Activity, label:"Managed Services", to:"/services/managed-services", line:"The team that builds it keeps it running."},
  {icon:Users, label:"Product Delivery", to:"/services/product-team", line:"A complete senior team from concept to production."},
];
const SystemMap = () => (
  <section id="capabilities" className="r-section scroll-mt-20">
    <div className="container-content">
      <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><span className="r-eyebrow">01 / Capabilities</span><h2 className="r-title mt-4 max-w-xl">Every layer.<br />One accountable partner.</h2></div>
        <p className="r-lead max-w-sm">Each layer is owned by the same team, so handoffs, gaps, and finger pointing disappear.</p>
      </div>
      <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p,i) => <SmartLink key={p.label} to={p.to} className="service-pillar group flex flex-col bg-card p-7 transition-colors hover:bg-secondary">
          <div className="flex items-center justify-between"><p.icon className="h-7 w-7 text-forest" strokeWidth={1.5} aria-hidden="true" /><span className="font-mono text-xs text-muted-foreground">0{i+1}</span></div>
          <h3 className="mt-8 font-display text-xl font-bold">{p.label}</h3><p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{p.line}</p><ArrowUpRight className="ml-auto mt-4 h-5 w-5 text-forest transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
        </SmartLink>)}
      </div>
      <SmartLink to="/services/advisory" className="mt-5 flex items-center gap-3 text-sm font-medium"><Compass className="h-4 w-4 text-forest" aria-hidden="true" />Strategy before spend. Explore Advisory & Strategy.<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink>
    </div>
  </section>
);
export default SystemMap;
