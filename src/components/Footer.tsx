import React from 'react';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, Building, MapPin as MapPinIcon } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

const Logo: React.FC = () => {
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
          loading="lazy"
          width={32}
          height={32}
        />
      </picture>
      <div className="flex flex-col">
        <span className="font-bold text-2xl text-foreground">{t('header.brand.title')}</span>
        <span className="text-xs text-muted-foreground -mt-1">{t('header.brand.subtitle')}</span>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { t } = useT();
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/axivion-llc', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter (X)' },
  ];

  return (
    <footer className="bg-card border-t pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground mt-4 max-w-sm">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.pages_title')}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {t('header.nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/mission-vision"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {t('header.nav.mission')}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {t('header.nav.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {t('header.nav.terms')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.contact_title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-primary" /> {t('company.contact.email')}
              </li>
              <li className="flex items-center text-muted-foreground">
                <Building className="w-5 h-5 mr-3 text-primary" /> {t('company.name')}
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPinIcon className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />{' '}
                {t('company.address_lines.0')}
                <br />
                {t('company.address_lines.1')}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.follow_title')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex justify-center items-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
