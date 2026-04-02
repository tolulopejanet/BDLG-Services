import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCamera, FaCode, FaTools, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

const specializations = [
  {
    title: "Photography & Cinematography",
    icon: <FaCamera className="text-blue-500" />,
    desc: "Master aerial imaging for film, real estate, events, and creative media production.",
    subjects: ["Aerial Composition & Lighting", "Cinematic Camera Movement", "Post-Production Editing", "Client Project Delivery", "Portfolio Development"]
  },
  {
    title: "Surveillance & Security",
    icon: <FaShieldAlt className="text-blue-500" />,
    desc: "Develop skills for public safety, perimeter monitoring, and security operations.",
    subjects: ["Perimeter Monitoring", "Thermal & Night Vision", "Search & Rescue Techniques", "Legal Surveillance Protocols", "Incident Reporting"]
  },
  {
    title: "Industrial Inspection",
    icon: <FaTools className="text-blue-500" />,
    desc: "Inspect infrastructure, utilities, and facilities with advanced drone technology.",
    subjects: ["Infrastructure Assessment", "Thermal & Multispectral", "Defect Identification", "Safety Compliance", "Inspection Reporting"]
  },
  {
    title: "Mapping & Surveying",
    icon: <FaMapMarkedAlt className="text-blue-500" />,
    desc: "Create orthomosaic maps, 3D models, and conduct precision surveying.",
    subjects: ["Automated Flight Planning", "Orthomosaic Generation", "3D Model Creation", "Volume Calculations", "Survey-Grade Accuracy"]
  },
  {
    title: "Drone Programming",
    icon: <FaCode className="text-blue-500" />,
    desc: "Learn to program autonomous drone missions and develop custom applications.",
    subjects: ["Python for Drones", "Mission Automation", "Drone SDKs & APIs", "Custom Flight Algorithms", "Data Processing Scripts"]
  }
];

const ChooseYourPath = () => {
  const [flipped, setFlipped] = useState({});

  return (
    <section id="programs" className="primary-container py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Choose Your Path</h2>
        <div className="mt-2 mx-auto h-1 w-24 bg-blue-500 rounded-full" />
        <p className="text-gray-600 text-sm mt-3">Hover over any card to see the subjects covered</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specializations.map((item, i) => (
          <div
            key={i}
            className="h-80 cursor-pointer"
            onMouseEnter={() => setFlipped({ ...flipped, [i]: true })}
            onMouseLeave={() => setFlipped({ ...flipped, [i]: false })}
          >
            <motion.div
              initial={false}
              animate={{ rotateY: flipped[i] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full h-full"
            >
              {/* FRONT */}
              <motion.div
                style={{ backfaceVisibility: "hidden" }}
                className="absolute w-full h-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center items-center text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>

              {/* BACK */}
              <motion.div
                initial={{ rotateY: 180 }}
                style={{ backfaceVisibility: "hidden", rotateY: 180 }}
                className="absolute w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-center items-center text-center"
              >
                <div className="text-4xl mb-3 text-blue-500 opacity-80">
                  {React.cloneElement(item.icon, { className: "text-blue-500" })}
                </div>
                <h3 className="text-slate-800 text-lg font-bold mb-3">{item.title}</h3>
                <div className="text-slate-700 text-sm space-y-2">
                  {item.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center">
                      <span className="text-red-500 font-semibold">✓</span>
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { specializations };
export default ChooseYourPath;
