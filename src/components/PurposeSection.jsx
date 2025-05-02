import React from "react";
import { purposes } from "../assets/data";
import { GrCalculator } from "react-icons/gr";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PurposeSection = () => {
  return (
    <motion.section
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
      id="about"
      variants={fadeIn("left", 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className=" flex justify-center items-left flex-col">
            <p className="text-sm text-red-600 font-medium mb-2">
              Achieve more
            </p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
              Why Choose Us?
            </h2>
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {purposes.map((purpose, index) => (
              <div key={index} className="flex space-x-4">
                <div className="w-12 h-12 flex items-center justify-start rounded-lg">
                  <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {purpose.title}
                  </h3>
                  <p className="text-gray-600">{purpose.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PurposeSection;
