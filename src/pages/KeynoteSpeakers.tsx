import Divesh from "../public/image.png";
import Arun from "../public/Keyspeaker.jpeg";
import Riina from "../public/riina-palu.jpg";
import SalvatorePic from "../public/WhatsApp Image 2026-06-15 at 7.00.21 PM.jpeg";
import PageHeader from "../components/PageHeader";

export default function KeynoteSpeakers() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader
                title="NGISE 2026 Keynote Speakers"
                // description="Distinguished speakers and experts who will be sharing their insights at the conference"
            />
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8 w-full max-w-7xl">
                    <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 flex flex-col items-center">
                        <img src={Divesh} alt="Divesh Srivastava" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                        <p className="text-xl font-semibold text-center mt-2">Divesh Srivastava</p>
                        <p className="text-gray-600 text-sm text-center mb-6">
                           Head of Database Research at AT&T, USA, Vice President of the VLDB Endowment, ACM Fellow
                        </p>

                        <div className="w-full text-left">
                            <p className="font-bold text-center text-lg">28 October 2026</p>
                            <p className="font-bold text-center text-md mb-6 px-4">Modeling, Exploring and Analyzing Change: The Janus Project</p>

                            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
                                <p>
                                    <span className="font-bold text-gray-900">Abstract:</span> Data change, all the time. The Janus project seeks to model, explore, and analyze such change, providing valuable insights into the evolving real world and the ways in which data about it are collected and used. We start by identifying technical challenges that need to be addressed to realize the Janus vision. Based on an analysis of the history of 3.5M tables on the English Wikipedia for a total of 53.8M table versions, we then illustrate the rich history of structured Wikipedia data: their creation, evolution, and deletion; indeed, each table has a life of its own. To help automatically interpret the useful knowledge harbored in the history of Wikipedia tables, we present recent results on two technical problems that help infer identity of entities and tables across changes over time: (i) matching tables, info boxes and lists within a Wikipedia page across page revisions, and (ii) identifying Natural Keys, which serves as a primary key in tables over time and consists of attributes inherent to an entity. Finally, we show how to accurately recommend schema changes to Wikipedia tables, based on rules derived from the history of past schema changes. We solve these problems at scale and make the resulting curated datasets available to the community to facilitate future research.
                                </p>
                                <p className="text-center font-medium my-4">
                                    <a href="https://hpi.de/en/database-group/projects/data-integration-projects/data-profiling-and-analytics/change-exploration/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">The Janus Project</a>
                                </p>
                                <p>
                                    <span className="font-bold text-gray-900">Speaker bio:</span> Divesh Srivastava is the Head of Database Research at AT&T. He is an AT&T Fellow, a Fellow of the ACM, the President of the VLDB Endowment, co-chair of the ACM Publications Board, and on the Board of Directors of the Computing Research Association. He has served as PC co-chair of many international conferences including VLDB 2024 (Industrial), SIGMOD 2021, VLDB 2020 (Industrial), SIGMOD 2020 (Industrial), and ICDE 2019. He has presented keynote talks at several international conferences, and his research interests and publications span a variety of topics in data management. He received his Ph.D. from the University of Wisconsin, Madison, USA, and his Bachelor of Technology from the Indian Institute of Technology, Bombay, India.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 flex flex-col items-center">
                        <img src={Arun} alt="Arun Kumar Sangaiah" className="w-32 h-32 object-cover object-right rounded-full mx-auto mb-4" />
                        <p className="text-xl font-semibold text-center mt-2">Arun Kumar Sangaiah</p>
                        <p className="text-gray-600 text-sm text-center mb-6">
                           Distinguished Professor, National Yunlin University of Science and Technology (YunTech), Taiwan
                        </p>

                        <div className="w-full text-left">
                            <p className="font-bold text-center text-lg">29 October 2026</p>
                            <p className="font-bold text-center text-md mb-6 px-4">From Data to Action: AI and IoT for Sustainable and Climate-Resilient Systems</p>

                            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
                                <p>
                                    <span className="font-bold text-gray-900">Abstract:</span> In the face of climate change, environmental degradation, and resource scarcity, there is a growing need for intelligent, real-time decision-making. The keynote, "From Data to Action: AI and IoT for Sustainable and Climate-Resilient Systems," explores how the integration of Artificial Intelligence (AI) and the Internet of Things (IoT) is driving sustainability across sectors like agriculture, livestock, environmental monitoring, and smart infrastructure. IoT provides continuous sensing through connected devices, while AI processes large, diverse data streams into actionable insights, predictions, and adaptive strategies. Together, these technologies enhance efficiency, reduce waste, and support informed decision-making in dynamic, uncertain environments. The keynote will discuss how AI-IoT frameworks help improve climate resilience through early risk detection, resource optimization, anomaly detection, and automated responses. It will also highlight innovations in edge intelligence, low-power sensing, digital twins, and trustworthy AI, which are vital for sustainable development. By shifting from passive data collection to real-time, context-aware action, AI and IoT are crucial in creating adaptive systems that address global sustainability challenges and ensure climate resilience.
                                </p>
                                <p>
                                    <span className="font-bold text-gray-900">Speaker bio:</span> Arun Kumar Sangaiah received his Ph.D. from School of Computer Science and Engineering, VIT University, Vellore, India. He is currently a Full Professor with National Yunlin University of Science and Technology, Taiwan. He has published more than 300 research articles in refereed journals (IEEE TII, IEEE TITS, IEEE TNSE, IEEE TETCI, IEEE SysJ, IEEE SensJ, IEEE IOTJ, ACM TOSN), 11 edited books, as well as 1 patent (held and filed) and 5 projects funded by National Science and Technology Council (NSTC), Taiwan, Ministry of IT of India and further international projects (CAS, Guangdong Research fund, Australian Research Council). Arun has received various awards, Yushan Young Scholar, PIFI-CAS fellowship, CSI significant Contributor etc. Also, he is responsible for Editor-in-Chief, and Associate Editor of various reputed ISI journals. Dr. Sangaiah is a visiting scientist (2018-2019) with Chinese Academy of Sciences (CAS), China and visiting researcher of Université Paris-Est (UPEC), France (2019-2020).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8 w-full max-w-7xl">
                    <div className="p-5 sm:p-6 bg-white shadow-lg rounded-xl border border-gray-100 flex flex-col items-center">
                        {/* Photo is zoomed and shifted so only the face shows inside the circle */}
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-blue-50 bg-slate-100">
                            <img
                                src={Riina}
                                alt="Riina Palu"
                                className="absolute max-w-none"
                                style={{ width: 248, left: -52, top: -43 }}
                            />
                        </div>
                        <p className="text-xl font-semibold text-center mt-2">Riina Palu</p>
                        <div className="text-gray-600 text-sm text-center mb-6 space-y-1">
                            <p>Next Gen Digital Society Research Group, Digital Society Resilience Research Stream, Researcher, PhD</p>
                            <p>UNESCO Chair in Digital Transformation for Inclusive and Sustainable Development, Co-Chairholder</p>
                            <p>Department of Software Science, School of Information Technologies, Tallinn University of Technology (TalTech), Tallinn, Estonia</p>
                        </div>

                        <div className="w-full text-left">
                            <p className="font-bold text-center text-md mb-6 px-4">Engineering Digital Society Resilience: Empirical Insights Across Seven Nations Through the CIGET Framework</p>

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

                    {/* Industrial Speaker - Salvatore Sinno */}
                    <div className="p-5 sm:p-6 bg-white shadow-lg rounded-xl border border-gray-100 flex flex-col items-center">
                        <img src={SalvatorePic} alt="Salvatore Sinno" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                        <p className="text-xl font-semibold text-center mt-2">Salvatore Sinno</p>
                        <p className="text-gray-600 text-sm text-center mb-6">Vice President of ECS Innovations at Unisys, USA</p>

                        <div className="w-full text-left">
                            <p className="font-bold text-center text-md mb-6 px-4">Knowledge Graphs and Neurosymbolic AI in Action: From Connected Data to Intelligent Reasoning</p>

                            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
                                <p>
                                    <span className="font-bold text-gray-900">Abstract:</span> The convergence of knowledge graphs and neurosymbolic AI is redefining how intelligent systems discover, reason, and act across complex domains. This talk explores how the integration of structured knowledge with neural reasoning enables machines to move beyond pattern recognition toward interpretable, hypothesis‑driven decision‑making. Knowledge graphs provide a rich, interconnected representation of entities, relationships, and context — whether biological entities such as genes, proteins, and compounds, or financial entities such as transactions, entities, and risk signals. Neurosymbolic AI combines the learning power of deep neural networks with the logical reasoning of symbolic systems, enabling the discovery of hidden relationships across vast and heterogeneous datasets. The talk presents applied research spanning multiple high‑impact domains. In life sciences, these approaches support drug repurposing, the prediction of novel therapeutic targets, and the acceleration of vaccine development by uncovering non‑obvious connections across biomedical knowledge. In finance, the same framework drives fraud detection, anti‑money laundering, and risk assessment by reasoning over complex networks of entities and behaviours. Across both domains, the common thread is the ability to transform siloed data into connected, reasoning‑capable systems that deliver explainable and trustworthy AI‑driven insights.
                                </p>
                                <p>
                                    <span className="font-bold text-gray-900">Speaker bio:</span> Salvatore Sinno is VP of Innovation for Enterprise Computing Solutions at Unisys, where he leads the Advanced Research and Innovation Team, translating cutting‑edge science into practical enterprise impact. A technology executive, researcher, and speaker, his work sits at the intersection of quantum computing, artificial intelligence, high‑performance computing, and cybersecurity. His research focuses on quantum machine learning, hybrid classical–quantum algorithms, and AI‑driven enterprise modernisation — with applied work spanning financial fraud detection, logistics optimisation, anomaly detection, cybersecurity, and life sciences. He has a particular interest in knowledge graphs and neurosymbolic AI, including their application to biomedical discovery. Dr. Sinno holds a doctorate in Quantum Machine Learning, a degree in Aerospace Engineering, an MSc in IT, and an MBA from Durham University. Prior to Unisys, he held roles at Procter & Gamble, IBM, CSC, and the UK Government.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
