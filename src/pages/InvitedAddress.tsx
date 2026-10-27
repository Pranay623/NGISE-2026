import Riina from "../public/riina-palu.jpg";
import PageHeader from "../components/PageHeader";

export default function InvitedAddress() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader title="NGISE 2026 Invited Address" />
      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center items-center">
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 flex flex-col items-center max-w-4xl w-full">
          {/* Photo is zoomed and shifted so only the face shows inside the circle */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-blue-50 bg-slate-100">
            <img
              src={Riina}
              alt="Riina Palu"
              className="absolute max-w-none"
              style={{ width: 372, left: -78, top: -65 }}
            />
          </div>
          <p className="text-xl font-semibold text-center mt-2">Riina Palu</p>
          <div className="text-gray-600 text-sm text-center mb-6 space-y-1">
            <p>Next Gen Digital Society Research Group, Digital Society Resilience Research Stream, Researcher, PhD</p>
            <p>UNESCO Chair in Digital Transformation for Inclusive and Sustainable Development, Co-Chairholder</p>
            <p>Department of Software Science, School of Information Technologies, Tallinn University of Technology (TalTech), Tallinn, Estonia</p>
          </div>
          <div className="w-full text-left">
            <p className="font-bold text-center text-lg mb-4">
              Engineering Digital Society Resilience: Empirical Insights Across Seven Nations Through the CIGET Framework
            </p>
            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
              <p>
                <span className="font-bold text-gray-900">Abstract:</span> Modern digital societies face compounding threats ranging from kinetic infrastructure disruption and systemic cyberattacks to climate shocks and institutional vulnerabilities. Conventional resilience models often focus narrowly on technological defenses, overlooking the intricate socio-technical dependencies underpinning public administration. This keynote introduces an empirical, multi-country evaluation of digital society resilience using the CIGET Framework (evaluating Connectivity, Infrastructure, Governance, Environmental Impact &amp; Sustainability, and Technologies). Drawing on seven diverse national case studies the presentation demonstrates how centralized efficiency often conceals single points of failure, why strict data localization can hinder disaster recovery, and how physical dependencies constrain digital operations. The session outlines core principles for engineering resilient, fail-safe digital societies capable of maintaining continuity during polycrises.
              </p>
              <p>
                <span className="font-bold text-gray-900">Speaker bio:</span> Riina Palu is a Researcher in the Next Gen Digital Society Research Group at the Department of Software Science, Tallinn University of Technology (TalTech), Estonia. She also serves as the Co-Chairholder of the UNESCO Chair in Digital Transformation for Inclusive and Sustainable Development. Her research investigates the resilience of digital societies, digital sovereignty, and governance models for autonomous and agentic technologies across critical domains, including public administration and maritime logistics. She is the creator of the CIGET Resilience Assessment Framework and actively leads international research initiatives on socio-technical system resilience during polycrises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

