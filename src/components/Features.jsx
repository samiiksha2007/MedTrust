import React from 'react';
import Section from './Section';
import { HeartPulse, Brain, Activity, Lock, Layout, Microscope } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Activity className="w-8 h-8 text-blue-500" />,
            title: "General Health Analysis",
            desc: "Comprehensive health assessment based on vital signs and patient history."
        },
        {
            icon: <HeartPulse className="w-8 h-8 text-red-500" />,
            title: "Heart Disease Prediction",
            desc: "Early detection of cardiovascular risks using advanced ML algorithms."
        },
        {
            icon: <Brain className="w-8 h-8 text-purple-500" />,
            title: "Diabetes Prediction",
            desc: "Risk assessment for diabetes based on glucose levels and other factors."
        },
        {
            icon: <Brain className="w-8 h-8 text-pink-500" />, // Changed Icon slightly or kept Brain but changed text
            title: "Brain Tumor Prediction", // Updated Title
            desc: "Advanced MRI analysis for identifying potential brain tumors with high accuracy." // Updated Desc
        },
        {
            icon: <Lock className="w-8 h-8 text-indigo-500" />,
            title: "Blockchain Integrity",
            desc: "Cryptographic hashing ensures prediction records are tamper-proof."
        },
        {
            icon: <Layout className="w-8 h-8 text-teal-500" />,
            title: "User-Friendly Interface",
            desc: "Clean, intuitive dashboard for easy data entry and results viewing."
        }
    ];

    return (
        <Section id="features" title="Key Features" className="bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <div key={idx} className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                        <div className="mb-4 bg-gray-50 dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-text dark:text-white">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-light">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Features;
