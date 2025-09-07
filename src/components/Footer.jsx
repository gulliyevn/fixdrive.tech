import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Mail, Building, MapPin as MapPinIcon, Car } from 'lucide-react';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';

const Logo = () => (
    <div className="flex items-center space-x-2">
        <img 
            src="/assets/Logo.png" 
            alt="FixDrive Logo" 
            className="h-8 w-8 object-contain"
        />
        <div className="flex flex-col">
            <span className="font-bold text-2xl text-foreground">FixDrive</span>
            <span className="text-xs text-muted-foreground -mt-1">by Axivion LLC</span>
        </div>
    </div>
);


const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/company/axivion-llc", label: "LinkedIn" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter (X)" }
    ];

    return (
        <footer className="bg-card border-t pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <Logo />
                        <p className="text-muted-foreground mt-4 max-w-sm">
                            Reliability, safety and comfort for your daily life.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-muted-foreground"><Mail className="w-5 h-5 mr-3 text-primary" /> junago@junago.net</li>
                            <li className="flex items-center text-muted-foreground"><Building className="w-5 h-5 mr-3 text-primary" /> Axivion LLC</li>
                            <li className="flex items-start text-muted-foreground"><MapPinIcon className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" /> 30 N Gould St Ste N<br />Sheridan, WY 82801</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} aria-label={link.label} className="text-muted-foreground hover:text-primary transition-colors">
                                    <link.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {currentYear} FixDrive — by Axivion LLC. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-primary transition-colors">Privacy Policy</button>
                        <button onClick={() => setIsTermsOpen(true)} className="hover:text-primary transition-colors">Terms of Service</button>
                    </div>
                </div>
            </div>
            
            {/* Modals */}
            <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
            <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </footer>
    );
};

export default Footer;