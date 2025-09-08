import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    } as const;

    return (
        <section id="mission-vision" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        className="bg-card p-8 rounded-2xl card-shadow"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-primary/10 p-3 rounded-full mr-4">
                                <Target className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Mission</h3>
                        </div>
                        <p className="text-muted-foreground text-lg">
                            To bring peace of mind to daily mobility — one trusted driver at a time.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-card p-8 rounded-2xl card-shadow"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-primary/10 p-3 rounded-full mr-4">
                                <Eye className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Vision</h3>
                        </div>
                        <p className="text-muted-foreground text-lg">
                            To reshape urban mobility by making personal, scheduled transport accessible, safe and predictable across major cities.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;


