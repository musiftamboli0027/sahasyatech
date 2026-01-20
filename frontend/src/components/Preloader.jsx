import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Preloader = ({ onComplete }) => {
    const [stage, setStage] = useState('logo'); // logo -> text -> exit

    useEffect(() => {
        const toText = setTimeout(() => setStage('text'), 1000);
        let toDone;
        const toExit = setTimeout(() => {
            setStage('exit');
            // Call onComplete after a brief delay to ensure layoutId is removed
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 100);
            toDone = setTimeout(() => setStage('done'), 600);
        }, 2600);
        return () => {
            clearTimeout(toText);
            clearTimeout(toExit);
            clearTimeout(toDone);
        };
    }, [onComplete]);

    const showText = stage === 'text' || stage === 'exit';

    return (
        <AnimatePresence>
            {stage !== 'done' && (
                <motion.div
                    className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center ${stage === 'exit' ? 'pointer-events-none' : ''}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: stage === 'exit' ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <motion.div
                        layoutId={stage !== 'exit' ? "brand-mark" : undefined}
                        className="flex items-center gap-3 px-6 py-4 bg-white/90 rounded-full shadow-2xl border border-slate-100"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{
                            scale: stage === 'logo' ? 1 : stage === 'text' ? 1.05 : 0.9,
                            opacity: stage === 'exit' ? 0 : 1,
                        }}
                        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                    >
                        <motion.img
                            src={logo}
                            alt="Sahasya Talent and Technology Logo"
                            className="h-12 w-auto object-contain"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: showText ? 1.05 : stage === 'exit' ? 0.8 : 1,
                                opacity: stage === 'exit' ? 0 : 1,
                                rotate: stage === 'exit' ? 0 : [0, 6, -6, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.6, -0.05, 0.01, 0.99],
                                rotate: { duration: 1.2, repeat: 0 },
                            }}
                        />
                        <AnimatePresence>
                            {showText && (
                                <motion.span
                                    key="brand-text"
                                    className="text-lg md:text-xl font-extrabold text-slate-900 whitespace-nowrap"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                >
                                    Sahasya Talent and Technology Pvt. Ltd.
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;

