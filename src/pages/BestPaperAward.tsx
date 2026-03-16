import PageHeader from "../components/PageHeader";
import { Award } from "lucide-react";

export default function BestPaperAward() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader title="NGISE 2026 Best Paper Award" />
            
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-4 rounded-full mb-6">
                        <Award className="w-12 h-12 text-blue-600" />
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The NGISE Best Paper Award is granted to a research result that is particular innovative, surprising and convincing. The paper is selected by a committee consisting of the Honorary Chair, the General Chairs, the Programme Committee Co-Chairs, and the Keynote Speakers. The award comes with certificates for all co-authors, announcement at the conference dinner, and a token of appreciation. All authors of the awarded paper are invited to the conference dinner.
                    </p>
                </div>
            </div>
        </div>
    );
}
