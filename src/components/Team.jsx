import React from 'react';
import Section from './Section';

const Team = () => {
    const teamMembers = [
        "Zakwan Haaziq K",
        "Samiiksha C",
        "Pooja Sri M",
        "Rakshitha B",
        "Thulasi S"
    ];

    return (
        <Section id="team" title="Team & Credits" className="mb-20">
            <div className="text-center mb-12">
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Developed by Computer Science students passionate about the intersection of Medicine and Technology.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 flex-wrap lg:flex-nowrap">
                {teamMembers.map((name, idx) => (
                    <div key={idx} className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-100 dark:border-gray-800 text-center shadow-sm hover:shadow-md transition-shadow w-full md:w-auto flex-1 min-w-[180px]">
                        {/* Placeholder Avatar */}
                        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-400 dark:text-gray-600">{name.charAt(0)}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1 dark:text-white">{name}</h3>
                        <p className="text-sm text-primary dark:text-blue-400 font-medium mb-3">Team Member</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Team;
