import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/DroneVid.mp4";
import ApplyModal from "./ApplyModal";

const HeroSection = () => {
  const [showApply,setShowApply]=useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center  py-6 px-6">
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
        className="relative z-20 max-w-5xl text-center mt-40"
      >
        <span className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-sm">
          Future of Aerial Intelligence
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
          Transforming Industries With
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Smart Drone Technology
          </span>
        </h1>

        <p className="text-gray-300 mt-8 max-w-2xl mx-auto text-lg">
          Advanced drone training, aerial surveillance and intelligent
          solutions designed for the future.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">

          <button 
          onClick={()=> navigate("/services#choose-path")}
        
          className="px-8 py-4 rounded-xl bg-blue-600 cursor-pointer hover:scale-105 transition">
            Explore Programs
          </button>

       <button
        onClick={() => setShowApply(true)}
        className="
        px-8
        py-4
        rounded-2xl
        border border-white/20
        bg-white/5
        backdrop-blur-md
        cursor-pointer
        "
        >
          Get Started
        </button>

        </div>
      </motion.div>

      <ApplyModal
    isOpen={showApply}
    onClose={()=>setShowApply(false)}
    onApply={() => {
      setShowApply(false);
    }}
    />
    </section>
  );
};

export default HeroSection;