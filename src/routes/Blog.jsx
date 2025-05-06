import React, { useState } from "react";
import ServImage from "../assets/DJI5.jpg";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image13 from "../assets/13.jpg";
import Image20 from "../assets/20.jpeg";
import Image15 from "../assets/15.jpg";
import Image16 from "../assets/16.jpg";
import Image18 from "../assets/18.jpg";
import Image19 from "../assets/19.jpg";

const blogs = [
  {
    title: "Understanding UAVs: What They Are and How They Work",
    author: "Samuel Ikenna",
    image: Image13,
    preview:
      "UAVs, or unmanned aerial vehicles, are changing how industries operate...",
    content:
      "UAVs are aircraft without a human pilot onboard. They can be remotely controlled or fully autonomous. Originally developed for military purposes, UAVs are now used in agriculture, logistics, construction, and emergency response. This post explores the major types of UAVs, how they function, and real-world use cases.",
  },
  {
    title: "Drones for Everyday Use: Beyond Aerial Photography",
    author: "Esther Okon",
    image: Image20,
    preview:
      "Drones are doing more than taking cool aerial shots — here’s how...",
    content:
      "Drones are evolving from hobby gadgets into powerful tools. They're used for land mapping, delivery services, agricultural spraying, and even search and rescue missions. This blog explores everyday drone applications and how their accessibility is redefining industries.",
  },
  {
    title: "Securing Your Home: Modern Surveillance Technologies Explained",
    author: "Chinedu Bassey",
    image: Image15,
    preview:
      "New surveillance tech is smarter, faster, and more efficient than ever...",
    content:
      "Modern surveillance systems go beyond recording footage — they now detect, analyze, and notify. From cloud-enabled cameras to AI motion tracking and license plate recognition, this blog breaks down top features to consider when upgrading your home security system.",
  },
  {
    title: "Smart Home Integration: Making Your Home Work for You",
    author: "Joy Adebayo",
    image: Image16,
    preview:
      "Turn your home into a responsive, automated environment with smart tech...",
    content:
      "Smart home integration means connecting your lighting, climate control, security, and even appliances into one system. Using platforms like Alexa or Google Home, you can automate routines and remotely control your home. This blog shows how to begin building a smart home from scratch.",
  },
  {
    title: "The Basics of Home Installation: Getting it Right the First Time",
    author: "Femi Lawal",
    image: Image18,
    preview: "Planning a home tech upgrade? Proper installation is key...",
    content:
      "From CCTV to smart locks, the quality of installation impacts the efficiency and lifespan of your devices. Learn what to ask your installer, how to prepare your home for wiring, and why post-install testing is critical. Avoid future issues by starting strong.",
  },
  {
    title: "How UAVs and Drones Are Changing Infrastructure Inspection",
    author: "Halima Yusuf",
    image: Image19,
    preview:
      "Inspecting towers, pipelines, and roofs is safer and faster with drones...",
    content:
      "Gone are the days of risky climbs and expensive scaffolding. Drones now inspect buildings, bridges, and pipelines with high-definition cameras and thermal imaging. Learn how UAVs are saving lives, reducing costs, and speeding up project timelines in construction and energy sectors.",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-gray-50 pt-15 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative aspect-image overflow-hidden rounded-lg">
        <img src={ServImage} className="w-full h-[60vh] object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-white">
            Welcome to Our Blog
          </h2>
          <p className="text-white text-center">
            We offer everything you need to get started from helpful tips and
            tutorials
          </p>
        </div>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-1">{blog.author}</p>
              <p className="text-gray-600">{blog.preview}</p>
            </div>
          ))}
        </div>
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl max-w-xl w-full relative overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                onClick={() => setSelectedBlog(null)}
              >
                &times;
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {selectedBlog.author}
              </p>
              <p className="text-gray-700 whitespace-pre-line">
                {selectedBlog.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
