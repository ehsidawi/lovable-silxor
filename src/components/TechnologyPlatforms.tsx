import { technologies } from "@/data/technologies";
import { vendorMarks } from "@/data/vendorMarks";
import { technologyAnchor } from "@/data/technologyGroups";
import TechnologyMap from "@/components/TechnologyMap";
const TechnologyPlatforms = () => (
 <section className="r-section technology-workbench" aria-labelledby="technologies-title"><div className="container-content"><div className="tile-head"><span className="r-eyebrow">The toolkit</span><h2 id="technologies-title" className="r-title">The right tools.<br /><span className="text-primary">For your world.</span></h2><p className="r-lead">Technologies and platforms we work with, selected for your environment, integration needs and operating requirements. Architecture comes first, not a fixed vendor stack.</p></div><TechnologyMap />
 <ul className="platform-grid">{technologies.map(name=>{const mark=vendorMarks[name];return <li id={technologyAnchor(name)} key={name} className="platform-tile flex min-h-28 scroll-mt-28 flex-col items-center justify-center gap-3 bg-card px-4 py-4 text-center text-foreground">{mark?<svg role="img" aria-label={`${name} logo`} viewBox="0 0 24 24" className="h-7 w-7 fill-current"><title>{name}</title><path d={mark.path}/></svg>:<span className="flex h-7 items-center font-display text-sm font-bold" aria-hidden="true">{name.split(" (")[0]}</span>}<span className="text-xs font-semibold leading-relaxed">{name}</span></li>;})}</ul>
 <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">Product names and logos are trademarks of their respective owners. Their use indicates technologies we work with and does not imply partnership, endorsement or certification.</p></div></section>
);
export default TechnologyPlatforms;
