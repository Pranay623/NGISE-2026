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
        title="NGISE 2026 Conference Dinner"
        {/*description="Join us for an evening of networking and celebration."*/}
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

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">28th November 2026</h2>
            <p className="text-xl font-semibold text-blue-800 mb-2">
              Radisson Blu Towers Kaushambi Delhi 
            </p>
          </div>
       
          <div className="prose prose-lg max-w-4xl mx-auto text-left text-gray-700 leading-relaxed">
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-6">A Night to Remember</h2> */}
            <p className="mb-6">
              The conference dinner takes place at the rooftop restaurant of Radisson Blu Towers Kaushambi Delhi, with an exciting view over nighttime Delhi Ghaziabad. The chefs of Blu Towers are amazing. We will have the opportunity to taste a variety of delicious bites from the local vegetarian cuisine, a journey through the world of spices, and will enjoy a broad selection of classics from the international cuisine, all freshly prepared from live cooking.  Highlights of the conference dinner will be the announcements of the <strong>NGISE 2026 Best Paper Award</strong> and <strong>NGISE 2026 Student Best Paper Award</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
