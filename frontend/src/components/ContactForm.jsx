import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'IT & Technical Talent',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            console.log('Form Data Submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', company: '', service: 'IT & Technical Talent', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const services = [
        'IT & Technical Talent',
        'Mechanical & Manufacturing',
        'Processing Industry',
        'Digital Marketing',
        'Agricultural Innovation'
    ];

    return (
        <section id="contact" className="relative py-24 overflow-hidden bg-slate-50">
            <div className="glow-blob top-10 left-10 bg-purple-200/50 w-[800px] h-[800px] rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">Let's Build the <span className="text-indigo-600">Future</span></h2>
                        <p className="text-xl text-slate-500 mb-12 font-medium">Have a project in mind or need specialized talent? Our experts are ready to assist you.</p>

                        <div className="space-y-6">
                            {[
                                { icon: MapPin, title: "Headquarters", val: "India" },
                                { icon: Mail, title: "Email Us", val: "info@sahasyatech.com" },
                                { icon: Phone, title: "Call Us", val: "+91-XXXXXXXXXX" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                                    <div className="bg-indigo-50 p-3.5 rounded-xl text-indigo-600 mr-5 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{item.title}</h4>
                                        <p className="text-lg font-bold text-slate-800">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-indigo-100 border border-slate-100"
                    >
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <CheckCircle size={80} className="text-emerald-500 mb-6" />
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                                <p className="text-slate-500 text-lg">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-indigo-600 font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all placeholder-slate-400 font-medium"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all placeholder-slate-400 font-medium"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Phone</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all placeholder-slate-400 font-medium"
                                            placeholder="+91-0000000000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Company</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all placeholder-slate-400 font-medium"
                                            placeholder="Your Corp"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Service</label>
                                    <select
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all appearance-none font-medium"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Message</label>
                                    <textarea
                                        rows="4"
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all placeholder-slate-400 font-medium resize-none"
                                        placeholder="Tell us about your requirements..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                {status === 'error' && <p className="text-red-500 text-sm font-bold text-center">Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
