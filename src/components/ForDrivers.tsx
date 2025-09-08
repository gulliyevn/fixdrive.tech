import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { DollarSign, BarChart, FileText, CheckCircle } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

const ForDrivers: React.FC = () => {
    const { t } = useT();
    
    const handleBecomeDriver = () => {
        // Detect user's device and open appropriate app store
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOS = /iphone|ipad|ipod/.test(userAgent);
        const isAndroid = /android/.test(userAgent);
        
        if (isIOS) {
            window.open('https://apps.apple.com/app/fixdrive', '_blank');
        } else if (isAndroid) {
            window.open('https://play.google.com/store/apps/details?id=com.fixdrive.app', '_blank');
        } else {
            // For desktop users, show both options
            const choice = confirm('Choose your platform:\nOK for iOS App Store\nCancel for Google Play Store');
            if (choice) {
                window.open('https://apps.apple.com/app/fixdrive', '_blank');
            } else {
                window.open('https://play.google.com/store/apps/details?id=com.fixdrive.app', '_blank');
            }
        }
    };

    const points = [
        { icon: DollarSign, text: t('features.drivers_points.stable_income') },
        { icon: BarChart, text: t('features.drivers_points.lower_commission') },
        { icon: FileText, text: t('features.drivers_points.driver_dashboard') },
    ];

    return (
        <motion.div
            className="bg-card p-8 rounded-2xl card-shadow h-full flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('features.drivers')}</h3>
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
                {t('hero.become_driver')}
            </Button>
        </motion.div>
    );
};

export default ForDrivers;


