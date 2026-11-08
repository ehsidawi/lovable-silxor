import PageShell from "@/components/layout/PageShell";
import HomeHero from "@/components/home/HomeHero";
import IndustryMatrix from "@/components/home/IndustryMatrix";
import ProcessOverview from "@/components/home/ProcessOverview";
import TechnologyPlatforms from "@/components/TechnologyPlatforms";
import HomeCta from "@/components/home/HomeCta";
import ServiceCards from "@/components/home/ServiceCards";
import HomeFaq from "@/components/home/HomeFaq";
import AnimatedSection from "@/components/AnimatedSection";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";
import CapabilityMap from "@/components/CapabilityMap";
import { diagrams } from "@/data/diagrams";

const Index = () => {
  return (
    <PageShell
      title="Silxor | Enterprise Technology Consultancy"
      description="Silxor Group Holding plans, builds, secures and operates enterprise IT, infrastructure, cybersecurity, identity, software, private AI and hardware."
      path="/"
    >
      <HomeHero />
      <ServiceCards />
      <AnimatedSection><ArchitectureDiagram data={diagrams.estate} /></AnimatedSection>
      <AnimatedSection><CapabilityMap /></AnimatedSection>
      <AnimatedSection>
        <IndustryMatrix />
      </AnimatedSection>
      <AnimatedSection>
        <ProcessOverview />
      </AnimatedSection>
      <AnimatedSection>
        <TechnologyPlatforms />
      </AnimatedSection>
      <AnimatedSection>
        <HomeFaq />
      </AnimatedSection>
      <AnimatedSection>
        <HomeCta />
      </AnimatedSection>
    </PageShell>
  );
};

export default Index;
