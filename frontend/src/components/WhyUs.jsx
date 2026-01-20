import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Trophy, Briefcase } from 'lucide-react';

const WhyUs = () => {
    const highlights = [
        {
            title: "Multi-Industry Expertise",
            desc: "Deep domain knowledge across IT, Manufacturing, and Agriculture.",
            icon: Briefcase
        },
        {
            title: "Right Talent, Right Fit",
            desc: "Precision matching of technical skills with operational needs.",
            icon: Users
        },
        {
            title: "Innovation-Driven",
            desc: "In-house R&D for engineering products like stone detectors.",
            icon: Lightbulb
        },
        {
            title: "Trusted Partners",
            desc: "Standard-setting service delivery for top-tier industrial firms.",
            icon: Trophy
        }
    ];

    const clients = ["Calcus", "Bhairava", "IDFC", "Himalaya AGRO", "Global Tech", "AgriCorp", "Future Systems"];

    return (
        <section id="why-us" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
            <div className="absolute inset-0 gradient-mesh opacity-50 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] gradient-orb morph-blob pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-slate-900"
                    >
                        Why Partner With <span className="text-gradient-premium">Sahasya?</span>
                    </motion.h2>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium">We combine technical excellence with industry-specific insight.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotate: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", bounce: 0.4, delay: index * 0.1 }}
                            whileHover={{
                                y: -15,
                                scale: 1.05,
                                rotate: 2,
                                transition: { duration: 0.3, type: "spring", stiffness: 300 }
                            }}
                            className="glass-card p-8 md:p-10 rounded-3xl premium-card-hover group cursor-pointer relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }}
                            />

                            <motion.div
                                className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-2xl inline-block mb-6 text-indigo-600 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-premium"
                                whileHover={{
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: 1.15,
                                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 15,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: index * 0.3
                                    }}
                                >
                                    <item.icon size={28} />
                                </motion.div>
                            </motion.div>

                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800 relative z-10 group-hover:text-indigo-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed font-medium relative z-10">
                                {item.desc}
                            </p>

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="pt-12 border-t border-slate-200 overflow-hidden">
                    <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">Trusted By Global Industry Leaders</p>

                    <div className="relative flex overflow-x-hidden group">
                        <motion.div
                            className="flex space-x-24 whitespace-nowrap"
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        >
                            {[...clients, ...clients, ...clients].map((client, index) => (
                                <motion.span
                                    key={index}
                                    className="text-2xl md:text-4xl font-black tracking-tight text-slate-300 hover:text-indigo-500 transition-colors cursor-default inline-block px-4"
                                    whileHover={{
                                        scale: 1.2,
                                        color: "#6366f1",
                                        textShadow: "0 0 20px rgba(99, 102, 241, 0.5)"
                                    }}
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.2
                                    }}
                                >
                                    {client}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
