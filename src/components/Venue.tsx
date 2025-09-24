import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Venue() {
  return (
    <section id="venue" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{}}>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
            Venue & Contact
          </motion.h2>
          <motion.div className="w-24 h-1 bg-blue-600 mx-auto mb-8" initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 0.8, delay: 0.2 }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Conference Venue</h3>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-xl h-64 mb-6 flex items-center justify-center hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Ajay Kumar Garg Engineering College</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Ajay Kumar Garg Engineering College</p>
                  <p className="text-gray-600">27th Km Milestone, Delhi-Meerut Expressway, Ghaziabad, Uttar Pradesh 201015, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-gray-900 mb-4">Conference Secretariat</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">conference@ngise2026.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+91-120-2722200</span>
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-gray-900 mb-4">Registration Support</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">registration@ngise2026.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+91-120-2722201</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
