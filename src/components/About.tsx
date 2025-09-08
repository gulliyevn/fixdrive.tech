import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

const SectionWrapper: React.FC<React.PropsWithChildren<{ id?: string }>> = ({ children, id }) => (
    <motion.section
        id={id}
        className="py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </motion.section>
);

const About: React.FC = () => {
    const { t } = useT();
    
    return (
        <SectionWrapper id="about">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
                <div className="flex items-center justify-center space-x-2 mb-6">
                    <span className="text-sm font-semibold text-muted-foreground">{t('about.by')}</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('about.description')}
                </p>
            </div>
        </SectionWrapper>
    );
};

export default About;


