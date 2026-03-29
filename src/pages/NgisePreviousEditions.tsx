import PageHeader from "@/components/PageHeader";
export default function NgisePreviousEditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Blue Background */}
      {/* <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">NGISE Previous Editions</h1>
        </div>
      </div> */}
      <PageHeader
                title="NGISE Previous Editions "
                // description="There are several nearby good hotels and accommodations conveniently located near the conference venue. A few of the most popular and close by hotels are listed below for your reference."
            />


      {/* Main Content - Left Aligned */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-gray-700 text-lg leading-relaxed">
          <ul className="space-y-4 list-disc list-outside">
            <li>
              <a 
                href="https://ngise.org/2025" 
                className="text-blue-600 hover:text-blue-800 underline hover:no-underline"
              > https://ngise.org/2025
              </a> <span>
               
                 NGISE 2025 - the 1st IEEE International Conference on Next Generation Information System Engineering, Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Delhi NCR, India
             </span> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
