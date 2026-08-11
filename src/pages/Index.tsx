import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import IndustriesChapter from "@/components/IndustriesChapter";
import Process from "@/components/Process";
import Patterns from "@/components/Patterns";
import WhySilxor from "@/components/WhySilxor";
import PartnersChapter from "@/components/PartnersChapter";
import Engage from "@/components/Engage";
import Footer from "@/components/Footer";
import ChapterRail from "@/components/ChapterRail";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ChapterRail />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <AnimatedSection><Capabilities /></AnimatedSection>
        <AnimatedSection><IndustriesChapter /></AnimatedSection>
        <AnimatedSection><Process /></AnimatedSection>
        <AnimatedSection><Patterns /></AnimatedSection>
        <AnimatedSection><WhySilxor /></AnimatedSection>
        <AnimatedSection><PartnersChapter /></AnimatedSection>
        <AnimatedSection><Engage /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
