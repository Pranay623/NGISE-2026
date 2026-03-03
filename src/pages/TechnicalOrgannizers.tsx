import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export default function TechnicalOrgannizers() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader
                title="Program Committee"
                description="Our distinguished program committee members from around the globe"
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
                        <h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Technical Program Committee Chair</h4>
                        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100 text-center">
                            <p className="font-semibold text-gray-900 text-lg">Dr. Markus Bertl</p>
                            <p className="text-gray-500 text-sm">WU Vienna University of Economics & Business, Austria</p>
                        </div>
                    </div> */}
                    {/* Technical Program Committee Co-Chair */}
                    <div className="max-w-4xl mx-auto mb-10">
                        <h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Program Committee Chairs</h4>
                        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100 text-left">
                            {/*<p className="font-semibold text-gray-900 text-lg">Markus Bertl</p>*/}
                            <p className="text-gray-500 text-sm">Dirk Draheim, Tallinn University of Technology, Estonia</p>
                            <p className="text-gray-500 text-sm">Minakshi Kaushik, Karlsruhe Institute of Technology, Germany</p>
                            <p className="text-gray-500 text-sm">Silvia Lips, Tallinn University of Technology, Estonia</p>
                            <p className="text-gray-500 text-sm">Rahul Sharma, Karlsruhe Institute of Technology, Germany</p>
                        </div>
                    </div>

                    {/* Technical Program Committee */}
                    <h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Program Committee</h4>
                    <div className="max-w-4xl mx-auto py-8 bg-white shadow-sm rounded-xl border border-gray-100">
                        <ul className="grid grid-cols-1 gap-y-2 px-8">
                            {[
                                "Rozha Kamal Ahmed, Sulaimani Polytechnic University, Iraq",
                                "Colin Atkinson, Software Engineering Group, University of Mannheim, Germany",
                                "Edward Bernroider, WU Wien, Vienna Uiversity of Economics, Austria",
                                "Sidra Azmat Butt, Tallinn University of Technology, Estonia",
                                "Tania Cerquitelli, Politecnico di Torino, Italy",
                                "Gillian Dobbie, Computer Science, University of Auckland, New Zealand",
                                "Dirk Draheim, Tallinn University of Technology, Estonia",
                                "Vipin Deval, KIET Group, Ghaziabad, India",
                                "Vimal Dwivedi, University of Ulster, UK",
                                "Lisa Ehrlinger, Hasso Plattner Institute, Germany",
                                "Iztok Fister, University of Maribor, Slovenia",
                                "Verena Geist, SCCH (Software Competence Center Hagenberg), Hagenberg, Austria",
                                "Minakshi Kaushik, Karlsruhe Institute of Technology, Germany",
                                "Innar Liiv, Tallinn University of Technology, Estonia",
                                "Silvia Lips, Tallinn University of Technology, Estonia",
                                "Olaf Maennel, University of Adeleide, Australia",
                                "Takehiko Nagumo, Kyoto University, Japan",
                                "Anastasija Nikiforova, University of Tartu, Estonia",
                                "Ingrid Pappel, Tallinn University of Technology, Estonia",
                                "Vishwajeet Pattanaik, Indian Institute of Science, Bengalore, India",
                                "Sijo Arakkal Peious, Tallinn University of Technology, Estonia",
                                "Arun Kumar Sangaiah, National Yunlin University of Science and Technology, Taiwan",
                                "Rahul Sharma, Karlsruhe Institute of Technology, Germany",
                                "Attique Shah, City University of Birminghem, UK",
                                "Divesh Srivastava, AT&T Labs Research, USA",
                                "Shweta Suran, Max-Planck Institute, Berlin, Germany",
                                "Kuldar Taveter, University of Tartu, Estonia",
                                "A Min Tjoa, Technical University Vienna, Austria",
                                "Thomas Ziebermayer, University of Applied Sciences Upper Austria, Hagenberg, Austria"
                            ].map((member, idx) => (
                                <li key={idx} className="py-1 text-left">
                                    <span className="text-gray-700 font-medium text-sm sm:text-base">{member}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
