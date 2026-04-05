
import RightLogo from "../../public/WhatsApp Image 2026-04-02 at 6.36.14 PM.jpeg";
import RightLogo2 from "../../public/WhatsApp Image 2026-04-02 at 7.35.40 PM.jpeg";
import { motion } from 'framer-motion';
const Publication = () => {
  return (
    <section className="pt-8 md:pt-24 pb-8 md:pb-12 bg-white">
      <div className="text-center mb-10">
        {/* <PageHeader title={"Publication"} /> */}
           <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Publication</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </motion.div>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex justify-center items-center gap-3 md:gap-8 lg:gap-12 mb-8">
          <img
            src={RightLogo}
            alt="Springer"
            className="h-16 md:h-24 lg:h-32 object-contain"
          />
          <img
            src={RightLogo2}
            alt="CCIS"
            className="h-16 md:h-24 lg:h-32 object-contain"
          />
        </div>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-6xl mx-auto px-8 md:px-12 text-center md:text-center mt-2">
          NGISE 2026 Proceedings will be published as volume of the Springer
          CCIS series 
          </p> 
           <a
            href="https://www.springer.com/series/7899"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline mx-4 text-"
          >
            Communications in Computer and Information Science
          </a>
          
      
      </div>
    </section>
  );
};

export default Publication;
