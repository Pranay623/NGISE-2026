import PageHeader from "../components/PageHeader";
import rkAgarwal from "../public/download.avif";
export default function NgiseHallOfFame() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header using PageHeader component */}
      <PageHeader title="NGISE Hall of Fame" />
    

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Centered Section */}
        <div className="text-center mb-16">
          <img 
            src={rkAgarwal} 
            alt="Dr. R. K. Agarwal" 
            className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-lg border-4 border-white"
          />
          <h2 className="text-3xl font-bold mb-4">Dr. R. K. Agarwal</h2>
          <p className="text-lg text-gray-700 mb-2">Sri Ramesh Kumar Agrawal</p>
          <p className="text-lg text-gray-600">
            Ajay Kumar Garg Engineering College Ghaziabad, India
          </p>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Honorary General Chair NGISE 2025
          </p>
        </div>

        {/* Left Aligned Bullet List */}
        <div className="text-gray-700 text-lg leading-relaxed">
          <ul className="space-y-3 list-disc list-outside">
            <li>
              Shivani Aggarwal, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025
            </li>
            <li>
              Pavan Kumar Adepu, Amazon LLC, USA, Keynote Speaker NGISE 2025
            </li>
            <li>
              Tania Cerquitelli, Politecnico di Torino, Italy, Technical Programme Commitee Chair NGISE 2025
            </li>
            <li>
              Chuan-Yu Chang, National Yunlin University of Science and Technology, Taiwan, Chief Guest NGISE 2025, Keynote Speaker NGISE 2025
            </li>
            <li>
              Nandita Goyal, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025
            </li>
            <li>
              Ruchi Gupta, Ajay Kumar Garg Engineering College Ghaziabad, India, Local Organizing Chair NGISE 2025
            </li>
            <li>
              Varun Kakar, B. T. Kumaon Institute of Technology, Dwarahat, India, Keynote Speaker NGISE 2025
            </li>
            <li>
              Sunil Kumar, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025
            </li>
            <li>
              Satish Kumar Singh, Indian Institute of Information Technology Allahabad, India, Guest of Honour NGISE 2025
            </li>
            <li>
              Innar Liiv, Tallinn University of Technology, Tallinn, Estonia, Technical Programme Commitee Chair NGISE 2025
            </li>
            <li>
              Anju Mishra, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025
            </li>
            <li>
              Sri Niwas Singh, Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM) Gwalior, India, Chief Guest NGISE 2025
            </li>
            <li>
              Anastasija Nikiforova, University of Tartu, Estonia, Technical Programme Commitee Chair NGISE 2025
            </li>
            <li>
              Aditya Pratap Singh, Ajay Kumar Garg Engineering College, Ghaziabad, India, Technical Programme Commitee Chair NGISE 2025
            </li>
            <li>
              Samarendra Pratap Singh, IET Dr RMLAU Ayodhya, IEEE Observer NGISE 2025
            </li>
            <li>
              Anupama Sharma, Ajay Kumar Garg Engineering College Ghaziabad, India, Local Organizing Chair NGISE 2025
            </li>
            <li>
              Salvatore Sinno, Unisys, USA, Keynote Speaker NGISE 2025
            </li>
            <li>
              Akhilesh Tiwari, Indian Institute of Information Technology (IIIT), Allahabad, India, IEEE Observer NGISE 2025
            </li>
            <li>
              Elli Valla, Tallinn University of Technology, Tallinn, Estonia, Technical Programme Commitee Chair NGISE 2025
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
