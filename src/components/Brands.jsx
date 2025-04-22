import React from "react";
import Delair from "../assets/delair.png";
import Dji from "../assets/dji.png";
import Epsilon from "../assets/epsilon.png";
import Flir from "../assets/flir.png";
import Pendulum from "../assets/pendulum.png";
import Propel from "../assets/propel.png";
import Sentera from "../assets/sentera.png";

const Brands = () => {
  const logos = [Delair, Dji, Epsilon, Flir, Pendulum, Propel, Sentera];

  return (
    <div className="w-full overflow-hidden container mx-auto py-20 px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col sm:items-center items-start">
      <div className="w-[180px] shrink-0 px-5 text-gray-600 border-l-4 border-red-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Our Clients and <br /> Partners
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="company logo"
            className="mx-12 h-13 w-30 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}

        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt="company logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
