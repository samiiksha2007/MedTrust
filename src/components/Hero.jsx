import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[90vh]">
            <div className="flex-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                    <Activity className="w-4 h-4" />
                    <span>Next Gen Healthcare</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-text dark:text-white"
                >
                    MedTrust: <br />
                    <span className="text-primary dark:text-blue-400">Reliable AI</span> Healthcare
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed"
                >
                    Secure, transparent, and AI-powered medical predictions backed by blockchain integrity. verified and trustworthy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="http://localhost:3000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-primary dark:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark dark:hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                        Try MedTrust Now <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href="#about"
                        className="flex items-center justify-center gap-2 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-text dark:text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                        Learn More
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-1 w-full max-w-md md:max-w-full"
            >
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 rounded-full blur-3xl opacity-50 z-0"></div>
                    <div className="relative z-10 bg-white dark:bg-dark-card p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-primary dark:text-blue-300">
                                <Activity />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg dark:text-white">Health Status Analysis</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">AI Prediction Model</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full w-full overflow-hidden">
                                <div className="h-full bg-primary dark:bg-blue-500 w-3/4 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 dark:text-gray-400">Accuracy</span>
                                <span className="font-bold text-primary dark:text-blue-400">98.5%</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 mt-4">
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    <span className="font-semibold text-text dark:text-white">Blockchain Verified:</span>
                                    <br />Hash: 0x7f...3a9c
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
