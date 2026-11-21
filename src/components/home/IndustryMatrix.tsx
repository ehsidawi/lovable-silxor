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
  <section className="r-section editorial-paper">
    <div className="container-content">
      <div className="tile-head"><span className="r-eyebrow">Sectors</span><h2 className="r-title">Institutions where<br />continuity matters.</h2><p className="r-lead">We work with executive, technology, security and identity leadership in regulated institutions and established enterprises.</p></div>
      <ul className="pill-cloud mt-10">{sectors.map((s, i) => <li key={s}><SmartLink to="/industries"><span>{String(i + 1).padStart(2, "0")}</span>{s}</SmartLink></li>)}</ul>
      <Button asChild variant="outline" className="mt-8"><SmartLink to="/industries">View sectors <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
    </div>
  </section>
);

export default IndustryMatrix;
