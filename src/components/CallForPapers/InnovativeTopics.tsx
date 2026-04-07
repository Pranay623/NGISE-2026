import { motion } from "framer-motion";
import { Rocket, Zap, Cpu, Database, Network, Shield, Users, Brain, Globe, Layers, BarChart, FileCode, Beaker } from "lucide-react";

/* const topics = [
    { title: "Self-Evolving Enterprise Information Systems", icon: <Rocket className="w-5 h-5" /> },
    { title: "AI-Native Information System Engineering (LLM-driven schemas, autonomous orchestration)", icon: <Cpu className="w-5 h-5" /> },
    { title: "LLM-Driven Enterprise Knowledge Orchestration", icon: <Brain className="w-5 h-5" /> },
    { title: "Neuro-Symbolic IS for Regulatory Compliance Automation", icon: <Shield className="w-5 h-5" /> },
    { title: "Graph Neural Networks for Enterprise Process Intelligence", icon: <Network className="w-5 h-5" /> },
    { title: "Quantum-Enhanced Data Management", icon: <Zap className="w-5 h-5" /> },
    { title: "Quantum Logistics", icon: <Layers className="w-5 h-5" /> },
    { title: "High-Performance Computing for Real-Time Enterprise Intelligence", icon: <BarChart className="w-5 h-5" /> },
    { title: "HPC-backed simulation, optimization, and digital twin infrastructures", icon: <Layers className="w-5 h-5" /> },
    { title: "Reproducible AI Pipelines for Enterprise Systems", icon: <FileCode className="w-5 h-5" /> },
    { title: "Federated and Swarm Information Systems", icon: <Globe className="w-5 h-5" /> },
    { title: "Autonomous Data Governance", icon: <Shield className="w-5 h-5" /> },
    { title: "Human-AI Collaborative Decision Infrastructures", icon: <Users className="w-5 h-5" /> },
    { title: "AI/CI, Integration of Artificial Intelligence and Collective Intelligence", icon: <Brain className="w-5 h-5" /> },
    { title: "Trustworthy Autonomous Agents in Enterprise Ecosystems", icon: <Users className="w-5 h-5" /> },
    { title: "Dynamic, Self-healing Knowledge Graphs", icon: <Network className="w-5 h-5" /> },
    { title: "Metaverse-Integrated Information Systems", icon: <Globe className="w-5 h-5" /> },
    { title: "Serverless AI Information Systems", icon: <Cpu className="w-5 h-5" /> },
    { title: "IoT-Driven Adaptive Information Systems", icon: <Network className="w-5 h-5" /> },
    { title: "Cloud-Native Autonomous IS Architectures", icon: <Layers className="w-5 h-5" /> },
    { title: "Cloud-Native e-Governance Architectures", icon: <Globe className="w-5 h-5" /> },
    { title: "Cognitive Big Data", icon: <Database className="w-5 h-5" /> },
    { title: "AI-Driven Big Data and Agentic Big Data", icon: <Database className="w-5 h-5" /> },
    { title: "Big Data Systems with Built-in Reproducibility", icon: <Database className="w-5 h-5" /> },
    { title: "Data Lakehouses and Data Meshs", icon: <Layers className="w-5 h-5" /> },
    { title: "AR/VR-Integrated Information Systems", icon: <Globe className="w-5 h-5" /> },
    { title: "Wearable-Integrated Organizational Intelligence Systems", icon: <Users className="w-5 h-5" /> },
    { title: "Autonomous Multi-Agent Enterprise Systems", icon: <Users className="w-5 h-5" /> },
    { title: "Explainable Graph-Based Decision Infrastructures", icon: <Brain className="w-5 h-5" /> },
    { title: "AI-Augmented Enterprise Architecture Modeling", icon: <Layers className="w-5 h-5" /> },
    { title: "Intelligent Business Process Mining with GNNs", icon: <BarChart className="w-5 h-5" /> },
    { title: "Business Process Re-engineering in the Age of Generative AI", icon: <Rocket className="w-5 h-5" /> },
    { title: "Kolmogorov–Arnold Networks in Structured Business Analytics", icon: <Network className="w-5 h-5" /> },
    { title: "Ethical-by-Design AI Information Systems", icon: <Shield className="w-5 h-5" /> },
    { title: "GovTech Platforms Powered by Trustworthy AI", icon: <Globe className="w-5 h-5" /> },
    { title: "Reproducible Digital Government Infrastructures", icon: <FileCode className="w-5 h-5" /> },
    { title: "Cyber-Physical Enterprise Systems", icon: <Layers className="w-5 h-5" /> },
    { title: "Blockchain-Based Interoperability Frameworks for Digital Government", icon: <Database className="w-5 h-5" /> },
    { title: "Blockchain-Integrated Information Systems Beyond Finance, Web3", icon: <Globe className="w-5 h-5" /> },
    { title: "Digital Twins for Adaptive Information Infrastructure", icon: <Layers className="w-5 h-5" /> },
    { title: "Digital Twins for Smart Cities", icon: <Globe className="w-5 h-5" /> },
    { title: "Real-Time BPM for Smart Cities", icon: <BarChart className="w-5 h-5" /> },
    { title: "Innovations for Sustainable and Green Information Systems Engineering", icon: <Zap className="w-5 h-5" /> },
    { title: "Formal Methods for Reproducible Information Systems Research", icon: <Beaker className="w-5 h-5" /> },
]; */

const InnovativeTopics = () => {
    return (
        <section className="py-2 px-4 md:px-8 bg-white rounded-3xl my-0">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-4 ml-4 md:ml-11"
                >
                    <div className="space-y-4 md:space-y-2 text-gray-700">
                        <p className="text-base md:text-lg leading-relaxed text-justify md:text-left">
                            Given the highly innovative nature of the conference, we take particular care of scientific reproducibility.
                            NGISE attendees benefit from networking opportunities that spur scientific collaborations and industry-academia partnerships through a rich tapestry of various kinds of high-level presentations and discussions.
                        </p>
                        <p className="text-lg font-bold text-gray-900 mt-6 md:mt-16 mb-7">
                            Topics include but are not restricted to:
                        </p>
                    </div>
                </motion.div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 ml-4 md:ml-12">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-2 py-0.5"
                        >
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm md:text-base tracking-tight leading-snug">
                                {topic.title}
                            </span>
                        </div>
                    ))}
                </div> */}

                <ul className="list-disc pl-14 md:pl-28 text-lg text-gray-700 leading-normal max-w-6xl mx-auto space-y-1 text-left md:text-justify marker:text-black">
                    <li>AI-Native Information System Engineering</li>
                    <li>AI-Augmented Enterprise Architecture Modeling</li>
                    <li>AI-Enhanced Digital Curation</li>
                    <li>Reproducible AI Pipelines for Enterprise Systems</li>
                    <li>LLM-Driven Enterprise Knowledge Orchestration</li>
                    <li>Neuro-Symbolic IS for Regulatory Compliance Automation</li>
                    <li>Graph Neural Networks for Business Process Mining</li>
                    <li>Quantum-Enhanced Data Management</li>
                    <li>Quantum Logistics</li>
                    <li>HPC for Real-Time Enterprise Intelligence</li>
                    <li>HPC-backed Simulation, Optimization, and Digital Twins</li>
                    <li>Metaverse-Integrated Information Systems</li>
                    <li>AR/VR-Integrated Organizational Intelligence</li>
                    <li>Federated and Swarm Information Systems</li>
                    <li>Autonomous Multi-Agent Enterprise Systems</li>
                    <li>Autonomous Data Governance</li>
                    <li>Blockchain-Based IS B2B Interoperability Frameworks</li>
                    <li>Blockchain-Integrated Information Systems Beyond Finance, Web3</li>
                    <li>Integration of Artificial Intelligence and Collective Intelligence</li>
                    <li>Autonomous Agents in Enterprise Ecosystems</li>
                    <li>Serverless AI Information Systems</li>
                    <li>IoT-Driven Adaptive Information Systems</li>
                    <li>Cloud-Native Autonomous IS Architectures</li>
                    <li>Cloud-Native e-Governance Architectures</li>
                    <li>Cognitive Big Data</li>
                    <li>AI-Driven Big Data and Agentic Big Data</li>
                    <li>Data Lakehouses and Data Meshs</li>
                    <li>GovTech Platforms Powered by Trustworthy AI</li>
                    <li>Digital Twins for Adaptive Information Infrastructure</li>
                    <li>Digital Twins for Smart Cities Governance</li>
                    <li>Real-Time Decision Support for Smart Cities</li>
                    <li>Innovations for Sustainable and Green Information Systems Engineering</li>
                    <li>Formal Methods for Reproducible Information Systems Research</li>
                </ul>
            </div>
        </section>
    );
};

export default InnovativeTopics;
