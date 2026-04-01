import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import AratiSahooImage from "@/public/arati_sahoo.jpeg";

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
           className="text-center mb-16 flex flex-col items-center"
        >
          <div className="mb-6 relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
             <img 
               src={AratiSahooImage} 
               alt="Arati Sahoo" 
               className="relative rounded-2xl w-64 h-80 object-cover shadow-2xl border-4 border-white"
             />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Arati Sahoo</h2>
          <p className="text-xl font-semibold text-blue-800 mb-2">Principal Quantum Engineer, NextGen Computing Research Group, Unisys, Bangalore, India</p>
        </motion.div>

        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tutorial Content</h2>
          <p className="mb-6">
            Quantum annealing is a computing method that utilizes the properties of quantum physics to solve complex optimization problems. The method uses the properties of superposition, tunneling, and adiabaticity to explore the solution space and find the global minima of the problem, even if the problem space is extremely non-convex. The method of classical annealing uses thermal fluctuations to solve the problem, whereas the method of quantum annealing uses the properties of quantum physics to solve the problem more efficiently. The optimization problem is generally formulated as an Ising problem or Quadratic Unconstrained Binary Optimization (QUBO), which is the most practical way of relating the problem to the real world and to the theoretical constructs of the problem. The D-Wave systems have developed the method of quantum annealing, which gives us insight into the practical mechanisms of the method of quantum annealing. The method of quantum annealing is one of the most promising approaches to the solution of complex combinatorial problems, which are otherwise impossible to solve by classical computing techniques, in the vast arena of quantum computing. A basic knowledge of linear algebra and probability theory is necessary to relate to the underlying constructs of the problem and to realize the true potential of the method of quantum annealing as a computing technique.
          </p>
        </motion.div>

        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Lecturer</h2>
          <p className="mb-6">
            Arati Sahoo received her B.E. in Electronics and Instrumentation Engineering from Biju Pattanaik University of Technology, India, and her M.Tech. degree in Telematics and Signal Processing from the Department of Electronics and Communication Engineering at National Institute of Technology, Rourkela, India. She is currently working as a Principal Quantum Engineer at Unisys and is member of the NextGen computing research group. She is member of international quantum conference platforms such as the American Physical Society (APS). In addition, she is an active reviewer for international conferences such as IEEE Transactions on Quantum Engineering. Arati is co-author of two US Patents in the field of quantum computing.  Her research expertise includes various fields of quantum computing, such as Quantum Annealing, Quantum Machine Learning, and hybrid quantum-classical optimization. She has also contributed to the advancement of techniques in AI-driven approaches for combinatorial and anomaly detection problems. 
          </p>
          <div className="flex flex-col space-y-2 mt-4">
            <a 
               href="https://patents.google.com/patent/US20250124405A1/en" 
               className="text-blue-600 hover:text-blue-800 underline transition-colors"
               target="_blank"
               rel="noopener noreferrer"
            >
              US Patent "Cargo loading optimization using a classical-quantum hybrid system"
            </a>
            <a 
               href="https://patents.google.com/patent/US20250124365A1/en" 
               className="text-blue-600 hover:text-blue-800 underline transition-colors"
               target="_blank"
               rel="noopener noreferrer"
            >
              Hybrid classic-quantum system for large capacitated vehicle routing problem
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
