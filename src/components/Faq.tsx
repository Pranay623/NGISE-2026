import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "./PageHeader";

const faqs = [
  // {
  //   q: "I need a visa to enter India, how can I get the invitation letter?",
  //   a: (
  //     <>
  //       Please visit the page:{" "}
  //       <a
  //         href="https://mha.gov.in/MHA1/TourVisa.html"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="text-blue-600 underline"
  //       >
  //         https://mha.gov.in/MHA1/TourVisa.html
  //       </a>
  //     </>
  //   ),
  // },
  {
    q: "I have not received an invitation letter yet. When will it arrive?",
    a: (
      <>
        Please contact the organizers at   {"  "}
        <span className="font-semibold text-gray-800">
            ngise@akgec.ac.in
        </span> {"  "}for sending invitation letter. 
      </>
    ),
  },
  {
    q: "I am the author of the paper and a student. Do I register as a student?",
    a: "Author Registration is required for all categories of authors. Please select the appropriate category to register for the conference as an author. Student authors are required to upload a copy of their ID card issued by the University/Institute as a proof of their current affiliation.",
  },
  {
    q: "I am the author of two papers. Do I need to register for each paper?",
    a: 'Yes. The policy of NGISE 2026 is “one registration per paper”. Since there is no field for entering the paper ID yet, it would be helpful if you could report your paper IDs to the “NGISE Contact” when you have finished the registration.',
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
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about NGISE 2026"
      />
      <section className="py-20" id="faq">
        <div className="max-w-4xl mx-auto px-6">

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
                className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
