import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function History() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="NGISE History"
      />
      <div className="max-w-7xl mx-auto px-6 py-16 text-left">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        >
          <p className="mb-6">
            The idea for NGISE was born when Dirk Draheim and Rahul Sharma met A Min Tjoa during an unforgettable, marvellous iiwas conference at Udayana University, Denpasar, Bali, in December 2023.
          </p>
          <p className="mb-6">
            The idea was to create a small, but impactful conference, that provides a forum for latest, emergent and immersive technologies, such as currently quantum and GenAI, in regards of their utilization for enterprise information systems: In the seek of pathfinding papers, that follow entirely new approaches away from the mainstream, i.e., high risk research.
          </p>
          <p className="mb-6">
            The idea was to balance high risk with extra quality measures, which gave rise to a systematic focus on scientific reproducibility.
          </p>
          <p className="mb-6">
            In 2025, we achieved, with a jump start out of nothing, a conference with a total of 400 submissions, 100 participants, and extraordinary keynote speeches of Salvatore Sinno, Vice President of ECS Innovations at Unisys, on quantum logistics, and Chuan-Yu Chang, President of the National Yunlin University of Science and Technology Taiwan, at the beautiful campus of Ajay Kumar Garg Engineering College (AKGEC) in Delhi Ghaziabad (the place where the peacocks wake you up).
          </p>
          <p className="mb-6">
            The NGISE family is growing. In 2026, we are immensely proud of our keynote speakers Divesh Srivastava and Arun Kumar Sangaiah. For the first time, NGISE will also offer a tutorial, on quantum computing and quantum annealing. It will be amazing.
          </p>
          <p className="mb-6">
            In 2027, NGISE will start traveling to Belfast, Northern Ireland, with University of Ulster as host, and Marlon Dumas and Avigdor Gal as keynote speakers. And the journey has just begun.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
