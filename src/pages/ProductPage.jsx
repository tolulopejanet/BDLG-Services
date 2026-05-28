import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import drone1 from "../assets/Drone8.jpeg";
import drone2 from "../assets/Drone9.jpeg";
import drone3 from "../assets/Survey2.jpeg";
import drone4 from "../assets/Survey3.jpeg";

const products = [
  {
    id: 1,
    title: "Training Drone X1",
    type: "Training",
    desc: "Perfect for beginners and simulation training.",
    details:
      "Designed for flight schools and beginners. Includes auto-stabilization, GPS assist, and crash-safe frame.",
    img: drone1
  },
  {
    id: 2,
    title: "Inspection Drone Pro",
    type: "Industrial",
    desc: "Used for infrastructure inspection and mapping.",
    details:
      "High-resolution thermal camera, long-range flight, and AI mapping system for industrial use.",
    img: drone2
  },
  {
    id: 3,
    title: "Emergency Response UAV",
    type: "Emergency",
    desc: "Built for rescue and surveillance missions.",
    details:
      "Real-time video transmission, night vision, and rapid deployment system.",
    img: drone3
  },
  {
    id: 4,
    title: "Enterprise Custom Drone",
    type: "Industrial",
    desc: "Fully customizable UAV system.",
    details:
      "Modular build system for security, logistics, and enterprise operations.",
    img: drone4
  }
];

const categories = ["All", "Training", "Industrial", "Emergency"];

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