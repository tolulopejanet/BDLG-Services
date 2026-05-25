import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CareerHero = ({ onApplyClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#070b14] text-white py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/10" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
              Career Growth
            </p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Build a future in drone operations, engineering, and aerial intelligence.
            </h1>
            <p className="text-gray-300 max-w-xl leading-8">
              Apply to our academy programs, mentorship tracks, and placement support designed for aspiring pilots, engineers, and UAV specialists.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onApplyClick}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
              <Link
                to="/contactus?subject=Career Inquiry"
                className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                Talk to Admissions
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[32px] bg-white/5 border border-white/10 p-10 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-5">Career Benefits</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✔ Hands-on flight training with real UAV systems</li>
              <li>✔ Mentorship from industry drone professionals</li>
              <li>✔ Industry certification and placement guidance</li>
              <li>✔ Access to simulation labs and real mission planning</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
