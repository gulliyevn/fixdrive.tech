import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Car } from 'lucide-react';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';
import ContactModal from './ContactModal';

const Logo = ({ isScrolled }) => (
    <div className="flex items-center space-x-2">
        <img 
            src="/assets/Logo.png" 
            alt="FixDrive Logo" 
            className="h-8 w-8 object-contain"
        />
        <div className="flex flex-col">
            <span className={`font-bold text-2xl ${isScrolled ? 'text-foreground' : 'text-white'}`}>FixDrive</span>
            <span className={`text-xs -mt-1 ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>by Axivion LLC</span>
        </div>
    </div>
);

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };


    const navLinks = [
        { name: 'Features', id: 'features' },
        { name: 'Pricing', id: 'packages' },
        { name: 'For Drivers', id: 'for-drivers' },
        { name: 'Testimonials', id: 'testimonials' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-card/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        <Logo isScrolled={isScrolled} />
                    </motion.div>

                    <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                                    isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                                }`}
                                aria-label={`Navigate to ${link.name} section`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className={`font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                                isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                            }`}
                        >
                            Contact
                        </button>
                    </nav>


                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1 ${
                                isScrolled ? 'text-foreground' : 'text-white'
                            }`}
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-card/95 backdrop-blur-lg rounded-lg mt-2 p-4"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="font-medium text-foreground hover:text-primary transition-colors text-left py-2"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="font-medium text-foreground hover:text-primary transition-colors text-left py-2"
                            >
                                Contact
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
            
            {/* Modals */}
            <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
            <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </motion.nav>
    );
};

export default Navigation;