import TechnologyDirectory from "@/components/editorial/TechnologyDirectory";
import SectionHeading from "@/components/editorial/SectionHeading";
export default function TechnologyPlatforms() {
  return (
    <section className="ed-section" aria-labelledby="technologies-title">
      <div className="container-content">
        <SectionHeading
          label="Technology directory"
          title="Selected for the requirement."
          id="technologies-title"
        >
          Technologies and platforms we work with, selected for your
          environment, integration needs and operating requirements.
          Architecture comes first, not a fixed vendor stack.
        </SectionHeading>
        <TechnologyDirectory />
        <p className="ed-note">
          Product names and logos are trademarks of their respective owners.
          Their use indicates technologies we work with and does not imply
          partnership, endorsement or certification.
        </p>
      </div>
    </section>
  );
}
