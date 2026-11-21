import SmartLink from "@/components/SmartLink";
import SectionHeading from "@/components/editorial/SectionHeading";
import hero from "@/assets/hero-four-layers-768.webp";
const sectors = [
  "Government",
  "Defense",
  "Banking",
  "Digital Banking",
  "Financial Services",
  "Healthcare",
  "Energy",
  "Manufacturing",
  "Transportation",
  "Airports",
  "Retail",
  "Education",
  "Telecommunications",
  "Critical Infrastructure",
];
export default function IndustryMatrix() {
  return (
    <section className="ed-section ed-sector-feature">
      <div className="container-content">
        <SectionHeading
          label="Industry context"
          title="The environment shapes the decision."
        >
          Regulatory obligations, continuity and the people responsible for them
          determine the work.
        </SectionHeading>
        <div className="ed-sector-composition">
          <figure>
            <img
              src={hero}
              alt="Interlocking mineral, metal, glass and timber material study"
              width={768}
              height={576}
              loading="lazy"
            />
            <figcaption>
              Different requirements. A considered structure.
            </figcaption>
          </figure>
          <nav aria-label="Industries" className="ed-sector-list">
            {sectors.map((s, i) => (
              <SmartLink to="/industries" key={s}>
                <span className="ed-mini">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s}
                <span aria-hidden="true">↗</span>
              </SmartLink>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
