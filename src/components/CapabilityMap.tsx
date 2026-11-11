import SmartLink from "@/components/SmartLink";
import { services, getService } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import { serviceMedia } from "@/data/serviceMedia";
/** Bento service directory: one feature tile with imagery, the rest as compact tiles. */
export default function CapabilityMap() {
 const identity = getService("identity");
 return <section id="capabilities" className="r-section capability-gallery scroll-mt-24" aria-labelledby="capability-map-title"><div className="container-content">
  <div className="tile-head"><span className="r-eyebrow">The expertise</span><h2 id="capability-map-title" className="r-title">Big ideas.<br /><span className="text-primary">Built for the real world.</span></h2><p className="r-lead">From the systems people see to the infrastructure and security behind them.</p></div>
  <nav aria-label="Service capability map" className="service-bento">{services.map((s, i) => {
   const media = serviceMedia[s.slug]; const Icon = s.icon; const feature = i === 0 && media;
   return <SmartLink key={s.slug} to={s.path} className={`capability-link service-tile ${feature ? "service-tile--feature" : ""}`}>
    {feature && <img src={media.src} srcSet={`${media.small} 768w, ${media.src} 1536w`} sizes="(min-width: 1024px) 50vw, 100vw" alt={media.alt} width={1536} height={1024} loading="lazy" decoding="async" />}
    <div className="service-tile-top"><span className="service-tile-num">{String(i + 1).padStart(2, "0")}</span><span className="service-tile-arrow"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span></div>
    {!feature && <Icon className="h-8 w-8 text-primary" strokeWidth={1.4} aria-hidden="true" />}
    <h3>{s.navLabel}</h3><p>{s.outcome}</p>
   </SmartLink>;
  })}</nav>
  <div className="identity-strip"><h3 className="font-display text-2xl font-semibold">Identity, at every layer.</h3><nav aria-label="Identity disciplines" className="pill-cloud mt-5">{identity?.blocks.map(b => <SmartLink key={b.id} to={`${identity.path}#${b.id}`} className="capability-link" style={{ fontSize: 15, minHeight: 44 }}>{b.title}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink>)}</nav></div>
 </div></section>;
}
