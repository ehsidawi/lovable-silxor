import SmartLink from "@/components/SmartLink";
import { services, getService } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import { serviceMedia } from "@/data/serviceMedia";
export default function CapabilityMap() {
 const identity=getService("identity");
 return <section id="capabilities" className="r-section capability-gallery scroll-mt-20" aria-labelledby="capability-map-title"><div className="container-content">
  <div className="editorial-heading"><span className="r-eyebrow">02 / The expertise</span><h2 id="capability-map-title" className="r-title">Big ideas.<br /><span className="text-primary">Built for the real world.</span></h2><p className="r-lead max-w-md">From the systems people see to the infrastructure and security behind them.</p></div>
  <nav aria-label="Service capability map" className="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=>{const media=serviceMedia[s.slug];const Icon=s.icon;return <SmartLink key={s.slug} to={s.path} className="capability-link service-preview group">
    <div className="service-preview-image">{media?<img src={media.small} srcSet={`${media.small} 768w, ${media.src} 1536w`} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" alt={media.alt} width={768} height={512} loading="lazy" decoding="async" />:<div className="service-preview-drawing"><Icon className="h-20 w-20" strokeWidth={1} aria-hidden="true" /><span className="font-mono text-xs uppercase">Strategy into systems</span></div>}<span className="service-index">{String(i+1).padStart(2,"0")}</span><span className="service-open"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span></div>
    <h3 className="mt-4 font-display text-xl font-bold">{s.navLabel}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.outcome}</p>
  </SmartLink>;})}</nav>
  <div className="identity-directory mt-10 border-t border-border pt-6"><h3 className="font-display text-xl font-bold">Identity, at every layer.</h3><nav aria-label="Identity disciplines" className="mt-4 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">{identity?.blocks.map(b=><SmartLink key={b.id} to={`${identity.path}#${b.id}`} className="capability-link flex min-h-12 items-center justify-between gap-3 border-b border-border py-3 text-sm hover:text-primary"><span>{b.title}</span><ArrowUpRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" /></SmartLink>)}</nav></div>
 </div></section>;
}
