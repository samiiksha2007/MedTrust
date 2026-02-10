import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4 flex items-center gap-2">
                            MedTrust
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
                            Trustworthy AI-Powered Healthcare using Blockchain technology.
                            Ensuring data integrity and transparency in medical predictions.
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <Github className="w-5 h-5 hover:text-primary dark:hover:text-white cursor-pointer transition-colors" />
                            <Linkedin className="w-5 h-5 hover:text-primary dark:hover:text-white cursor-pointer transition-colors" />
                            <Mail className="w-5 h-5 hover:text-primary dark:hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 dark:text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><a href="#home" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary dark:hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#features" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Features</a></li>
                            <li><a href="#tech" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Technology</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 dark:text-white">Contact</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li>College Project Team</li>
                            <li>Department of Computer Science</li>
                            <li>medtrust.project@college.edu</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-500">
                    <p>© 2026 MedTrust. Academic Project.</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by MedTrust Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
