import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardList, HelpCircle, Mail, Phone, User, Send, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const VisaInformation = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero / Header Section */}
            <PageHeader
                title="Visa Information"
                description="Everything you need to know about obtaining a visa for NGISE 2026"
            />

            <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">

                {/* Conference Visa Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <FileText className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Conference Visa (‘C’ Visa)</h2>
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p className="flex gap-3">
                            <span className="text-blue-600 font-bold">•</span>
                            Foreign nationals are granted Conference Visas on production of an invitation to a conference/seminar/workshop being organized in India. For business meetings or board meetings, to discuss business matters of a particular company/organization, a foreigner may obtain Business Visa.
                        </p>
                        <p className="flex gap-3">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                                May refer to <a href="https://conference.mha.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">conference.mha.gov.in <ExternalLink className="w-4 h-4" /></a> for more details.
                            </span>
                        </p>
                    </div>
                </motion.section>

                {/* Documents Required Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <ClipboardList className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Documents required</h2>
                    </div>

                    <ul className="grid gap-4 md:grid-cols-2 text-gray-700">
                        {[
                            "Passport valid for a minimum of 6 months with at least two blank pages.",
                            "Printout of the online application form duly signed.",
                            "Letter from the Institution represented in Germany.",
                            "Letter of invitation from the Indian organization organizing the Conference/Seminar.",
                            "Political clearance from the Ministry of External Affairs.",
                            "Clearance from the Ministry of Home Affairs (when applicable).",
                            "If holding a Travel document (refugee passport).",
                            "Bank account statements for the last 3 months.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                        <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg md:col-span-2">
                            <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0" />
                            <span>
                                One photograph. For photo requirements, visit <a href="https://indianvisaonline.gov.in/visa/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-600/30 hover:decoration-blue-600">indianvisaonline.gov.in</a>
                            </span>
                        </li>
                    </ul>

                    <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <p className="text-gray-800 font-medium italic text-center">
                            "I hereby certify that I have submitted a complete application and that I know and accept the minimum processing time required for my visa application."
                        </p>
                    </div>
                </motion.section>

                {/* Contact & FAQ Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Mail className="w-6 h-6" /> Submit Request
                        </h3>
                        <p className="mb-4 text-blue-100">
                            Please send your request to the following email address:
                        </p>
                        <a href="mailto:ngise@akgec.ac.in" className="text-2xl font-bold hover:text-blue-200 transition-colors underline decoration-white/30 hover:decoration-white">
                            ngise@akgec.ac.in
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <HelpCircle className="w-6 h-6 text-blue-600" /> FAQ
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Please see <a href="/faq" className='text-blue-600 font-semibold hover:underline'>the FAQ</a> if you have any questions about your invitation letter.
                        </p>
                    </motion.div>
                </div>

            </div>

            {/* <VisaInfocontact /> */}
        </div>
    );
};


export default VisaInformation;
