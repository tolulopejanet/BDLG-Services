import React, { useEffect, useRef, useState } from "react";
import Training1 from "../assets/training1.png";
import Training2 from "../assets/training2.png";
import Training3 from "../assets/training3.jpg";
import Image17 from "../assets/17.jpg";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const images = [
  Training1,
  Training2,
  Training3,
  Training3,
  Training1,
  Training2,
  Training2,
  Training3,
  Training1,
];

const FeaturesSection = () => {
  const features = [
    {
      id: "ai-1",
      title: "Manufacturing Capability Drones & UAV Equipment",
      description:
        "BDLG specializes in the design and production of advanced drone and UAV systems tailored for both commercial and defense applications. Our manufacturing process integrates precision engineering, lightweight materials, and cu ing-edge avionics to ensure optimal performance and durability. ",
      video:
        "https://res.cloudinary.com/dtpz7bztd/video/upload/v1745478420/Ctronics_PTZ_CCTV_Camera_Surveillance_-2K_HD_Security_Camera_Outdoo_f6wkd9.mp4",
      poster:
        "https://res.cloudinary.com/dtpz7bztd/image/upload/v1745564549/drones_csljhu.jpg",
    },
    {
      id: "ai-2",
      title: "Security Measures & Installation Process",
      description:
        "BDLG prioritizes security at every stage of drone deployment. Our systems come equipped with encrypted communication channels, GPS shielding, and anti-jamming technologies to protect sensitive data and ensure operational integrity. ",
      video:
        "https://res.cloudinary.com/dtpz7bztd/video/upload/v1745478420/Ctronics_PTZ_CCTV_Camera_Surveillance_-2K_HD_Security_Camera_Outdoo_f6wkd9.mp4",
      poster:
        "https://res.cloudinary.com/dtpz7bztd/image/upload/v1745564549/drones_csljhu.jpg",
    },
    {
      id: "ai-3",
      title: "Health, Safety, Security & Environment",
      description:
        "At BDLG, safety is our top priority. We strictly adhere to all regulatory requirements and industry standards to ensure our security, fire safety, and entertainment solutions comply with local and international guidelines.",
      video:
        "https://res.cloudinary.com/dtpz7bztd/video/upload/v1745478420/Ctronics_PTZ_CCTV_Camera_Surveillance_-2K_HD_Security_Camera_Outdoo_f6wkd9.mp4",
      poster:
        "https://res.cloudinary.com/dtpz7bztd/image/upload/v1745564549/drones_csljhu.jpg",
    },
    {
      id: "ai-4",
      title: "Quality Assurance",
      description:
        "BDLG is dedicated to delivering superior quality services through a well-structured and continuously improving Quality Management System (QMS). Our compliance framework aligns with ISO standards, industry best practices, and regulatory guidelines to ensure our operations meet the highest standards. ",
      video:
        "https://res.cloudinary.com/dtpz7bztd/video/upload/v1745478420/Ctronics_PTZ_CCTV_Camera_Surveillance_-2K_HD_Security_Camera_Outdoo_f6wkd9.mp4",
      poster:
        "https://res.cloudinary.com/dtpz7bztd/image/upload/v1745564549/drones_csljhu.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 5000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Get 3 images starting from startIndex
  const currentImages = [
    images[startIndex % images.length],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const index = features.findIndex((feature) => feature.id === id);

          if (index !== -1) {
            setActiveFeature(index);
            const video = document.querySelector(`video[data-feature="${id}"]`);
            if (video) video.play();
          }
        }
      });
    }, options);

    const featuresElement = document.querySelectorAll(".feature-item");
    featuresElement.forEach((feature) => observerRef.current.observe(feature));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-5 text-gray-900"
      id="trainings"
    >
      <div className="primary-container">
        <div className="flex flex-col items-center justify-center">
          <div className="md:mb-12">
            <h2 className="text-5xl sm:text-4xl font-bold mb-12">
              Get Trained. Get Ahead.
            </h2>
          </div>
          <div className="mb-12">
            <p className="text-lg text-gray-600 mb-3 max-w-[65rem] text-center">
              Our comprehensive training programs combine in-person hands-on
              workshops, expert led online modules, and real-world
              scenario-based training to ensure participants gain in depth
              technical knowledge and practical expertise.
            </p>
          </div>
        </div>

        <section
          className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
          id="about"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 grid-cols-1 gap-8"
            >
              {currentImages.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="w-full h-64 object-cover transition-all duration-700"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* image and content */}
        <div className="mt-12">
          <h2 className="text-5xl text-center sm:text-4xl font-bold mb-12">
            Our Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-8 pt-10">
          {/* image */}
          <div>
            <div className="sticky top-24">
              <div className="aspect-square rounded-lg overflow-clip border border-white/20">
                <img
                  src={Image17}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* content */}
          <div>
            {/* features text */}
            <div ref={featuresRef} className="space-y-24">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="feature-item scroll-mt-24 md:h-72 border-b border-black/10 bg-gray-50 p-5 text-justify flex flex-col justify-center"
                >
                  <div className="max-w-[55ch] mb-4">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-500 mb-8 max-w-[35rem]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
