import PageHeader from "../components/PageHeader";
import { GraduationCap, Award } from "lucide-react";

export default function StudentBestPaperAward() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader title="NGISE 2026 Student Best Paper Award" />
            
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                    <div className="flex gap-4 mb-6">
                        <div className="bg-blue-100 p-4 rounded-full">
                            <GraduationCap className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-full">
                            <Award className="w-10 h-10 text-yellow-600" />
                        </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The NGISE Student Best Paper Award is granted to a research result that is particular innovative, surprising and convincing. It is granted to young scholars who are currently working on their PhD. The awarded paper needs to have at least one PhD student as the first author. The paper is selected by a committee consisting of the Honorary Chair, the General Chairs, the Programme Committee Co-Chairs, and the Keynote Speakers. The award comes with certificates for all co-authors, announcement at the conference dinner, and a token of appreciation. All authors of the awarded paper are invited to the conference dinner.
                    </p>
                </div>
            </div>
        </div>
    );
}
