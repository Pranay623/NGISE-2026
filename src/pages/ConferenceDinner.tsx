import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import DinnerImage from "@/public/conference_dinner.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ConferenceDinner() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Conference Dinner"
        description="Join us for an evening of networking and celebration."
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="space-y-12"
        >
          <div className="relative group max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
             <img 
               src={DinnerImage} 
               alt="Conference Dinner Venue" 
               className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-left text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Night to Remember</h2>
            <p className="mb-6">
              The NGISE conference dinner is more than just a meal; it's a cornerstone of our academic gathering. It provides an informal setting for participants to connect, share ideas, and forge new collaborations while enjoying a premium dining experience.
            </p>
            <p className="mb-6">
              During the dinner, we will also celebrate excellence by announcing the recipients of the <strong>NGISE Best Paper Award</strong> and the <strong>Student Best Paper Award</strong>. 
            </p>
            <p>
              Spouses, colleagues, and friends of NGISE are also welcome to join the celebration by purchasing an additional dinner ticket.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
