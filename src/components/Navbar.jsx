import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
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
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-[#0B0F1A]/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"}
      `}
    >

      <div className="container mx-auto px-6 h-20 flex justify-between items-center">

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
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white"
        >
          <HiMenu size={28} />
        </button>

      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden">

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="absolute right-0 top-0 h-full w-[75%] bg-[#0B0F1A] p-6"
          >

            {/* CLOSE */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white mb-10"
            >
              <HiX size={30} />
            </button>

            <div className="space-y-6">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-300 text-lg"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/ContactUs"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-blue-600 py-3 rounded-xl"
              >
                Schedule Call
              </Link>

            </div>

          </motion.div>
        </div>
      )}

    </motion.nav>
  );
};

export default Navbar;