import PageHeader from "../components/PageHeader";

export default function Panel() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader title="NGISE 2026 Panel" />
            
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                    <div className="text-center mb-8">
                        <p className="text-lg font-bold text-gray-900">29th October 2026</p>
                        <p className="text-xl font-bold text-blue-700 mt-2">Agentic AI in Information Systems: Automation, Orchestration, Autonomy</p>
                    </div>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                        <p className="text-lg text-center font-medium mb-8">
                            Our panelists will discuss how Agentic AI is reshaping information systems by extending automation into orchestration and autonomy, while raising new questions of architecture, governance, human trust, and theoretical understanding.
                        </p>

                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <ul className="space-y-4 list-disc pl-5">
                                <li className="pl-2">
                                    What is the biggest shift from traditional automation to truly agentic behavior in information systems?
                                </li>
                                <li className="pl-2">
                                    What architectural changes are necessary for information systems to support autonomous agents safely and at scale?
                                </li>
                                <li className="pl-2">
                                    As information systems become more agentic, what new governance models are needed to ensure accountability, transparency, and meaningful human control?
                                </li>
                                <li className="pl-2">
                                    How do trust, perceived autonomy, and user acceptance shape whether people actually adopt and work effectively with agentic AI in information systems?
                                </li>
                                <li className="pl-2">
                                    Which theoretical lens is most useful for understanding agentic AI in information systems today such actor-network theory, cybernetics, or complex, adaptive systems? And what does it help us see that purely technical discussions miss?
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
