import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

const Onpaper = () => {

    return (
        <>
            <div className="mt-12 md:mt-16 mb-8 md:mb-12 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    PAPER SUBMISSION
                </h2>
                <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                />
                <p className="text-base md:text-lg text-gray-700 mt-6 md:mt-8 max-w-4xl mx-auto px-2 md:px-4 text-justify md:text-center">
                    Authors are invited to submit original, high-quality papers that have not been previously submitted or published elsewhere. The NGISE-2026 reviewing process is comitted to deliver constructive feedback to authors, through rigorous double-blind peer reviews by field experts with extensive experience. Accepted papers are required to incorporate revisions based on referees' comments and suggestions in their Camera Ready submissions prior to inclusion in the conference proceedings. </p>
            </div>
            <div className="mt-12 md:mt-16 mb-8 md:mb-12 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    NGISE Charter on Scientific Reproducibility
                </h2>
                <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                />
                <p className="text-base md:text-lg text-gray-700 mt-6 md:mt-8 max-w-4xl mx-auto px-2 md:px-4 text-justify md:text-center">
                    Given the highly innovative nature of the conference, we take particular care of scientific reproducibility. We value papers that make available their code, models and data as open source in a public repository. We suggest authors to add a section “Code and Data Policy” to the paper, in which they summarize where their assets have been made available or otherwise provide a short explanation why certain assets are not made available (conflict-of-interest, IP-or licensing-related issues, statewise classification etc.). </p>
            </div>

            <div className="mt-12 md:mt-16 mb-8 md:mb-12 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    PLAGIARISM POLICY
                </h2>

                <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                />

                <p className="text-base md:text-lg text-gray-700 mt-6 md:mt-8 max-w-4xl mx-auto px-2 md:px-4 text-justify md:text-center">
                    Submitted papers must present original work by the authors, supported by adequate, proper, and scholarly citations to others' contributions. Our plagiarism policy enforces the highest standards of academic integrity, with all submissions required to be original and correctly cited. Any detected plagiarism will lead to rejection or corrective measures.
                </p>

                {/* Submission Guidelines */}
                <div className="mt-10 md:mt-12 mb-12 md:mb-16 max-w-4xl mx-auto px-2 md:px-4 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-50 to-white border-l-8 border-blue-600 rounded-xl shadow-lg p-5 md:p-8 transform hover:scale-[1.01] transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                Submission Guidelines
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Authors must submit original, unpublished papers that are not under review elsewhere.",
                                "As per the copyright transfer agreement, authors bear both individual and collective responsibility for the published content.",
                                "Allowable pages in the camera-ready paper: for short papers (6-8 pages), and for long papers (10-12 pages).",
                                <>Strictly follow the Springer manuscript preparation guidelines <br /><a href="https://www.springernature.com/gp/authors/publish-a-book/step-by-step-conference-proceedings" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium break-all">https://www.springernature.com/gp/authors/publish-a-book/step-by-step-conference-proceedings</a></>,
                                "To download Springer template:",
                                <>MS WORD: <a href="/src/public/splnproc1703.doc" download className="text-blue-600 hover:text-blue-800 underline font-medium">MS Word Template</a></>,
                                <>LaTeX: <a href="/zip/LaTeX2e+Proceedings+Templates.zip" download className="text-blue-600 hover:text-blue-800 underline font-medium">LaTeX Template</a></>,


                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 md:gap-4 p-2 rounded-lg hover:bg-blue-50/50 transition-colors">
                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mt-1 shrink-0" />
                                    <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* submission website */}

                <div className="mt-12 md:mt-16 mb-8 md:mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Submission Website
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-blue-600 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-base md:text-lg text-gray-700 mt-6 md:mt-8 px-2 md:px-4">
                        To submit the paper, click on the link:{" "} <br />
                        <a
                            href="https://cmt3.research.microsoft.com/NGISE2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors break-all"
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
