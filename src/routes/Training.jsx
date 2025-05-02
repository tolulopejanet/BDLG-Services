import React from "react";
// import bgImage from "../assets/service2.png";
import bgImage from "../assets/service22.png";
import { GrCalculator, GrSecure } from "react-icons/gr";
import { BiBadgeCheck } from "react-icons/bi";
import RPLImage from "../assets/train4.jpg";
import KidImage from "../assets/train5.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function Training() {
  return (
    <section className="max-w-7xl mx-auto px-4 ">
      <div>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-8">
          <div className="gap-6">
            <div>
              <img
                src={bgImage}
                alt=""
                style={{ animationDuration: "5s" }}
                className="max-w-[430px] w-1/2 mx-auto animate-spin drop-shadow-xl"
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
              <p className="text-sm text-gray-500 tracking-wide leading-5 w-4/5 text-center">
                As our goal is to ensure that our customers reach their
                objectives, we supply numerous services like drone training,
                custom-made solutions, maintenance and aerial service provision.
              </p>

              <div className="flex flex-col gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span className="text-gray-500">
                      (RPL) License Training - Remote Pilot License
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span className="text-gray-500">
                      Recreational Training – for Kids and drone enthusiast
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" grid grid-cols-1 md:grid-cols-2 gap-8 py-10"
      >
        <div className="bg-red-50  cursor-pointer rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 text-gray-600 flex flex-col items-center justify-center">
          <img src={RPLImage} className="mb-4 w-4/5 h-auto rounded-lg" />
          <h3 className="text-2xl font-bold mb-2 py-3">
            REMOTE PILOT LICENCE (RPL)
          </h3>
          <p className="mb-4 text-justify">
            BDLG is the first NCAA approved RPL training school in Nigeria. The
            accreditation was signed off on 7 September 2000. BDLG is mindful of
            the number of operators who fly Drones for commercial gain. <br />
            <br />
            The predominant factor for training operators in unmanned aircraft,
            is that livelihoods have to be considered as a priority. Initially,
            this category (experienced Drone operators) was accommodated to
            first, however training is now available for inexperienced or
            beginner drone operators.
          </p>

          <div className="mt-15 grid lg:grid-cols-2 sm:grid-cols-1 gap-6 items-center">
            <div className="border-l-4 border-gray-700 pl-6 space-y-3">
              <h1 className="text-2xl font-semibold">Pre-Requisites</h1>
              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">
                  English Language Proficiency
                </span>
              </div>

              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">
                  Restricted Radio Telephony (Aeronautical)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">
                  Restricted Radio Telephony (Aeronautical)
                </span>
              </div>
            </div>
            <div className="border-l-4 border-gray-700 pl-6 space-y-3">
              <h1 className="text-2xl font-semibold">Subjects Covered</h1>
              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">Navigation</span>
              </div>

              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">
                  Principles of Flight
                </span>
              </div>
              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">Human Factors</span>
              </div>
              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">Radio Telephony</span>
              </div>
              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">Meteorology</span>
              </div>
              <div className="flex items-center gap-3">
                <GrCalculator className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span className="text-gray-500 text-sm">
                  Flight Performance & Planning e.t.c.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50  cursor-pointer rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 text-gray-600 flex flex-col items-center">
          <img src={KidImage} className="mb-4 w-4/5 h-auto border rounded-lg" />
          <h3 className="text-2xl font-bold mb-2 py-3">
            Kids Club, Recreational Training for All
          </h3>
          <p className="mb-4 text-justify">
            The primary goal of any Propel Aerial Service program is to provide
            an efficient and unique platform for educators to mentor
            participants on how to become lifelong learners and instill a strong
            sense of curiosity, confidence and teamwork.
            <br />
            <br /> Due to the exponential growth of the drone industry, kids and
            teens may now explore, learn and evolve along with the applications
            of today and the discoveries of tomorrow. Propel fosters this new
            technological landscape with a constantly-evolving curriculum and a
            company core value of Exceeding Expectations. <br /> <br /> Propel’
            curriculum has been specifically designed to introduce 21st century
            STEM (Science, Technology, Engineering, and Math) skills in and out
            of the classroom! Drones and UAVs are the perfect educational
            platform for kids and teens to become familiar with and learn more
            about the many facets of drones, robotics, and the future of this
            budding industry and how it applies to real life opportunity. <br />
            <br /> All of our programs have been designed to encourage and
            build: enjoyment, teamwork, curiosity, critical thinking, courage,
            and creativity. It’s time to take off and build STEM skills that
            will build the foundation for many years to come. Join this movement
            and prepare to inspire the development and preparation of the entire
            student.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
