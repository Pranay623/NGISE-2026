import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export default function TechnicalOrgannizers() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader
                title="Program Committee"
            // {description="Our distinguished program committee members from around the globe"}
            />
            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* Organizing Committee Section */}
                <motion.div
                    // variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10"
                >

                    {/* Technical Program Committee Chair */}
                    {/* <div className="max-w-4xl mx-auto mb-10">
                        <h4 className="text-xl font-bold text-gray-700 mb-6 text-left">Technical Program Committee Chair</h4>
                        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100 text-left">
                            <p className="font-semibold text-gray-900 text-lg">Dr. Markus Bertl</p>
                            <p className="text-gray-500 text-sm">WU Vienna University of Economics & Business, Austria</p>
                        </div>
                    </div> */}
                    {/* Technical Program Committee Co-Chair */}
                    {/* <div className="max-w-4xl mx-auto mb-10">
                        <h4 className="text-xl font-bold text-gray-700 mb-6 text-left">Program Committee Chair</h4>
                        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100 text-left">
                            <p className="font-semibold text-gray-900 text-lg">Dr. Anupama Sharma</p>
                            <p className="text-gray-500 text-sm">Ajay Kumar Garg Engineering College, Ghaziabad, India</p>
                        </div>
                    </div> */}

                    {/* Technical Program Committee */}
                    {/*<h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Program Committee</h4>*/}
                    <div className="max-w-4xl mx-auto py-8 text-left">

                        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                            <ul className="flex flex-col">
                                {[
                                    "Rozha Kamal Ahmed, Sulaimani Polytechnic University, Iraq",
                                    "Colin Atkinson, Software Engineering Group, University of Mannheim, Germany",
                                    "Dagmar Auer, University of Applied Sciences Upper Austria, Hagenberg, Austria",
                                    "Ladjel Bellatreche, University of Poitiers, France",
                                    "Sadok Ben Yahia, University of Southern Denmark, Denmark",
                                    "Edward Bernroider, WU Wien, Vienna Uiversity of Economics, Austria",
                                    "Markus Bertl (PC Chair), Vienna University of Economics, Austria",
                                    "Rakshya Bhattarai, Hanken School of Economics, Helsinki, Finland",
                                    "Ahto Buldas, Tallinn University of Technology, Estonia",
                                    "Sidra Azmat  Butt, Tallinn University of Technology, Estonia",
                                    "Tania Cerquitelli, Politecnico di Torino, Italy",
                                    "Vishal Chaudhary, Tallinn University of Technology, Estonia",
                                    "Tanmoy  Deb , Motherson Innovation, Noida, India",
                                    "Vipin Deval, KIET Group, Ghaziabad, India",
                                    "Gillian Dobbie, Computer Science, University of Auckland, New Zealand",
                                    "Dirk Draheim (PC Chair), Tallinn University of Technology, Estonia",
                                    "Vimal Dwivedi, University of Ulster , UK",
                                    "Lisa Ehrlinger, Hasso Plattner Institute, Potsdam, Germany",
                                    "Kevin Feichtinger, Karlsruhe Institute of Technology, Germany",
                                    "Iztok Fister, University of Maribor, Slovenia",
                                    "Teodoro Forcht-Dagi, Queen’s University Belfast, UK",
                                    "Anchal Garg, University of Greater Manchester, Bolton, UK",
                                    "Verena Geist, SCCH (Software Competence Center Hagenberg), Austria",
                                    "Sonia Ayachi Ghannouchi, Université de Sousse, Tunisia",
                                    "Shilpi Gupta, University of Mannheim, Germany",
                                    "Ruchi Gupta, Ajay Kumar Garg Engineering College, Ghaziabad, India",
                                    "Eric Jackson, Tallinn University of Technology, Estonia",
                                    "Marijn Jannsen, Technical University of Delft, the Netherlands",
                                    "Tina Jukic, University of Ljubljana, Slovenia",
                                    "Minakshi Kaushik (PC Chair), Karlsruhe Institute of Technology, Germany",
                                    "Ismail Khalil, Johannes Kepler University Linz, Austria",
                                    "Naho Kitano, Asukoe Partners, Tokio, Japan",
                                    "Dieter Kranzlmüller, Ludwig Maximilian University, Munich, Germany",
                                    "Josef Küng, Johannes Kepler University Linz, Austria",
                                    "Atul  Kumar Srivastava, Amity University Tashkent, Uzbekistan",
                                    "Punam  Kumari, Amity University Bengaluru, India",
                                    "Arne Lange, Karlsruhe Institute of Technology, Germany",
                                    "Janika Leoste, Tallinn University of Technology, Estonia",
                                    "Innar Liiv, Tallinn University of Technology, Estonia",
                                    "Silvia Lips (PC Chair), Tallinn University of Technology, Estonia",
                                    "Olaf Maennel, University of Adeleide, Australia",
                                    "Anju Mishra, Ajay Kumar Garg Engineering College, Ghaziabad, India",
                                    "Takehiko Nagumo, Kyoto University, Japan",
                                    "Felix Naumann, Hasso Plattner Institute, Potsdam, Germany",
                                    "Anastasija Nikiforova, University of Tartu, Estonia",
                                    "Alexander Norta, University of Pretoria , South Africa",
                                    "Monalisha  Ojha, University of Mannheim, Germany",
                                    "Ingrid Pappel, Tallinn University of Technology, Estonia",
                                    "Vishwajeet Pattanaik, Indian Institute of Science, Bengalore, India",
                                    "Sijo Arakkal Peious, Tallinn University of Technology, Estonia",
                                    "Mohammed Ragab, Birmingham City University, UK",
                                    "Deepak Rai, National Institute of Technology Jamshedpur, India",
                                    "Arun Kumar Sangaiah, National Yunlin University of Science and Technology, Taiwan",
                                    "Shelly Sachdeva, National Institute of Technology Delhi, India",
                                    "Dolly Sharma, Shiv Nadar University, Greater Noida, India",
                                    "Attique Shah, City University of Birmingham, UK",
                                    "Rahul Sharma (PC Chair), Karlsruhe Institute of Technology, Germany",
                                    "Marcin Sikorski, Gdańsk University of Technology, Poland",
                                    "Anupama Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, India",
                                    "Gaurav  Singal, Netaji Subhas University of Technology, India",
                                    "Akanksha  Singh, Benett University, Greater Noida, India",
                                    "Il-Yeol Song, Drexel University, Philadelphia, USA",
                                    "Divesh Srivastava, AT&T Labs Research, USA",
                                    "Kuldar Taveter, University of Tartu, Estonia",
                                    "A Min Tjoa, Technical University Vienna, Austria",
                                    "Ankit Vidyarthi, Jaypee Institute of Information Technology Noida, India",
                                    "Weixing Zang, Karlsruhe Institute of Technology, Germany",
                                    "Thomas Ziebermayer, University of Applied Sciences Upper Austria, Hagenberg, Austria",
                                ].map((member, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.01 }}
                                        viewport={{ once: true }}
                                        className={`
                                            p-4 px-8 transition-colors duration-200 cursor-default
                                            ${idx % 2 === 0
                                                ? "bg-white"
                                                : "bg-gray-200"}
                                            hover:bg-gray-100/50
                                        `}
                                    >
                                        <span className="text-gray-700 font-medium text-sm sm:text-base tracking-tight">{member}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
