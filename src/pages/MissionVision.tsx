import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '@/components/SectionWrapper';
import { Target, Eye, Users, Globe, Heart, Zap } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

const MissionVision: React.FC = () => {
    const { t } = useT();
    return (
        <>
            <Helmet>
                <title>{t('pages.mission.meta_title')}</title>
                <meta name="description" content={t('pages.mission.meta_description')} />
                <meta property="og:title" content={t('pages.mission.meta_title')} />
                <meta property="og:description" content={t('pages.mission.meta_description')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fixdrive.tech/mission-vision" />
                <link rel="canonical" href="https://fixdrive.tech/mission-vision" />
            </Helmet>

            <main id="main">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-primary/5 to-blue-500/10"></div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6">
                                {t('pages.mission.hero_title')}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                {t('pages.mission.hero_subtitle')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Mission */}
                <SectionWrapper className="py-20 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t('pages.mission.mission_title')}</h2>
                        </motion.div>
                        
                        <motion.div
                            className="bg-gradient-to-r from-primary/5 to-blue-500/5 p-8 rounded-2xl border"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed text-center mb-8">
                                {t('pages.mission.mission_quote')}
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-8 mt-12">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-foreground mb-4">{t('pages.mission.what_we_do')}</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start">
                                            <Zap className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{t('pages.mission.points.networks')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{t('pages.mission.points.connect')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Heart className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{t('pages.mission.points.community')}</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-foreground mb-4">{t('pages.mission.how_we_do')}</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start">
                                            <Target className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{t('pages.mission.points.fixed_schedules')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Globe className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{t('pages.mission.points.tech_driven')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Heart className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{t('pages.mission.points.safety_ux')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* Vision */}
                <SectionWrapper className="bg-muted/30 py-20 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t('pages.mission.vision_title')}</h2>
                        </motion.div>
                        
                        <motion.div
                            className="bg-gradient-to-r from-blue-500/5 to-primary/5 p-8 rounded-2xl border"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed text-center mb-8">
                                {t('pages.mission.vision_quote')}
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                <div className="text-center">
                                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3">{t('pages.mission.vision.global_title')}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {t('pages.mission.vision.global_desc')}
                                    </p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3">{t('pages.mission.vision.community_title')}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {t('pages.mission.vision.community_desc')}
                                    </p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Zap className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3">{t('pages.mission.vision.innovation_title')}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {t('pages.mission.vision.innovation_desc')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* Values in Action */}
                <SectionWrapper className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
{t('pages.mission.values_in_action')}
                        </motion.h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold text-foreground">{t('pages.mission.for_drivers')}</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Target className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-foreground">{t('pages.mission.drivers.predictable_income_title')}</h4>
                                            <p className="text-sm text-muted-foreground">{t('pages.mission.drivers.predictable_income_desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Users className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-foreground">{t('pages.mission.drivers.regular_customers_title')}</h4>
                                            <p className="text-sm text-muted-foreground">{t('pages.mission.drivers.regular_customers_desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Heart className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-foreground">{t('pages.mission.drivers.community_support_title')}</h4>
                                            <p className="text-sm text-muted-foreground">{t('pages.mission.drivers.community_support_desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold text-foreground">{t('pages.mission.for_riders')}</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Zap className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-foreground">{t('pages.mission.riders.reliable_service_title')}</h4>
                                            <p className="text-sm text-muted-foreground">{t('pages.mission.riders.reliable_service_desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Globe className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-foreground">{t('pages.mission.riders.familiar_faces_title')}</h4>
                                            <p className="text-sm text-muted-foreground">{t('pages.mission.riders.familiar_faces_desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Heart className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-foreground">{t('pages.mission.riders.comfort_safety_title')}</h4>
                                            <p className="text-sm text-muted-foreground">{t('pages.mission.riders.comfort_safety_desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SectionWrapper>

                {/* CTA */}
                <SectionWrapper className="bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-32">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.mission.cta_title')}
                        </motion.h2>
                        <motion.p 
                            className="text-xl text-muted-foreground mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.mission.cta_subtitle')}
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <a 
                                href="#contact" 
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                {t('cta.contact_sales')}
                            </a>
                            <a 
                                href="/" 
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-colors"
                            >
                                {t('pages.common.back_home')}
                            </a>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </main>
        </>
    );
};

export default MissionVision;
