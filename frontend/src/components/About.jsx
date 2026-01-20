import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PodcastCards from './PodcastCards';
import FounderSection from './FounderSection';
import MissionVision from './MissionVision';

const About = () => {
    const points = [
        "Skilled IT and engineering professionals",
        "Reliable manpower for manufacturing and processing operations",
        "Digital marketing and business growth services",
        "Practical engineering innovations for agricultural machinery"
    ];

    return (
        <div id="about" className="w-full overflow-hidden">
            {/* Hero / Intro Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-indigo-50/20 to-white">
                <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-indigo-200/30 rounded-full blur-[120px] morph-blob pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <motion.div
                                className="inline-flex items-center px-5 py-2.5 rounded-full glass-card text-indigo-600 font-bold text-sm mb-8"
                                whileHover={{ scale: 1.05 }}
                            >
                                Who We Are
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 text-slate-900">
                                Empowering Industries with <br />
                                <span className="text-gradient-premium italic">Precision & Tech</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                                Sahasya Talent and Technology Private Limited is a technology-driven solutions company supporting IT, manufacturing, processing, and agricultural industries.
                            </p>
                            <p className="text-lg md:text-xl text-slate-600 mb-10 font-semibold">
                                We help organizations scale by delivering:
                            </p>

                            <ul className="space-y-4 mb-10">
                                {points.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start group/item"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <CheckCircle2 className="h-6 w-6 text-indigo-500 mt-0.5 mr-4 flex-shrink-0 group-hover/item:text-indigo-600 transition-colors" />
                                        </motion.div>
                                        <span className="text-slate-700 font-semibold text-base md:text-lg group-hover/item:text-indigo-600 transition-colors">{point}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div
                                className="p-8 border-l-4 border-indigo-500 glass-card rounded-r-2xl relative overflow-hidden group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                />
                                <p className="text-xl md:text-2xl font-bold text-slate-800 italic relative z-10">
                                    "By combining technology expertise, industrial know-how, and innovation, we solve real operational challenges."
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative group">
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        backgroundSize: '200% 200%',
                                    }}
                                />
                                <motion.img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                    alt="Young Team Collaboration"
                                    className="relative rounded-3xl shadow-premium-lg w-full h-[500px] md:h-[600px] object-cover"
                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className="absolute -bottom-8 -left-8 glass-card p-8 md:p-10 rounded-3xl shadow-premium-lg hidden md:block"
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    whileHover={{ scale: 1.1, rotate: -2, y: -4 }}
                                >
                                    <motion.div
                                        className="text-5xl font-black text-indigo-600 mb-1"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                                    >
                                        10+
                                    </motion.div>
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Years Service</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <MissionVision />
            <FounderSection />

            <section className="pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <PodcastCards />
                </div>
            </section>
        </div>
    );
};

export default About;
