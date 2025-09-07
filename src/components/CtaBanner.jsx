import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CtaBanner = () => {
    const handleDemoRequest = () => {
        toast({
            title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki komutunda isteyebilirsin! 🚀"
        });
    };

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="bg-deep-blue rounded-2xl p-12 text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to bring FixDrive to your city?</h2>
                        <Button
                            onClick={handleDemoRequest}
                            size="lg"
                            className="bg-white text-deep-blue hover:bg-gray-200 font-bold px-8 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
                        >
                            Request Demo
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaBanner;