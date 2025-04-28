// import { features } from "../assets/data";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Drones from "../assets/drones.jpg";
import HomeSound from "../assets/Home-sound.jpg";

const AboutUs = () => {
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* left */}
          <div className="md:w-1/2 w-full">
            <img
              src={Drones}
              alt="drones"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* right */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-8 text-justify">
              To provide innovative, high-quality, and reliable security,
              safety, and entertainment solutions that enhance the comfort,
              safety, and protection of homes and businesses. We are committed
              to delivering cutting-edge technology, seamless integration, and
              exceptional service that exceed customer expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* left */}

          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 mb-8 text-justify">
              To be the most trusted and recognized provider of integrated
              security, fire safety, and entertainment solutions, known for
              excellence in quality, innovation, and customer satisfaction. Our
              vision is to set industry standards through our commitment to
              reliability, advanced technology, and outstanding service,
              ensuring that every home and business we serve enjoys enhanced
              safety, convenience, and entertainment experiences
            </p>
          </div>

          {/* right */}
          <div className="md:w-1/2 w-full">
            <img
              src={HomeSound}
              alt="HomeSound"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default AboutUs;
