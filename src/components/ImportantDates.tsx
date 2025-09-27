import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ImportantDates() {
  const importantDates = [
    { event: "Submission Deadline", date: "June 30, 2026", status: "upcoming" },
    { event: "Acceptance Notification", date: "August 15, 2026", status: "upcoming" },
    { event: "Camera-Ready Submission", date: "September 30, 2026", status: "upcoming" },
    { event: "Conference Dates", date: "October 28-29, 2026", status: "highlighted" }
  ];

  return (
    <section id="dates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" >
            Important Dates
          </motion.h2>
          <motion.div className="w-24 h-1 bg-blue-600 mx-auto mb-8" initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 0.8, delay: 0.2 }} />
        </motion.div>

        <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="space-y-6">
            {importantDates.map((item, i) => (
              <motion.div
                key={i}
                className={`flex items-center p-6 rounded-xl border-2 ${
                  item.status === "highlighted" ? "bg-blue-50 border-blue-200" : "bg-white border-gray-200"
                } transition-colors duration-200`}
                // variants={itemVariants}
                whileHover={{ x: 10, boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.div className={`w-4 h-4 rounded-full mr-6 ${item.status === "highlighted" ? "bg-blue-600" : "bg-gray-400"}`} whileHover={{ scale: 1.2 }} />
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${item.status === "highlighted" ? "text-blue-900" : "text-gray-900"}`}>{item.event}</h3>
                </div>
                <div className={`text-lg font-medium ${item.status === "highlighted" ? "text-blue-700" : "text-gray-700"}`}>{item.date}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
