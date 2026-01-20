import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';


const PodcastCards = () => {
    // Initial static podcasts
    const initialPodcasts = [
        {
            title: "The Changing Industry: How Students Can Stay Ahead",
            description: "Discussing the future of work, hybrid culture, startup mindset, and career growth for students in the evolving industry landscape.",
            videoId: "PecPO2BYX4k",
            youtubeUrl: "https://www.youtube.com/watch?v=PecPO2BYX4k",
            date: "Jan 14, 2025"
        },
        {
            title: "Negative Energy & Curses: Myth or Reality?",
            description: "A spiritual deep dive into energy truths, real experiences, and myths surrounding negative energy and curses.",
            videoId: "lsFbqNS50YI",
            youtubeUrl: "https://www.youtube.com/watch?v=lsFbqNS50YI",
            date: "Jan 12, 2025"
        },
        {
            title: "Gen Z CEO Talks AI, Startups & Challenges",
            description: "Shaurya Gaikwad discusses AI startups, young entrepreneurs, and the future of AI in this insightful conversation.",
            videoId: "cXCniBayu9Q",
            youtubeUrl: "https://www.youtube.com/watch?v=cXCniBayu9Q",
            date: "Jan 13, 2025"
        },
        {
            title: "From Teaching to Transforming Agriculture",
            description: "Dr. Nagnath Bhusnar on the role of research in solving real-world problems and transforming agriculture through innovation.",
            videoId: "HFKZDTrDTLM",
            youtubeUrl: "https://www.youtube.com/watch?v=HFKZDTrDTLM",
            date: "Jan 11, 2025"
        }
    ];

    // Simplified: No backend fetch needed
    const podcasts = initialPodcasts;


    const displayPodcasts = podcasts.length > 0 ? podcasts : initialPodcasts;

    return (
        <div className="mt-24 md:mt-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-wider mb-6 border border-red-100">
                    <Youtube size={16} className="mr-2" />
                    Latest Insights
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    Podcasts / <span className="text-red-600">YouTube Talks</span>
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                    Tune in to our latest discussions on technology, industry trends, and innovation.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPodcasts.map((podcast, index) => (
                    <motion.div
                        key={podcast._id || index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 flex flex-col h-full"
                    >
                        {/* Thumbnail Container */}
                        <div className="relative aspect-video overflow-hidden">
                            <motion.img
                                src={podcast.thumbnailUrl || `https://img.youtube.com/vi/${podcast.videoId}/maxresdefault.jpg`}
                                alt={podcast.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-colors" />

                            {/* Play Button Overlay */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/40"
                                >
                                    <Play size={28} fill="currentColor" className="ml-1" />
                                </motion.div>
                            </motion.div>

                            {/* Date Badge - Optional */}
                            {podcast.date && (
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                                    {podcast.date}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                                {podcast.title}
                            </h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                                {podcast.description}
                            </p>

                            <div className="mt-auto">
                                <a
                                    href={podcast.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-red-600 font-bold text-sm uppercase tracking-wide group/btn"
                                >
                                    Watch Now
                                    <motion.span
                                        className="ml-2"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        →
                                    </motion.span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PodcastCards;
