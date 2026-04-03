import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Calendar, Globe, Rocket, ArrowRight } from "lucide-react";
import Logo from "../public/collegelogo.png";
import BDCOE from "../public/bdcoe logoo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-lg transition-transform group-hover:scale-110">
                <img src={Logo} alt="AKGEC Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">AKGEC</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              International Conference on Next-Generation Information System Engineering (NGISE 2026). 
              A premier platform for researchers and practitioners to explore the future of IS engineering.
            </p>
            <div className="space-y-3">
              {/* <div className="flex items-center gap-3 text-slate-400">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="text-xs uppercase tracking-wider font-semibold">TBD, 2026</span>
              </div> */}
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">AKGEC Ghaziabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { name: "Home", link: "/" },
                { name: "Call for Papers", link: "/call-for-papers" },
                { name: "Registrations", link: "/registrations" },
                { name: "Venue", link: "/venue" },
                { name: "Contact Us", link: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programme */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Programme
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { name: "Keynote Speakers", link: "/speakers/keynote-speakers" },
                { name: "Program Committee", link: "/committee/program-committee" },
                { name: "About The City", link: "/locale/about-city" },
                { name: "History", link: "/ngise/history" },
                { name: "FAQ", link: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:ngise@akgec.ac.in" 
                className="flex items-start gap-3 group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors mt-1">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold mb-0.5">Email Us</p>
                  <p className="text-sm text-slate-300 break-all">ngise@akgec.ac.in</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-800 rounded-lg transition-colors mt-1">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold mb-0.5">Website</p>
                  <p className="text-sm text-slate-300">www.ngise.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Branding */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2026 NGISE. Developed for scientific excellence.
          </div>
          
          <div className="flex items-center gap-4 bg-slate-800/50 px-6 py-3 rounded-2xl border border-slate-800 shadow-inner group">
            <p className="text-xs text-slate-400 font-medium">Designed & Developed By:</p>
            <div className="flex items-center gap-3 border-l border-slate-700 pl-4">
              <img 
                src={BDCOE} 
                alt="BDCOE Logo" 
                className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
              />
              <span className="text-xs font-bold text-slate-300 group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                Big Data Center of Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
