import TechnologyMap from "@/components/TechnologyMap";
const TechnologyPlatforms = () => (
 <section className="r-section technology-workbench" aria-labelledby="technologies-title"><div className="container-content"><div className="tile-head"><span className="r-eyebrow">The toolkit</span><h2 id="technologies-title" className="r-title">The right tools.<br /><span className="text-primary">For your world.</span></h2><p className="r-lead">Technologies and platforms we work with, selected for your environment, integration needs and operating requirements. Architecture comes first, not a fixed vendor stack.</p></div><TechnologyMap />
 <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">Product names and logos are trademarks of their respective owners. Their use indicates technologies we work with and does not imply partnership, endorsement or certification.</p></div></section>
);
export default TechnologyPlatforms;
