import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../public/main logo.png";
import IEEE from "../public/IEEE.png";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: ["easeOut"] }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <div className="flex items-center space-x-3">
            <motion.img
              src={Logo}
              alt="NGISE Logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-22 h-12"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/venue" className="text-gray-600 hover:text-blue-600 font-medium">
              Venue
            </Link>
            <Link to="/call-for-papers" className="text-gray-600 hover:text-blue-600 font-medium">
              Call for Papers
            </Link>
            <Link to="/speakers" className="text-gray-600 hover:text-blue-600 font-medium">
              Speakers
            </Link>
            <Link to="/committee" className="text-gray-600 hover:text-blue-600 font-medium">
              Committee
            </Link>
            <Link to="/program" className="text-gray-600 hover:text-blue-600 font-medium">
              Program
            </Link>
            <Link to="/registrations" className="text-gray-600 hover:text-blue-600 font-medium">
              Registration
            </Link>
            <Link to="/locale" className="text-gray-600 hover:text-blue-600 font-medium">
              Locale
            </Link>
            <Link to="/venue" className="text-gray-600 hover:text-blue-600 font-medium">
              Contact Us
            </Link>
          </div>

          {/* Right Logo */}
          <div className="flex items-center space-x-3">
            <motion.img
              src={IEEE}
              alt="IEEE Logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-22 h-12"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
