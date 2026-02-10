import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Stethoscope, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'Problem', to: 'problem' },
        { name: 'About', to: 'about' },
        { name: 'Features', to: 'features' },
        { name: 'Technology', to: 'tech' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-dark-card/90 backdrop-blur-md shadow-sm py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-2xl text-primary dark:text-blue-400">
                    <Stethoscope className="w-8 h-8" />
                    <span>MedTrust</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-text dark:text-dark-text cursor-pointer hover:text-primary dark:hover:text-blue-400 transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text dark:text-dark-text"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <a
                        href="https://samiiksha2007.github.io/MedTrust-dashboard/#/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary dark:bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark dark:hover:bg-blue-700 transition-colors"
                    >
                        Try It Now
                    </a>
                </nav>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text dark:text-dark-text"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <button
                        className="text-text dark:text-dark-text"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white dark:bg-dark-card border-b border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-4 md:hidden shadow-lg transition-colors duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-text dark:text-dark-text font-medium py-2 hover:text-primary dark:hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://samiiksha2007.github.io/MedTrust-dashboard/#/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-primary-dark transition-colors"
                        >
                            Try It Now
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
