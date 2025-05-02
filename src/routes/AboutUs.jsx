// import { features } from "../assets/data";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Drones from "../assets/drones.jpg";
import HomeSound from "../assets/Home-sound.jpg";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useRef, useState } from "react";
import { BiAnalyse, BiBadgeCheck } from "react-icons/bi";

const customerData = [
  {
    id: "techstart",
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff7808fef2aeecfff1b_Outliant.svg",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746079134/DJI4_paqeqr.jpg",
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa88e83cdb12efc5b3_lattice-bg.webp",
    quote:
      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
    author: "AERIAL PHOTOGRAPHY",
    link: "/customers/techstart",
  },
  {
    id: "edutech",
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8ace31b63debbf4d9_Jasper.svg",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746079134/DJI5_ylkhsf.jpg",
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
    quote:
      "Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform active.",
    author: "POWERFUL & PORTABLE",
    link: "/customers/edutech",
  },
  {
    id: "devacademy",
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8a7ffdf748142d329_Fivetran.svg",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746079132/DJI2_cbay30.jpg",
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
    quote:
      "Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service.",
    author: "RESOLUTION",
    link: "/customers/devacademy",
  },
  {
    id: "edutech2",
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8ace31b63debbf4d9_Jasper.svg",
    image:
      "https://res.cloudinary.com/dtpz7bztd/image/upload/v1746079134/DJI5_ylkhsf.jpg",
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
    quote:
      "Engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric.",
    author: "PROPELLERS",
    link: "/customers/edutech",
  },
];

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? customerData.length - 1 : prev - 1
    );
  };
  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === customerData.length - 1 ? 0 : prev + 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);

    const video = document.querySelector(
      `video(data-customer="${customerData[currentSlide].id}"]`
    );
    if (video) {
      isPlaying ? video.pause() : video.play();
    }
  };

  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="home"
      className="container pt-4 pb-6 px-4 sm:px-6 lg:px-8"
    >
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="primary-container">
          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {customerData.map((customer) => (
                <div key={customer.id} className="w-full shrink-0 relative">
                  <div className="relative aspect-image overflow-hidden rounded-lg">
                    <img
                      src={customer.image}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 p-8 flex flex-col">
                      <h2 className="h-12 w-auto mb-auto text-white text-5xl tracking-[10px] text-center font-bold"></h2>
                      <div className="sm:grid grid-cols-2 hidden items-end gap-8 text-white">
                        <div>
                          <p className="text-5xl font-bold mb-8">What We Do</p>
                        </div>

                        <div>
                          <div className="flex items-center justify-between font-bold">
                            <div className="text-lg">{customer.author}</div>
                          </div>
                          <p className="text-xl mb-4 ">{customer.quote}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="max-w-[34rem]"></div>

            <div className="hidden md:flex gap-4">
              <button
                onClick={handlePrevSlide}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <HiArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextSlide}
                className="p-4 hover:bg-gray-200 rounded-full transition-colors"
              >
                <HiArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5 sm:mt-10 ">
              We Stand Out
            </h2>
            <p className="text-gray-600 text-lg mb-4 md:w-4/5 ">
              We have over 18 years of development experience covering a wide
              variety of VTOL multi-rotor and fixed wing aircraft.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BiAnalyse className="w-8 h-8 flex items-center justify-center text-gray-600" />

                <span className="text-gray-600">
                  Professionally cultivate one-to-one customer service with
                  robust ideas dynamically innovate.
                </span>
              </div>
              <div className="flex items-center gap-4">
                <BiAnalyse className="w-8 h-8 flex items-center justify-center text-gray-600" />

                <span className="text-gray-600">
                  Our drone services provide you with a skilled UAV pilot that
                  will provide drone videography.
                </span>
              </div>
              <div className="flex items-center gap-4">
                <BiAnalyse className="w-8 h-8 flex items-center justify-center text-gray-600" />

                <span className="text-gray-600">
                  Engage worldwide methodologies with web-enabled technology.
                  Interactively coordinate proactive
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BiAnalyse className="w-8 h-8 flex items-center justify-center text-gray-600" />
                <span className="text-gray-600">
                  A drone is an unmanned aerial vehicle (UAV) that is fitted
                  with various equipment including photography.
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-800 max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 text-white">
              <BiBadgeCheck className="mb-4 w-10 h-10 text-white" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="mb-4 text-justify">
                To provide innovative, high-quality, and reliable security,
                safety, and entertainment solutions that enhance the comfort,
                safety, and protection of homes and businesses.
              </p>
            </div>

            <div className="bg-red-800 max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 text-white">
              <BiBadgeCheck className="mb-4 w-10 h-10" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="mb-4 text-justify">
                To be the most trusted and recognized provider of integrated
                security, fire safety, and entertainment solutions, known for
                excellence in quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default AboutUs;
