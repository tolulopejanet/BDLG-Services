import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import CareerHero from "../components/CareerHero";
import JuniorDroneClub from "../components/JuniorDroneClub";
import TrainingStructure from "../components/TrainingStructure";
import ChooseYourPath from "../components/ChooseYourPath";
import CareerApplyForm from "./CareerApplyForm";
import { partners } from "../assets/data";

export default function CareerPage() {
  const [searchParams] = useSearchParams();
  const [showApplyForm, setShowApplyForm] = useState(() => searchParams.get("apply") === "true");
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
    
    const phoneNumber = "2349114448021"; // WhatsApp format without + symbol
    const message = `CAREER APPLICATION\n\n*Full Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Specialization:* ${formData.specialization}\n\n*Experience:*\n${formData.experience}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    
    alert("Thanks for applying! Please send the message to WhatsApp to confirm your application.");
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
      className="w-full bg-[#030712] text-white py-20 px-6"
    >
      <CareerHero onApplyClick={openApplyForm} />
      <JuniorDroneClub />
      <TrainingStructure onApplyClick={openApplyForm} />

      <section className="bg-[#070b14] py-24 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">Partnership Network</p>
          <h2 className="text-4xl font-black text-white mt-4">Join our career and partner ecosystem</h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
            Collaborate with institutions, enterprises, and mission-driven teams to build drone-ready operations, training pipelines, and innovation programs.
          </p>

          <div className="mt-10 overflow-hidden">
            <div className="partner-carousel-track flex">
              {[0, 1].map((groupIndex) => (
                <div className="flex shrink-0 gap-4 pr-4" key={groupIndex}>
                  {partners.map((partner) => (
                    <div
                      key={`${partner.name}-${groupIndex}`}
                      className="flex w-24 shrink-0 items-center justify-center p-3 sm:w-28"
                    >
                      <span className="flex h-20 w-25 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
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
