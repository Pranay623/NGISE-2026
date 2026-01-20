import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Onpaper = () => {
    const [openTrackId, setOpenTrackId] = useState<number | null>(null);

    const toggleTrack = (id: number) => {
        setOpenTrackId(openTrackId === id ? null : id);
    };

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
                    SUBMISSION PORTAL
                </h2>
                <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                />
                {/* <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto px-4">
                    Prospective authors are invited to submit original, high-quality papers that have not been previously submitted or published elsewhere. The ICIEA conference's reviewing process delivers constructive feedback to authors, including for rejected submissions, through rigorous double-blind peer reviews by field experts with extensive experience. Accepted papers require revisions based on referees' comments and suggestions prior to inclusion in the conference proceedings. </p> */}
            </div>

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
                {/* <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto px-4">
                    Prospective authors are invited to submit original, high-quality papers that have not been previously submitted or published elsewhere. The ICIEA conference's reviewing process delivers constructive feedback to authors, including for rejected submissions, through rigorous double-blind peer reviews by field experts with extensive experience. Accepted papers require revisions based on referees' comments and suggestions prior to inclusion in the conference proceedings. </p>
             */}
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
    <div className="mt-10 max-w-4xl mx-auto px-4 text-left">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Submission Guidelines
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
            <li>
                Authors must submit original, unpublished papers that are not under review elsewhere.
            </li>
            <li>
                The policy mandates less than <span className="font-semibold">10% similarity</span>, excluding references. The same applies to the inclusion of AI-generated content in submitted articles.
            </li>
            <li>
                As per the copyright transfer agreement, authors bear both individual and collective responsibility for the published content.
            </li>
            <li>
                Every author must maintain the highest ethical standards to avoid plagiarism.
            </li>
        </ul>
    </div>
</div>



            
        </>
    );
};

export default Onpaper;
