import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="/assets/Hero.png" 
                    alt="FixDrive app on smartphone with Mercedes car and city skyline" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left max-w-2xl relative ml-16"
                    >
                        {/* Black square background */}
                        <div className="absolute -inset-y-6 -inset-x-24 right-0 bg-black/50 rounded-l-2xl -z-10" style={{right: 'calc(-50vw + 50%)'}}></div>
                        <motion.h1 
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="block text-4xl md:text-5xl lg:text-6xl font-light mb-2">One Tab.</span>
                            <span className="block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                                You're On top.
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-light leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            FixDrive connects you with trusted drivers on a fixed schedule — reliability, safety and comfort for daily life.
                        </motion.p>
                        
                        <motion.p 
                            className="text-sm text-white/70 text-left font-medium tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Available in select cities • Pilot programs & corporate onboarding
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;