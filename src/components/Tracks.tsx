import React from "react";
import { motion } from "framer-motion";
import { Globe, Brain, Database, Cloud, Shield } from "lucide-react";
import PageHeader from "./PageHeader";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Tracks() {
  const tracks = [
    { title: "Information System Engineering", icon: Globe, description: "System design, architecture, and engineering methodologies" },
    { title: "Artificial Intelligence", icon: Brain, description: "Machine learning, deep learning, and intelligent systems" },
    { title: "Data Mining & Analytics", icon: Database, description: "Data extraction, pattern recognition, and analytics" },
    { title: "Big Data Technologies", icon: Database, description: "Large-scale data processing and distributed systems" },
    { title: "Cloud Computing", icon: Cloud, description: "Cloud architectures, services, and deployment models" },
    { title: "Cybersecurity", icon: Shield, description: "Information security, privacy, and threat management" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Conference Tracks"
        description="Explore diverse research domains and cutting-edge technologies in information system engineering"
      />
      <section id="tracks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {tracks.map((track, idx) => {
              const Icon = track.icon;
              return (
                <motion.div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100" variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}>
                  <motion.div className="mb-6" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{track.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{track.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
