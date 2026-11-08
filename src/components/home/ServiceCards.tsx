import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { servicePillars } from "@/data/services";

const featured = servicePillars.slice(0, 4);

const ServiceCards = () => (
  <section id="services-overview" className="r-section scroll-mt-24" aria-labelledby="services-overview-title"><div className="container-content">
    <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
      <div><span className="r-eyebrow">Services</span><h2 id="services-overview-title" className="r-title mt-4 max-w-2xl">Technology services for systems that cannot fail</h2></div>
      <p className="r-lead max-w-xl lg:justify-self-end">From strategy and infrastructure to security and identity, one senior team plans, builds and operates the estate.</p>
    </div>
    <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{featured.map(s => <li key={s.slug} className="r-card flex flex-col p-8 lg:p-10">
      <span className="r-node h-14 w-14"><s.icon className="h-6 w-6" strokeWidth={1.25} aria-hidden="true" /></span>
      <h3 className="mt-8 text-[22px] font-medium leading-snug">{s.navLabel}</h3>
      <p className="r-lead mt-3 line-clamp-3 flex-1">{s.outcome}</p>
      <SmartLink to={s.path} className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium" aria-label={`Learn more about ${s.navLabel}`}>Learn More <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink>
    </li>)}</ul>
  </div></section>
);
export default ServiceCards;
