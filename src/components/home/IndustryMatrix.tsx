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
      <div className="tile-head"><span className="r-eyebrow">Your world</span><h2 className="r-title">Serious systems.<br />Human impact.</h2><p className="r-lead">Enterprise and corporate IT, security and identity leaders. Regulated institutions. Growing companies.</p></div>
      <ul className="pill-cloud mt-10">{sectors.map((s, i) => <li key={s}><SmartLink to="/industries"><span>{String(i + 1).padStart(2, "0")}</span>{s}</SmartLink></li>)}</ul>
      <Button asChild variant="outline" className="mt-8"><SmartLink to="/industries">Explore industries <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
    </div>
  </section>
);

export default IndustryMatrix;
