import { services } from "../assets/data";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { BiCheckCircle } from "react-icons/bi";

const Services = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative order-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Our
          <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Services
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
        {services.map((service, index) => (
          <div key={index} className="w-48 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <div className="flex mt-8 items-center justify-center">
                <h6 className="flex h-10 w-10 p-2 bg-neutral-900 text-red-700 justify-center items-center rounded-full">
                  {service.icon}
                </h6>
                <span className="mt-1 ml-2 text-xl font-bold text-neutral-600">
                  {service.title}
                </span>
              </div>

              <ul>
                {service.serviceLists.map((serviceList, index) => (
                  <li
                    key={index}
                    className="mt-2 flex items-center justify-center"
                  >
                    <BiCheckCircle />
                    <span className="ml-2">{serviceList}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
