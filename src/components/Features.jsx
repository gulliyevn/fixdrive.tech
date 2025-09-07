import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Tag, ShieldCheck } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import AnimatedText from './AnimatedText';

const features = [
    {
        icon: Users,
        title: "Fixed Drivers",
        description: "Same trusted driver for repeat trips."
    },
    {
        icon: Calendar,
        title: "Schedule-first",
        description: "Plan once, ride daily — coordinate school runs, commutes, and errands."
    },
    {
        icon: Tag,
        title: "Transparent Pricing",
        description: "Clear subscription tiers and lower per-ride commission for members."
    },
    {
        icon: ShieldCheck,
        title: "Safety & Verification",
        description: "Background checks, insurance, and rating system."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <AnimatedText 
                        text="Reliability at its Core"
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        delay={0.2}
                    />
                    <AnimatedText 
                        text="FixDrive is designed to simplify your life with features that prioritize consistency and safety."
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        delay={0.4}
                    />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <AnimatedCard
                            key={index}
                            delay={index * 0.1}
                            className="text-center p-6"
                        >
                            <div className="flex justify-center mb-6">
                                <motion.div 
                                    className="bg-primary/10 p-4 rounded-full"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;