import { useState } from "react";
import { motion } from "framer-motion";

const KidsRegistration = () => {
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    experience: "",
    interests: "",
    medicalConditions: "",
    parentNotes: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneNumber = "2349114448021"; // WhatsApp format without + symbol

    const message = `KIDS TRAINING REGISTRATION\n\n*CHILD INFORMATION:*\nName: ${formData.childName}\nAge: ${formData.childAge}\n\n*PARENT INFORMATION:*\nName: ${formData.parentName}\nEmail: ${formData.parentEmail}\nPhone: ${formData.parentPhone}\n\n*EXPERIENCE LEVEL:*\n${formData.experience}\n\n*INTERESTED IN:*\n${formData.interests}\n\n*MEDICAL CONDITIONS/ALLERGIES:*\n${formData.medicalConditions}\n\n*ADDITIONAL NOTES:*\n${formData.parentNotes}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setSuccess(true);
  };

  return (
    <div className="bg-[#0C1320] text-white min-h-screen py-20 px-6 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-[#0B0F1A]/90 p-8 shadow-2xl shadow-black/20"
      >
        <div className="mb-10 text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">Junior Drone Club</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-black">Kids Training Registration</h1>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-8">
            Register your child for an exciting journey into the world of drones! Complete the form below and we'll be in touch soon.
          </p>
        </div>

        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-emerald-500/10 border border-emerald-500/20 p-8 text-center"
          >
            <p className="text-emerald-200 text-lg">
              ✓ Registration submitted successfully! Check your email for further instructions. We'll be in touch soon!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Child Information Section */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold mb-6 text-blue-400">CHILD INFORMATION</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Child's Full Name *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition"
                    placeholder="Enter child's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Age (8-16) *
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition [color-scheme:dark]"
                  >
                    <option className="text-black" value="">Select age</option>
                    {Array.from({ length: 9 }, (_, i) => i + 8).map((age) => (
                      <option className="text-black" key={age} value={age}>{age} years old</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Previous Drone/Tech Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition [color-scheme:dark]"
                >
                  <option value="" className="text-black">Select experience level</option>
                  <option value="No experience" className="text-black">No experience - First time!</option>
                  <option value="Some experience" className="text-black">Some experience with drones</option>
                  <option value="Experienced" className="text-black">Experienced drone pilot</option>
                  <option value="Other" className="text-black">Other</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What interests your child most?
                </label>
                <textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition"
                  placeholder="e.g., Flying, Photography, Racing, Building, etc."
                  rows="3"
                />
              </div>
            </div>

            {/* Parent Information Section */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold mb-6 text-blue-400">PARENT/GUARDIAN INFORMATION</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Parent/Guardian Full Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition"
                  placeholder="Enter parent/guardian name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition"
                    placeholder="Enter email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            {/* Health & Safety Section */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold mb-6 text-blue-400">HEALTH & SAFETY</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Medical Conditions / Allergies (if any)
                </label>
                <textarea
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition"
                  placeholder="Please inform us of any medical conditions or allergies we should know about"
                  rows="3"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="border-t border-white/10 pt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="parentNotes"
                  value={formData.parentNotes}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500 transition"
                  placeholder="Any questions or additional information?"
                  rows="3"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t border-white/10 pt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-colors"
              >
                SUBMIT REGISTRATION
              </button>
              <p className="text-gray-400 text-sm mt-4 text-center">
                * Required fields. We'll review your registration and contact you within 24 hours.
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default KidsRegistration;
