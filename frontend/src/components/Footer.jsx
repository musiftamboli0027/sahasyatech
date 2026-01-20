import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';
import logo from '../assets/logo.png';

const Footer = () => {
    const lenis = useLenis();
    const socialIcons = [
        { Icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
        { Icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
        { Icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
        { Icon: Instagram, href: 'https://www.instagram.com/raajeshw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500' }
    ];

    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{ pointerEvents: 'none' }}
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3), transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3), transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3), transparent 50%)',
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <motion.div
                        className="col-span-1 lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="flex items-center mb-6 group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.img
                                src={logo}
                                alt="Sahasya Talent and Technology Logo"
                                className="h-12 w-auto object-contain mr-3"
                                initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                                whileInView={{
                                    rotate: [0, 360, 0],
                                    scale: [0.8, 1.1, 1],
                                    opacity: 1
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    rotate: {
                                        duration: 1.2,
                                        ease: [0.6, -0.05, 0.01, 0.99],
                                        times: [0, 0.5, 1]
                                    },
                                    scale: {
                                        duration: 1.2,
                                        ease: "easeOut",
                                        times: [0, 0.6, 1]
                                    },
                                    opacity: { duration: 0.8 }
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            />
                            <span className="text-2xl font-bold tracking-tight">
                                Sahasya <span className="text-indigo-400">Tech</span>
                            </span>
                        </motion.div>
                        <p className="text-slate-400 mb-8 leading-relaxed text-sm font-medium">
                            Leading the way in IT staffing, industrial manpower, and engineering innovations for the next generation of business.
                        </p>
                        <div className="flex space-x-4 relative z-50">
                            {socialIcons.map(({ Icon, href, color }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all relative overflow-hidden group ${color} cursor-pointer z-50`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{ pointerEvents: 'auto', zIndex: 50 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 pointer-events-none"
                                        transition={{ duration: 0.3 }}
                                        style={{ pointerEvents: 'none' }}
                                    />
                                    <Icon size={18} className="relative z-20" style={{ pointerEvents: 'none' }} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-3 text-slate-400 text-sm font-medium">
                            {['IT Talent Solutions', 'Mechanical Support', 'Processing Plants', 'Digital Marketing', 'Agri-Innovation'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <a
                                        href="#services"
                                        className="hover:text-indigo-400 transition-colors inline-block group cursor-pointer relative z-50"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            lenis?.scrollTo('#services', { offset: -80 });
                                        }}
                                    >
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2"
                                        >
                                            <motion.span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all" />
                                            {item}
                                        </motion.span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-3 text-slate-400 text-sm font-medium">
                            {[
                                {
                                    name: 'About Us',
                                    href: '#about',
                                },
                                {
                                    name: 'Use Cases',
                                    href: '#use-cases',
                                },
                                {
                                    name: 'Careers',
                                    href: '#',
                                },
                                {
                                    name: 'Contact',
                                    href: '#contact',
                                },
                                {
                                    name: 'Privacy Policy',
                                    href: '#',
                                },
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                >
                                    <a
                                        href={item.href}
                                        className="hover:text-indigo-400 transition-colors inline-block group cursor-pointer relative z-50"
                                        onClick={(e) => {
                                            if (item.href.startsWith('#')) {
                                                e.preventDefault();
                                                lenis?.scrollTo(item.href, { offset: -80 });
                                            }
                                        }}
                                    >
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2"
                                        >
                                            <motion.span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all" />
                                            {item.name}
                                        </motion.span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Subscribe</h4>
                        <p className="text-slate-400 text-sm font-medium mb-4">
                            Subscribe to our newsletter for the latest updates and offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-md bg-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-md bg-indigo-600 text-white font-semibold transition-all hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="border-t border-slate-700 pt-10 mt-10">
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-slate-400 text-sm font-medium">
                            &copy; {new Date().getFullYear()} Sahasya Tech. All rights reserved.
                        </p>
                        <div className="flex gap-4 justify-center sm:justify-start">
                            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium">
                                Terms of Service
                            </a>
                            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium">
                                Cookie Policy
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
