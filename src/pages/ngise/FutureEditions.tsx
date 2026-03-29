import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const futureEditions = [
  "NGISE 2027, University of Ulster, Belfast, Northern Ireland",
  "NGISE 2028, National Yunlin University of Science and Technology, Taiwan",
  "NGISE 2029, Karlsruhe Insitute of Technology (KIT), Germany",
  "NGISE 2030, Tallinn University of Technology (TalTech), Estonia",
  "NGISE 2031, Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Delhi NCR, India"
];

export default function FutureEditions() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="NGISE Future Editions"
      />
      <div className="max-w-7xl mx-auto px-6 py-16 text-left">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="prose prose-lg max-w-none"
        >
          <ul className="list-disc pl-5 space-y-6">
            {futureEditions.map((edition, index) => (
              <li key={index} className="text-gray-700 leading-relaxed font-medium">
                {edition}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
