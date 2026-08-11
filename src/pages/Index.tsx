import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ExecutiveDashboard from "@/components/ExecutiveDashboard";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhySilxor from "@/components/WhySilxor";
import SelectedWork from "@/components/SelectedWork";
import ProcessFlow from "@/components/ProcessFlow";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import StartEngagement from "@/components/StartEngagement";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <div id="home">
          <Hero />
        </div>
        <AnimatedSection delay={0.1}>
          <StatsBar />
        </AnimatedSection>
        <AnimatedSection>
          <ExecutiveDashboard />
        </AnimatedSection>
        <div id="services">
          <AnimatedSection>
            <Services />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <Industries />
        </AnimatedSection>
        <AnimatedSection>
          <WhySilxor />
        </AnimatedSection>
        <AnimatedSection>
          <SelectedWork />
        </AnimatedSection>
        <div id="process">
          <AnimatedSection>
            <ProcessFlow />
          </AnimatedSection>
        </div>
        <div id="faq">
          <AnimatedSection>
            <FAQ />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <Team />
        </AnimatedSection>
        <div id="contact">
          <AnimatedSection>
            <StartEngagement />
          </AnimatedSection>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
