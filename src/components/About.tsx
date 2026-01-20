import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Globe } from "lucide-react";
import PageHeader from "./PageHeader";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutSection() {
  const cards = [
    { icon: Users, title: "Global Network", desc: "Connect with leading experts and researchers worldwide" },
    { icon: BookOpen, title: "Knowledge Sharing", desc: "Present and discuss cutting-edge research findings" },
    { icon: Globe, title: "Innovation Hub", desc: "Explore emerging technologies and future trends" }
  ];

  return (
    <div className="bg-gray-50 ">
      <PageHeader
        title="About the Conference"
        description="NGISE-2026 offers a collaborative forum for advancing cutting-edge technologies in information systems"
      />
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{}}>
            <motion.p className="text-lg text-gray-700 leading-relaxed text-center mb-1" variants={itemVariants}>
              The International Conference on Next Generation Information System Engineering (NGISE-2026) offers a collaborative forum for advancing cutting-edge technologies in information systems. It unites researchers, practitioners, and academicians to explore innovative solutions across diverse tracks. The event fosters idea exchanges about sustainable, secure solutions amid rapid digital transformation. Attendees benefit from networking opportunities that spur industry-academia partnerships. Through a rich tapestry of presentations, workshops, and discussions, the conference aims to catalyze advancements in next-generation information systems.
            </motion.p>

            {/* <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" variants={{}} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {cards.map((c, i) => (
              <motion.div key={i} className="bg-gray-50 p-6 rounded-xl" variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}>
                <motion.div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <c.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
