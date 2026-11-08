import { useEffect } from "react";
import PageShell from "@/components/layout/PageShell";
import HomeHero from "@/components/home/HomeHero";
import WordmarkStatement from "@/components/home/WordmarkStatement";
import SystemMap from "@/components/home/SystemMap";
import FlagshipTeam from "@/components/home/FlagshipTeam";
import ServiceRail from "@/components/home/ServiceRail";
import IndustryMatrix from "@/components/home/IndustryMatrix";
import DeliveryTrack from "@/components/home/DeliveryTrack";
import ProofQuote from "@/components/home/ProofQuote";
import TechnologyPlatforms from "@/components/TechnologyPlatforms";
import WhySilxor from "@/components/WhySilxor";
import HomeCta from "@/components/home/HomeCta";
import AnimatedSection from "@/components/AnimatedSection";
import { prefetchPrimaryRoutes } from "@/lib/routePrefetch";

const Index = () => {
  useEffect(() => {
    prefetchPrimaryRoutes();
  }, []);

  return (
    <PageShell
      title="Silxor | Enterprise Technology Consultancy"
      description="Silxor Group Holding plans, builds, secures and operates enterprise IT, infrastructure, cybersecurity, identity, software, private AI and hardware."
      path="/"
    >
      <HomeHero />
      <WordmarkStatement />
      <AnimatedSection>
        <SystemMap />
      </AnimatedSection>
      <AnimatedSection>
        <FlagshipTeam />
      </AnimatedSection>
      <AnimatedSection>
        <ServiceRail />
      </AnimatedSection>
      <AnimatedSection>
        <IndustryMatrix />
      </AnimatedSection>
      <AnimatedSection>
        <DeliveryTrack />
      </AnimatedSection>
      <AnimatedSection>
        <WhySilxor />
      </AnimatedSection>
      <AnimatedSection>
        <ProofQuote />
      </AnimatedSection>
      <AnimatedSection>
        <TechnologyPlatforms />
      </AnimatedSection>
      <AnimatedSection>
        <HomeCta />
      </AnimatedSection>
    </PageShell>
  );
};

export default Index;
