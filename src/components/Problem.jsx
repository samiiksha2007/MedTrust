import React from 'react';
import Section from './Section';
import { ShieldAlert, Database, FileX } from 'lucide-react';

const Problem = () => {
    return (
        <Section id="problem" title="The Problem in Modern Healthcare" className="bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Database className="w-10 h-10 text-red-500" />,
                        title: "Centralized Records",
                        desc: "Traditional medical records are stored in centralized databases, making them vulnerable to single points of failure and data breaches."
                    },
                    {
                        icon: <FileX className="w-10 h-10 text-orange-500" />,
                        title: "Data Manipulation",
                        desc: "Without immutable logs, sensitive patient data can be tampered with or altered without detection, leading to misdiagnosis or fraud."
                    },
                    {
                        icon: <ShieldAlert className="w-10 h-10 text-yellow-500" />,
                        title: "Trust Issues in AI",
                        desc: "Black-box AI models often lack transparency. Patients and doctors need verification that the data used for prediction hasn't been compromised."
                    }
                ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
                        <div className="mb-4 bg-red-50 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Problem;
