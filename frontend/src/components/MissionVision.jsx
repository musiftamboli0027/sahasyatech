import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';

const MissionVision = () => {
    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Force</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-slate-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        At Sahasya, we are propelled by a singular purpose: to revolutionize industries through intelligent technology and unwavering commitment to quality.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <Card
                        title="Our Mission"
                        description="To empower businesses by delivering cutting-edge technology solutions and skilled talent that drive efficiency, innovation, and sustainable growth across IT, manufacturing, and agricultural sectors."
                        icon={<Target className="w-8 h-8 text-white" />}
                        gradient="from-blue-500 to-indigo-600"
                        delay={0.2}
                    />
                    <Card
                        title="Our Vision"
                        description="To be a global leader in integrated talent and technology services, recognized for our ability to transform complex challenges into seamless, scalable, and future-ready solutions for a better world."
                        icon={<Eye className="w-8 h-8 text-white" />}
                        gradient="from-indigo-600 to-purple-600"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

const Card = ({ title, description, icon, gradient, delay }) => {
    return (
        <motion.div
            className="group relative bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm hover:shadow-premium transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8, type: "spring", bounce: 0.3 }}
            whileHover={{ y: -5 }}
        >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradient} opacity-[0.03] rounded-bl-[10rem] group-hover:scale-110 transition-transform duration-700 ease-out`}></div>

            <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {icon}
                </div>

                <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-indigo-600 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {description}
                </p>

                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-indigo-600 transition-colors duration-300 cursor-pointer">
                    <span className="uppercase tracking-widest mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

export default MissionVision;
