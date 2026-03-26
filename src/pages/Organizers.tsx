import { motion } from "framer-motion";
import drik from "../public/drik.png";
import rahul from "../public/Prof. Rahul.jpg1.jpeg";
import PageHeader from "@/components/PageHeader";
import amin from "../public/Amin.jpeg";
import amita from "../public/amita_dev.jpg";
import chuan from "../public/chuan_yu_chang.jpg";
import ingrid from "../public/ingrid_pappel.jpg";



export default function Organizers() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Steering Committee"
        // description="Organizing and technical committees bringing together experts from leading institutions worldwide"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Organizing Committee Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          {/* Honorary Chairs */}
          <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Honorary Chair</h4>
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white shadow rounded-xl border border-gray-100 max-w-sm w-full">
              <img src={amin} alt="A Min Tjoa" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <p className="font-medium text-center">A Min Tjoa</p>
              <p className="text-gray-600 text-sm text-center">
                Technical University Vienna, Austria
              </p>
            </div>
          </div>


        

          {/** Advisory Committee */}
          <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Advisory Committee</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Ingrid Pappel", affiliation: "Tallinn University of Technology (TalTech), Estonia", img: ingrid },
              { name: "Amita Dev", affiliation: "Ajay Kumar Garg Engineering College, Ghaziabad, India", img: amita, pos: "object-top" },
              { name: "Chuan-Yu Chang", affiliation: "National Yunlin University of Science and Technology, Taiwan", img: chuan },
            ].map((member, idx) => (
              <div
                key={idx}
                className="p-4 bg-white shadow rounded-xl border border-gray-100"
              >
                <img src={member.img} alt={member.name} className={`w-32 h-32 object-cover rounded-full mx-auto mb-4 ${member.pos || ""}`} />
                <p className="font-medium text-center">{member.name}</p>
                <p className="text-gray-600 text-sm text-center">{member.affiliation}</p>
              </div>
            ))}

          </div>


            {/* Conference Chairs */}
          <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Conference Chairs</h4>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-white shadow rounded-xl border border-gray-100">
              <img src={drik} alt="Prof. (Dr.) Dirk Draheim" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <p className="font-medium text-center">Dirk Draheim</p>
              <p className="text-gray-600 text-sm text-center">
                Tallinn University of Technology, Estonia
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-xl border border-gray-100">
              <img src={rahul} alt="Rahul Sharma" className="w-32 h-32 object-cover object-right rounded-full mx-auto mb-4" />
              <p className="font-medium text-center">Rahul Sharma</p>
              <p className="text-gray-600 text-sm text-center">
                Karlsruhe Institute of Technology, Germany
              </p>
            </div>
          </div>


          {/* International Program Committee */}
          {/* <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">International Program Committee</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Riina Palu", "Digital Society Research Group, Taltech, Estonia"],
              ["Rozha Ahmed", "Sulaimani Polytechnic University, Iraq"],
              // ["Mr. Salvatore Sinno", "Innovations at Unisys, UK"],
              ["Arun Kumar Sangaiah", "National Yunlin University of Science and Technology, Taiwan"],
              ["Silvia Lips", "e-Governance Research Team, e-Governance Academy, Estonia"],
              ["Minakshi Kaushik", "Karlsruhe Institute of Technology, Germany"],
              ["Sijo Arakkal Peious", "Tallinn University of Technology, Tallinn, Estonia"],
            ].map(([name, affiliation], idx) => (
              <div
                key={idx}
                className="p-4 bg-white shadow rounded-xl border border-gray-100"
              >
                <p className="font-medium text-center">{name}</p>
                <p className="text-gray-600 text-sm text-center">{affiliation}</p>
              </div>
            ))}
          </div> */}
          {/* National Program Committee */}
          {/* <h4 className="text-xl font-bold text-gray-700 mb-4 text-center mt-12">National Program Committee</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                ["Ruchi Gupta", "Ajay Kumar Garg Engineering College, Ghaziabad, India"],
                ["Sunil Kumar", "Ajay Kumar Garg Engineering College, Ghaziabad, India"],
                ["Aditya Pratap Singh", "Ajay Kumar Garg Engineering College,Ghaziabad, India"],
                ["Shivani Aggarwal", "Ajay Kumar Garg Engineering College,Ghaziabad, India"],
                ["Anju Mishra", "Ajay Kumar Garg Engineering College,Ghaziabad, India"],
                ["Shelly Sachdeva", "NIT delhi"],
                ["Dolly Sharma", " Shiv Nadar University"],
                ["Abhay Bansal", " Bennett University "],
                // ["Gaurav", "NSUT, Delhi "],
              ].map(([name, affiliation], idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white shadow rounded-xl border border-gray-100"
                >
                  <p className="font-medium text-center">{name}</p>
                  <p className="text-gray-600 text-sm text-center">{affiliation}</p>
                </div>
              ))}
            </div> */}
        </motion.div>
      </div>

    </div>
  );
}

