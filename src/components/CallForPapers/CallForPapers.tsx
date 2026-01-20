import { motion } from "framer-motion";
import ConferenceTracks from "../ConferenceTracks/ConferenceTracks";
import OnPaperCall from "./OnPaperCall";
import Onpaper from "./Onpaper";
import PageHeader from "../PageHeader";

const CallForPapers = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-20">
            {/* <PageHeader
                title="Call for Papers"
                description="We invite original research papers for presentation at NGISE 2026."
            /> */}
            <section className="pb-20">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <OnPaperCall />
                        <ConferenceTracks />
                        <Onpaper />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CallForPapers;
