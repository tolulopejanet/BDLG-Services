import Training3 from "../assets/kid1.png";

const CareerHero = ({ onApplyClick }) => {
  return (
    <section className="relative overflow-hidden mt-16">
      <img src={Training3} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Drone training" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/75 to-slate-800/80" />
      <div className="relative py-24 text-center">
        <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Careers & training</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Build Your Future in Drone Tech</h1>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg mb-8">With over 10 years of UAV development experience, BDLG Services Limited delivers durable drone solutions and world-class training. We help individuals and organizations build, manage, and scale drone programs through expert guidance and hands-on learning.</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a href="#programs" className="border border-white/70 text-white px-8 py-3 rounded-lg hover:bg-white/10 cursor-pointer">Explore programs</a>
          <button onClick={onApplyClick} className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-cyan-300 transition">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
