import React from "react";
import { motion } from "framer-motion";
import Logo from "../public/collegelogo.png"; // Replace with your logo path
import { Link } from "react-router-dom";
import BDCOE from "../public/bdcoe logoo.png"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 text-white pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo + Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8 mb-6">
          {/* College Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <img src={Logo} alt="College Logo" className="w-14 h-14 mr-3" />
            <span className="text-xl font-semibold">AKGEC</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0">
            {[
              { name: "Home", link: "/" },
              { name: "Registrations", link: "/registrations" },
              { name: "Paper Submission", link: "/papers" },
              { name: "FAQ", link: "/faq" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section: Designed & Developed By */}
        <div className="text-center text-gray-400 text-sm space-y-1">
          <p>Designed & Developed By:</p>
          {/* <p className="font-semibold">Big Data Centre of Excellence</p> */}
          <img src={BDCOE} alt="BDCOE Logo" className="w-15 h-11 mx-auto" />
          <p className="font-semibold">Big Data Centre of Excellence</p>
          <p className="text-gray-500 mt-2 text-xs">
            © 2026  NGISE. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
