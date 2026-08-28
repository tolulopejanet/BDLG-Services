import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import collaborationImage from "../assets/partner.jpg";
import { partners } from "../assets/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const PartnersPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#030712] text-white">

      {/* HERO */}
      <div className="relative h-[60vh] flex items-center justify-center">

        <img
          src={collaborationImage}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="partners"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-5xl md:text-7xl font-black text-center"
        >
          Partnership Network
        </motion.h1>

      </div>

      {/* INTRO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-center max-w-4xl mx-auto py-24 px-6"
      >
        <p className="text-gray-400 text-lg">
          We collaborate with institutions and organizations driving drone innovation forward.
        </p>
      </motion.div>

      {/* PARTNERS */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-black text-center mb-10">Our Partners</h2>
        <div className="overflow-hidden">
          <div className="partner-carousel-track flex">
            {[0, 1].map((groupIndex) => (
                <div className="flex shrink-0 gap-5 pr-5" key={groupIndex}>
                {partners.map((partner) => (
                  <div
                    key={`${partner.name}-${groupIndex}`}
                    className="flex w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:w-28"
                  >
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pb-28">
        <h2 className="text-4xl font-black">
          Let’s Build Together
        </h2>

        <button
          type="button"
          onClick={() => navigate("/contactus?subject=Partner Inquiry")}
          className="mt-8 px-8 py-4 bg-blue-600 rounded-2xl hover:scale-105 transition"
        >
          Become a Partner
        </button>
      </div>

    </div>
  );
};

export default PartnersPage;