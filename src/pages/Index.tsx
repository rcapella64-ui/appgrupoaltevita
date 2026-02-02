import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { WhoAreYou } from "@/components/WhoAreYou";
import Features from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Stats } from "@/components/Stats";
import { LoveSection } from "@/components/LoveSection";
import { Trust } from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhoAreYou />
      <Features />
      <Pricing />
      <Stats />
      <LoveSection />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
