import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/hero (2).mp4";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={backgroundVideo}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#030712]" />
      <div className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center px-4 py-28 sm:px-6 sm:py-32 md:px-8 md:py-36 lg:px-10 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur-lg sm:text-sm">
            Future of Aerial Intelligence
          </span>

          <h1 className="mt-6 text-3xl font-black leading-snug sm:text-4xl md:text-5xl lg:text-6xl">
            Transforming Industries With
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Smart Drone Technology
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-300 sm:text-base md:text-lg">
            Advanced drone training, aerial surveillance and intelligent
            solutions designed for the future.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate("/aboutus#choose-path")}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Programs
            </button>

            <button
              onClick={() => navigate("/career?apply=true")}
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;