import { technologies } from "@/data/technologies";
import { vendorMarks } from "@/data/vendorMarks";
import { technologyAnchor } from "@/data/technologyGroups";
import TechnologyMap from "@/components/TechnologyMap";
const TechnologyPlatforms = () => (
 <section className="r-section" aria-labelledby="technologies-title"><div className="container-content"><span className="r-eyebrow">Platform experience</span><h2 id="technologies-title" className="r-title mt-4 max-w-3xl">Technologies and platforms we work with</h2><p className="r-lead mt-5 max-w-2xl">Selected for your environment, integration needs and operating requirements. Architecture comes first, not a fixed vendor stack.</p><TechnologyMap />
 <ul className="mt-12 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3 lg:grid-cols-5">{technologies.map(name=>{const mark=vendorMarks[name];return <li id={technologyAnchor(name)} key={name} className="platform-tile flex min-h-36 scroll-mt-28 flex-col items-center justify-center gap-5 bg-card px-4 py-6 text-center text-foreground">{mark?<svg role="img" aria-label={`${name} logo`} viewBox="0 0 24 24" className="h-9 w-9 fill-current"><title>{name}</title><path d={mark.path}/></svg>:<span className="flex h-9 items-center font-display text-base font-bold" aria-hidden="true">{name.split(" (")[0]}</span>}<span className="text-sm font-semibold leading-relaxed">{name}</span></li>;})}</ul>
 <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">Product names and logos are trademarks of their respective owners. Their use indicates technologies we work with and does not imply partnership, endorsement or certification.</p></div></section>
);
export default TechnologyPlatforms;
