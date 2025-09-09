import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

const Demo: React.FC = () => {
    const { t } = useT();
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
    };

    return (
        <section id="demo" className="py-8 md:py-12 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('demo.title')}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('demo.subtitle')}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-xl mx-auto"
                >
                    <div 
                        className="aspect-w-9 aspect-h-16 sm:aspect-w-16 sm:aspect-h-9 rounded-2xl overflow-hidden card-shadow relative group cursor-pointer"
                        onClick={handlePlayVideo}
                    >
                        <img alt="Demo image showing the FixDrive app" className="w-full h-full object-cover" src="/assets/img.png" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                            <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-colors transform group-hover:scale-110" />
                        </div>
                    </div>
                </motion.div>

                {/* Video Modal */}
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                        onClick={handleCloseVideo}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-2xl bg-black rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleCloseVideo}
                                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="aspect-w-16 aspect-h-4">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    onEnded={handleCloseVideo}
                                >
                                    <source src="/videos/demo.mp4" type="video/mp4" />
                                    <source src="/videos/demo.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Demo;


