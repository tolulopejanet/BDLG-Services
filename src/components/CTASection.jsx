import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    
    <section className="relative py-20 px-6 bg-[#030712] overflow-hidden">
       {/* <section className="py-32 px-6 bg-[#030712] overflow-hidden"> */}


      {/* glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          Ready to Shape
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            The Future?
          </span>
        </h2>

        <p className="text-gray-400 mt-8 text-lg">
          Join the next generation of drone professionals building safer,
          smarter and faster systems.
        </p>

        <div className="mt-12 flex justify-center gap-5 flex-wrap">

          <Link
            to="/career"
            className="px-10 py-4 rounded-2xl bg-blue-600 hover:scale-105 transition inline-flex items-center justify-center"
          >
            Apply Now
          </Link>

          <Link
            to="/contactus"
            className="px-10 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg inline-flex items-center justify-center"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTASection;