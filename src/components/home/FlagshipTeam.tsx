import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
const flagship = services.find(s => s.flagship) ?? services[0];
const FlagshipTeam = () => (
  <section className="dark-band py-14 md:py-20"><div className="container-content grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
    <div><span className="r-eyebrow">02 / Full Product Delivery</span><h2 className="r-title mt-5">Not just developers.<br />Your entire senior product team.</h2><p className="r-lead mt-5">{flagship.outcome}</p>
      <figure className="mt-7 border-l-2 border-primary pl-5"><blockquote className="text-sm leading-relaxed text-on-ink">“After going through a lot of development vendors, we hired Silxor. We are still working with them today.”</blockquote><figcaption className="mt-3 font-mono text-[10px] uppercase text-on-ink-muted">Founder · Private Client</figcaption></figure>
      <Button asChild className="mt-8 h-12 rounded-sm px-6"><SmartLink to={flagship.path}>See the Full Product Team <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
    </div>
    <ul className="grid gap-x-8 sm:grid-cols-2">{flagship.blocks.map((b,i) => <li key={b.title} className="flex gap-4 border-t border-on-ink/20 py-6"><span className="font-mono text-xs text-primary">0{i+1}</span><div><h3 className="font-display text-base font-bold text-on-ink">{b.title}</h3><p className="mt-3 text-sm leading-relaxed text-on-ink-muted">{b.line}</p></div></li>)}</ul>
  </div></section>
);
export default FlagshipTeam;
