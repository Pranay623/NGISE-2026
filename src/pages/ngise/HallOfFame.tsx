import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

// Update this path to match your image file name
import HonoraryChairImage from "@/public/honorary_chair.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const hallOfFameList = [
  "Shivani Aggarwal, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025",
  "Pavan Kumar Adepu, Amazon LLC, USA, Keynote Speaker NGISE 2025",
  "Tania Cerquitelli, Politecnico di Torino, Italy, Technical Programme Commitee Chair NGISE 2025",
  "Chuan-Yu Chang, National Yunlin University of Science and Technology, Taiwan, Chief Guest NGISE 2025, Keynote Speaker NGISE 2025",
  "Nandita Goyal, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025",
  "Ruchi Gupta, Ajay Kumar Garg Engineering College Ghaziabad, India, Local Organizing Chair NGISE 2025",
  "Varun Kakar, B. T. Kumaon Institute of Technology, Dwarahat, India, Keynote Speaker NGISE 2025",
  "Sunil Kumar, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025",
  "Satish Kumar Singh, Indian Institute of Information Technology Allahabad, India, Guest of Honour NGISE 2025",
  "Innar Liiv, Tallinn University of Technology, Tallinn, Estonia, Technical Programme Commitee Chair NGISE 2025",
  "Anju Mishra, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025",
  "Sri Niwas Singh, Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM) Gwalior, India, Chief Guest NGISE 2025",
  "Anastasija Nikiforova, University of Tartu, Estonia, Technical Programme Commitee Chair NGISE 2025",
  "Aditya Pratap Singh, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025",
  "Samarendra Pratap Singh, IET Dr RMLAU Ayodhya, IEEE Observer NGISE 2025+",
  "Anupama Sharma, Ajay Kumar Garg Engineering College Ghaziabad, India, Local Organizing Chair NGISE 2025",
  "Salvatore Sinno, Unisys, USA, Keynote Speaker NGISE 2025",
  "Akhilesh Tiwari, Indian Institute of Information Technology (IIIT), Allahabad, India, IEEE Observer NGISE 2025",
  "Elli Valla, Tallinn University of Technology, Tallinn, Estonia, Technical Programme Commitee Chair NGISE 2025"
];

export default function HallOfFame() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="NGISE Hall of Fame"
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Centered Section */}
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
               src={HonoraryChairImage} 
               alt="Sri Ramesh Kumar Agrawal" 
               className="relative rounded-2xl w-64 h-80 object-cover shadow-2xl border-4 border-white"
             />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Dr. R. K. Agarwal</h2>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Sri Ramesh Kumar Agarwal</h3>
          <p className="text-gray-600 mb-1">Ajay Kumar Garg Engineering College Ghaziabad, India</p>
          <p className="text-lg font-bold text-blue-600 tracking-wide uppercase">Honorary General Chair NGISE 2025</p>
        </motion.div>

        {/* Left Aligned Bullet List */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="prose prose-lg max-w-none text-left"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Technical Programme Committee & Speakers</h2>
          <ul className="list-disc pl-5 space-y-4">
            {hallOfFameList.map((entry, index) => ( entry.startsWith("+") ? null : (
              <li key={index} className="text-gray-700 leading-relaxed  transition-colors">
                {entry}
              </li>
            )))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
