import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { footerLinks } from "../assets/data";

const Footer = () => {
  return (
    <footer className="bg-gray-700 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid:cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex gap-1 items-center">
              <span className="text-xl font-medium ml-1 text-white">
                About Us
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              We have several years of development experience covering a wide
              variety of VTOL multi-rotor and fixed wing aircraft, we now offer
              some of the toughest and most durable industrial multi-rotor and
              fixed wing UAV solutions in the world.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-gray-100 transition-all duration-200"
              >
                <FaFacebookF className="size-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-gray-100 transition-all duration-200"
              >
                <FaTwitter className="size-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-gray-100 transition-all duration-200"
              >
                <FaInstagram className="size-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-gray-100 transition-all duration-200"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <div>
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <div className="text-lg font-medium">{category}</div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
