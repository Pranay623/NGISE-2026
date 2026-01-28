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
        points: [
            "Large Language Models: Foundations, Training & Optimization",
            "Neural Networks, Deep Learning & Generative Models",
            "Reinforcement Learning, Autonomous Systems & Intelligent Agents",
            "Natural Language Processing, Speech & Multimodal AI",
            "Computer Vision & Perception Systems",
            "AI Ethics, Fairness, Privacy & Trustworthy AI",
            "Scalable, Distributed & Applied AI Systems"
        ]
    },
    {
        id: 3,
        title: "Track 3: Data Science & Big Data Analytics",
        points: [
            "Scalable Big Data Architectures, Storage & Processing Frameworks",
            "Data Integration, Quality, Governance & Compliance",
            "Pattern Recognition, Frequent Patterns & Advanced Data Mining Methods",
            "Anomaly Detection, Cybersecurity Analytics & Fraud Detection",
            "Text, Web, Graph & Social Media Mining",
            "Visual Analytics, Interactive Mining & Big Data Applications",
            "Privacy, Security, Ethics & Trust in Big Data Systems"
        ]
    },
    {
        id: 4,
        title: "Track 4: Cloud Computing & IoT",
        points: [
            "Cloud‑Native Architectures, Serverless Computing & Modern Deployment Models",
            "Hybrid, Multi‑Cloud & Distributed Cloud Ecosystems",
            "Cloud Security, Privacy & Zero‑Trust Architectures",
            "Automation, DevOps & Infrastructure Engineering in the Cloud",
            "High‑Performance, Specialized & Next‑Gen Cloud Computing",
            "Cloud Intelligence: AI/ML‑Powered Cloud Services",
            "IoT, Edge & Cloud‑Connected Smart Systems"
        ]
    },
    {
        id: 5,
        title: "Track 5: Security & Privacy in Next-Gen Computing",
        points: [
            "Zero Trust Architectures and Next-Gen Security Models",
            "Security in Cloud, Edge, IoT & Emerging Networked Environments",
            "Privacy‑Preserving AI, Data Protection & Confidential Computing",
            "Blockchain, Distributed Ledger Security & Decentralized Trust",
            "Threat Detection, Incident Response & AI‑Driven Cyber Defence",
            "Identity, Access Management & Secure Software Engineering",
            "Regulatory Compliance, Privacy Governance & Ethical Security Challenges"
        ]
    },
    {
        id: 6,
        title: "Track 6: Digital Transformation, E-Government & Interoperability",
        points: [
            "Strategies, Governance & Leadership in Digital Transformation",
            "Interoperability Frameworks, Standards & Cross‑Agency Collaboration",
            "E‑Government Services, Citizen Engagement & User‑Centric Design",
            "Data Governance, Open Data & Transparency in Public Administration",
            "Digital Identity, Trust Services & Secure Digital Wallets",
            "AI, Analytics & Smart Governance Systems",
            "Cybersecurity, Risk Management & Resilience in Digital Government"
        ]
    },
    {
        id: 7,
        title: "Track 7: Sustainable Computing & Green IT",
        points: [
            "Energy‑Efficient Computing, Data Centres & Green Cloud Infrastructure",
            "Sustainable Software Engineering, Algorithms & AI Models",
            "Green Networking, Communication Technologies & Edge Sustainability",
            "Carbon Footprint Measurement, Reduction & Lifecycle Assessment",
            "Sustainable Resource Management, Optimization & Workload Orchestration",
            "Renewable Energy Integration in Digital Infrastructure & Eco‑Friendly Hardware",
            "Green IT Policies, Regulations & Sustainable Supply Chains"
        ]
    },
    {
        id: 8,
        title: "Track 8: Emerging Technologies & Future Trends",
        points: [
            "Generative AI, Intelligent Systems & Human–Machine Collaboration",
            "Quantum Computing, Advanced Materials & Post‑Classical Technologies",
            "Next‑Generation Connectivity: 5G, 6G & Beyond",
            "Blockchain, Decentralized Systems & Digital Trust Technologies",
            "Immersive Technologies: AR/VR, Metaverse & Digital Twins",
            "Robotics, Autonomous Systems & Cyber‑Physical Intelligence",
            "Emerging Smart Ecosystems: IoT, Edge, Wearables, Smart Cities & Space Tech"
        ]
    }
];

const TrackCard = ({ track, isOpen, toggle }: { track: typeof tracksData[0], isOpen: boolean, toggle: () => void }) => {
    return (
        <motion.div
            layout
            initial={false}
            animate={{
                scale: isOpen ? 1 : 1,
                boxShadow: isOpen ? "0 10px 30px rgba(0,0,0,0.1)" : "0 4px 6px rgba(0,0,0,0.05)",
                zIndex: isOpen ? 10 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`bg-white rounded-xl overflow-hidden border transition-colors cursor-pointer ${isOpen ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:border-blue-200'}`}
            onClick={toggle}
        >
            <motion.div
                layout="position"
                className={`w-full px-6 py-4 flex items-center justify-between text-left`}
            >
                <div className="flex items-center gap-4">
                    <span className={`text-base sm:text-lg md:text-xl font-medium leading-relaxed transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-700'}`}>
                        {track.title}
                    </span>
                </div>
                {isOpen ? <ChevronUp className="text-blue-600 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-2">
                            <div className="space-y-2">
                                {track.points.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-start gap-3 text-sm sm:text-base text-gray-600 group"
                                    >
                                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors flex-shrink-0" />
                                        <span>{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
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





