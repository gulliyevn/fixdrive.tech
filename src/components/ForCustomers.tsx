import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Shield, Route } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

const ForCustomers: React.FC = () => {
    const { t } = useT();
    
    const points = [
        { icon: UserCheck, text: t('why_customers.points.consistency') },
        { icon: Shield, text: t('why_customers.points.peace_of_mind') },
        { icon: Route, text: t('why_customers.points.convenience') },
    ];

    return (
        <motion.div
            id="for-customers"
            className="bg-card p-8 rounded-2xl card-shadow h-full flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('why_customers.title')}</h3>
            <ul className="space-y-4 mb-8 flex-grow">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <point.icon className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{point.text}</span>
                    </li>
                ))}
            </ul>
            <div className="bg-secondary p-4 rounded-lg flex items-center justify-around text-center">
                <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-foreground">{t('process.book')}</span>
                </div>
                <div className="text-muted-foreground">{t('process.arrow')}</div>
                <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-foreground">{t('process.driver_assigned')}</span>
                </div>
                <div className="text-muted-foreground">{t('process.arrow')}</div>
                <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-foreground">{t('process.ride_completed')}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ForCustomers;


