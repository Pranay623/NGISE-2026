import { motion } from "framer-motion";
import drik from "../public/drik.png";
import rahul from "../public/Prof. Rahul.jpg1.jpeg";
import PageHeader from "@/components/PageHeader";


export default function Organizers() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Organizing Committee"
        description="Organizing and technical committees bringing together experts from leading institutions worldwide"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Organizing Committee Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          {/* Advisory Committee */}
          <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Advisory Committee</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Prof. Ingrid Pappel", "Information Society Technologies, Tallinn University of Technology (TalTech), Estonia"],
              ["Prof. Amita Dev", "Advisor, Ajay Kumar Garg Engineering College, Ghaziabad, India"],
              ["Prof. A Min Tjoa", "Institute of Software Technology & Interactive Systems, TU Wien, Austria"],
              ["Prof. Chuan-Yu Chang", "Machine Intelligence & Pattern Recognition Lab, National Yunlin University of Science & Technology, Taiwan"],
              ["Prof. Colin Atkinson", "Software Engineering Group, University of Mannheim, Germany"],
              ["Dr. Gabriela Kotsis", "Institute of Tele-cooperation, Johannes Kepler University Linz (JKU), Austria"],
              ["Prof. Tania Cerquitelli", "Department of Control and Computer Engineering, Politecnico di Torino, Italy"],
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
              <img src={rahul} alt="Prof. (Dr.) Rahul Sharma" className="w-32 h-32 object-cover object-right rounded-full mx-auto mb-4" />
              <p className="font-medium text-center">Prof. (Dr.) Rahul Sharma</p>
              <p className="text-gray-600 text-sm text-center">
                Karlsruhe Institute of Technology, Germany
              </p>
            </div>
          </div>

          {/* International Program Committee */}
          <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">International Program Committee</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Dr. Riina Palu", "Director (Deputy Head), Digital Society Research Group, Taltech, Estonia"],
              ["Dr. Rozha Ahmed", "Computer Science Department, Sulaimani Polytechnic University, Iraq"],
              ["Dr. Markus Bertl", "Research Staff, WU Vienna University of Economics & Business, Austria"],
              ["Mr. Salvatore Sinno", "Vice President of ECS Innovations at Unisys, UK"],
              ["Dr. Arun Kumar Sangaiah", "National Yunlin University of Science and Technology, Taiwan"],
              ["Dr. Minakshi Kaushik", "Karlsruhe Institute of Technology, Germany"],
              ["Mr. Sijo Arakkal Peious", "Tallinn University of Technology, Tallinn, Estonia"],
              ["Dr. Anupama Sharma", "Ajay Kumar Garg Engineering College, Ghaziabad, India"],
              ["Dr. Ruchi Gupta", "Ajay Kumar Garg Engineering College, Ghaziabad, India"],
              ["Dr. Silvia Lips", "e-Governance Research Team, e-Governance Academy, Estonia"],
          {/*["Dr. Sunil Kumar", "Ajay Kumar Garg Engineering College, India"],*/}
          {/*["Dr. Aditya Pratap Singh", "Ajay Kumar Garg Engineering College, India"],*/}
              ["Dr. Anju Mishra", "Ajay Kumar Garg Engineering College, India"],
          {/*["Dr. Shivani Aggarwal", "Ajay Kumar Garg Engineering College, India"],*/}
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
    </div>
  );
}

