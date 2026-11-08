import { technologies } from "@/data/technologies";
const TechnologyPlatforms = () => (
  <section className="r-section" aria-labelledby="technologies-title">
    <div className="container-content">
      <span className="r-eyebrow">Technology ecosystem</span>
      <h2 id="technologies-title" className="r-title mt-4 max-w-3xl">Technologies and platforms we work with</h2>
      <p className="r-lead mt-5 max-w-2xl">Selected for your environment, integration needs and operating requirements. Architecture comes first, not a fixed vendor stack.</p>
      <ul className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map(name => <li key={name} className="flex min-h-20 items-center bg-card px-6 py-5 font-body text-base font-semibold text-foreground">{name}</li>)}
      </ul>
    </div>
  </section>
);
export default TechnologyPlatforms;
