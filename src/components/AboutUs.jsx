// import { features } from "../assets/data";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutUs = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-4 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* left col */}
      <div className="w-full md:w-1/2 space-y-8 text-center mt-10 lg:mt-20">
        <span className="bg-neutral-900 text-red-700 rounded-full h-6 text-2xl font-medium px-5 py-1 uppercase">
          Our Mission
        </span>

        <p className="text-gray-600 text-lg md:text-xl max-w-xl pt-10 ">
          We are committed to delivering cutting-edge technology, seamless
          integration, and exceptional service that exceed customer
          expectations.
        </p>
      </div>

      <div className="w-full md:w-1/2 space-y-8 text-center mt-10 lg:mt-20">
        <span className="bg-neutral-900 text-red-700 rounded-full h-6 text-2xl font-medium px-5 py-1 uppercase">
          Our Vision
        </span>
        <p className="text-gray-600 text-lg md:text-xl pt-10">
          To be the most trusted and recognized provider of integrated security,
          fire safety, and entertainment solutions, known for excellence in
          quality, innovation, and customer satisfaction.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutUs;
