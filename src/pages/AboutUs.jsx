import React from "react";
import { motion } from "framer-motion";
import teamPhoto from "../assets/Survey.jpeg";
import ProgramRequirements from "../components/ProgramRequirements";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const audience = [
  { title: "Education", desc: "Training students and institutions for the future of aerial intelligence." },
  { title: "Industry", desc: "Helping businesses adopt drone programs for inspection, security, and operations." },
  { title: "Government", desc: "Supporting public safety, emergency response, and civic infrastructure missions." }
];

const specializations = [
  {
    title: "Photography & Cinematography",
    desc: "Master aerial imaging for film, real estate, events, and creative production.",
    subjects: ["Aerial Composition", "Cinematic Camera Movement", "Editing Workflows", "Client Delivery", "Portfolio Growth"]
  },
  {
    title: "Surveillance & Security",
    desc: "Develop skills for monitoring operations, perimeter safety, and emergency response.",
    subjects: ["Thermal & Night Vision", "Search & Rescue", "Legal Protocols", "Threat Detection", "Reporting"]
  },
  {
    title: "Industrial Inspection",
    desc: "Inspect assets and infrastructure with advanced drone systems for better safety and insights.",
    subjects: ["Automated Flight Planning", "Thermal Mapping", "Defect Detection", "Safety Compliance", "Inspection Reporting"]
  }
];

const AboutUsPage = () => {
  return (
    <div className="bg-[#030712] text-white min-h-screen">

      {/* STORY SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="relative w-full text-center py-24 px-6 overflow-hidden min-h-[75vh]"
      >
        <div className="absolute inset-0">
          <img
            src={teamPhoto}
            alt="story background"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 pt-20">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>

          <p className="text-gray-300 leading-8 max-w-2xl mx-auto">
            BDLG Services Limited started with a simple idea which is to make aerospace and drone
            technology accessible to everyone, not just experts. Over time, we’ve trained
            students, supported institutions, and built systems that help organizations
            operate safely and efficiently in the skies.
          </p>
        </div>
      </motion.div>

      {/* MISSION / VISION SPLIT */}
      <div className="max-w-6xl mx-auto md:pt-20 sm:pt-10 px-6 grid md:grid-cols-2 gap-8 mb-24">

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

      {/* WHO WE SERVE */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Who We Serve</p>
          <h2 className="text-4xl font-black mt-4">Serving learners, businesses, and government teams</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our programs are built for anyone who wants to adopt drone technology safely and effectively.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {audience.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CHOOSE YOUR PATH */}
      <div className="max-w-6xl mx-auto px-6 py-20" id="choose-path">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Choose Your Path</p>
          <h2 className="text-4xl font-black mt-4">Specialized drone programs</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Pick the focus area that best matches your goals and grow with hands-on training.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {specializations.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
              <div className="mt-6 space-y-3 text-sm text-gray-300">
                {item.subjects.map((subject, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-400">•</span>
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
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