import PageShell from "@/components/layout/PageShell";
import HomeHero from "@/components/home/HomeHero";
import IndustryMatrix from "@/components/home/IndustryMatrix";
import DeliveryTrack from "@/components/home/DeliveryTrack";
import TechnologyPlatforms from "@/components/TechnologyPlatforms";
import HomeCta from "@/components/home/HomeCta";
import AnimatedSection from "@/components/AnimatedSection";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";
import CapabilityMap from "@/components/CapabilityMap";
import { diagrams } from "@/data/diagrams";

const Index = () => {
  return (
    <PageShell
      title="Silxor | International Technology & Talent Firm"
      description="Silxor is an international Technology & Talent firm. We build, secure and operate enterprise systems and recruit the technology teams that run them."
      path="/"
    >
      <HomeHero />
      <>
      <AnimatedSection><CapabilityMap /></AnimatedSection>
      <AnimatedSection><ArchitectureDiagram data={diagrams.estate} /></AnimatedSection>
      <AnimatedSection>
        <IndustryMatrix />
      </AnimatedSection>
      <AnimatedSection>
        <DeliveryTrack />
      </AnimatedSection>
      <AnimatedSection>
        <TechnologyPlatforms />
      </AnimatedSection>
      <AnimatedSection>
        <HomeCta />
      </AnimatedSection>
      </>
    </PageShell>
  );
};

export default Index;
