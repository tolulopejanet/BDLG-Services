import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/DJI.jpg";
import ProgramRequirements from "../components/ProgramRequirements";

// icons
import { FaCamera, FaCode, FaTools, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

const specializations = [
  {
    title: "Photography & Cinematography",
    icon: <FaCamera />,
    desc: "Master aerial imaging for film, real estate, events, and creative media production.",
    subjects: [
      "Aerial Composition & Lighting",
      "Cinematic Camera Movement",
      "Post-Production Editing",
      "Client Project Delivery",
      "Portfolio Development"
    ]
  },
  {
    title: "Surveillance & Security",
    icon: <FaShieldAlt />,
    desc: "Develop skills for public safety, perimeter monitoring, and security operations.",
    subjects: [
      "Perimeter Monitoring",
      "Thermal & Night Vision",
      "Search & Rescue Techniques",
      "Legal Surveillance Protocols",
      "Incident Reporting"
    ]
  },
  {
    title: "Industrial Inspection",
    icon: <FaTools />,
    desc: "Inspect infrastructure, utilities, and facilities with advanced drone technology.",
    subjects: [
      "Infrastructure Assessment",
      "Thermal & Multispectral",
      "Defect Identification",
      "Safety Compliance",
      "Inspection Reporting"
    ]
  },
  {
    title: "Mapping & Surveying",
    icon: <FaMapMarkedAlt />,
    desc: "Create orthomosaic maps, 3D models, and conduct precision surveying.",
    subjects: [
      "Automated Flight Planning",
      "Orthomosaic Generation",
      "3D Model Creation",
      "Volume Calculations",
      "Survey-Grade Accuracy"
    ]
  },
  {
    title: "Drone Programming",
    icon: <FaCode />,
    desc: "Learn to program autonomous drone missions and develop custom applications.",
    subjects: [
      "Python for Drones",
      "Mission Automation",
      "Drone SDKs & APIs",
      "Custom Flight Algorithms",
      "Data Processing Scripts"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="bg-[#030712] text-white">

      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">

        <img
          src={heroImage}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#030712]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-black">
            Who We Serve
          </h1>

          <p className="text-gray-300 mt-6">
            We empower individuals, institutions, and organizations to master drone technology for real-world impact.
          </p>
        </motion.div>

      </div>

      {/* AUDIENCE SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">

        {[
          { title: "Education", desc: "Training students & institutions" },
          { title: "Industry", desc: "Corporate drone solutions" },
          { title: "Government", desc: "Security & emergency response" }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}

      </div>

      {/* PROGRAM PATHS SECTION (YOUR COMPONENT - UPGRADED) */}
      <div className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-black">
            Choose Your Path
          </h2>
          <p className="text-gray-400 mt-3">
            Select a specialization and explore what you will learn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {specializations.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="
                bg-white/[0.03]
                border border-white/10
                rounded-3xl
                p-6
                transition
              "
            >

              <div className="text-3xl text-blue-500 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>

              <div className="mt-6 space-y-2">
                {item.subjects.map((s, idx) => (
                  <div key={idx} className="text-sm text-gray-300 flex gap-2">
                    <span className="text-blue-500">✓</span>
                    {s}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* REQUIREMENT */}
      {/* PROGRAM PATHS SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black">Choose Your Path</h2>
          <p className="text-gray-400 mt-3">
            Select a specialization and explore what you will learn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {specializations.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-6"
            >
              <div className="text-3xl text-blue-500 mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>

              <div className="mt-6 space-y-2">
                {item.subjects.map((s, idx) => (
                  <div key={idx} className="text-sm text-gray-300 flex gap-2">
                    <span className="text-blue-500">✓</span>
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 NEW: REQUIREMENTS SECTION */}
      <ProgramRequirements />

      {/* CTA */}
      <div className="bg-white/[0.02] border-t border-white/10 py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>

        <p className="text-gray-400 mt-4">
          Join our drone training programs and build real-world skills.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>

      {/* CTA */}
      <div className="bg-white/[0.02] border-t border-white/10 py-20 text-center">

        <h2 className="text-3xl font-bold">
          Ready to Start Your Journey?
        </h2>

        <p className="text-gray-400 mt-4">
          Join our drone training programs and build real-world skills.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
          Apply Now
        </button>

      </div>

    </div>
  );
};

export default ServicesPage;