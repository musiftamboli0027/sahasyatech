import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Database, Settings, Sprout, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const position = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section ref={targetRef} id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
            {/* Modern Gradient Mesh Background */}
            <div className="absolute inset-0 gradient-mesh opacity-60"></div>

            {/* Premium Background Orbs */}
            <motion.div
                style={{ opacity }}
                className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] gradient-orb animate-float pointer-events-none"
            ></motion.div>
            <motion.div
                style={{ opacity }}
                className="absolute bottom-[10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-cyan-400/20 rounded-full blur-[120px] animate-float-delayed morph-blob pointer-events-none"
            ></motion.div>
            <motion.div
                style={{ opacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/15 rounded-full blur-[100px] animate-float pointer-events-none"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 w-full relative z-10">
                {/* Left Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col justify-center"
                    style={{ y: position }}
                >
                    <motion.div variants={textVariants}>
                        <motion.div
                            className="inline-flex items-center px-5 py-2.5 rounded-full glass-card text-indigo-600 text-xs font-bold uppercase tracking-wider mb-8 group cursor-default"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.span
                                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-3"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [1, 0.7, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            ></motion.span>
                            Next-Gen Industrial Experience
                        </motion.div>
                    </motion.div>

                    <motion.h1 variants={textVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tight">
                        <span className="text-slate-900 text-shadow-premium">Powering</span> <br />
                        <motion.span
                            className="text-gradient-premium inline-block"
                        >
                            Future Talent
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={textVariants} className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
                        We bridge the gap between skilled professionals and industrial needs in IT, Manufacturing, and Agriculture.
                    </motion.p>

                    <motion.div variants={textVariants} className="flex flex-wrap gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="btn-premium px-8 py-4 rounded-full text-white font-bold flex items-center gap-2 shadow-premium-lg relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Talk to Experts
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </motion.div>
                            </span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            href="#services"
                            className="px-8 py-4 rounded-full glass-card text-slate-700 font-bold border-2 border-white/50 shadow-premium hover:shadow-premium-lg transition-all relative overflow-hidden group"
                        >
                            <span className="relative z-10">Explore Services</span>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        className="mt-12 flex flex-wrap gap-6"
                    >
                        {[
                            { label: 'IT Talent', icon: Database },
                            { label: 'Manufacturing', icon: Settings },
                            { label: 'AgriTech', icon: Sprout },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.05,
                                    boxShadow: "0 15px 35px -5px rgba(99, 102, 241, 0.2)",
                                    borderColor: "#6366f1"
                                }}
                                className="flex items-center gap-2 text-slate-600 text-sm font-semibold glass-card px-5 py-2.5 rounded-xl cursor-default transition-all group"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                >
                                    <CheckCircle2 size={16} className="text-green-500 group-hover:text-indigo-600 transition-colors" />
                                </motion.div>
                                {item.label}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Visual 3D */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ scale }}
                    className="relative hidden lg:flex items-center justify-center perspective-[1000px]"
                >
                    <div className="relative w-[500px] h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2.5rem] rotate-6 opacity-20 blur-2xl"></div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                                alt="Young AI Professional"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-sm font-semibold text-indigo-200 mb-1">AI-Powered</p>
                                <p className="text-2xl font-bold">Future Ready</p>
                            </div>
                        </motion.div>

                        {/* Floating Tech Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, -15, 0]
                            }}
                            transition={{
                                opacity: { delay: 0.6 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-20 cursor-pointer group"
                        >
                            <motion.div
                                className="bg-indigo-100 p-2 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <Database size={20} />
                            </motion.div>
                            <div>
                                <p className="text-xs font-bold text-slate-400">Data Analytics</p>
                                <motion.p
                                    className="text-sm font-bold text-slate-800"
                                    initial={{ scale: 1 }}
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    98% Accuracy
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, 15, 0]
                            }}
                            transition={{
                                opacity: { delay: 0.8 },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            className="absolute -left-8 bottom-32 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-20 cursor-pointer group"
                        >
                            <motion.div
                                className="bg-green-100 p-2 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors"
                                animate={{ rotate: [0, -360] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            >
                                <Sprout size={20} />
                            </motion.div>
                            <div>
                                <p className="text-xs font-bold text-slate-400">AgriTech</p>
                                <motion.p
                                    className="text-sm font-bold text-slate-800"
                                    initial={{ scale: 1 }}
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                >
                                    Smart Growth
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
