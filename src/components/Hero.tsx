import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image1 from "../public/image.jpg";
import Image2 from "../public/image2.jpg";
import Image3 from "../public/image3.jpg";
import Image4 from "../public/image4.jpg";
import Image5 from "../public/image5.jpg";
import Image6 from "../public/image6.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// Background slideshow images
const images = [Image1, Image2, Image3, Image4, Image5, Image6];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-change background every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
     {/* Background slideshow without AnimatePresence */}
<div className="absolute inset-0">
  {images.map((img, i) => (
    <motion.img
      key={i}
      src={img}
      alt="Conference Background"
      initial={{ opacity: 0 }}
      animate={{ opacity: index === i ? 1 : 0 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ))}

  {/* Gradient overlay for text readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
</div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            style={{ textShadow: "0px 4px 12px rgba(0,0,0,0.7)" }}
            // variants={itemVariants}
          >
            WELCOME TO{" "}
            <motion.span
              className=" text-blue-400"
            >
              NGISE 2026
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200"
            style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.6)" }}
            // variants={itemVariants}
          >
          International Conference on Next Generation Information System Engineering
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12 text-lg"
            // variants={itemVariants}
          >
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>28th–29th October 2026</span>
            </motion.div>

            <div className="hidden md:block w-px h-6 bg-gray-400"></div>

            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Ajay Kumar Garg Engineering College, Ghaziabad, India</span>
            </motion.div>
          </motion.div>

          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200"
            // variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/registrations"}
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
