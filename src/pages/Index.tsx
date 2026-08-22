import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/Hero";
import ExecutiveDashboard from "@/components/ExecutiveDashboard";
import Services from "@/components/Services";
import ProductTeam from "@/components/ProductTeam";
import ClientProof from "@/components/ClientProof";
import Industries from "@/components/Industries";
import ProcessFlow from "@/components/ProcessFlow";
import StartEngagement from "@/components/StartEngagement";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => (
  <PageShell
    title="Silxor | Sovereign Cloud, Cybersecurity, Private AI, and Product Delivery"
    description="Silxor architects, builds, secures, and operates critical platforms for institutions and founders: full product teams, sovereign cloud, cybersecurity, private AI, identity, and managed services."
    path="/"
  >
    <div id="home">
      <Hero />
    </div>
    <AnimatedSection>
      <ExecutiveDashboard />
    </AnimatedSection>
    <AnimatedSection>
      <ProductTeam />
    </AnimatedSection>
    <div id="services">
      <AnimatedSection>
        <Services />
      </AnimatedSection>
    </div>
    <div id="industries">
      <AnimatedSection>
        <Industries />
      </AnimatedSection>
    </div>
    <div id="process">
      <AnimatedSection>
        <ProcessFlow />
      </AnimatedSection>
    </div>
    <AnimatedSection>
      <ClientProof />
    </AnimatedSection>
    <AnimatedSection>
      <StartEngagement />
    </AnimatedSection>
  </PageShell>
);

export default Index;
