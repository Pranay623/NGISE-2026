import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Tutorial() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Tutorial"
        description="Deep dive into specialized topics with our expert-led tutorials."
      />
      <div className="max-w-7xl mx-auto px-6 py-16 text-left">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        >
          <p className="mb-6">
            Details about the upcoming NGISE tutorials will be announced soon. These sessions are designed to provide hands-on experience and in-depth knowledge on emerging technologies like Quantum Computing and AI orchestration.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
