import React from "react";
import { motion } from "framer-motion";
import teamPhoto from "../assets/DJI5.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const AboutUsPage = () => {
  return (
    <div className="bg-[#030712] text-white">

      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">

        <img
          src={teamPhoto}
          alt="team"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#030712]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-black">
            We Build Drone Innovators
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            Training minds. Building systems. Powering the future of aerial intelligence.
          </p>
        </motion.div>

      </div>

      {/* STORY SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="max-w-4xl mx-auto text-center py-24 px-6"
      >
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>

        <p className="text-gray-400 leading-8">
          BDLG Services Limited started with a simple idea — make aerospace and drone
          technology accessible to everyone, not just experts. Over time, we’ve trained
          students, supported institutions, and built systems that help organizations
          operate safely and efficiently in the skies.
        </p>
      </motion.div>

      {/* MISSION / VISION SPLIT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="
            bg-gradient-to-br from-blue-600/10 to-blue-600/5
            border border-blue-500/20
            rounded-3xl p-10
          "
        >
          <h2 className="text-2xl font-bold text-blue-400">Our Mission</h2>
          <p className="text-gray-300 mt-4">
            To train and empower the next generation of drone pilots,
            engineers, and innovators through hands-on learning and real-world exposure.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="
            bg-gradient-to-br from-purple-600/10 to-purple-600/5
            border border-purple-500/20
            rounded-3xl p-10
          "
        >
          <h2 className="text-2xl font-bold text-purple-400">Our Vision</h2>
          <p className="text-gray-300 mt-4">
            To build a world where aerial intelligence is accessible,
            safe, and used to solve real human and industrial problems.
          </p>
        </motion.div>

      </div>

      {/* IMPACT SECTION (NEW — THIS MAKES IT FEEL ALIVE) */}
      <div className="bg-white/[0.02] border-y border-white/10 py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Students Trained" },
            { number: "50+", label: "Projects Delivered" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.2 }}
            >
              <h2 className="text-5xl font-black text-blue-400">
                {item.number}
              </h2>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </motion.div>
          ))}

        </div>

      </div>

      {/* VALUES (VISUAL GRID, NOT LIST) */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-black text-center mb-12">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {["Safety", "Innovation", "Accessibility", "Collaboration"].map(
            (val, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="
                  bg-white/[0.03]
                  border border-white/10
                  rounded-2xl
                  p-6
                  text-center
                  hover:border-blue-500
                  transition
                "
              >
                {val}
              </motion.div>
            )
          )}

        </div>

      </div>

    </div>
  );
};

export default AboutUsPage;