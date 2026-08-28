import React from "react";
import { motion } from "framer-motion";
import teamPhoto from "../assets/story.jpg";
import ProgramRequirements from "../components/ProgramRequirements";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const audience = [
  { title: "Power", desc: "Supporting power generation, transmission, and distribution teams with aerial intelligence." },
  { title: "Geospatial & Remote Sensing", desc: "Delivering accurate mapping, surveying, and remote-sensing data for better decisions." },
  { title: "Media & Entertainment", desc: "Capturing compelling aerial imagery for film, media, events, and creative production." },
  { title: "Oil & Gas", desc: "Improving asset inspection, monitoring, and operational visibility across oil and gas sites." },
  { title: "Defence & Security", desc: "Enabling surveillance, reconnaissance, perimeter monitoring, and emergency response." },
  { title: "Agriculture", desc: "Helping agricultural teams monitor crops, assess land, and improve field operations." },
  { title: "Construction & Infrastructure", desc: "Tracking project progress and inspecting infrastructure with safer aerial workflows." },
  { title: "Telecom", desc: "Supporting tower inspection, network planning, and telecommunications asset management." },
  { title: "Mining", desc: "Providing site mapping, stockpile measurement, and safer inspection for mining operations." },
  { title: "Maritime", desc: "Supporting coastal, vessel, port, and offshore monitoring with reliable aerial data." },
  { title: "Remote Sensing", desc: "Turning aerial imagery and sensor data into actionable environmental and operational insight." }
];

const values = [
  "Safety First",
  "Regulatory Integrity",
  "Precision",
  "Client Partnership",
  "Innovation",
  "Respect",
  "Excellence"
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

        <div className="relative z-10 mx-auto max-w-5xl pt-20">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>

          <p className="text-gray-300 leading-8 max-w-4xl mx-auto">
            BDLG Services Limited started with a simple idea which is to make aerospace and drone
            technology accessible to everyone, not just experts. Over time, we’ve trained
            students, supported institutions, and built systems that help organizations
            operate safely and efficiently in the skies.
          </p>
        </div>
      </motion.div>

      {/* MISSION / VISION / VALUES */}
      <div className="max-w-7xl mx-auto">
      <div className="md:pt-20 sm:pt-10 px-6 grid md:grid-cols-3 gap-8 mb-24">

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
          <p className="text-gray-300 mt-4 text-justify">
            BDLG provides top-tier drone services in surveying, inspection, mapping, and
            surveillance across West Africa. We deliver client-focused solutions built on
            quality, safety, and sustainability to support economic and community development in Nigeria.
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
          <p className="text-gray-300 mt-4 text-justify">
            To become West Africa's leading provider of innovative drone solutions, advancing
            technological excellence and sustainable development while setting global benchmarks
            for quality, safety, and environmental responsibility.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="
            bg-gradient-to-br from-cyan-600/10 to-cyan-600/5
            border border-cyan-500/20
            rounded-3xl p-10
          "
        >
          <h2 className="text-2xl font-bold text-cyan-400">Our Values</h2>
          <p className="text-gray-300 mt-4 leading-8 text-justify">{values.join(", ")}</p>
        </motion.div>

      </div>

      {/* WHO WE SERVE */}
      <div className="px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Our Services</p>
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

      {/* IMPACT SECTION (NEW — THIS MAKES IT FEEL ALIVE) */}
      <div className="bg-white/[0.02] border-y border-white/10 py-24">

        <div className="px-6 grid md:grid-cols-3 gap-8 text-center">

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

      </div>

      </div>
    
  );
};

export default AboutUsPage;