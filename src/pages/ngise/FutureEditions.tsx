import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const futureEditions = [
  { year: "NGISE 2027 (fat)", location: "University of Ulster, Belfast, Northern Ireland" },
  { year: "NGISE 2028 (fat)", location: "National Yunlin University of Science and Technology, Taiwan" },
  { year: "NGISE 2029 (fat)", location: "Karlsruhe Insitute of Technology (KIT), Germany" },
  { year: "NGISE 2030 (fat)", location: "Tallinn University of Technology (TalTech), Estonia" },
  { year: "NGISE 2031 (fat)", location: "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Delhi NCR, India" }
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
           className="space-y-8"
        >
          {futureEditions.map((edition, index) => (
            <div key={index} className="text-gray-700">
              <h3 className="text-xl font-bold text-gray-700 mb-1">{edition.year}</h3>
              <p className="text-lg leading-relaxed">{edition.location}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
