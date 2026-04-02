import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import CareerHero from "../components/CareerHero";
import JuniorDroneClub from "../components/JuniorDroneClub";
import TrainingStructure from "../components/TrainingStructure";
import ProgramRequirements from "../components/ProgramRequirements";
import ChooseYourPath from "../components/ChooseYourPath";
import CareerApplyForm from "../components/CareerApplyForm";

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
      className="w-full bg-gray-50 text-gray-900"
    >
      <CareerHero onApplyClick={openApplyForm} />
      <JuniorDroneClub />
      <TrainingStructure onApplyClick={openApplyForm} />
      <ProgramRequirements />
      <ChooseYourPath />
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
