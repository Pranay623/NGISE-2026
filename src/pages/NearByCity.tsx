import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Globe, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const data = [
    {
        image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fx88TXZVYAT3gwy0fp4u1OkcCm5QY9SjloDeK",
        Address: "Radisson Blu MBD Hotel, Noida",
        Tel: "+91 120 4300000",
        Website: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-noida",
    },
    {
        image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fIVuYE70cvmR4DQckiguAzGjFbKwS9apfVHl8",
        Address: "The Leela Palace, New Delhi",
        Tel: "1800 1031 444",
        Website: "https://www.theleela.com/the-leela-palace-new-delhi",
    },
    {
        image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fPWK00O794m6f0gZQDr5ONMbpeVu9hGJtAqz1",
        Address: "Country Inn & Suites by Radisson, Sahibabad",
        Tel: "1800 1080 333 (IN)",
        Website: "https://www.radissonhotels.com/en-us/hotels/country-inn-sahibabad",
    },
    {
        image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4f25l98TFBRXzHobGwrxsuUZ59SiDvAFKnOEjk",
        Address: "Hayatt Regency, Delhi",
        Tel: "+91 22 7101 1234",
        Website: "https://www.hyatt.com/hyatt-regency/en-US/delrd-hyatt-regency-delhi",
    },
    {
        image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fecXMTHOcqdY9kazXEx16onwIuLrfsvmG70yP",
        Address: "The Oberoi, New Delhi",
        Tel: "1800-108-0606",
        Website: "https://www.oberoihotels.com/",
    },
    {
        image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4f5obFsxwSlgEmvjDYx8LZ1BIqCtVfnoAzyP2O",
        Address: "ITC Maurya, New Delhi",
        Tel: "+91 0124 6718000",
        Website: "https://www.itchotels.com/in/en/itcmaurya-new-delhi",
    }
];

const NearByCity = () => {
    return (
        <section className="bg-gray-50 min-h-screen">
            {/* Header */}
            <PageHeader
                title="Nearby Hotels"
                description="There are several nearby good hotels and accommodations conveniently located near the conference venue. A few of the most popular and close by hotels are listed below for your reference."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.Address}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1" title={item.Address}>
                                    {item.Address.split(',')[0]}
                                </h3>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                        <span className="text-sm">{item.Address}</span>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="text-sm font-medium">{item.Tel}</span>
                                    </div>

                                    <a
                                        href={item.Website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-600 font-semibold mt-4 hover:text-blue-700 transition-colors group/link"
                                    >
                                        <Globe className="w-4 h-4" />
                                        <span>Visit Website</span>
                                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NearByCity;
