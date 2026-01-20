import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Laptop, Settings2, Factory, TrendingUp, Pickaxe } from 'lucide-react';

const services = [
    {
        icon: Laptop,
        title: "IT & Technical Talent",
        desc: "Software, ERP, SAP, and Cloud Infrastructure support designed for speed and scalability.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "group-hover:border-indigo-200"
    },
    {
        icon: Settings2,
        title: "Mechanical Support",
        desc: "Production, maintenance, quality assurance, and industrial project execution.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "group-hover:border-purple-200"
    },
    {
        icon: Factory,
        title: "Processing Industry",
        desc: "Specialized staffing for Food, Agro, FMCG, and Chemical processing plants.",
        color: "text-pink-600",
        bg: "bg-pink-50",
        border: "group-hover:border-pink-200"
    },
    {
        icon: TrendingUp,
        title: "Digital Growth",
        desc: "SEO, Digital Marketing, and Brand Campaigns with measurable ROI.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200"
    },
    {
        icon: Pickaxe,
        title: "Agri Innovation",
        desc: "Cutting-edge engineering products like stone detectors to reduce downtime.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200"
    }
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -200]);

    return (
        <section id="services" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
            <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none"></div>
            <motion.div
                style={{ y }}
                className="absolute -left-20 top-40 w-[700px] h-[700px] bg-gradient-to-br from-indigo-200/30 via-purple-200/30 to-pink-200/30 rounded-full blur-[120px] -z-10 morph-blob pointer-events-none"
            ></motion.div>
            <motion.div
                className="absolute -right-20 bottom-40 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-[100px] -z-10 pointer-events-none"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-slate-900">
                        Our <span className="text-gradient-premium">Expertise</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
                        Specialized solutions tailored to the unique demands of modern industries.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{
                                y: -15,
                                scale: 1.02,
                                transition: { duration: 0.3, type: "spring", stiffness: 300 }
                            }}
                            className={`p-8 md:p-10 rounded-3xl glass-card premium-card-hover group cursor-pointer relative overflow-hidden ${service.border}`}
                        >
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-10`}
                                transition={{ duration: 0.3 }}
                            />

                            <motion.div
                                className={`relative w-20 h-20 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-premium`}
                                whileHover={{
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: 1.15,
                                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
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
                                        delay: idx * 0.5
                                    }}
                                >
                                    <service.icon size={30} />
                                </motion.div>
                            </motion.div>

                            <motion.h3
                                className="text-xl md:text-2xl font-bold mb-4 text-slate-800 relative z-10"
                                whileHover={{ x: 5 }}
                            >
                                {service.title}
                            </motion.h3>

                            <motion.p
                                className="text-slate-600 leading-relaxed text-base font-medium relative z-10"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {service.desc}
                            </motion.p>

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                                transition={{ duration: 0.6 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
