import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import BDLG from "../assets/bdlg-icon.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/aboutus" },
    { label: "Products", href: "/products" },
    { label: "Career & Partners", href: "/career" },
     { label: "Kids Training", href: "/kids" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-[#0B0F1A]/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"}
      `}
    >

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between gap-4 overflow-hidden">

        {/* LOGO */}
        <Link to="/" className="flex min-w-0 shrink items-center gap-3">
          <img src={BDLG} alt="BDLG Services logo" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" />

          <div className="min-w-0 leading-none">
            <h2 className="truncate text-base font-black tracking-[0.1em] text-white sm:text-lg">BDLG</h2>
            <p className="mt-1 truncate text-[9px] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-[10px]">Services</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">

          {navLinks.map((link) => {
            const active = location.pathname === link.href;

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  group text-sm transition relative
                  ${active ? "text-white" : "text-gray-400 hover:text-white"}
                `}
              >
                {link.label}

                {/* active underline */}
                <span
                  className={`
                    absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}

        </div>

        {/* CTA */}
        <Link
          to="/schedule"
          className="hidden lg:block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
        >
          Schedule Call
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            shrink-0
            text-white
            p-2
            rounded-lg
            border border-white/10
            bg-white/5
            backdrop-blur-sm
            z-[60]
          "
        >
  {menuOpen ? (
    <HiX size={28} />
  ) : (
    <HiMenu size={28} />
  )}
        </button>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
  {menuOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden overflow-hidden"
      />

      {/* Drawer wrapper */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50 lg:hidden">

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35 }}
          className="
            fixed
            top-0
            right-0
            h-screen
            w-full
            max-w-[320px]
            bg-[#0B0F1A]
            border-l border-white/10
            z-50
            px-8
            pt-28
            lg:hidden 
            overflow-y-auto
            pointer-events-auto
          "
        >
          <div className="space-y-8">

            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  text-xl
                  text-gray-300
                  hover:text-blue-400
                  transition
                "
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/schedule"
              onClick={() => setMenuOpen(false)}
              className="
                block
                text-center
                bg-blue-600
                py-4
                rounded-xl
                text-white
                font-semibold
                mt-10
              "
            >
              Schedule Call
            </Link>

          </div>
        </motion.div>

      </div>
    </>
  )}
      </AnimatePresence>
      </div>


    </motion.nav>
  );
};

export default Navbar;