import SmartLink from "@/components/SmartLink";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = [
  "Government", "Defense", "Banking", "Digital Banking", "Financial Services",
  "Healthcare", "Energy", "Manufacturing", "Transportation", "Airports",
  "Retail", "Education", "Telecommunications", "Critical Infrastructure",
];

/** Sector cloud: every sector is a pill destination. */
const IndustryMatrix = () => (
  <section className="px-section px-sectors" aria-labelledby="sectors-title">
    <div className="container-content">
      <div className="px-section-head"><p className="px-mono">§ 04 · Sectors</p><h2 id="sectors-title" className="px-h2">Institutions where<br />continuity matters.</h2><p className="px-lead">We work with executive, technology, security and identity leadership in regulated institutions and established enterprises.</p></div>
      <ul className="px-sector-grid">{sectors.map((s, i) => <li key={s}><SmartLink to="/industries"><span>{String(i + 1).padStart(2, "0")}</span>{s}</SmartLink></li>)}</ul>
      <Button asChild variant="outline" className="mt-8"><SmartLink to="/industries">View sectors <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
    </div>
  </section>
);

export default IndustryMatrix;
