import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-32 pb-24 min-h-screen bg-slate-50">
            <SEO
                title="Privacy Policy"
                description="Privacy Policy for Sahasya Talent and Technology Pvt. Ltd."
                path="/privacy-policy"
            />
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-10 md:p-16 rounded-[2rem] shadow-premium"
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-8 text-slate-900">Privacy Policy</h1>
                    <p className="text-slate-500 mb-8 font-medium italic">Last updated: January 20, 2026</p>

                    <div className="prose prose-slate prose-lg max-w-none space-y-8 text-slate-700">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
                            <p>Sahasya Talent and Technology Pvt. Ltd. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website https://sahasya.in.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information Collection</h2>
                            <p>We collect information that you provide directly to us through our contact forms, including your name, email address, phone number, and any other details you choose to share.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Use of Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Respond to your inquiries and provide customer support.</li>
                                <li>Improve our website and services.</li>
                                <li>Send periodic emails regarding our services and updates.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Data Protection</h2>
                            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at contact@sahasya.in.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPage;
