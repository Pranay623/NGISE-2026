import React from "react";
import { motion } from "framer-motion";
import drik from "../public/drik.png";
import rahul from "../public/rahul.png";


const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Organizers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Heading (same style as Speakers) */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Organizing Committee  
        </motion.h2>

        {/* Animated Divider */}
        <motion.div
          className="w-24 h-1 bg-blue-600 mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Organizing and technical committees bringing together experts from
          leading institutions worldwide
        </motion.p> */}
      </motion.div>

      {/* Organizing Committee Section */}
      <motion.div
        // variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10"
      >

        {/* General Chair */}
        {/* Advisory Committee */}
        <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Advisory Committee</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            ["Prof Ingrid Papel", "Tallinn University of Technology (TalTech), Estonia"],
            ["Prof. A Min Tjoa", "Institute of Software Technology & Interactive Systems, TU Wien, Austria"],
            ["Prof. Colin Atkinson", "Software Engineering Group, University of Mannheim, Germany"],
            ["Dr. Gabriela Kotsis", "Institute of Tele-cooperation, Johannes Kepler University Linz (JKU), Austria"],
            ["Dr. Tania Cerquitelli", "Politecnico di Torino, Italy"],
            ["Prof. Chuan-Yu Chang", "Machine Intelligence & Pattern Recognition Lab, National Yunlin University of Science & Technology, Taiwan"],
          ].map(([name, affiliation], idx) => (
            <div
              key={idx}
              className="p-4 bg-white shadow rounded-xl border border-gray-100"
            >
              <p className="font-medium text-center">{name}</p>
              <p className="text-gray-600 text-sm text-center">{affiliation}</p>
            </div>
          ))}
        </div>

        {/* Conference Chairs */}
        <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Conference Chairs</h4>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-white shadow rounded-xl border border-gray-100">
            <img src={drik} alt="Prof. (Dr.) Dirk Draheim" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <p className="font-medium text-center">Prof. (Dr.) Dirk Draheim</p>
            <p className="text-gray-600 text-sm text-center">
              Tallinn University of Technology, Estonia
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl border border-gray-100">
            <img src={rahul} alt="Prof. (Dr.) Rahul Sharma" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <p className="font-medium text-center">Prof. (Dr.) Rahul Sharma</p>
            <p className="text-gray-600 text-sm text-center">
              Ajay Kumar Garg Engineering College, Ghaziabad, India
            </p>
          </div>
        </div>

        {/* International Program Committee */}
        <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">International Program Committee</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            ["Riina Palu", "Director (Deputy Head), Digital Society Research Group, Tallinn University of Technology (TalTech), Estonia"],
            ["Dr. Rozha Ahmed", "Computer Science Department, Sulaimani Polytechnic University, Iraq"],
            ["Dr. Markus Bertl", "Research Staff, WU Vienna University of Economics & Business, Austria"],
            ["Prof. (Dr.) Anupama Sharma", "Ajay Kumar Garg Engineering College, Ghaziabad, India"],
            ["Prof. (Dr.) Ruchi Gupta", "Ajay Kumar Garg Engineering College, Ghaziabad, India"],
            ["Dr. Silvia Lips", "e-Governance Research Team, e-Governance Academy, Estonia"],
            ["Dr. Sunil Kumar", "Ajay Kumar Garg Engineering College, India"],
            ["Dr. Aditya Pratap Singh", "Ajay Kumar Garg Engineering College, India"],
            ["Dr. Anju Mishra", "Ajay Kumar Garg Engineering College, India"],
            ["Dr. Shivani Aggarwal", "Ajay Kumar Garg Engineering College, India"],
          ].map(([name, affiliation], idx) => (
            <div
              key={idx}
              className="p-4 bg-white shadow rounded-xl border border-gray-100"
            >
              <p className="font-medium text-center">{name}</p>
              <p className="text-gray-600 text-sm text-center">{affiliation}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
