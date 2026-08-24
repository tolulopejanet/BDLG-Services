import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import CareerHero from "../components/CareerHero";
import JuniorDroneClub from "../components/JuniorDroneClub";
import TrainingStructure from "../components/TrainingStructure";
import ProgramRequirements from "../components/ProgramRequirements";
import ChooseYourPath from "../components/ChooseYourPath";
import CareerApplyForm from "../components/CareerApplyForm";
import { partners } from "../assets/data";

export default function CareerPage() {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialization: "",
    experience: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Career application:", formData);
    alert("Thanks for applying! We will be in touch soon.");
    setFormData({ fullName: "", email: "", phone: "", specialization: "", experience: "" });
    setShowApplyForm(false);
  };

  const openApplyForm = () => setShowApplyForm(true);
  const closeApplyForm = () => setShowApplyForm(false);

  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-12"
    >
      <CareerHero onApplyClick={openApplyForm} />
      <JuniorDroneClub />
      <TrainingStructure onApplyClick={openApplyForm} />
      <ProgramRequirements />

      <section className="bg-[#070b14] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">Partnership Network</p>
          <h2 className="text-4xl font-black text-white mt-4">Join our career and partner ecosystem</h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
            Collaborate with institutions, enterprises, and mission-driven teams to build drone-ready operations, training pipelines, and innovation programs.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-4 text-left text-gray-200"
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center p-1.5">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </span>
                <span className="font-semibold">{partner.name}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={openApplyForm}
            className="mt-12 px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Apply to Join
          </button>
        </div>
      </section>
      
      <CareerApplyForm 
        showApplyForm={showApplyForm}
        formData={formData}
        onClose={closeApplyForm}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </motion.section>
  );
}
