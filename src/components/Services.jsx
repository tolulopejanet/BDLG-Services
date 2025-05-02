import React, { useEffect, useRef, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
// import Training1 from "../assets/training1.png";
// import Training2 from "../assets/training2.png";
// import Training3 from "../assets/training3.jpg";

const tabsData = [
  {
    id: "tab1",
    title: "UAV & Drone Services",
    subtitle:
      "Aerial photography and video capture, Drone mapping and 3D modeling, Monitoring for farms and job sites, Licensed pilots and safe operations.",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746049612/13_hdcjas.jpg",
  },
  {
    id: "tab2",
    title: "Security Services",
    subtitle:
      "Surveillance camera systems (CCTV), Access control systems, Alarm and intrusion detection systems, Security system installation and maintenance.",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746049612/15_ei915i.jpg",
  },
  {
    id: "tab3",
    title: "Fire & Safety Equipment",
    subtitle:
      "Fire alarms and smoke detectors, Fire extinguishers and suppression systems, Emergency exit lighting and signage, Fire safety consultation and compliance.",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746049612/14_h4bccc.jpg",
  },
  {
    id: "tab4",
    title: "Home Entertainment & HD Sound System Installation",
    subtitle:
      " Smart home automation with HD streaming and multi-room A/V, Custom home theaters and pro sound system setups, High-fidelity audio for homes and businesses, Acoustic design and indoor/outdoor audio installs.",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746049612/16_gipein.jpg",
  },
];

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const progressInterval = useRef(null);
  const PROGRESS_DURATION = 5000;
  const UPDATE_INTERVAL = 100;

  useEffect(() => {
    startProgressTimer();
    return () => clearInterval(progressInterval.current);
  }, [activeTab]);

  const startProgressTimer = () => {
    setProgress(0);
    clearInterval(progressInterval.current);

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const currentIndex = tabsData.findIndex(
            (tab) => tab.id === activeTab
          );
          const nextIndex = (currentIndex + 1) % tabsData.length;
          setActiveTab(tabsData[nextIndex].id);
        }

        return prev + (UPDATE_INTERVAL / PROGRESS_DURATION) * 100;
      });
    }, UPDATE_INTERVAL);
  };

  //HANDLE NEXT CLICK
  const handleClick = (tabId) => {
    setActiveTab(tabId);
    setIsPlaying(true);
    setProgress(0);
  };

  //toggle video

  return (
    <section className="container pt-4 pb-6 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="overflow-hidden py-24 text-gray-900  bg-gray-50 "
        id="services"
      >
        <div className="primary-container">
          <div className="max-w-[50rem] lg:mb-24 mb-12">
            <h2 className="sm:text-4xl text-5xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col  justify-between gap-16">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="text-gray-600 text-lg md:text-xl text-justify">
                  Our services include cutting-edge security, fire & safety
                  solutions, home entertainment, and premium HD sound systems
                  designed for your safety, comfort, and enjoyment.
                </p>
              </motion.div>

              <div className="space-y-6">
                {tabsData.map((tab) => (
                  <div
                    onClick={() => handleClick(tab.id)}
                    className="relative pl-4 cursor-pointer"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800">
                      {activeTab === tab.id && (
                        <div
                          className="absolute top-0 left-0 w-full bg-red-600 transition-all duration-100"
                          style={{ height: `${progress}%` }}
                        ></div>
                      )}
                    </div>

                    <div className="bg-red-50 p-3 border-b border-gray-100 shadow-sm">
                      <h3 className="text-xl font-semibold mb-2">
                        {tab.title}
                      </h3>

                      <p
                        className={`text-gray-500 transition-all duration-300 ${
                          activeTab === tab.id
                            ? "h-auto opacity-100"
                            : "h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="max-w-[640px] mx-auto">
                {tabsData.map((tab) => (
                  <div
                    className={`transition-opacity duration-500 ${
                      activeTab === tab.id ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    <img
                      src={tab.image}
                      className="w-full rounded-lg object-contain"
                    ></img>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
