import SmartLink from "@/components/SmartLink";
import { ArrowUpRight } from "lucide-react";

const sectors = [
  "Government", "Defense", "Banking", "Digital Banking", "Financial Services",
  "Healthcare", "Energy", "Manufacturing", "Transportation", "Airports",
  "Retail", "Education", "Telecommunications", "Critical Infrastructure",
];

/** Editorial sector directory with individual accessible destinations. */
const IndustryMatrix = () => (
  <section className="r-section editorial-paper">
    <div className="container-content grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      <div><span className="r-eyebrow">03 / Your world</span><h2 className="r-title mt-5">Serious systems.<br />Human impact.</h2><p className="r-lead mt-5 max-w-sm">Enterprise and corporate IT, security and identity leaders. Regulated institutions. Growing companies.</p><SmartLink to="/industries" className="mt-6 inline-flex min-h-11 items-center gap-3 font-mono text-xs uppercase">Explore industries <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink></div>
      <ul className="grid gap-x-8 sm:grid-cols-2">{sectors.map((s,i)=><li key={s}><SmartLink to="/industries" className="flex min-h-14 items-center gap-4 border-b border-border py-3 text-sm font-medium"><span className="font-mono text-xs text-muted-foreground">{String(i+1).padStart(2,"0")}</span>{s}<ArrowUpRight className="ml-auto h-4 w-4 shrink-0" aria-hidden="true" /></SmartLink></li>)}</ul>
    </div>
  </section>
);

export default IndustryMatrix;
