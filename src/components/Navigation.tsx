import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';
import ContactModal from './ContactModal';
import { Switch } from '@/components/ui/switch';
import LanguagePicker from '@/components/LanguagePicker';
import { useT } from '@/contexts/LanguageContext';

const Logo: React.FC<{ isScrolled: boolean; isHomePage: boolean }> = ({ isScrolled, isHomePage }) => {
    const { t } = useT();
    
    return (
        <div className="flex items-center space-x-2">
            <picture>
                <source srcSet="/assets/Logo.avif" type="image/avif" />
                <source srcSet="/assets/Logo.webp" type="image/webp" />
                <img 
                    src="/assets/Logo.png" 
                    alt="FixDrive Logo" 
                    className="h-8 w-8 object-contain"
                    width={32}
                    height={32}
                />
            </picture>
            <div className="flex flex-col">
                <span className={`font-bold text-2xl ${isHomePage ? (isScrolled ? 'text-foreground' : 'text-white') : 'text-foreground'}`}>{t('header.brand.title')}</span>
                <span className={`text-xs -mt-1 ${isHomePage ? (isScrolled ? 'text-muted-foreground' : 'text-white/80') : 'text-muted-foreground'}`}>{t('header.brand.subtitle')}</span>
            </div>
        </div>
    );
};

const Navigation: React.FC = () => {
    const { t } = useT();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isHomePage = location.pathname === '/';
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => {
        setIsContactOpen(true);
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    };
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Open contact modal when URL hash is #contact
    useEffect(() => {
        if (location.hash === '#contact') {
            openContact();
            // optional: clean hash to avoid reopening on back/forward
            if (window.history && window.history.replaceState) {
                const { pathname, search } = window.location;
                window.history.replaceState(null, '', pathname + search);
            }
        }
    }, [location.hash]);

    // Listen to global custom event to open contact from anywhere (e.g., CTA button)
    useEffect(() => {
        const handler = () => openContact();
        // cast to avoid TS event type complaints
        document.addEventListener('open-contact' as any, handler as any);
        return () => document.removeEventListener('open-contact' as any, handler as any);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);


    const scrollToSection = (sectionId: string) => {
        if (isHomePage) {
            // If we're on home page, just scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            }
        } else {
            // If we're on another page, navigate to home first, then scroll
            window.location.href = `/#${sectionId}`;
        }
    };

    const navLinks: Array<{ name: string; id?: string; href?: string }> = [
        { name: t('header.nav.features'), id: 'features' },
        { name: t('header.nav.pricing'), id: 'packages' },
        { name: t('header.nav.reviews'), id: 'testimonials' },
        { name: t('header.nav.about'), href: '/about' },
        { name: t('header.nav.mission'), href: '/mission-vision' },
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
                    <Link 
                        to="/" 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                            <Logo isScrolled={isScrolled} isHomePage={isHomePage} />
                        </motion.div>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            link.href ? (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`font-medium transition-colors rounded-md px-3 py-1.5 border border-transparent hover:border-primary ${
                                        isHomePage ? (isScrolled ? 'text-foreground' : 'text-white') : 'text-foreground'
                                    }`}
                                    aria-label={`Navigate to ${link.name} page`}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <button
                                    key={link.id}
                                    onClick={() => link.id && scrollToSection(link.id)}
                                    className={`font-medium transition-colors rounded-md px-3 py-1.5 border border-transparent hover:border-primary ${
                                        isHomePage ? (isScrolled ? 'text-foreground' : 'text-white') : 'text-foreground'
                                    }`}
                                    aria-label={`Navigate to ${link.name} section`}
                                >
                                    {link.name}
                                </button>
                            )
                        ))}
                        <button
                            onClick={openContact}
                            className={`transition-colors rounded-md px-3 py-1.5 bg-primary hover:bg-primary/90 text-white font-semibold`}
                        >
                            {t('header.nav.contact_sales')}
                        </button>
                        <div className="flex items-center ml-4">
                            <Switch checked={isDark} onCheckedChange={(checked: boolean) => setIsDark(checked)} />
                        </div>
                        <div className="ml-4">
                            <LanguagePicker inverted={isHomePage && !isScrolled} />
                        </div>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1 ${
                                isHomePage ? (isScrolled ? 'text-foreground' : 'text-white') : 'text-foreground'
                            }`}
                            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
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
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                link.href ? (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-medium text-foreground transition-colors text-left rounded-md px-2 py-2 border border-transparent hover:border-primary"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <button
                                        key={link.id}
                                        onClick={() => link.id && scrollToSection(link.id)}
                                        className="font-medium text-foreground transition-colors text-left rounded-md px-2 py-2 border border-transparent hover:border-primary"
                                    >
                                        {link.name}
                                    </button>
                                )
                            ))}
                            <button onClick={openContact} className="transition-colors bg-primary hover:bg-primary/90 text-white font-semibold rounded-md px-3 py-2 text-left">
                                {t('header.nav.contact_sales')}
                            </button>
                            <div className="flex items-center py-2">
                                <Switch checked={isDark} onCheckedChange={(checked: boolean) => setIsDark(checked)} />
                            </div>
                            <div className="py-2">
                                <LanguagePicker />
                            </div>
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


