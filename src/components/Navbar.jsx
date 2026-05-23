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
    { label: "Who We Serve", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Partners", href: "/partners" },
    { label: "Company", href: "/AboutUs" },
    { label: "Resources", href: "/Blog" }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`
        fixed top-0 left-0 w-full z-100 transition-all duration-300
        ${scrolled
          ? "bg-[#0B0F1A]/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"}
      `}
    >

      <div className="container mx-auto px-6 h-20 flex justify-between items-center overflow-hidden">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={BDLG} className="w-10" />

          <div>
            <h2 className="text-white font-bold">BDLG</h2>
            <p className="text-xs text-gray-400">Services</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => {
            const active = location.pathname === link.href;

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  text-sm transition relative
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
          to="/ContactUs"
          className="hidden md:block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
        >
          Schedule Call
        </Link>

        {/* MOBILE BUTTON */}
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="
    md:hidden
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

      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
  {menuOpen && (
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
      />

      {/* SLIDE MENU */}
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
          w-[80%]
          bg-[#0B0F1A]
          border-l border-white/10
          z-50
          px-8
          pt-28
          md:hidden
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
            to="/ContactUs"
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
    </>
  )}
</AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;