import { motion } from "framer-motion";

const OnPaperCall = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <p className="text-lg text-gray-700 leading-relaxed max-w-6xl mx-auto px-4 md:px-12 mb-12 text-justify">
                The International Conference on Next Generation Information System Engineering (NGISE-2026) offers a collaborative forum for advancing cutting-edge technologies in information systems. It unites researchers, practitioners, and academicians to explore innovative solutions across diverse tracks. The event fosters idea exchanges about sustainable, secure solutions amid rapid digital transformation. Attendees benefit from networking opportunities that spur industry-academia partnerships. Through a rich tapestry of presentations, workshops, and discussions, the conference aims to catalyze advancements in next-generation information systems.
            </p>
        </motion.div>
    );
};

export default OnPaperCall;
