import { motion } from "framer-motion";
import PageHeader from "./PageHeader";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutSection() {

  return (
    <div className="bg-gray-50 ">
      <PageHeader
        title="About the Conference"
        description="NGISE-2026 offers a collaborative forum for advancing cutting-edge technologies in information systems"
      />
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{}}>
            <motion.p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center sm:text-justify mb-8 px-2" variants={itemVariants}>
              Information systems are the nexus of today’s viable organizations. The International Conference on Next Generation Information Systems Engineering (NGISE) provides a forum for research that works away from the beaten track by pursuing fundamentally new approaches or utilizing currently emerging technologies for systematically engineered information systems. Given this highly innovative nature of the conference, we take particular care of scientific reproducibility. The event fosters idea exchange about sustainable and secure solutions driving rapid and impactful digital transformation. Attendees benefit from networking opportunities that spur scientific collaborations and industry-academia partnerships through a rich tapestry of various kinds of high-level presentations and discussions.
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
