import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/18.jpg";
import {
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";
import {
 FaHelicopter
} from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className=" py-28 px-6 bg-[#030712] text-white">

      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity:0, x:-50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
        >

          <div className="
          inline-block
          px-4 py-2
          rounded-full
          bg-blue-500/10
          border
          border-blue-500/20
          text-blue-400
          mb-6">

            About Us

          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">

            Revolutionizing Industries With

            <span className="
            block
            mt-2
            bg-gradient-to-r
            from-blue-400
            via-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent">

              Intelligent Drone Technology

            </span>

          </h2>

          <p className="text-gray-400 mt-8 leading-8 text-lg">

            We provide advanced drone solutions and
            professional training that improve surveillance,
            emergency response, safety operations and
            data-driven decision making.

          </p>

          {/* cards */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

            <div className="
            p-5
            rounded-3xl
            bg-white/[0.03]
            border border-white/10">

              <FaHelicopter
                className="text-blue-400 mb-4"
                size={24}
              />

              <h3 className="font-bold">

                Smart Systems

              </h3>

              <p className="text-gray-400 text-sm mt-2">

                AI-powered aerial operations

              </p>

            </div>


            <div className="
            p-5
            rounded-3xl
            bg-white/[0.03]
            border border-white/10">

              <FaShieldAlt
                className="text-purple-400 mb-4"
                size={24}
              />

              <h3 className="font-bold">

                Safety First

              </h3>

              <p className="text-gray-400 text-sm mt-2">

                Secure mission delivery

              </p>

            </div>


            <div className="
            p-5
            rounded-3xl
            bg-white/[0.03]
            border border-white/10">

              <FaChartLine
                className="text-cyan-400 mb-4"
                size={24}
              />

              <h3 className="font-bold">

                Better Outcomes

              </h3>

              <p className="text-gray-400 text-sm mt-2">

                Real-time intelligence

              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity:0, x:50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
          className="relative"
        >

          <img
            src={AboutImage}
            alt="Drone technology"
            className="
            rounded-[32px]
            h-[500px]
            w-full
            object-cover"
          />

          {/* floating card */}

          <div className="
          absolute
          -bottom-6
          left-6
          p-6
          rounded-3xl
          bg-[#111827]
          border border-white/10
          shadow-2xl">

            <h1 className="text-4xl font-black text-blue-400">

              15+

            </h1>

            <p className="text-gray-400">

              Years of Innovation

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutSection;