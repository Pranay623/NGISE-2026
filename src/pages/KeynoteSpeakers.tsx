import Divesh from "../public/image.png";
import Arun from "../public/Keyspeaker.jpeg";
import PageHeader from "../components/PageHeader";

export default function KeynoteSpeakers() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader
                title="Keynote Speakers"
                // description="Distinguished speakers and experts who will be sharing their insights at the conference"
            />
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
                
                <div className="grid md:grid-cols-2 gap-6 mb-8 w-full max-w-4xl">
                    <div className="p-4 bg-white shadow rounded-xl border border-gray-100 flex flex-col items-center">
                        <img src={Divesh} alt="Prof. (Dr.) Dirk Draheim" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                        <p className="font-medium text-center">Divesh Srivastava</p>
                        <p className="text-gray-600 text-sm text-center">
                           Head of Database Research at AT&T, USA, Vice President of the VLDB Endowment, ACM Fellow
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-xl border border-gray-100 flex flex-col items-center">
                        <img src={Arun} alt="Prof. (Dr.) Rahul Sharma" className="w-32 h-32 object-cover object-right rounded-full mx-auto mb-4" />
                        <p className="font-medium text-center">Arun Kumar Sangaiah </p>
                        <p className="text-gray-600 text-sm text-center">
                           Distinguished Professor ,National Yunlin University of Science and Technology (YunTech), Taiwan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
