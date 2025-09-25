import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react"; // dropdown icon
import Logo from "../public/main logo.png";

export default function Navbar() {
  const location = useLocation();
  const [localeOpen, setLocaleOpen] = useState(false);

  // Function to handle active link styling
  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-600 font-medium transition-colors";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <motion.img
            src={Logo}
            alt="NGISE Logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-22 h-12"
          />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/venue" className={linkClass("/venue")}>
              Venue
            </Link>
            <Link to="/call-for-papers" className={linkClass("/call-for-papers")}>
              Call for Papers
            </Link>
            <Link to="/speakers" className={linkClass("/speakers")}>
              Speakers
            </Link>
            <Link to="/committee" className={linkClass("/committee")}>
              Committee
            </Link>
            <Link to="/program" className={linkClass("/program")}>
              Program
            </Link>
            <Link to="/registrations" className={linkClass("/registrations")}>
              Registration
            </Link>

            {/* Dropdown for Locale */}
            <div
              className="relative"
              onMouseEnter={() => setLocaleOpen(true)}
              onMouseLeave={() => setLocaleOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 ${
                  location.pathname.startsWith("/locale")
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 font-medium transition-colors"
                }`}
              >
                <span>Locale</span>
                <ChevronDown className="w-4 h-4 mt-0.5" />
              </button>

              <AnimatePresence>
                {localeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    <Link
                      to="/locale/about-city"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      About The City
                    </Link>
                    <Link
                      to="/locale/hotels"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      Nearby Hotels
                    </Link>
                    <Link
                      to="/locale/visa"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      Visa Information
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
