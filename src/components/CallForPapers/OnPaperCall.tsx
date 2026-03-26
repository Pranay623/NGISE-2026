import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const OnPaperCall = () => {
  return (
    <section className="pt-0 md:pt-0 ">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        // variants={itemVariants}
        >
          Call For Papers
        </motion.h2> */}
        <PageHeader title={" Call For Papers"}/>
        {/* <motion.div
          className="w-24 h-1 bg-blue-600 mx-auto mb-5"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        /> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-lg text-gray-700 leading-relaxed max-w-6xl mx-auto px-8 md:px-12 mb-2 md:mb-1 text-left md:text-justify">
          Information systems are the nexus of today’s viable organizations. The International Conference on Next Generation Information System Engineering (NGISE-2026) offers a collaborative platform for bringing advanced technologies to systematically engineered information systems.
        </p>
        <h1 className="text-lg text-gray-700 leading-relaxed max-w-6xl mx-auto px-8 md:px-12 text-left md:text-justify font-medium" > NGISE welcomes papers that work away from the beaten track by</h1>
        
        <ul className=" list-none  pl-8 text-lg text-gray-700 leading-relaxed max-w-6xl mx-auto px-6 md:px-[3rem]   text-left md:text-justify">
          <li>pursuing fundamentally new approaches</li>
          <li>utilizing currently emerging technologies</li>
        </ul>
      </motion.div>
    </section>
  );
};
export default OnPaperCall;
