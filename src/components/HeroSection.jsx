import React from "react";
import heroImage from "../assets/BDLG.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-20 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* left col */}

      <motion.div
        className="w-full md:w-1/2 space-y-8 pt-8"
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
          We Deliver
          <span className="text-red-400"> Top Quality Products</span> and
          Professional Installation Services
        </h1>

        <TypeAnimation
          sequence={[
            ` Our goal is to provide innovative, high-performance solutions tailored to meet the needs of residential, commercial, and industrial clients.`,
            1000, // pause at the end
          ]}
          wrapper="p"
          cursor={false}
          speed={50}
          style={{ whiteSpace: "pre-line" }}
          repeat={Infinity}
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 lg:mt-16 md:mt-0 sm:pl-0 lg:pl-12"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="hero image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
