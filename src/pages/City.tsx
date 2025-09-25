import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import akshardham from "../public/akshadham.jpg";
import indiagate from "../public/indiagate.jpg";    
import Jama from "../public/jamamasjid.jpg";    
import Lotus from "../public/lotus_temple.jpg";
import mg from "../public/Gandhi_museum.jpg";
import redfort from "../public/redfort.jpg";
import humayun from "../public/humanyu_tomb.jpg";
import lodhi from "../public/lodhi_garden.jpg";
import bangla from "../public/gurudwara.jpg";
import chandni from "../public/chandni _chowk.jpg";
import national from "../public/national_museum.jpg";



// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const places = [
  {
    name: "The India Gate",
    desc: "The India Gate is a war memorial located near the Rajpath on the eastern edge of the ceremonial axis of New Delhi.",
    img: indiagate,
  },
  {
    name: "Akshardham Temple",
    desc: "Akshardham means the divine abode of God. It is hailed as an eternal place of devotion, purity, and peace.",
    img : akshardham,
  },
  {
    name: "Jama Masjid",
    desc: "Jama Masjid of Delhi is one of the largest mosques in India, built by Mughal emperor Shah Jahan.",
    img: Jama,
  },
  {
    name: "Lotus Temple",
    desc: "The Lotus Temple is notable for its lotus-like shape and has become a prominent attraction in Delhi.",
    img: Lotus,
  },
  {
    name: "Mahatma Gandhi Museum",
    desc: "The National Gandhi Museum houses original relics, books, and memorabilia closely connected with Mahatma Gandhi.",
    img: mg,
  },
  {
    name: "Red Fort",
    desc: "The Red Fort, also known as Lal Qila, is a historic fort in Delhi that served as the Mughal emperors' main residence.",
    img: redfort,
  },
  {
    name: "Humayun's Tomb",
    desc: "Built in the 1560s under Emperor Akbar’s patronage, Humayun's Tomb is a UNESCO World Heritage site.",
    img: humayun,
  },
  {
    name: "Lodhi Garden",
    desc: "Lodi Garden is a 90-acre city park in New Delhi, dotted with beautiful tombs and lush greenery.",
    img: lodhi,
  },
  {
    name: "Gurudwara Bangla Sahib",
    desc: "One of the most prominent Sikh houses of worship, associated with the eighth Sikh Guru.",
    img: bangla,
  },
  {
    name: "Chandni Chowk",
    desc: "One of the oldest and busiest markets in Old Delhi, famous for food, shopping, and culture.",
    img: chandni,
  },
  {
    name: "National Museum",
    desc: "One of India's largest museums, located in New Delhi amid spacious boulevards and government institutions.",
    img: national,
  },
];

export default function City() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* About the City */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About The City</h1>
        <p className="text-gray-600 leading-relaxed">
          Ajay Kumar Garg Engineering College is located on Delhi - Meerut
          Expressway, Ghaziabad, Uttar Pradesh, India. Ghaziabad is a key
          industrial hub in Uttar Pradesh and also a part of Delhi NCR, which
          includes Faridabad, Gurgaon, Noida, and Delhi. Delhi, considered the
          heart of India, is rich in history, with ancient structures serving as
          reminders of our glorious past.
        </p>
      </motion.div>

      {/* Places to Visit */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Places To Visit
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="flex"
            >
              <Card className="overflow-hidden shadow-md rounded-2xl">
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {place.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
