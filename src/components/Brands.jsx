import React from "react";
import Delair from "../assets/39-removebg-preview.png";
import Dji from "../assets/34-removebg-preview.png";
import Epsilon from "../assets/epsilon-removebg-preview.png";
import Flir from "../assets/40-removebg-preview.png";
import Pendulum from "../assets/pendulum.png";
import Propel from "../assets/propel.png";
import Sentera from "../assets/38-removebg-preview.png";
import Avss from "../assets/37-removebg-preview.png";
import Prowings from "../assets/36-removebg-preview.png";

const Brands = () => {
  const logos = [
    Delair,
    Dji,
    Epsilon,
    Flir,
    Pendulum,
    Propel,
    Sentera,
    Avss,
    Prowings,
  ];

  return (
    <div className="w-full overflow-hidden container mx-auto pt-20 px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col sm:items-center items-start">
      <div className="w-[180px] shrink-0 px-5 text-gray-600 border-l-4 border-red-500 bg-white py-2 z-10 sm:text-base text-xl font-bold text-left">
        Our Clients and <br /> Partners
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="company logo"
            className="mx-12 h-20 w-40 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
