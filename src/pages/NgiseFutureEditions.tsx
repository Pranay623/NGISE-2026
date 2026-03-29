import PageHeader from "@/components/PageHeader";
export default function NgiseFutureEditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Blue Background */}
      {/* <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">NGISE Future Editions</h1>
        </div>
      </div> */}
       <PageHeader
                title="NGISE Future Editions "
                // description="There are several nearby good hotels and accommodations conveniently located near the conference venue. A few of the most popular and close by hotels are listed below for your reference."
            />


      {/* Main Content - Left Aligned */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-gray-700 text-lg leading-relaxed">
          <ul className="space-y-4 list-disc list-outside">
            <li>
              NGISE 2027, University of Ulster, Belfast, Northern Ireland
            </li>
            <li>
              NGISE 2028, National Yunlin University of Science and Technology, Taiwan
            </li>
            <li>
              NGISE 2029, Karlsruhe Insitute of Technology (KIT), Germany
            </li>
            <li>
              NGISE 2030, Tallinn University of Technology (TalTech), Estonia
            </li>
            <li>
              NGISE 2031, Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Delhi NCR, India
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
