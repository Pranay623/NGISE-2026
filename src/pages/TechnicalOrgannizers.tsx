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
                        <div className="max-w-4xl mx-auto py-8 bg-white shadow-sm rounded-xl border border-gray-100 text-left">
                            {/*<p className="text-base">Rozha Kamal Ahmed, Sulaimani Polytechnic University, Iraq</p>
                         <p className="text-base">Colin Atkinson, Software Engineering Group, University of Mannheim, Germany</p>
                         <p className="text-base">Edward Bernroider, WU Wien, Vienna Uiversity of Economics, Austria</p>
                         <p className="text-base">Sidra Azmat Butt, Tallinn University of Technology, Estonia</p>
                         <p className="text-base">Tania Cerquitelli, Politecnico di Torino, Italy</p>
                         <p className="text-base">Gillian Dobbie, Computer Science, University of Auckland, New Zealand</p>
                         <p className="text-base">Dirk Draheim, Tallinn University of Technology, Estonia</p>
                         <p className="text-base">Vipin Deval, KIET Group, Ghaziabad, India</p>
                         <p className="text-base">Vimal Dwivedi, University of Ulster, UK</p>
                         <p className="text-base">Lisa Ehrlinger, Hasso Plattner Institute, Germany</p>
                         <p className="text-base">Iztok Fister, University of Maribor, Slovenia</p>
                         <p className="text-base">Verena Geist, SCCH (Software Competence Center Hagenberg), Hagenberg, Austria</p>
                         <p className="text-base">Minakshi Kaushik, Karlsruhe Institute of Technology, Germany</p>
                         <p className="text-base">Innar Liiv, Tallinn University of Technology, Estonia</p>
                         <p className="text-base">Silvia Lips, Tallinn University of Technology, Estonia</p>
                         <p className="text-base">Olaf Maennel, University of Adeleide, Australia</p>
                         <p className="text-base">Takehiko Nagumo, Kyoto University, Japan</p>
                         <p className="text-base">Anastasija Nikiforova, University of Tartu, Estonia</p>
                         <p className="text-base">Ingrid Pappel, Tallinn University of Technology, Estonia</p>
                         <p className="text-base">Vishwajeet Pattanaik, Indian Institute of Science, Bengalore, India</p>
                         <p className="text-base">Sijo Arakkal Peious, Tallinn University of Technology, Estonia</p>
                         <p className="text-base">Arun Kumar Sangaiah, National Yunlin University of Science and Technology, Taiwan</p>
                         <p className="text-base">Rahul Sharma, Karlsruhe Institute of Technology, Germany</p>
                         <p className="text-base">Attique Shah, City University of Birminghem, UK</p>
                         <p className="text-base">Divesh Srivastava, AT&T Labs Research, USA</p>
                         <p className="text-base">Shweta Suran, Max-Planck Institute, Berlin, Germany</p>
                         <p className="text-base">Kuldar Taveter, University of Tartu, Estonia</p>
                         <p className="text-base">A Min Tjoa, Technical University Vienna, Austria</p>
                         <p className="text-base">Thomas Ziebermayer, University of Applied Sciences Upper Austria, Hagenberg, Austria</p>*/}
                        <ul className="grid grid-cols-1 gap-y-0.5 px-8">
                            {[
                                "Rozha Kamal Ahmed, Sulaimani Polytechnic University, Iraq",
                                "Colin Atkinson, Software Engineering Group, University of Mannheim, Germany",
                                "Ladjel Bellatreche, University of Poitiers, France",
                                "Edward Bernroider, WU Wien, Vienna Uiversity of Economics, Austria",
                                "Markus Bertl (PC Chair), Vienna University of Economics, Austria",
                                "Ahto Buldas, Tallinn University of Technology, Estonia",
                                "Sidra Azmat  Butt, Tallinn University of Technology, Estonia",
                                "Tania Cerquitelli, Politecnico di Torino, Italy",
                                "Vipin Deval, KIET Group, Ghaziabad, India",
                                "Gillian Dobbie, Computer Science, University of Auckland, New Zealand",
                                "Dirk Draheim (PC Chair), Tallinn University of Technology, Estonia",
                                "Vimal Dwivedi, University of Ulster , UK",
                                "Lisa Ehrlinger, Hasso Plattner Institute, Potsdam, Germany",
                                "Iztok Fister, University of Maribor, Slovenia",
                                "Teodoro Forcht-Dagi, Queen’s University Belfast, UK",
                                "Verena Geist, SCCH (Software Competence Center Hagenberg), Austria",
                                "Minakshi Kaushik (PC Chair), Karlsruhe Institute of Technology, Germany",
                                "Ismail Khalil, Johannes Kepler University Linz, Austria",
                                "Dieter Kranzlmüller, Ludwig Maximilian University, Munich, Germany",
                                "Innar Liiv, Tallinn University of Technology, Estonia",
                                "Silvia Lips (PC Chair), Tallinn University of Technology, Estonia",
                                "Olaf Maennel, University of Adeleide, Australia",
                                "Takehiko Nagumo, Kyoto University, Japan",
                                "Anastasija Nikiforova, University of Tartu, Estonia",
                                "Alexander Norta, University of Pretoria , South Africa",
                                "Ingrid Pappel, Tallinn University of Technology, Estonia",
                                "Vishwajeet Pattanaik, Indian Institute of Science, Bengalore, India",
                                "Sijo Arakkal Peious, Tallinn University of Technology, Estonia",
                                "Arun Kumar  Sangaiah, National Yunlin University of Science and Technology, Taiwan",
                                "Attique Shah, City University of Birmingham, UK",
                                "Rahul Sharma (PC Chair), Karlsruhe Institute of Technology, Germany",
                                "Il-Yeol Song, Drexel University, Philadelphia, USA",
                                "Divesh Srivastava, AT&T Labs Research, USA",
                                "Kuldar Taveter, University of Tartu, Estonia",
                                "A Min Tjoa, Technical University Vienna, Austria",
                                "Thomas Ziebermayer, University of Applied Sciences Upper Austria, Hagenberg, Austria",
                                "Rakshya Bhattarai, Hanken School of Economics, Helsinki, Finland",
                                "Naho Kitano, Asukoe Partners, Tokio, Japan",
                                "Eric Jackson, Tallinn University of Technology, Estonia"
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
