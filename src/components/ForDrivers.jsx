import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { DollarSign, BarChart, FileText, CheckCircle } from 'lucide-react';

const ForDrivers = () => {
    const handleBecomeDriver = () => {
        toast({
            title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki komutunda isteyebilirsin! 🚀"
        });
    };

    const points = [
        { icon: DollarSign, text: "Stable income — regular clients, predictable schedule." },
        { icon: BarChart, text: "Lower commission tiers with subscription drivers." },
        { icon: FileText, text: "Driver dashboard: bookings, earnings, documents." }
    ];

    return (
        <motion.div
            className="bg-card p-8 rounded-2xl card-shadow h-full flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h3 className="text-2xl font-bold text-foreground mb-6">Built for drivers</h3>
            <ul className="space-y-4 mb-8 flex-grow">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{point.text}</span>
                    </li>
                ))}
            </ul>
            <Button
                onClick={handleBecomeDriver}
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-bold py-6 text-base rounded-lg"
            >
                Become a Driver
            </Button>
        </motion.div>
    );
};

export default ForDrivers;