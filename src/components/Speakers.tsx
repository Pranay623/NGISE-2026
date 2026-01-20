import React from "react";
import { motion } from "framer-motion";
import PageHeader from "./PageHeader";



export default function Speakers() {
  const speakers = [
    { name: "Dr. Sarah Johnson", title: "Keynote Speaker", affiliation: "MIT", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Prof. Michael Chen", title: "Session Chair", affiliation: "Stanford University", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Dr. Priya Sharma", title: "Technical Committee", affiliation: "IIT Delhi", image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Prof. James Wilson", title: "Program Committee", affiliation: "Oxford University", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Speakers & Committee"
        description="Distinguished speakers and committee members from leading institutions worldwide"
      />
      <section id="speakers" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Speakers Grid with Blur + Coming Soon Overlay */}
          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 filter blur-sm opacity-60 pointer-events-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {speakers.map((s, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                // variants={itemVariants}
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {s.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">{s.title}</p>
                    <p className="text-gray-600 text-sm">{s.affiliation}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Overlay Coming Soon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-black/60 px-8 py-4 rounded-2xl shadow-lg"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                  Coming Soon
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
