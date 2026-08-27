import React from "react";
import Image17 from "../assets/o&g.png"; 
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const TechSection = () => {
  return (
    <section className="bg-[#111827] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-8">
        {/* Image */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
        >
          <img src={Image17} alt="Technology" className="rounded-xl shadow-lg" />
        </motion.div>
        {/* Content */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Leverage Technology to Improve Safety Outcomes
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <h3 className="text-blue-500 mb-1">Understand environments</h3>
              <p>Responders can identify risks earlier.</p>
            </li>
            <li>
              <h3 className="text-blue-500 mb-1">Predict changes</h3>
              <p>Anticipate operational shifts before they occur.</p>
            </li>
            <li>
              <h3 className="text-blue-500 mb-1">Better decisions</h3>
              <p>Improve safety outcomes and reduce risks.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;