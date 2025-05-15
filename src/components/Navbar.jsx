import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";
import BDLG from "../assets/bdlg-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Services", label: "Our Services" },
    { href: "/AboutUs", label: "About Us" },
    { href: "/Training", label: "Our Training" },
    { href: "/Blog", label: "Blog" },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={BDLG} alt="BDLG-logo" className="w-20 h-25 object-cover" />
          <Link
            className="-ml-5 sm:text-[16px] lg:text-md tracking-[2px] text-gray-600 font-medium "
            to="/"
          >
            BDLG SERVICES
          </Link>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/* desktop navitems */}

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              to={link.href}
              key={index}
              onClick={() => setActiveLink(link.href)}
              className={`text-[16px] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-600 after:transition-all ${
                activeLink === link.href
                  ? "text-grey-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* get in touch */}
        <button className="hidden md:block bg-red-500 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-red-100">
          <Link to="/ContactUs">Contact Us</Link>
        </button>
      </div>

      {/* mobile menu items*/}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-24">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-red-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                to={link.href}
              >
                {link.label}
              </Link>
            ))}

            <button className="w-full bg-red-600 text-white px-6 py-2 5 rounded-lg hover:bg-red-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
              <Link to="/ContactUs" onClick={() => 
                  setIsMenuOpen(false);
                }>Contact Us</Link>
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
