import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useT } from '@/contexts/LanguageContext';

const Newsletter: React.FC = () => {
    const { t } = useT();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            try {
                // Get user's IP and location data
                const ipResponse = await fetch('https://ipinfo.io/json');
                const ipData = await ipResponse.json();
                
                // Prepare subscription data
                const subscriptionData = {
                    email: email,
                    timestamp: new Date().toISOString(),
                    ip: ipData.ip || 'Unknown',
                    city: ipData.city || 'Unknown',
                    country: ipData.country || 'Unknown',
                    region: ipData.region || 'Unknown',
                    userAgent: navigator.userAgent,
                    source: 'newsletter'
                };

                // Send to Google Apps Script Web App (writes to Google Sheets)
                const endpoint = 'https://script.google.com/macros/s/AKfycby6Uc2AV4sRBaZQzQpsq7L0uk2K-tVoD1uk_220P0jLZCAahWYQ2NnNyiX7UvnYF6zY/exec';
                // Use text/plain to avoid preflight; Apps Script will parse JSON string
                let responseOk = false;
                try {
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        body: JSON.stringify(subscriptionData),
                    });
                    const result = await response.json().catch(() => ({ ok: false }));
                    responseOk = response.ok && result?.ok !== false;
                } catch (_) {
                    responseOk = false;
                }
                if (!responseOk) {
                    // Fallback: fire-and-forget without reading response (bypass CORS restrictions)
                    await fetch(endpoint, {
                        method: 'POST',
                        mode: 'no-cors',
                        body: JSON.stringify(subscriptionData),
                    });
                }
                
                // For now, show success message
                toast({
                    title: t('newsletter.success.title'),
                    description: t('newsletter.success.description', { city: ipData.city || t('newsletter.success.your_location') }),
                });
                setEmail('');
            } catch (error) {
                console.error('Error getting location data:', error);
                // Fallback without location data
                toast({
                    title: t('newsletter.success.title'),
                    description: t('newsletter.success.fallback'),
                });
                setEmail('');
            }
        } else {
            toast({
                title: t('newsletter.error.title'),
                description: t('newsletter.error.description'),
                variant: 'destructive',
            });
        }
    };

    return (
        <section id="newsletter" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('newsletter.title')}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{t('newsletter.subtitle')}</p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('newsletter.email_placeholder')}
                            className="flex-1 px-5 py-3 rounded-lg border-2 border-border bg-card focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                        />
                        <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg">
                            {t('newsletter.subscribe_button')}
                        </Button>
                    </form>
                    <p className="text-sm text-muted-foreground mt-4">{t('newsletter.disclaimer')}</p>
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-foreground mb-4">{t('newsletter.download_title')}</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                onClick={() => window.open('https://apps.apple.com/app/fixdrive', '_blank')}
                                className="flex items-center justify-center bg-gradient-to-r from-primary to-deep-blue text-white px-6 py-3 rounded-xl hover:from-primary/90 hover:to-deep-blue/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={t('newsletter.app_store_aria')}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-white/80">{t('newsletter.app_store.subtitle')}</div>
                                        <div className="text-sm font-semibold">{t('newsletter.app_store.title')}</div>
                                    </div>
                                </div>
                            </motion.button>
                            <motion.button
                                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.fixdrive.app', '_blank')}
                                className="flex items-center justify-center bg-gradient-to-r from-primary to-deep-blue text-white px-6 py-3 rounded-xl hover:from-primary/90 hover:to-deep-blue/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={t('newsletter.google_play_aria')}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-white/80">{t('newsletter.google_play.subtitle')}</div>
                                        <div className="text-sm font-semibold">{t('newsletter.google_play.title')}</div>
                                    </div>
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;


