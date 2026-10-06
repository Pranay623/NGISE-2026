import SalvatorePic from "../public/WhatsApp Image 2026-06-15 at 7.00.21 PM.jpeg";
import PageHeader from "../components/PageHeader";

export default function IndustrialSpeaker() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader title="NGISE 2026 Industrial Speaker" />
      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center items-center">
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 flex flex-col items-center max-w-4xl w-full">
          <img src={SalvatorePic} alt="Salvatore Sinno" className="w-48 h-48 object-cover rounded-full mx-auto mb-4" />
          <p className="text-xl font-semibold text-center mt-2">Salvatore Sinno</p>
          <p className="text-gray-600 text-sm text-center mb-6">Vice President of ECS Innovations at Unisys, USA</p>
          <div className="w-full text-left">
            <p className="font-bold text-center text-lg mb-4">Knowledge Graphs and Neurosymbolic AI in Action: From Connected Data to Intelligent Reasoning</p>
            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
              <p><span className="font-bold text-gray-900">Abstract:</span> The convergence of knowledge graphs and neurosymbolic AI is redefining how intelligent systems discover, reason, and act across complex domains. This talk explores how the integration of structured knowledge with neural reasoning enables machines to move beyond pattern recognition toward interpretable, hypothesis‑driven decision‑making. Knowledge graphs provide a rich, interconnected representation of entities, relationships, and context — whether biological entities such as genes, proteins, and compounds, or financial entities such as transactions, entities, and risk signals. Neurosymbolic AI combines the learning power of deep neural networks with the logical reasoning of symbolic systems, enabling the discovery of hidden relationships across vast and heterogeneous datasets. The talk presents applied research spanning multiple high‑impact domains. In life sciences, these approaches support drug repurposing, the prediction of novel therapeutic targets, and the acceleration of vaccine development by uncovering non‑obvious connections across biomedical knowledge. In finance, the same framework drives fraud detection, anti‑money laundering, and risk assessment by reasoning over complex networks of entities and behaviours. Across both domains, the common thread is the ability to transform siloed data into connected, reasoning‑capable systems that deliver explainable and trustworthy AI‑driven insights.
              </p>
              <p><span className="font-bold text-gray-900">Speaker bio:</span> Salvatore Sinno is VP of Innovation for Enterprise Computing Solutions at Unisys, where he leads the Advanced Research and Innovation Team, translating cutting‑edge science into practical enterprise impact. A technology executive, researcher, and speaker, his work sits at the intersection of quantum computing, artificial intelligence, high‑performance computing, and cybersecurity. His research focuses on quantum machine learning, hybrid classical–quantum algorithms, and AI‑driven enterprise modernisation — with applied work spanning financial fraud detection, logistics optimisation, anomaly detection, cybersecurity, and life sciences. He has a particular interest in knowledge graphs and neurosymbolic AI, including their application to biomedical discovery. Dr. Sinno holds a doctorate in Quantum Machine Learning, a degree in Aerospace Engineering, an MSc in IT, and an MBA from Durham University. Prior to Unisys, he held roles at Procter & Gamble, IBM, CSC, and the UK Government.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
