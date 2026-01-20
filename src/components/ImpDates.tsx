import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ImpDates = () => {
    const dates = [
        { date: "05th May, 2026", event: "Paper Submission Deadline" },
        { date: "02nd Jul, 2026", event: "Acceptance Notification" },
        { date: "30th Sep, 2026", event: "Registration Deadline" },
        { date: "10th Oct, 2026", event: "Final Paper Submission" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="py-4 px-6 text-left text-lg font-semibold">Date</th>
                                    <th className="py-4 px-6 text-left text-lg font-semibold">Event</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {dates.map((item, index) => (
                                    <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                                        <td className="py-4 px-6 text-gray-800 font-medium whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <Calendar className="w-5 h-5 text-blue-600" />
                                                {item.date}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-gray-600">
                                            {item.event}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImpDates;
