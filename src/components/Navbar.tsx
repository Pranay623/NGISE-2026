import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../public/main logo.png"
import IEEE from "../public/IEEE.png"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: ["easeOut"] }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <motion.img
              src= {Logo} // because it's in public/
              alt="NGISE Logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-22 h-12 "
            />
            {/* <span className="text-xl font-semibold text-gray-900">
              NGISE 2026
            </span> */}
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link to="/tracks" className="text-gray-600 hover:text-blue-600 font-medium">
              Tracks
            </Link>
            <Link to="/dates" className="text-gray-600 hover:text-blue-600 font-medium">
              Important Dates
            </Link>
            <Link to="/speakers" className="text-gray-600 hover:text-blue-600 font-medium">
              Speakers
            </Link>
            <Link to="/venue" className="text-gray-600 hover:text-blue-600 font-medium">
              Venue
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <motion.img
              src= {IEEE} // because it's in public/
              alt="NGISE Logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-22 h-12 "
            />
            {/* <span className="text-xl font-semibold text-gray-900">
              NGISE 2026
            </span> */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
