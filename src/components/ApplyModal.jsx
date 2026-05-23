import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";


const ApplyModal = ({
  isOpen,
  onClose,
  onApply
}) => {
  const [step, setStep] = useState("info");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  program: ""
});
  return (
    <AnimatePresence>

      {isOpen && (

        <>
          {/* backdrop */}
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={onClose}
            className="
            fixed inset-0
            bg-black/70
            backdrop-blur-md
            z-[100]
            "
          />

          {/* modal */}
          <motion.div
            initial={{opacity:0,y:50,scale:.95}}
            animate={{opacity:1,y:0,scale:1}}
            exit={{opacity:0,y:50}}
            className="
            fixed
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[95%]
            md:w-[800px]
            max-h-[90vh]
            overflow-y-auto
            rounded-[30px]
            bg-[#0B0F1A]
            border border-white/10
            p-8
            z-[101]
            text-white
            "
          >

            <button
              onClick={onClose}
              className="absolute right-6 top-6"
            >
              <HiX size={28}/>
            </button>

            <div className="mb-8">
              <p className="text-blue-400 uppercase text-sm">
                Drone Academy
              </p>

              <h2 className="text-4xl font-black mt-2">
                Start Your Journey
              </h2>

              <p className="text-gray-400 mt-4">
                Join future drone pilots, engineers and innovators through practical training and industry-focused programs.
              </p>
            </div>

            {/* timeline */}
            {step === "info" && (
              <>
            <div className="space-y-6">

              <div className="bg-white/[0.03] rounded-2xl p-5">
                <h3 className="font-bold">
                  Junior Drone Club
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Learn foundations of drone technology and aviation.
                </p>
              </div>

              <div className="bg-white/[0.03] rounded-2xl p-5">
                <h3 className="font-bold">
                  Training Structure
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Hands-on classes, simulations and guided projects.
                </p>
              </div>

              <div className="bg-white/[0.03] rounded-2xl p-5">
                <h3 className="font-bold">
                  Program Requirements
                </h3>

                <ul className="mt-3 text-gray-400 text-sm space-y-2">
                  <li>✔ High school diploma or equivalent</li>
                  <li>✔ Government-issued ID</li>
                  <li>✔ Full attendance commitment</li>
                </ul>
              </div>

              <div className="bg-white/[0.03] rounded-2xl p-5">
                <h3 className="font-bold">
                  Choose Your Path
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Photography, Surveillance, Mapping, Programming and more.
                </p>
              </div>

            </div>

            <button
              onClick={()=> setStep("form")}
              className="
              w-full
              mt-8
              py-4
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              "
            >
              Continue Application
            </button>
</>
            )}


 {step === "form" && (
  <div className="space-y-5 mt-6">

    <h2 className="text-2xl font-bold">
      Registration Form
    </h2>

    <input
      type="text"
      placeholder="Full Name"
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
      className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
    />

    <input
      type="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={(e) =>
        setFormData({ ...formData, phone: e.target.value })
      }
      className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
    />

    <select
      value={formData.program}
      onChange={(e) =>
        setFormData({ ...formData, program: e.target.value })
      }
      className="w-full p-3 rounded-xl bg-[#0B0F1A] border border-white/10"
    >
      <option value="">Select Program</option>
      <option>Junior Drone Club</option>
      <option>Mapping & Survey</option>
      <option>Advanced Flight Training</option>
    </select>

    <button
      onClick={() => {
        console.log(formData);
        onApply(formData);
      }}
      className="w-full py-3 bg-green-600 rounded-xl"
    >
      Submit Application
    </button>

    <button
      onClick={() => {
        setStep("info"); 
        onClose();
      }}
      className="w-full py-2 text-gray-400"
    >
      ← Back
    </button>

  </div>
)}
          </motion.div>
        </>
      )}

     

    </AnimatePresence>
  );
};

export default ApplyModal;