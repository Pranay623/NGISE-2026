import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "I need a visa to enter India, how can I get the invitation letter?",
    a: (
      <>
        Please visit the page:{" "}
        <a
          href="https://mha.gov.in/MHA1/TourVisa.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://mha.gov.in/MHA1/TourVisa.html
        </a>
      </>
    ),
  },
  {
    q: "I have not received an invitation letter yet. When will it arrive?",
    a: (
      <>
        Please contact JTB using the following email address, and they will
        assist you in obtaining a visa. <br />
        <span className="font-semibold text-gray-800">
          Email: ngise@akgec.ac.in
        </span>
      </>
    ),
  },
  {
    q: "I am the author of the paper and a student. Do I register as a student?",
    a: "Author Registration is required for all authors, whether or not they are students.",
  },
  {
    q: "I am the author of two papers. Do I need to register for each paper?",
    a: 'Yes. The policy of NGISE 2025 is “one registration per paper”. Since there is no field for entering the paper ID yet, it would be helpful if you could report your paper IDs to the “NGISE Contact” when you have finished the registration.',
  },
];

export default function FAQ() {
  const [index, setIndex] = useState(0);

  // Auto change FAQ every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % faqs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Animated FAQ */}
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Q. {faqs[index].q}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {faqs[index].a}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {faqs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
