import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

const Onpaper = () => {

    return (
        <>
            <div className="mt-16 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    PAPER SUBMISSION
                </h2>
                <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                />
                <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto px-4">
                    Authors are invited to submit original, high-quality papers that have not been previously submitted or published elsewhere. The NGISE-2026 reviewing process is comitted to deliver constructive feedback to authors, through rigorous double-blind peer reviews by field experts with extensive experience. Accepted papers are required to incorporate revisions based on referees' comments and suggestions in their Camera Ready submissions prior to inclusion in the conference proceedings. </p>
            </div>

            <div className="mt-16 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    PLAGIARISM POLICY
                </h2>

                <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                />

                <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto px-4">
                    Submitted papers must present original work by the authors, supported by adequate, proper, and scholarly citations to others' contributions. Our plagiarism policy enforces the highest standards of academic integrity, with all submissions required to be original and correctly cited. Any detected plagiarism will lead to rejection or corrective measures.
                </p>

                {/* Submission Guidelines */}
                <div className="mt-12 mb-16 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-50 to-white border-l-8 border-blue-600 rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold text-gray-900">
                                Submission Guidelines
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Authors must submit original, unpublished papers that are not under review elsewhere.",
                                <>The policy mandates less than <span className="font-bold text-blue-700">10% similarity</span>, excluding references. The same applies to the inclusion of AI-generated content in submitted articles.</>,
                                "As per the copyright transfer agreement, authors bear both individual and collective responsibility for the published content.",
                                "Every author must maintain the highest ethical standards to avoid plagiarism.",
                                "Allowable pages in the camera-ready paper: for short papers (6-8 pages), and for long papers (10-12 pages).",
                                <>Strictly follow the Springer manuscript preparation guidelines <br /><a href="https://www.springernature.com/gp/authors/publish-a-book/step-by-step-conference-proceedings" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">https://www.springernature.com/gp/authors/publish-a-book/step-by-step-conference-proceedings</a>.</>,
                                 "To download Springer template:",
                                <>MS WORD: <a href="/src/public/splnproc1703.doc" download className="text-blue-600 hover:text-blue-800 underline font-medium">MS Word Template</a></>,
                                <>LaTeX: <a href="/zip/LaTeX2e+Proceedings+Templates.zip" download className="text-blue-600 hover:text-blue-800 underline font-medium">LaTeX Template</a></>,


                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4 p-2 rounded-lg hover:bg-blue-50/50 transition-colors">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                                    <span className="text-gray-700 text-lg leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* submission website */}

                <div className="mt-16 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Submission Website
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-blue-600 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    {/* <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto px-4">
                    Prospective authors are invited to submit original, high-quality papers that have not been previously submitted or published elsewhere. The ICIEA conference's reviewing process delivers constructive feedback to authors, including for rejected submissions, through rigorous double-blind peer reviews by field experts with extensive experience. Accepted papers require revisions based on referees' comments and suggestions prior to inclusion in the conference proceedings. </p>
             */}
                    <p className="text-lg text-gray-700 mt-8 ">
                        To submit the paper, click on the link:{" "} <br />
                        <a
                            href="https://cmt3.research.microsoft.com/NGISE2025"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                        >
                            https://cmt3.research.microsoft.com/NGISE2026
                        </a>
                    </p>
                </div>


            </div>
        </>
    );
};

export default Onpaper;
