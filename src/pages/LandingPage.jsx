import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TechStack from '../components/TechStack';
import WhyBlockchain from '../components/WhyBlockchain';
import EthicalDisclaimer from '../components/EthicalDisclaimer';
import Team from '../components/Team';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Problem />
                <About />
                <Features />
                <HowItWorks />
                <TechStack />
                <WhyBlockchain />
                <EthicalDisclaimer />
                <Team />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
