import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PreviousEditions() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="NGISE Previous Editions"
      />
      <div className="max-w-7xl mx-auto px-6 py-16 text-left">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="max-w-none text-left"
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">NGISE 2025 </h3>
            <a 
              href="https://ngise.org/2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors block leading-relaxed"
            >
              NGISE 2025 - the 1st IEEE International Conference on Next Generation Information System Engineering, Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Delhi NCR, India
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
