import React from 'react';
import Section from './Section';
import { ShieldCheck, Lock, Unlock } from 'lucide-react';

const WhyBlockchain = () => {
    return (
        <Section id="blockchain" title="Why Blockchain?">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12 relative overflow-hidden transition-colors duration-300">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-primary dark:text-white">
                    <Lock className="w-64 h-64" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-primary dark:text-blue-400">Securing Medical Data with Immutability</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-light leading-relaxed">
                            In MedTrust, we use blockchain not to store heavy medical files, but to anchor the <strong>truth</strong> about them.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            When a prediction is made, a cryptographic hash (a digital fingerprint) of the result is generated and stored on the Ethereum blockchain.
                        </p>
                        <ul className="space-y-3 mt-8">
                            {[
                                "Immutability: Once recorded, the hash cannot be changed.",
                                "Transparency: Anyone with access can verify the record exists.",
                                "Tamper Detection: Any change to the data invalidates the hash."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 dark:text-gray-300">
                                    <ShieldCheck className="text-green-600 dark:text-green-400 w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm border border-blue-100 dark:border-gray-700 flex items-start gap-4">
                            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg text-primary dark:text-blue-300">
                                <Lock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 dark:text-white">Privacy First</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Actual medical data is NEVER stored on the public blockchain. Only the proof of its existence and integrity is recorded.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm border border-blue-100 dark:border-gray-700 flex items-start gap-4">
                            <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg text-teal-600 dark:text-teal-300">
                                <Unlock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 dark:text-white">Verifiable Trust</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Patients and doctors can independently verify that the AI prediction result they see is exactly what was generated at that time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhyBlockchain;
