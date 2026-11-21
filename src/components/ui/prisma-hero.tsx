import { ArrowRight, ArrowDownRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import { practices } from "@/data/practices";
import heroImage from "@/assets/hero-four-layers.webp";
import heroSmall from "@/assets/hero-four-layers-768.webp";

/** Editorial opening: oversize plain proposition beside a material study of four interlocking layers. */
export const PrismaHero = () => (
  <section className="ed-hero" aria-labelledby="home-title">
    <div className="container-content ed-hero-grid">
      <div className="ed-hero-copy">
        <p className="ed-kicker">Silxor · We build. We protect. We staff.</p>
        <h1 id="home-title" className="ed-hero-title">We help organizations run, defend, govern and staff their technology<span aria-hidden="true">.</span></h1>
        <p className="ed-hero-lead">Four practices with equal weight: information technology, cybersecurity, information security and recruitment. One senior team accountable for how they fit together.</p>
        <div className="ed-hero-actions">
          <Button asChild size="lg"><SmartLink to="/book">Book a Consultation <ArrowRight aria-hidden="true" /></SmartLink></Button>
          <a href="#capabilities" className="ed-text-link">See the four practices <ArrowDownRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </div>
      <figure className="ed-hero-figure">
        <img src={heroImage} srcSet={`${heroSmall} 768w, ${heroImage} 1536w`} sizes="(min-width: 1024px) 52vw, 100vw" width={1536} height={1152} alt="Four interlocking slabs of travertine, blackened steel, frosted glass and oak, stacked in raking afternoon light." fetchPriority="high" />
        <figcaption>
          <ol className="ed-layer-key">
            {[...practices].reverse().map(p => <li key={p.id}><span>{p.code}</span>{p.name}</li>)}
          </ol>
          <p>Four layers, keyed into one structure.</p>
        </figcaption>
      </figure>
    </div>
  </section>
);
