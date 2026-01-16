import { motion } from "framer-motion";
import ConferenceTracks from "../ConferenceTracks/ConferenceTracks";
import OnPaperCall from "./OnPaperCall";
import Onpaper from "./Onpaper";

const CallForPapers = () => {
    return (
        <section className="pt-[4em] bg-white min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <OnPaperCall />

                    <ConferenceTracks />
                    <Onpaper/>
                    
                </motion.div>
            </div>
        </section>
    );
};

export default CallForPapers;
