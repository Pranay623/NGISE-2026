import { motion } from "framer-motion";

const OnPaperCall = () => {
    return (
        <>
        <motion.div
                  className="text-center mb-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    // variants={itemVariants}
                  >
                    Call For Papers
                  </motion.h2>
                  <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto mb-5"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <p className="text-lg text-gray-700 leading-relaxed max-w-6xl mx-auto px-4 md:px-12 mb-12 text-justify">
                All submissions will be peer reviewed and evaluated based on originality, technical and/or research content/depth, correctness and relevance to conference scope. 
Topics of interest include, but are not limited to the following:
</p>
        </motion.div>
    </>
);
};
export default OnPaperCall;
