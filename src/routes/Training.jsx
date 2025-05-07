import React from "react";
import bgImage from "../assets/service22.png";
import { GrCalculator, GrSecure } from "react-icons/gr";
import { motion } from "framer-motion";
import RPLImage from "../assets/train4.jpg";
import KidImage from "../assets/train5.jpg";
import { fadeIn } from "../utils/motion";
import { FaCircle } from "react-icons/fa";

export default function Training() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div>
        <div className="container min-h-[650px] flex justify-center items-center pt-16 pb-6">
          <div className="gap-6">
            <div>
              <img
                src={bgImage}
                alt=""
                style={{ animationDuration: "5s" }}
                className="max-w-[430px] w-1/2 mx-auto animate-slide-from-left  drop-shadow-xl "
              />
            </div>

            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center gap-6 sm:pt-0"
            >
              <h1 className="text-5xl font-bold">Our Training</h1>
              <p className="text-gray-500 tracking-wide leading-5 w-4/5 text-center lg:text-xl leading-relaxed ">
                As our goal is to ensure that our customers reach their
                objectives, we supply numerous services like drone training,
                custom-made solutions, maintenance and aerial service provision.
              </p>

              <div className="flex flex-col gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span className="text-gray-500 lg:text-xl ">
                      (RPL) License Training - Remote Pilot License
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span className="text-gray-500 lg:text-xl">
                      Recreational Training – for Kids and drone enthusiasts
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-14 p-10"
      >
        {/* RPL Training Card */}
        <div className="bg-grey-50 cursor-pointer rounded-2xl p-6 shadow-2xl transition-shadow duration-300 text-gray-600 flex flex-col items-center overflow-hidden">
          <img
            src={RPLImage}
            alt="RPL Training"
            className="h-[240px] w-full object-cover rounded-lg p-4"
          />
          <div className=" pr-2">
            <h3 className="text-2xl font-bold mb-2 py-3 text-center">
              REMOTE PILOT LICENCE (RPL)
            </h3>
            <p className="mb-4 text-justify">
              BDLG is the first NCAA approved RPL training school in Nigeria.
              The accreditation was signed off on 7 September 2000. BDLG is
              mindful of the number of operators who fly Drones for commercial
              gain. <br />
              <br />
              The predominant factor for training operators in unmanned aircraft
              is that livelihoods have to be considered as a priority.
              Initially, this category (experienced Drone operators) was
              accommodated first, however training is now available for
              inexperienced or beginner drone operators.
            </p>
          </div>

          <div className="mt-6 grid lg:grid-cols-2 sm:grid-cols-1 gap-6 items-start">
            <div className="border-l-4 border-gray-700 pl-6 space-y-3">
              <h1 className="text-2xl font-semibold">Pre-Requisites</h1>
              {[
                "English Language Proficiency",
                "Restricted Radio Telephony (Aeronautical)",
              ].map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <FaCircle className="h-2 w-2" />
                  <span className="text-gray-500 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-gray-700 pl-6 space-y-3">
              <h1 className="text-2xl font-semibold">Subjects Covered</h1>
              {[
                "Navigation",
                "Principles of Flight",
                "Human Factors",
                "Radio Telephony",
                "Meteorology",
                "Flight Performance & Planning e.t.c.",
              ].map((subject, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <FaCircle className="h-2 w-2" />
                  <span className="text-gray-500 text-sm">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kids Training Card */}
        <div className="bg-grey-50 cursor-pointer rounded-2xl p-6 shadow-2xl transition-shadow duration-300 text-gray-600 flex flex-col items-center">
          <img
            src={KidImage}
            alt="Kids Training"
            className="h-[240px] w-full object-cover rounded-lg p-4"
          />
          <h3 className="text-2xl font-bold mb-2 py-3 text-center uppercase">
            Kids Club - Recreational Training
          </h3>
          <p className="mb-4 text-justify">
            The primary goal of any Propel Aerial Service program is to provide
            an efficient and unique platform for educators to mentor
            participants on how to become lifelong learners and instill a strong
            sense of curiosity, confidence and teamwork.
            <br />
            <br />
            Due to the exponential growth of the drone industry, kids and teens
            may now explore, learn and evolve along with the applications of
            today and the discoveries of tomorrow. Propel fosters this new
            technological landscape with a constantly-evolving curriculum and a
            company core value of Exceeding Expectations.
            <br />
            <br />
            Propel’s curriculum has been specifically designed to introduce
            21st-century STEM (Science, Technology, Engineering, and Math)
            skills in and out of the classroom! Drones and UAVs are the perfect
            educational platform for kids and teens to become familiar with and
            learn more about the many facets of drones, robotics, and the future
            of this budding industry.
            <br />
            <br />
            All of our programs have been designed to encourage and build:
            enjoyment, teamwork, curiosity, critical thinking, courage, and
            creativity. It’s time to take off and build STEM skills that will
            lay the foundation for years to come.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
