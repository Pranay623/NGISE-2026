import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../PageHeader";

const tracksData = [
    {
        id: 1,
        title: "Track 1: Information System Engineering",
        points: [
            "Model-Driven Software Engineering",
            "Enterprise Architecture, Integration & Interoperability",
            "Data Engineering, Modelling & Intelligent Information Systems",
            "Business Process Engineering, Automation & Workflow Innovation",
            "Security, Privacy & Trust in Information Systems",
            "Human‑Centred Information Systems & User Experience Design",
            "Resilient, Reliable & Sustainable Information Systems"
        ]
    },
    {
        id: 2,
        title: "Track 2: Artificial Intelligence & Machine Learning",
        /*points: [
            "Neural Networks and Deep Learning Architectures",
            "Reinforcement Learning and Autonomous Systems",
            "Transfer Learning and Domain Adaptation",
            "Explainable AI and Model Interpretability",
            "Natural Language Processing and Understanding",
            "Computer Vision and Image Recognition",
            "Generative Models and Adversarial Networks",
            "AI Ethics and Fairness in Machine Learning",
            "Scalable Machine Learning for Big Data",
            "AI in Healthcare and Bioinformatics",
            "Robotics and Intelligent Agents",
            "AI in Cybersecurity and Fraud Detection",
            "AI for Edge and IoT Devices",
            "Hybrid AI Systems and Multi-Model Integration"
        ]*/
    },
    {
        id: 3,
        title: "Track 3: Sustainable Computing & Green IT",
       /* points: [
            "Energy-Efficient Computing and Data Centers",
            "Green Cloud Computing",
            "Sustainable Software Engineering Practices",
            "Low-Power and Energy-Aware Algorithms",
            "Green Networking and Communication Technologies",
            "Carbon Footprint Reduction in IT Systems",
            "Resource Management and Optimization for Sustainability",
            "Renewable Energy Integration in IT Infrastructure",
            "Eco-Friendly Hardware Design and Development",
            "Sustainable AI and Machine Learning Models",
            "Lifecycle Assessment of IT Products and Services",
            "Sustainable Data Storage and Management Solutions",
            "Green IT Policies and Regulatory Compliance",
            "Sustainable Supply Chain Management in IT"
        ]*/
    },
    {
        id: 4,
        title: "Track 4: Data Science & Big Data Analytics",
      /*  points: [
            "Advanced Techniques in Pattern Recognition",
            "Scalable Algorithms for Big Data Mining",
            "Anomaly Detection and Outlier Mining",
            "Text Mining and Natural Language Processing",
            "Graph Mining and Network Analysis",
            "Mining Unstructured and Semi-Structured Data",
            "Association Rules and Frequent Pattern Mining",
            "Time Series Analysis and Forecasting",
            "Web Mining and Social Media Analytics",
            "Spatial and Temporal Data Mining",
            "Data Mining for Cybersecurity and Fraud Detection",
            "Ethics and Privacy in Data Mining",
            "Knowledge Representation and Ontology Learning",
            "Interactive Data Mining and Visual Analytics",
            "Applications of Data Mining in Healthcare and Bioinformatics"
        ]*/
    },
    {
        id: 5,
        title: "Track 5: Big Data Technologies",
       /* points: [
            "Distributed Systems for Big Data Processing",
            "Data Storage and Management in Big Data Systems",
            "Big Data Integration and Interoperability",
            "Real-Time Data Streaming and Processing",
            "Scalable Data Architectures and Infrastructures",
            "Big Data Analytics and Visualization",
            "Data Quality and Cleaning in Large-Scale Systems",
            "Security and Privacy in Big Data",
            "Cloud-Based Big Data Solutions",
            "High-Performance Computing for Big Data",
            "Machine Learning at Scale in Big Data",
            "Big Data in the Internet of Things (IoT)",
            "Energy-Efficient Big Data Solutions",
            "Data Governance and Compliance in Big Data",
            "Emerging Technologies and Trends in Big Data Engineering"
        ]*/
    },
    {
        id: 6,
        title: "Track 6: Cloud Computing & IoT",
        /*points: [
            "Serverless Computing and Function-as-a-Service (FaaS)",
            "Edge Computing and Cloud-Edge Integration",
            "Hybrid Cloud Architectures and Multi-Cloud Strategies",
            "Cloud-Native Application Development",
            "AI and Machine Learning in Cloud Computing",
            "Cloud Security and Zero Trust Architectures",
            "Cloud Automation and Infrastructure as Code (IaC)",
            "High-Performance Computing (HPC) in the Cloud",
            "Cloud-Based DevOps and Continuous Integration/Continuous Deployment (CI/CD)",
            "Sustainable and Green Cloud Solutions",
            "Quantum Computing in the Cloud",
            "Blockchain and Distributed Ledger Technologies in the Cloud",
            "Cloud Solutions for IoT and Smart Devices"
        ]*/
    },
    {
        id: 7,
        title: "Track 7: Large Language Models (LLMs)",
       /* points: [
            "Architectures and Techniques for Training Large Language Models",
            "Fine-Tuning and Transfer Learning in Large Language Models",
            "Ethics, Bias, and Fairness in Large Language Models",
            "Applications of Large Language Models in Natural Language Processing",
            "Scaling Challenges and Solutions in Large Language Models",
            "Interpretability and Explainability in Large Language Models",
            "Multimodal Learning with Large Language Models",
            "Efficiency and Optimization in Training Large Language Models",
            "Real-World Deployments and Case Studies of Large Language Models",
            "Security and Privacy Concerns in Large Language Models",
            "Language Model Personalization and Customization",
            "Ethical Considerations in Large Language Model Development and Deployment",
            "Future Directions and Innovations in Large Language Models"
        ] */
    },
    {
        id: 8,
        title: "Track 8: Security & Privacy in Next-Gen Computing",
      /*  points: [
            "Zero Trust Architectures and Next-Gen Security Models",
            "Security Challenges in Cloud Computing and Edge Networks",
            "Privacy-Preserving Machine Learning and AI",
            "Cybersecurity in Internet of Things (IoT) and Smart Devices",
            "Blockchain and Distributed Ledger Security",
            "Data Anonymization and Privacy Enhancing Technologies",
            "Threat Detection and Response in Modern IT Infrastructures",
            "Security in 5G and Next-Gen Mobile Networks",
            "Identity Management and Access Control in Next-Gen Systems",
            "Privacy and Security in Augmented and Virtual Reality",
            "Secure Software Development and DevSecOps",
            "Compliance and Regulatory Issues in Next-Gen Computing",
            "AI-Driven Security and Automated Threat Mitigation",
            "Emerging Threats and Security Trends in Next-Gen Computing"
        ]*/
    },
    {
        id: 9,
        title: "Track 9: HEmerging Technologies & Future Trends",
       /* points: [
            "Generative AI",
            "Quantum Computing",
            "5G and Beyond",
            "Blockchain and Decentralized Technologies",
            "Augmented Reality (AR) and Virtual Reality (VR)",
            "Next-Generation Cybersecurity Solutions",
            "Human-Computer Interaction in Emerging Technologies",
            "Autonomous Systems and Robotics",
            "Edge Computing and IoT Integration",
            "Smart Cities and Urban Technologies",
            "Digital Twins and Simulation Technologies",
            "Wearable Technology and Health Monitoring",
            "Space Technology and Exploration"
        ]*/
    },
    {
        id: 10,
        title: "Track 10: Digital Transformation, E-Government & Interoperability",
       /* points: [
            "Strategies for Successful Digital Transformation",
            "Innovation in Digital Business Models",
            "Interoperability Standards and Frameworks",
            "E-Government Strategies and Best Practices",
            "Citizen-Centric Digital Services and Engagement",
            "Data Governance and Open Data Initiatives",
            "Cloud Computing in Public Sector Transformation",
            "Digital Identity and Access Management for Citizens",
            "AI and Analytics for Public Policy Decision Making",
            "Cybersecurity in Government Digital Initiatives",
            "Interoperability Between Government Agencies",
            "Smart Cities: Integrating Technology into Urban Governance",
            "Blockchain Applications for Transparency and Accountability",
            "Digital Literacy and Skills Development in Public Services",
            "Innovative Funding Models for Digital Initiatives"
        ]*/
    },
    {
        id: 11,
        title: "Track 11: Model-Driven Software Engineering",
    }    
];

const TrackCard = ({ track, isOpen, toggle }: { track: typeof tracksData[0], isOpen: boolean, toggle: () => void }) => {
    return (
        <motion.div
            layout
            initial={false}
            animate={{
                scale: isOpen ? 1.02 : 1,
                boxShadow: isOpen ? "0 20px 40px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.05)",
                zIndex: isOpen ? 10 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`bg-white rounded-xl overflow-hidden border ${isOpen ? 'border-blue-200' : 'border-gray-100 hover:shadow-md'}`}
        >
            <motion.div
                layout="position"
                className={`w-full px-6 py-4 flex items-center justify-between text-left`}
            >
                <div className="flex items-center gap-4">
                    <span className="text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                        {track.title}
                    </span>
                </div>
                {/* {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />} */}
            </motion.div>
                    <motion.div
                        style={{
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            borderRadius: "16px",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)"
                        }}
                    >
                    <div className="px-2 py-1.5 grid grid-cols-1 gap-1">
                            {track.points.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-start gap-2 text-sm text-gray-600 p-1 rounded hover:bg-white hover:shadow-sm transition-all"
                                >
                                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                    <span>{point}</span>
                                </motion.div>
                            ))}
                    </div>
                    </motion.div>
        </motion.div>
    );
};

const ConferenceTracks = () => {
    const [openTrackId, setOpenTrackId] = useState<number | null>(null);

    const toggleTrack = (id: number) => {
        setOpenTrackId(openTrackId === id ? null : id);
    };

    return (
        <>
            <div className=" mb-12 text-center">
                <PageHeader
                    title="Conference Tracks"
                    description="The conference invites high-quality, original, and unpublished papers on topics including, but are not limited to, the following:"
                />
                {/* <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                />
                <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto px-4">
                    The conference invites high-quality, original, and unpublished papers on topics including, but are not limited to, the following:
                </p> */}
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-4">
                {tracksData.map((track) => (
                    <TrackCard
                        key={track.id}
                        track={track}
                        isOpen={openTrackId === track.id}
                        toggle={() => toggleTrack(track.id)}
                    />
                ))}
            </div>
        </>
    );
};

export default ConferenceTracks;





