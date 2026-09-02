import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JuniorDroneClub = () => {
  return (
    <section className="bg-[#0C1320] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-10 lg:grid-cols-2 items-center"
        >
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
              Junior Drone Club
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Start strong with practical training for beginners and youth.
            </h2>
            <p className="text-gray-400 leading-8">
              Our club combines flight fundamentals, safety training, and real-world exercises so young learners can gain confidence quickly in a structured environment.
            </p>
            <Link
              to="/kids"
              className="inline-block mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="space-y-4">
            {[
              "Hands-on drone assembly and maintenance",
              "Simulator-based flight practice",
              "Team missions and field exercises",
              "STEM-focused drone challenges"
            ].map((item, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JuniorDroneClub;
