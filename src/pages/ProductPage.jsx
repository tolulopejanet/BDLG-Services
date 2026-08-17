import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import drone2 from "../assets/dji-flycart.webp";
import drone3 from "../assets/dji-flycart30.webp";
import drone4 from "../assets/DJI-Matrice400.webp";
import drone1 from "../assets/DJI-Matrice4E.webp";
import drone5 from "../assets/DJI-Matrice-4T.webp";
import drone6 from "../assets/DJI-Matrice-4D.webp";
import drone7 from "../assets/DJI-Matrice-4TD.webp";
import drone8 from "../assets/DJI-Matrice-350RTK.webp";
import drone9 from "../assets/dji-zenmuse-l3.webp";
import drone10 from "../assets/dji-Zenmuse-L2.webp";
import drone11 from "../assets/DJI-Zenmuse-H30.webp";
import drone12 from "../assets/DJI-Zenmuse-H20N.webp";
import drone13 from "../assets/DJI-Dock-3.webp";
import drone14 from "../assets/DJI-Dock-2.webp";
import drone15 from "../assets/DJI-Dock.webp";
import drone16 from "../assets/DJI-FlightHub-2.webp";
import drone17 from "../assets/DJi-Manifold-3.webp";
import drone18 from "../assets/DJI-FlightHub-2-AIO.webp";
import drone19 from "../assets/DJI-RTK-3.webp";
import drone20 from "../assets/DJI-RTK-2.webp";
import drone21 from "../assets/DJI-Sky-Port-V2.webp";

const products = [
  {
    id: 1,
    title: "DJI FLYCART 100",
    type: "Drones",
    desc: "Flagship Heavy-Lift Cargo Delivery Drone.",
    details:
      "The world’s most capable commercial delivery UAV, carrying up to 149.9 kg with LiDAR, Penta-Vision, and millimeter-wave radar for autonomous navigation.",
    img: drone2
  },
  {
    id: 2,
    title: "DJI FlyCart 30",
    type: "Drones",
    desc: "Versatile Cargo Drone for Professional Delivery.",
    details:
      "A professional-grade cargo drone carrying up to 30 kg with winch and cargo-drop delivery modes for flexible deployment across diverse missions.",
    img: drone3
  },
  {
    id: 3,
    title: "DJI Matrice 400",
    type: "Drones",
    desc: "Enterprise Flagship Platform",
    details:
      "DJI’s most advanced enterprise drone, delivering 59 minutes of flight time, 6 kg payload capacity, with integrated rotating LiDAR, mmWave radar, and O4 Enterprise transmission.",
    img: drone4
  },
  {
    id: 4,
    title: "DJI Matrice 4E",
    type: "Drones",
    desc: "Compact Intelligent Flagship for Geospatial & Mapping",
    details:
      "A compact, intelligent multi-sensor drone purpose-built for precision surveying and mapping, featuring a mechanical shutter, laser rangefinder, and smart detection. It is used for cadastral surveys, construction site management, mining volumetrics, and GIS data collection.",
    img: drone1
  },
  {
    id: 5,
    title: "DJI Matrice 4T",
    type: "Drones",
    desc: "Multi-Mission Thermal Platform",
    details:
      "The thermal-equipped variant of the Matrice 4 Series, combining infrared and visible cameras with a laser rangefinder for night operations and heat signature detection. It is best used for night security surveillance, power line hotspot detection, firefighting, and forestry fire monitoring.",
    img: drone5
  },
  {
    id: 6,
    title: "DJI Matrice 4D",
    type: "Drones",
    desc: "Next-Gen Enterprise Drone with Precision & Endurance",
    details:
      "A next-generation enterprise drone with a triple camera suite (wide, medium tele, and telephoto), laser range finder, and 47–54 minute flight time with IP55 weather resistance. It is deployed for telecom tower inspection, corridor surveys, pipeline monitoring, and construction progress documentation.",
    img: drone6
  },
  {
    id: 7,
    title: "DJI Matrice 4TD",
    type: "Drones",
    desc: "Advanced Thermal + Visual Platform",
    details:
      "Builds on the 4D platform by adding radiometric thermal imaging and near-infrared (NIR) auxiliary lighting for detecting heat signatures invisible to standard cameras.",
    img: drone7
  },
  {
    id: 8,
    title: "DJI Matrice 350RTK",
    type: "Drones",
    desc: "Industry Benchmark Enterprise Drone",
    details:
      "DJI’s upgraded flagship with 55 minutes of flight time, IP55 weather protection, 6-directional sensing, and a 400-cycle battery system built for demanding multi-payload missions.",
    img: drone8
  },
  {
    id: 9,
    title: "Zenmuse L3",
    type: "Payload & Sensor",
    desc: "Next-Gen High-Accuracy Aerial LiDAR System.",
    details:
      "MDJI’s most advanced aerial LiDAR payload, with a 950 m detection range, dual 100 MP RGB mapping cameras, and coverage capacity of up to 100 km² per day.",
    img: drone9
  },
  {
    id: 10,
    title: "Zenmuse L2",
    type: "Payload & Sensor",
    desc: "Frame LiDAR + RGB Mapping Camera System",
    details:
      "Integrates frame LiDAR, a high-accuracy IMU, and a 4/3 CMOS RGB mapping camera into a turnkey system that pairs with DJI Terra for end-to-end 3D data collection.",
    img: drone10
  },
  {
    id: 11,
    title: "Zenmuse H30 Series",
    type: "Payload & Sensor",
    desc: "All-Weather Multi-Sensor 5-in-1 Flagship",
    details:
      "A single compact unit combining wide-angle, zoom, infrared thermal, laser rangefinder, and NIR auxiliary light which is an all-in-one intelligence payload for any time of day or weather.",
    img: drone11
  },
  {
    id: 12,
    title: "Zenmuse H20N",
    type: "Payload & Sensor",
    desc: "Night Vision Hybrid Payload",
    details:
      "Integrates starlight zoom and wide-angle cameras with dual zoom thermal sensors and a laser rangefinder for unmatched performance in low-light and night conditions.",
    img: drone12
  },
  {
    id: 13,
    title: "DJI Dock 3",
    type: "Remote Drone",
    desc: "Latest-Gen Autonomous Drone Station",
    details:
      "DJI Dock 3 is the first in the Dock series to support vehicle-mounted deployment, delivering round-the-clock autonomous drone operations with the Matrice 4D and 4TD via the FlightHub 2 platform.",
    img: drone13
  },
  {
    id: 14,
    title: "DJI Dock 2",
    type: "Remote Drone",
    desc: "Lightweight Capable Autonomous Drone Station",
    details:
      "A compact, lighter-weight dock deploying Matrice 3D/3TD drones with cloud-based intelligent operations, IP55 protection, and a 10 km effective operating radius.",
    img: drone14
  },
  {
    id: 15,
    title: "DJI Dock",
    type: "Remote Drone",
    desc: "Field-Proven 24/7 Autonomous Drone Base Station",
    details:
      "The original rugged Dock housing a Matrice 30 drone for fully automated lights-out operations, auto-charging, auto-launch, and mission execution programmed via FlightHub 2. It has been tested and Proven across oil & gas, mining, utility, security, and agricultural monitoring for continuous unmanned coverage.",
    img: drone15
  },
  {
    id: 16,
    title: "DJI FlightHub 2",
    type: "Software",
    desc: " ",
    details:
      "A one-stop cloud-based platform for drone operations management, offering remote control, intelligent flight scheduling, versatile flight route management, and seamless third-party integration. .",
    img: drone16
  },
  {
    id: 17,
    title: "Manifold 3",
    type: "Accessories",
    desc: " ",
    details:
      "Manifold 3 packs an impressive 100 TOPS of computing power into a compact unit, weighing about 120 g. When mounted onto the Matrice 400 and Matrice 4 Series drone platforms, it provides enhanced computing power for flight, gimbal, and camera control, optimizing efficiency in various operations. ",
    img: drone17
  },
  {
    id: 18,
    title: "DJI FlightHub 2 AIO",
    type: "Accessories",
    desc: " ",
    details:
      "DJI FlightHub 2 On-Premises delivers the same capabilities as the public cloud version with secure, local deployment, ensuring complete control over your data. This solution supports custom development and rapid integration for diverse scenarios, making it simple to build a tailored drone management platform. ",
    img: drone18
  },
  {
    id: 19,
    title: "DRTK-3",
    type: "Accessories",
    desc: " ",
    details:
      "The new D-RTK 3 Multifunctional Station integrates high-performance antennas and receiver modules capable of tracking and resolving data from major global satellite navigation systems, and it supports multiple data transmission links. With these outstanding features, it can serve as a base station to provide centimeter-level positioning for multiple drones simultaneously or extend the operational range of drones in relay station mode.",
    img: drone19
  },
  {
    id: 20,
    title: "DRTK-2",
    type: "Accessories",
    desc: " ",
    details:
      "D-RTK 2 Mobile Station is DJI’s upgraded high-precision GNSS receiver that supports all major global satellite navigation systems, providing real-time differential corrections that generate centimeter-level positioning data for improved relative accuracy.",
    img: drone20
  },
  {
    id: 21,
    title: "DJI SkyPort V2",
    type: "Accessories",
    desc: " ",
    details:
      "DJI SkyPort V2 is a standard adapter that secures and integrates a payload onto the drone, facilitating communications between the two systems.",
    img: drone21
  },
  
];

const categories = ["All", "Drones", "Payload & Sensor", "Remote Drone", "Software", "Accessories"];

const ProductsPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.type === active);

  return (
    <div className="bg-[#030712] text-white py-24 px-6">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-5xl font-black">
          Drone Solutions Store
        </h1>
        <p className="text-gray-400 mt-6">
          Explore professional UAV systems for training, industry, and emergency response.
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              active === cat
                ? "bg-blue-600 border-blue-600"
                : "bg-white/5 border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto"
      >
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            layout
            whileHover={{ y: -10 }}
            onClick={() => setSelected(item)}
            className="
              cursor-pointer
              bg-white/[0.03]
              border border-white/10
              rounded-3xl
              overflow-hidden
              hover:border-blue-500
              transition"
          >
            <div className="h-56 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={item.img}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-400 mt-3">{item.desc}</p>

              <div className="mt-5 inline-block px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                {item.type}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
     <AnimatePresence>
  {selected && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50"
      onClick={() => setSelected(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-[#111827] max-w-2xl w-full rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setSelected(null)}
          className="
            absolute top-4 right-4
            w-10 h-10
            rounded-full
            bg-black/50
            text-white
            flex items-center justify-center
            hover:bg-red-500
            transition
            z-10"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={selected.img}
          className="w-full h-64 object-cover"
          alt={selected.title}
        />

        {/* CONTENT */}
        <div className="p-8">

          <h2 className="text-3xl font-bold">
            {selected.title}
          </h2>

          <p className="text-gray-400 mt-4">
            {selected.details}
          </p>

          <button
            type="button"
            onClick={() => navigate("/contactus?subject=Request Demo")}
            className="mt-8 px-6 py-3 bg-blue-600 rounded-xl hover:scale-105 transition"
          >
            Request Demo
          </button>

        </div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default ProductsPage;