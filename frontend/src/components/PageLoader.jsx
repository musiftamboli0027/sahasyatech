import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const PageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center"
                >
                    <div className="text-center">
                        <motion.div
                            className="mb-8"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <motion.img
                                src={logo}
                                alt="Sahasya Talent and Technology Logo"
                                className="h-24 w-auto object-contain mx-auto"
                                initial={{ rotate: 0, scale: 0 }}
                                animate={{
                                    rotate: [0, 360, 720],
                                    scale: [0, 1.2, 1],
                                }}
                                transition={{
                                    rotate: { 
                                        duration: 1.5, 
                                        ease: [0.6, -0.05, 0.01, 0.99],
                                        times: [0, 0.5, 1]
                                    },
                                    scale: { 
                                        duration: 1.5, 
                                        ease: "easeOut",
                                        times: [0, 0.7, 1]
                                    }
                                }}
                            />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl font-bold text-white mb-4"
                        >
                            Sahasya Tech
                        </motion.h2>
                        <motion.div
                            className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;

