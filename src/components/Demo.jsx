import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const Demo = () => {
    return (
        <section id="demo" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See FixDrive in Action</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A quick 45-second overview of how easy it is to get started.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden card-shadow relative group cursor-pointer">
                        <img  alt="Demo video thumbnail showing the FixDrive app" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519687730002-25d818c893cc" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                            <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-colors transform group-hover:scale-110" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Demo;