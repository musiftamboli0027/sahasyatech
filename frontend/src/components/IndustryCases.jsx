import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Shield, Cpu, ArrowRight } from 'lucide-react';

const cases = [
    {
        title: "Processing Plant Support",
        desc: "Optimized a beverage processing line with skilled quality compliance staff, resulting in 20% faster QA cycles.",
        icon: LayoutDashboard,
        tags: ["Efficiency", "Compliance"]
    },
    {
        title: "Digital Enablement",
        desc: "Transformed an industrial parts manufacturer's online presence, increasing B2B lead generation by 150% in 6 months.",
        icon: Cpu,
        tags: ["Growth", "SEO"]
    },
    {
        title: "Agri Machinery Protection",
        desc: "Deployed Stone Detector Instruments across 50+ harvesters, reducing mechanical failures by 35% during peak season.",
        icon: Shield,
        tags: ["Innovation", "Savings"]
    }
];

const IndustryCases = () => {
    return (
        <section id="use-cases" className="relative py-24 overflow-hidden bg-white">
            <div className="glow-blob bottom-0 right-0 bg-cyan-100/60 w-[500px] h-[500px] rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Case <span className="text-indigo-600">Applications</span></h2>
                        <p className="text-xl text-slate-500 font-medium">Real-world impact across diverse industry sectors.</p>
                    </div>
                    <motion.a 
                        href="#contact" 
                        className="flex items-center text-indigo-600 font-bold border-b-2 border-indigo-100 pb-1 hover:border-indigo-600 transition-all group"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Use Cases 
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateY: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ 
                                y: -15,
                                scale: 1.02,
                                rotateY: 5,
                                transition: { duration: 0.3, type: "spring", stiffness: 300 }
                            }}
                            className="p-8 rounded-[2rem] bg-indigo-50/50 border-2 border-indigo-100/50 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 flex flex-col items-start cursor-pointer group relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }}
                            />
                            
                            <motion.div 
                                className="relative bg-white p-4 rounded-2xl text-indigo-600 mb-6 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all"
                                whileHover={{ 
                                    rotate: [0, -10, 10, -10, 0],
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    animate={{ 
                                        rotate: [0, 360],
                                    }}
                                    transition={{ 
                                        duration: 20, 
                                        repeat: Infinity, 
                                        ease: "linear",
                                        delay: index * 0.5
                                    }}
                                >
                                    <item.icon size={28} />
                                </motion.div>
                            </motion.div>
                            
                            <div className="flex gap-2 mb-4 relative z-10">
                                {item.tags.map((tag, idx) => (
                                    <motion.span 
                                        key={idx} 
                                        className="text-[10px] font-bold bg-white text-indigo-600 px-3 py-1 rounded-full uppercase tracking-widest shadow-sm border border-indigo-50"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + idx * 0.1 }}
                                        whileHover={{ scale: 1.1, backgroundColor: "#6366f1", color: "white" }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                            
                            <motion.h3 
                                className="text-xl font-bold text-slate-800 mb-4 relative z-10 group-hover:text-indigo-600 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                {item.title}
                            </motion.h3>
                            
                            <motion.p 
                                className="text-slate-500 leading-relaxed text-sm font-medium relative z-10"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {item.desc}
                            </motion.p>
                            
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryCases;
