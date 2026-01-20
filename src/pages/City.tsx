import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

// Images
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

const places = [{ name: "The India Gate", desc: "The India Gate is a war memorial located near the Rajpath on the eastern edge of the ceremonial axis of New Delhi.", img: indiagate, }, { name: "Akshardham Temple", desc: "Akshardham means the divine abode of God. It is hailed as an eternal place of devotion, purity, and peace.", img: akshardham, }, { name: "Jama Masjid", desc: "Jama Masjid of Delhi is one of the largest mosques in India, built by Mughal emperor Shah Jahan.", img: Jama, }, { name: "Lotus Temple", desc: "The Lotus Temple is notable for its lotus-like shape and has become a prominent attraction in Delhi.", img: Lotus, }, { name: "Mahatma Gandhi Museum", desc: "The National Gandhi Museum houses original relics, books, and memorabilia closely connected with Mahatma Gandhi.", img: mg, }, { name: "Red Fort", desc: "The Red Fort, also known as Lal Qila, is a historic fort in Delhi that served as the Mughal emperors' main residence.", img: redfort, }, { name: "Humayun's Tomb", desc: "Built in the 1560s under Emperor Akbar’s patronage, Humayun's Tomb is a UNESCO World Heritage site.", img: humayun, }, { name: "Lodhi Garden", desc: "Lodi Garden is a 90-acre city park in New Delhi, dotted with beautiful tombs and lush greenery.", img: lodhi, }, { name: "Gurudwara Bangla Sahib", desc: "One of the most prominent Sikh houses of worship, associated with the eighth Sikh Guru.", img: bangla, }, { name: "Chandni Chowk", desc: "One of the oldest and busiest markets in Old Delhi, famous for food, shopping, and culture.", img: chandni, }, { name: "National Museum", desc: "One of India's largest museums, located in New Delhi amid spacious boulevards and government institutions.", img: national, },];

export default function City() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="About the City"
        description="Ajay Kumar Garg Engineering College is located on Delhi - Meerut Expressway, Ghaziabad, Uttar Pradesh, India. Ghaziabad is a key industrial hub in Uttar Pradesh and also a part of Delhi NCR, which includes Faridabad, Gurgaon, Noida, and Delhi."
      />
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Places to Visit Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Places To Visit
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Explore Delhi, a city blending history, culture, and modernity. Here
            are some of the must-visit places during your stay.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          {places.map((place, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="flex"
            >
              <Card className="overflow-hidden shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden ">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="
                    w-full h-52 object-cover 
                    filter grayscale hover:grayscale-0 
                    transition-all duration-500
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                  "
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {place.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
