import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car } from 'lucide-react';

const SectionWrapper = ({ children, id }) => (
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

const About = () => {
    return (
        <SectionWrapper id="about">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About FixDrive</h2>
                <div className="flex items-center justify-center space-x-2 mb-6">
                    <div className="relative">
                        <Car className="h-5 w-5 text-primary" />
                        <MapPin className="h-3 w-3 text-deep-blue absolute -top-1 -right-1" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">by Axivion LLC</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    FixDrive — by Axivion LLC — is a subscription-based personal driver service. We match families and busy professionals with dedicated drivers who follow a fixed schedule. No surprises. Just reliable rides.
                </p>
            </div>
        </SectionWrapper>
    );
};

export default About;