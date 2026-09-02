import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/hero (2).mp4";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center px-4 pt-20">
<div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        src={backgroundVideo}
        className="w-full h-full object-cover"
      />
</div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#030712]"></div>

      <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"></div>

      <motion.div
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        className="relative z-20 max-w-4xl text-center px-4 sm:px-6"
      >
        <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-xs sm:text-sm">
          Future of Aerial Intelligence
        </span>

        <h1 className="mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-black leading-snug sm:leading-tight">
          Transforming Industries With
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Smart Drone Technology
          </span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Advanced drone training, aerial surveillance and intelligent
          solutions designed for the future.
        </p>

        <div className="mt-8 mb-6 sm:mb-0 flex flex-wrap gap-3 sm:gap-4 justify-center">

          <button 
          onClick={()=> navigate("/aboutus#choose-path")}
        
          className="px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-base rounded-xl bg-blue-600 cursor-pointer hover:scale-105 transition">
            Explore Programs
          </button>

       <button
        onClick={() => navigate("/career?apply=true")}
        className="px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-base rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md cursor-pointer hover:bg-white/10 transition"
        >
          Get Started
        </button>

        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;