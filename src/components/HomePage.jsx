import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import StatsSection from "./StatsSection";
import TechSection from "./TechSection";
import CTASection from "./CTASection";

const HomePage = () => {
  return (
    <div className="bg-[#030712] text-white overflow-hidden">

      {/* background glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <TechSection />
      <CTASection />

    </div>
  );
};

export default HomePage;