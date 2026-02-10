import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <Section id="about">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-blue-400">About MedTrust</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        MedTrust is an innovative academic project designed to bridge the gap between artificial intelligence and data integrity in healthcare.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Our platform serves as a <strong>decision-support system</strong> for medical professionals and individuals, offering general health analysis and disease prediction models.
                        Critically, we employ blockchain technology to ensure that every prediction record is immutable and verifiable, restoring trust in digital health systems.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Academic Research Project",
                            "Decision Support System (Not a Doctor Replacement)",
                            "Transparent AI Predictions",
                            "Verifiable Data Integrity"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                                <span className="font-medium text-gray-700 dark:text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-600 to-teal-400 p-1 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-white dark:bg-dark-card p-12 rounded-xl h-full flex items-center justify-center min-h-[350px]">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">MedTrust Vision</h3>
                                <p className="text-2xl text-gray-500 dark:text-gray-400 italic">"Trust but Verify"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
