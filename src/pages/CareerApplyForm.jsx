import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";

const CareerApplyForm = ({ showApplyForm, onClose, onChange, onSubmit, formData }) => {
  return (
    <AnimatePresence>
      {showApplyForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-4 py-6 sm:px-6 sm:py-8"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            className="relative mx-auto w-full max-w-3xl rounded-[32px] bg-[#0B0F1A] border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-300 hover:text-white"
            >
              <HiX size={28} />
            </button>

            <div className="mb-8">
              <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
                Career Application
              </p>
              <h2 className="text-4xl font-black mt-3">
                Apply for our next training cohort
              </h2>
              <p className="text-gray-400 mt-4 leading-7">
                Complete the form below and our admissions team will follow up with your next steps.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={onChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Specialization</label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                >
                  <option value="" className="text-black">Select specialization</option>
                  <option value="Photography & Cinematography" className="text-black">Photography & Cinematography</option>
                  <option value="Surveillance & Security" className="text-black">Surveillance & Security</option>
                  <option value="Industrial Inspection" className="text-black">Industrial Inspection</option>
                  <option value="Mapping & Surveying" className="text-black">Mapping & Surveying</option>
                  <option value="Drone Programming" className="text-black">Drone Programming</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Experience</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                  rows={4}
                  placeholder="Share your relevant experience"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CareerApplyForm;
