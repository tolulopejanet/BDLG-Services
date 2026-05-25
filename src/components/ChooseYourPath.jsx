import { motion } from "framer-motion";

const paths = [
  {
    title: "Drone Pilot Training",
    description: "Learn mission planning, flight control, and aerial operations.",
  },
  {
    title: "UAV Systems Engineering",
    description: "Build and maintain reliable drone platforms and payloads.",
  },
  {
    title: "Aerial Data Intelligence",
    description: "Process imagery, generate maps, and support decision-making.",
  }
];

const ChooseYourPath = () => {
  return (
    <section className="py-24 bg-[#070b14] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
            Choose Your Path
          </p>
          <h2 className="text-4xl font-black">Pick the training path that fits your goals.</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
            Whether you want to fly, build systems, or analyze data, we offer a clear route to success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {paths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPath;
