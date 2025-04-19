import React from "react";
import heroImage from "../assets/BDLG.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* left col */}
      <div className="w-full md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight ">
          We Deliver
          <span className="text-red-400"> Top Quality Products</span> and
          Professional Installation Services
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Our goal is to provide innovative, high-performance solutions tailored
          to meet the needs of residential, commercial, and industrial clients.
        </p>
      </div>

      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img
            src={heroImage}
            alt="hero image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
