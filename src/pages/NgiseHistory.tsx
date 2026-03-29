import PageHeader from "@/components/PageHeader";

export default function NgiseHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Blue Background */}
      {/* <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">NGISE History</h1>
        </div>
      </div> */}
        <PageHeader
                title="NGISE History  "
                // description="There are several nearby good hotels and accommodations conveniently located near the conference venue. A few of the most popular and close by hotels are listed below for your reference."
            />


      {/* Main Content - Left Aligned */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p>
            The idea for NGISE was born when Markus Bertl, Dirk Draheim and Rahul Sharma met A Min Tjoa during an unforgettable, marvellous iiwas conference at Udayana University, Denpasar, Bali, in December 2023. The idea was to create a small, but impactful conference, that provides a forum for latest, emergent and immersive technologies, such as currently quantum and GenAI, in regards of their utilization for enterprise information systems: In the seek of pathfinding papers, that follow entirely new approaches away from the mainstream, i.e., high risk research. The idea was to balance high risk with extra quality measures, which gave rise to a systematic focus on scientific reproducibility.
          </p>

          <p>
            In 2025, we achieved, with a jump start out of nothing, a conference with a total of 400 submissions, 100 participants, and extraordinary keynote speeches of Salvatore Sinno, Vice President of ECS Innovations at Unisys, on quantum logistics, and Chuan-Yu Chang, President of the National Yunlin University of Science and Technology Taiwan, at the beautiful campus of Ayar Kumar Garg Engineering College (AKGEC) in Delhi Ghaziabad (the place where the peacocks wake you up).
          </p>

          <p>
            The NGISE family is growing. In 2026, we are immensely proud of our keynote speakers Divesh Srivastava and Arun Kumar Sangaiah. For the first time, NGISE will also offer a tutorial, on quantum computing and quantum annealing. It will be amazing.
          </p>

          <p>
            In 2027, NGISE will start traveling to Belfast, Northern Ireland, with University of Ulster as host, and Marlon Dumas and Avigdor Gal as keynote speakers. And the journey has just begun.
          </p>
        </div>
      </div>
    </div>
  );
}
