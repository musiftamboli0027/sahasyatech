import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Quote, Zap, Database, Users, Briefcase } from 'lucide-react';
import founderImage from '../assets/founder.jpg';

const FounderSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50 flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
                <div className="absolute opacity-5 inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-100 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Visionary</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Driving innovation and excellence at Sahasya Talent and Technology.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-premium-xl border border-white/50 p-8 md:p-12 lg:p-16 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)" }}
                >
                    {/* Floating Decorative Elements */}
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <Quote size={120} className="text-indigo-900" />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

                        {/* Left: Founder Image & Socials */}
                        <div className="flex-shrink-0 text-center lg:text-left">
                            <motion.div
                                className="relative inline-block mb-8"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur opacity-70 animate-spin-slow"></div>
                                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1.5 bg-white">
                                    <img
                                        src={founderImage}
                                        alt="Founder"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <motion.div
                                    className="absolute bottom-2 right-2 bg-green-500 border-4 border-white w-6 h-6 rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                ></motion.div>
                            </motion.div>

                            <div className="flex justify-center lg:justify-center gap-4">
                                <SocialButton href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                                <SocialButton href="mailto:contact@sahasya.com" icon={<Mail size={20} />} label="Email" />
                            </div>
                        </div>

                        {/* Right: Content & Stats */}
                        <div className="flex-grow text-center lg:text-left">
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">Rajesh Waghchaware</h3>
                            <p className="text-indigo-600 font-bold text-lg mb-6 uppercase tracking-wider">Founder & CEO</p>

                            <div className="relative mb-8">
                                <Quote className="absolute -top-4 -left-6 text-indigo-200 w-8 h-8 opacity-50 transform -scale-x-100" />
                                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic relative z-10">
                                    "Our goal is not just to build software or machines, but to create ecosystems where talent thrives and technology solves real-world problems. We bridge the gap between potential and performance."
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                                <Badge icon={<Zap size={14} />} text="Vision-driven Leadership" color="blue" />
                                <Badge icon={<Database size={14} />} text="Tech + Manufacturing Expertise" color="indigo" />
                                <Badge icon={<Users size={14} />} text="Talent & Innovation Focus" color="purple" />
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 border-t border-indigo-100 pt-8">
                                <StatItem number="50+" label="Projects Delivered" delay={0.2} />
                                <StatItem number="20+" label="Team Members" delay={0.3} />
                                <StatItem number="10+" label="Industries Served" delay={0.4} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialButton = ({ href, icon, label }) => (
    <motion.a
        href={href}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
    >
        {icon}
    </motion.a>
);

const Badge = ({ icon, text, color }) => {
    const colorClasses = {
        blue: "bg-blue-100 text-blue-700 border-blue-200",
        indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
        purple: "bg-purple-100 text-purple-700 border-purple-200",
    };

    return (
        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border ${colorClasses[color] || colorClasses.blue}`}>
            {icon}
            {text}
        </span>
    );
};

const StatItem = ({ number, label, delay }) => (
    <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
    >
        <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1">{number}</div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</div>
    </motion.div>
);

export default FounderSection;
