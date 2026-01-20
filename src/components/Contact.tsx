import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import PageHeader from "./PageHeader";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Venue() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Get in touch with us for any queries related to NGISE 2026"
      />
      <section id="venue" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Venue Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Conference Venue
              </h3>

              {/* Google Maps Embed */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-xl overflow-hidden shadow-md mb-6"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4668507627675!2d77.4994291756927!3d28.675678282119712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAjay%20Kumar%20Garg%20Engineering%20College!5e0!3m2!1sen!2sin!4v1758812119007!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>

              {/* <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Ajay Kumar Garg Engineering College
                  </p>
                  <p className="text-gray-600">
                    27th Km Milestone, Delhi-Meerut Expressway, Ghaziabad,
                    Uttar Pradesh 201015, India
                  </p>
                </div>
              </div>
            </div> */}
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Dr. Anupama Sharma
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        ngise@akgec.ac.in
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">+91 9868450322</span>
                    </div>
                    <h6 className="font-sans text-gray-900 mb-4">
                      For more information, visit our website or contact us at <span className="font-semibold"><a href="https://www.akgec.ac.in">https://www.akgec.ac.in</a></span>
                    </h6>
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Ajay Kumar Garg Engineering College
                      </p>
                      <p className="text-gray-600">
                        27th Km Milestone, Delhi-Meerut Expressway, Ghaziabad,
                        Uttar Pradesh 201015, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-4">
                  Registration Support
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      registration@ngise2026.org
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+91-120-2722201</span>
                  </div>
                </div>
              </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
