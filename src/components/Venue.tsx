import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../public/image.jpg";
import img2 from "../public/image2.jpg";
import img3 from "../public/image3.jpg";
import img4 from "../public/image4.jpg";
import CardSwap, { Card } from './CardSwap'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slides = [
  {
    img: img1,
    text: "NGISE-2026 is proudly organized by the Department of Information Technology, Ajay Kumar Garg Engineering College, Ghaziabad.",
  },
  {
    img: img2,
    text: "Established in 1999 and expanded in 2019 with the addition of the CSIT branch, the department has been a pioneer in academic excellence.",
  },
  {
    img: img3,
    text: "Ajay Kumar Garg Engineering College (AKGEC), approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University, offers 12 B.Tech disciplines and PG programs.",
  },
  {
    img: img4,
    text: "AKGEC has earned the Academic Excellence Award and the Chancellor’s Medal for consecutive years, setting benchmarks in engineering education.",
  },
];

export default function Venue() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="venue" className="py-20   bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            // variants={itemVariants}
          >
            Conference Venue
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold"
            // variants={itemVariants}
          >
            AJAY KUMAR GARG ENGINEERING COLLEGE, GHAZIABAD, INDIA
          </motion.p>
        </motion.div>

        {/* Slideshow */}
        {/* <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >

              <div className="w-full md:w-1/2">
                <img
                  src={slides[index].img}
                  alt="Venue"
                  className="rounded-2xl shadow-lg w-full h-80 md:h-[26rem] object-cover"
                />
              </div>


              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {slides[index].text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div> */}
       <div className="relative w-full flex flex-col md:flex-row items-center gap-10 md:gap-8">

  {/* Text Section */}
  <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-4">
    <AnimatePresence mode="wait">
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="
          text-base sm:text-lg 
          md:text-xl 
          font-medium 
          text-gray-700 
          leading-relaxed
        "
      >
        {slides[index].text}
      </motion.p>
    </AnimatePresence>
  </div>

  {/* Image Section – Mobile Friendly Slider */}
  <div className="w-full md:w-1/2">
    {/* Mobile + Tablet Simple Fade Slider */}
    <div className="md:hidden relative h-56 sm:h-72 overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].img}
          alt="Slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>

    {/* Desktop Card Swap (unchanged) */}
    <div className="hidden md:block w-full" style={{ height: "450px", position: "relative" }}>
      <CardSwap cardDistance={60} verticalDistance={70} delay={3000} pauseOnHover={false}>
        {slides.map((slide, i) => (
          <Card key={i}>
            <img
              src={slide.img}
              alt={`Slide ${i + 1}`}
              className="rounded-md shadow-xl w-full h-80 md:h-[26rem] object-cover"
            />
          </Card>
        ))}
      </CardSwap>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}
