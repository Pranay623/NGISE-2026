import React from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
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
          {/* <motion.div
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
          </motion.div> */}

          {/* Foreign Authors Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-blue-600 text-white px-6 py-3 text-xl font-semibold">
              Full Paper
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
                    <td className="py-4 px-6">Standard</td>
                    <td className="py-4 px-6">USD 400 / EUR 350</td>
                    <td className="py-4 px-6">USD 600 / EUR 500</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Reduced (via NGISE/AKGEC Scholarship)</td>
                    <td className="py-4 px-6">USD 130 / EUR 110</td>
                    <td className="py-4 px-6">USD 150 / EUR 120</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Extra Page (up to two pages)</td>
                    <td className="py-4 px-6">USD 60 / EUR 50 per page</td>
                    <td className="py-4 px-6">USD 90 / EUR 75 per page</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">​​​​​​​Additional Dinner Ticket</td>
                    <td className="py-4 px-6">USD 60 / EUR 50</td>
                    <td className="py-4 px-6">USD 90 / EUR 75</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*<p className="text-sm text-gray-600 px-6 py-3 bg-gray-50">
              Extra Page (over 12) Additional charges <strong>USD 50 or EUR 43 per page</strong>
            </p>*/}
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
                    Terms and Conditions
                  </h3>
                  <ul className="grid gap-3 text-gray-700">
                    {[
                      "For each accepted paper, at least one author needs to register to the NGISE conference.",
                      "NGISE is a hybrid conference, whereas on-site attendance is highly encouraged and considered the preferred mode of participation by the NGISE organizers. Papers that are not be presented on-site, must be sent as a pre-recorded presentation (mp4 and youtube link) before 20 October to info@NGISE.org. Papers that are not presented on-site and fail to submit a pre-recorded meeting to the NGISE organizaers will not be forwarded to final publication. Only on-site participants will receive a certificate of participation. Only on-site participants will receive the conference kit.",
                      "Standard registration fees cover admittance to all sessions, certificate of participation (only for on-site participants), lunch, coffee breaks, and conferece dinner.",
                      (
                        <>
                          Reduced fees cover admittance to all sessions, certificate of participation (only for on-site participants), lunch, and coffee breaks. The reduced fee is sponsored by the <strong>NGISE/AKGEC Young Scholar's Scholarship</strong>.The intention of the reduced fee is to enable young scholars to attend the conference. It is granted upon application to a limited number of applicants, according to availability of funds. As application for a reduced fee, it is sufficient to send your CV (including ORCID and Google Scholar link) to info@ngise.org (subject: <strong>Reduced Fee</strong>). Researchers at all career stages can apply. Applicants will be selected according to scientific age and achievements.
                        </>
                      ),
                      "The additional dinner ticket can be bought for anyone not attending the conference (spouses, collaegues, NGISE friends etc). The additional dinner can be bought by participants attending with a reduced fee (the conference dinner is not included in the reduced fee).",
                      "Registration fee is non-refundable, non-transferable and includes 18% GST."
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
            <div
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-400 text-white rounded-full text-lg font-semibold shadow-md cursor-not-allowed transition-all duration-300"
            >
              <span>Registration: Coming Soon</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
