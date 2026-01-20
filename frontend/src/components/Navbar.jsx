import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';
import logo from '../assets/logo.png';

const Navbar = ({ isPreloaderDone = false }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const lenis = useLenis();

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.1],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
    );

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            style={{ backgroundColor }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md border-b border-slate-200/50 py-4 shadow-sm' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="flex items-center gap-3 group cursor-pointer relative z-50"
                    style={{
                        opacity: isPreloaderDone ? 1 : 0,
                        pointerEvents: isPreloaderDone ? 'auto' : 'none'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                        e.preventDefault();
                        lenis?.scrollTo(0);
                    }}
                >
                    <motion.div
                        layoutId={isPreloaderDone ? "brand-mark" : undefined}
                        className="flex items-center gap-3"
                    >
                        <img
                            src={logo}
                            alt="Sahasya Talent and Technology Logo"
                            className="h-8 w-auto object-contain"
                        />
                        <span className="text-xl font-bold text-slate-900 hidden sm:block">
                            Sahasya <span className="text-indigo-600">Tech</span>
                        </span>
                    </motion.div>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 relative z-50">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer relative z-50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.preventDefault();
                                lenis?.scrollTo(link.href, { offset: -80 });
                            }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors cursor-pointer relative z-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            lenis?.scrollTo('#contact', { offset: -80 });
                        }}
                    >
                        Get Started
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-900 p-2 relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-200 overflow-hidden absolute top-full left-0 w-full shadow-xl"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4 relative z-50">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-slate-600 hover:text-slate-900 cursor-pointer relative z-50 py-2 block"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        setTimeout(() => {
                                            lenis?.scrollTo(link.href, { offset: -80 });
                                        }, 100);
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-center mt-2 cursor-pointer relative z-50 block"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsOpen(false);
                                    setTimeout(() => {
                                        lenis?.scrollTo('#contact', { offset: -80 });
                                    }, 100);
                                }}
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
