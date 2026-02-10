import React from 'react';
import Section from './Section';
import { ArrowDown } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        { title: "Access Prediction Tool", desc: "User logs into the MedTrust web application." },
        { title: "Select & Enter Data", desc: "Choose a prediction model (e.g., Heart Disease) and input medical data." },
        { title: "AI Analysis", desc: "Data is sent to the ML model API for instant analysis." },
        { title: "Result Verification", desc: "Prediction result is returned and displayed to the user." },
        { title: "Blockchain Hashing", desc: "A unique hash of the record is generated and stored on the blockchain." },
        { title: "Integrity Check", desc: "Users can verify the record's authenticity against the blockchain at any time." }
    ];

    return (
        <Section id="how-it-works" title="How MedTrust Works">
            <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

                <div className="space-y-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-6 md:gap-10">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 bg-primary dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold z-10 text-lg shadow-lg">
                                    {idx + 1}
                                </div>
                            </div>

                            <div className="flex-1 bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-primary dark:hover:border-blue-500 transition-colors">
                                <div className="flex items-center gap-3 md:hidden mb-2">
                                    <span className="w-8 h-8 bg-primary dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </span>
                                    <h3 className="text-xl font-bold dark:text-white">{step.title}</h3>
                                </div>
                                <h3 className="text-xl font-bold mb-2 hidden md:block dark:text-white">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default HowItWorks;
