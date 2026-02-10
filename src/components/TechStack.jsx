import React from 'react';
import Section from './Section';

const TechStack = () => {
    const stacks = [
        {
            category: "Frontend",
            techs: ["React", "HTML5/CSS3", "JavaScript", "Vite"]
        },
        {
            category: "Backend",
            techs: ["Node.js", "Express", "RESTful APIs"]
        },
        {
            category: "Machine Learning",
            techs: ["Python", "Scikit-Learn", "TensorFlow/Keras", "FastAPI (Model Serving)"]
        },
        {
            category: "Blockchain",
            techs: ["Ethereum (Testnet)", "Solidity", "Web3.js", "Smart Contracts"]
        }
    ];

    return (
        <Section id="tech" title="Technology Stack" className="bg-slate-900 dark:bg-black text-white transition-colors duration-300">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stacks.map((stack, idx) => (
                    <div key={idx} className="space-y-4">
                        <h3 className="text-xl font-bold text-blue-400 border-b border-blue-400/30 pb-2">
                            {stack.category}
                        </h3>
                        <ul className="space-y-2">
                            {stack.techs.map((tech, techIdx) => (
                                <li key={techIdx} className="text-gray-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default TechStack;
