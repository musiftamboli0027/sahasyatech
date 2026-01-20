import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ isPreloaderDone = false }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const lenis = useLenis();
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

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
        { name: 'Home', path: '/', hash: '#home' },
        { name: 'About', path: '/about', hash: '#about' },
        { name: 'Services', path: '/services', hash: '#services' },
        { name: 'Use Cases', path: '/', hash: '#industry-cases' },
        { name: 'Contact', path: '/contact', hash: '#contact' },
    ];

    const handleNavClick = (e, link) => {
        if (isHomePage && link.hash) {
            e.preventDefault();
            setIsOpen(false);
            lenis?.scrollTo(link.hash, { offset: -80 });
        } else {
            setIsOpen(false);
            window.scrollTo(0, 0);
        }
    };

    return (
        <motion.nav
            style={{ backgroundColor }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md border-b border-slate-200/50 py-4 shadow-sm' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group cursor-pointer relative z-50"
                    style={{
                        opacity: isPreloaderDone ? 1 : 0,
                        pointerEvents: isPreloaderDone ? 'auto' : 'none'
                    }}
                    onClick={(e) => {
                        if (isHomePage) {
                            e.preventDefault();
                            lenis?.scrollTo(0);
                        }
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
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 relative z-50">
                    {navLinks.map((link) => (
                        <motion.div key={link.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to={link.path}
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer relative z-50"
                                onClick={(e) => handleNavClick(e, link)}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors cursor-pointer relative z-50"
                            onClick={(e) => handleNavClick(e, { path: '/contact', hash: '#contact' })}
                        >
                            Get Started
                        </Link>
                    </motion.div>
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
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-base font-medium text-slate-600 hover:text-slate-900 cursor-pointer relative z-50 py-2 block"
                                    onClick={(e) => handleNavClick(e, link)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-center mt-2 cursor-pointer relative z-50 block"
                                onClick={(e) => handleNavClick(e, { path: '/contact', hash: '#contact' })}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
