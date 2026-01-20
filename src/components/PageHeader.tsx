import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <section className="bg-blue-600 py-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                    {title}
                </h1>
                <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6" />
                {description && (
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                )}
            </motion.div>
        </section>
    );
};

export default PageHeader;
