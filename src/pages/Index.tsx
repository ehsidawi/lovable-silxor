import PageShell from "@/components/layout/PageShell";
import HomeHero from "@/components/home/HomeHero";
import CapabilityIndex from "@/components/home/CapabilityIndex";
import IndustryMatrix from "@/components/home/IndustryMatrix";
import DeliveryTrack from "@/components/home/DeliveryTrack";
import TechnologyPlatforms from "@/components/TechnologyPlatforms";
import HomeCta from "@/components/home/HomeCta";
import AnimatedSection from "@/components/AnimatedSection";
import ReferenceBrief from "@/components/editorial/ReferenceBrief";
import { diagrams } from "@/data/diagrams";

const Index = () => {
  return (
    <PageShell
      title="Silxor | Information Technology, Cybersecurity, Information Security & Recruitment"
      description="Silxor helps organizations run, defend, govern and staff their technology through four equal practices: information technology, cybersecurity, information security and recruitment."
      path="/"
    >
      <HomeHero />
      <>
      <CapabilityIndex />
      <AnimatedSection><ReferenceBrief data={diagrams.estate} /></AnimatedSection>
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
