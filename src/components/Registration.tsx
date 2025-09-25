import React from "react";
import { motion } from "framer-motion";

const Registration = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div 
  className="text-center mb-16" 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, margin: "-100px" }}
>
  <motion.h2 
    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" 
    // variants={itemVariants}
  >
    Registration Fee
  </motion.h2>

  <motion.div 
    className="w-24 h-1 bg-blue-600 mx-auto mb-4" 
    initial={{ width: 0 }} 
    whileInView={{ width: 96 }} 
    transition={{ duration: 0.8, delay: 0.2 }} 
  />

  <motion.p 
    className="text-lg text-gray-600 max-w-2xl mx-auto" 
    // variants={itemVariants}
  >
    Choose your category and register for NGISE 2026
  </motion.p>
</motion.div>


        {/* Indian Authors Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
        >
          <div className="bg-blue-600 text-white px-6 py-3 text-xl font-semibold">
            Indian Authors
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="py-3 px-6">Category</th>
                  <th className="py-3 px-6">IEEE Members (INR)</th>
                  <th className="py-3 px-6">Non-IEEE Members (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6">Academician / Industry / Others</td>
                  <td className="py-4 px-6">6000</td>
                  <td className="py-4 px-6">7000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Research Scholar / UG / PG Student</td>
                  <td className="py-4 px-6">5000</td>
                  <td className="py-4 px-6">6000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Attendee</td>
                  <td className="py-4 px-6">4000</td>
                  <td className="py-4 px-6">5000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Non Presenting Author</td>
                  <td className="py-4 px-6">1000</td>
                  <td className="py-4 px-6">1500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 px-6 py-3 bg-gray-50">
            * Additional per page charges INR 1000
          </p>
        </motion.div>

        {/* Foreign Authors Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-blue-600 text-white px-6 py-3 text-xl font-semibold">
            Foreign Authors
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="py-3 px-6">Category</th>
                  <th className="py-3 px-6">IEEE Members (USD)</th>
                  <th className="py-3 px-6">Non-IEEE Members (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6">Academician / Industry / Others</td>
                  <td className="py-4 px-6">350</td>
                  <td className="py-4 px-6">400</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 px-6 py-3 bg-gray-50">
            * Additional per page charges USD 50
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
