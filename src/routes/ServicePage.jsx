import React, { useState } from "react";
import ServImage from "../assets/DJI3.jpg";
import { FiBarChart, FiLayout, FiUploadCloud } from "react-icons/fi";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const getRandomNumber = () => Math.floor(Math.random() * 41) - 30;

const services = [
  {
    id: "tab1",
    icon: <FiLayout className="w-8 h-8" />,
    title: "Surveillance Operation",
    desc: "Our drones deliver excellent night vision and thermal imaging capability, able to capture images at over 2km.",
  },
  {
    id: "tab2",
    icon: <FiUploadCloud className="w-8 h-8" />,
    title: " Oil and Gas",
    desc: "We are able to assess and monitor right of way of pipeline, Zoom capacity to view assets and areas of interest from distant.",
  },
  {
    id: "tab3",
    icon: <FiBarChart className="w-8 h-8" />,
    title: "Agriculture",
    desc: "Geo-information and mapping services, Crop scouting and agricultural aerial services and Agricultural Spraying.",
  },
];
const services2 = [
  {
    id: "tab2",
    icon: <FiLayout className="w-8 h-8" />,
    title: "Security Services",
    subtitle:
      "Surveillance camera systems (CCTV), Access control systems, Alarm and intrusion detection systems, Security system installation and maintenance.",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746049612/15_ei915i.jpg",
  },
  {
    id: "tab3",
    icon: <FiLayout className="w-8 h-8" />,
    title: "Fire & Safety Equipment",
    subtitle:
      "Fire alarms and smoke detectors, Fire extinguishers and suppression systems, Emergency exit lighting and signage, Fire safety consultation and compliance.",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746049612/14_h4bccc.jpg",
  },
  {
    id: "tab4",
    icon: <FiLayout className="w-8 h-8" />,
    title: "Home Entertainment & HD Sound System Installation",
    subtitle:
      " Smart home automation with HD streaming and multi-room A/V, Custom home theaters and pro sound system setups, High-fidelity audio for homes and businesses, Acoustic design and indoor/outdoor audio installs.",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746049612/16_gipein.jpg",
  },
];

const galleries = [
  {
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746098155/service7_anthiy.jpg",
    desc: "Our drones offer detailed aerial views ideal for landscaping planning, terrain mapping, and property visualization giving professionals the insights they need to design and manage land with accuracy.",
  },
  {
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746098154/service1_uthcb3.jpg",
    desc: "Our drones provide high-resolution aerial imaging for precision agriculture helping monitor crop health, detect irrigation issues, and maximize yield efficiency over large farmlands.",
  },
  {
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746098153/service5_qnlgrn.jpg",
    desc: "Our drones deliver excellent Night Vision and thermal Imaging capability, able to capture images at over 2km.",
  },
  {
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746098153/service3_clqbov.jpg",
    desc: "Drone imagery to evaluate likely surrounding communities , highlight boundaries, and shorelines.",
  },
  {
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746098153/service2_pwdsun.png",
    desc: "Our drones support smart farming by assisting in targeted irrigation, ensuring crops receive the right amount of water, reducing waste, and improving overall farm productivity.",
  },
  {
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746098153/service4_spo1ku.jpg",
    desc: "By capturing before-and-after visuals, our drones help showcase project outcomes to clients and stakeholders, adding value to proposals and reports.",
  },
  {
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746098151/service6_xggic8.jpg",
    desc: "Our drones help capture aerial views of different farmlands, enabling large-scale monitoring, early detection of anomalies, and efficient farm management.",
  },
];

const ServicePage = () => {
  const [index, setIndex] = useState(4);

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
          <h2 className="text-white text-3xl tracking-[5px] text-center font-bold mb-4 lg:text-7xl">
            OUR SERVICES
          </h2>
          <p className="text-white text-center px-4">
            We support and provide UAVs drones services to various sectors in
            the country ranging from Military, Oil and Gas, Agriculture etc.
          </p>
        </div>
      </div>

      <div className="bg-white-600">
        <div className="primary-container pt-12 sm:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-15">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col pt-8 bg-blue-20 p-3 border border-gray-100 shadow-sm rounded-lg cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="mb-4 flex-1">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pb-16 ">
        <div className="flex gap-x-20 items-center justify-center lg:flex-row flex-col">
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative"
          >
            {galleries.map((gallery, i) => (
              <img
                key={i}
                src={gallery.image}
                alt=""
                width={500}
                className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-300
                 ${i === index ? "activeImage" : "inactiveImage"} `}
                style={{
                  transform: `rotate(${
                    index === i ? 0 : getRandomNumber()
                  }deg)`,
                }}
              />
            ))}
          </motion.div>

          <motion.div className="relative sm:w-[400px] w-[320px] mt-22 lg:mt-5">
            <div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute bottom-0 left-1/2 -translate-1/2 flex gap-x-5"
            >
              <button
                className="bg-gray-100 p-2 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                onClick={() =>
                  setIndex((prev) =>
                    prev === 0 ? galleries.length - 1 : prev - 1
                  )
                }
              >
                <ArrowLeft size={18} />
              </button>
              <button
                className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                onClick={() =>
                  setIndex((prev) =>
                    prev === galleries.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <ArrowRight size={18} />
              </button>
            </div>

            {galleries.map((gallery, i) => (
              <motion.p
                variants={fadeIn("left", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={i}
                className={`text-center sm:text-xl text-gray-600 absolute transition-all duration-300 
                 ${i === index ? "activeDesc delay-200" : "inactiveDesc"} `}
              >
                {gallery.desc}
              </motion.p>
            ))}
          </motion.div>
        </div>
        {/* controls */}

        <div className="bg-white-600 mt-10">
          <div className="primary-container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services2.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col pt-8 bg-blue-20 p-3 border border-gray-100 shadow-sm rounded-lg cursor-pointer rounded-2xl hover-shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="mb-4 flex-1">{service.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicePage;
