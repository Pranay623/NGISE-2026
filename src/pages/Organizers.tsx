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
          Conference Committee
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
        {/* Subheading (same style as speakers subheadings) */}
        <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          Organizing Committee
        </h3>

        {/* General Chair */}
        <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">General Chair</h4>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-white shadow rounded-xl border border-gray-100">
            <img src={drik} alt="Prof. (Dr.) Dirk Draheim" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <p className="font-medium text-center">Prof. (Dr.) Dirk Draheim</p>
            <p className="text-gray-600 text-sm text-center">
              Tallinn University of Technology, Estonia
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl border border-gray-100">
            <img src={rahul} alt="Prof. (Dr.) Dirk Draheim" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <p className="font-medium text-center">Prof. (Dr.) Rahul Sharma</p>
            <p className="text-gray-600 text-sm text-center">
              Ajay Kumar Garg Engineering College, Ghaziabad, India
            </p>
          </div>
        </div>

        {/* Technical Chair */}
        <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Technical Chair</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            ["Prof. Dr. A Min Tjoa", "Vienna University of Technology, Austria"],
            ["Dr. Markus Bertl", "Vienna University of Economics and Business (WU), Austria"],
            ["Dr. Arun Kumar Sangaiah", "National Yunlin University of Science and Technology, Taiwan"],
            ["Dr. Anastasija Nikiforova", "University of Tartu, Estonia"],
            ["Dr. Tania Cerquitelli", "Politecnico di Torino, Italy"],
            ["Dr. Innar Liiv", "Tallinn University of Technology, Estonia"],
            ["Dr. Elli Valla", "Tallinn University of Technology, Estonia"],
            ["Dr. Sunil Kumar", "Ajay Kumar Garg Engineering College, India"],
            ["Dr. Aditya Pratap Singh", "Ajay Kumar Garg Engineering College, India"],
            ["Dr. Anju Mishra", "Ajay Kumar Garg Engineering College, India"],
            ["Dr. Shivani Aggarwal", "Ajay Kumar Garg Engineering College, India"],
            ["Dr. Nandita Goyal", "Ajay Kumar Garg Engineering College, India"],
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

        {/* Finance Chair */}
        <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Finance Chair</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow rounded-xl border border-gray-100">
            <p className="font-medium text-center">Dr. Silvia Lips</p>
            <p className="text-gray-600 text-sm text-center">
              Tallinn University of Technology, Estonia
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl border border-gray-100">
            <p className="font-medium text-center">Dr. Anupama Sharma</p>
            <p className="text-gray-600 text-sm text-center">
              Ajay Kumar Garg Engineering College, India
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
