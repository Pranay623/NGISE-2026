import React from "react";
import { motion } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import PageHeader from "./PageHeader";

const Registration = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Registration Fee"
        description="Choose your category and register for NGISE 2026"
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Indian Authors Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            <div className="bg-blue-600 text-white px-6 py-3 text-xl font-semibold">
              Full Paper (Indian Authors)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="py-3 px-6">Category</th>
                    <th className="py-3 px-6">Early Bird  (before Sep.14) (INR)</th>
                    <th className="py-3 px-6">Regular (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6">Regular (Faculty/Industry Professional)</td>
                    <td className="py-4 px-6">8000</td>
                    <td className="py-4 px-6">9000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Student/Research Scholar</td>
                    <td className="py-4 px-6">7000</td>
                    <td className="py-4 px-6">8000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Delegates</td>
                    <td className="py-4 px-6">6000</td>
                    <td className="py-4 px-6">7000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 px-6 py-3 bg-gray-50">
              Extra Page (over 12) Additional charges <strong>INR 1000 per page</strong>
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
              Full Paper (Foreign Authors)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="py-3 px-6">Category</th>
                    <th className="py-3 px-6">Early Bird  (before Sep.14)</th>
                    <th className="py-3 px-6">Regular</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6">Regular (Faculty/Industry Professional)</td>
                    <td className="py-4 px-6">USD 420 / EUR 362</td>
                    <td className="py-4 px-6">USD 400 / EUR 344</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Student/Research Scholar</td>
                    <td className="py-4 px-6">USD 400 / EUR 344</td>
                    <td className="py-4 px-6">USD 420 / EUR 362</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Delegates</td>
                    <td className="py-4 px-6">USD 340 / EUR 292</td>
                    <td className="py-4 px-6">USD 360 / EUR 310</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 px-6 py-3 bg-gray-50">
              Extra Page (over 12) Additional charges <strong>USD 50 or EUR 43 per page</strong>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 max-w-5xl mx-auto"
          >
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    Important Notes
                  </h3>
                  <ul className="grid gap-3 text-gray-700">
                    {[
                      "Registration fee is non-refundable, non-transferable and includes 18% GST.",
                      "Certificate will be issued only to the presenter of the paper (during oral presentation). At least one author must register and pay the registration fee.",
                      "All the registered papers must be presented; only presented papers will be forwarded for final publication.",
                      "If more than one authors are willing to attend the conference for a paper presentation, then all the authors must register separately."
                    ].map((note, index) => (
                      <li key={index} className="flex items-start gap-3 bg-white/50 p-3 rounded-lg border border-blue-100/50">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <span className="text-base leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Register Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
