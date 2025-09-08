import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '@/components/SectionWrapper';
import { Users, Target, Award, Globe, Heart, Shield } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

const AboutUs: React.FC = () => {
    const { t } = useT();
    return (
        <>
            <Helmet>
                <title>{t('pages.about.meta_title')}</title>
                <meta name="description" content={t('pages.about.meta_description')} />
                <meta property="og:title" content={t('pages.about.meta_title')} />
                <meta property="og:description" content={t('pages.about.meta_description')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fixdrive.tech/about" />
                <link rel="canonical" href="https://fixdrive.tech/about" />
            </Helmet>

            <main id="main">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/10"></div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6">
                                {t('pages.about.hero_title_prefix')} <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">FixDrive</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                {t('pages.about.hero_subtitle')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Company Story */}
                <SectionWrapper className="py-20 md:py-32">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.about.story_title')}
                        </motion.h2>
                        <motion.div
                            className="prose prose-lg max-w-none text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg leading-relaxed mb-6">{t('pages.about.story_p1')}</p>
                            <p className="text-lg leading-relaxed mb-6">{t('pages.about.story_p2')}</p>
                            <p className="text-lg leading-relaxed">{t('pages.about.story_p3')}</p>
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* Values */}
                <SectionWrapper className="bg-muted/30 py-20 md:py-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.about.values_title')}
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: t('pages.about.values.safety_title'),
                                    description: t('pages.about.values.safety_desc')
                                },
                                {
                                    icon: Target,
                                    title: t('pages.about.values.reliability_title'),
                                    description: t('pages.about.values.reliability_desc')
                                },
                                {
                                    icon: Heart,
                                    title: t('pages.about.values.community_title'),
                                    description: t('pages.about.values.community_desc')
                                },
                                {
                                    icon: Globe,
                                    title: t('pages.about.values.innovation_title'),
                                    description: t('pages.about.values.innovation_desc')
                                },
                                {
                                    icon: Users,
                                    title: t('pages.about.values.trust_title'),
                                    description: t('pages.about.values.trust_desc')
                                },
                                {
                                    icon: Award,
                                    title: t('pages.about.values.excellence_title'),
                                    description: t('pages.about.values.excellence_desc')
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    className="bg-background p-6 rounded-xl shadow-sm border"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <value.icon className="h-8 w-8 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                {/* Team */}
                <SectionWrapper className="py-20 md:py-32">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.about.axivion_title')}
                        </motion.h2>
                        <motion.div
                            className="prose prose-lg max-w-none text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg leading-relaxed mb-6">{t('pages.about.axivion_p1')}</p>
                            <p className="text-lg leading-relaxed">{t('pages.about.axivion_p2')}</p>
                        </motion.div>
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
                            {t('pages.about.cta_title')}
                        </motion.h2>
                        <motion.p 
                            className="text-xl text-muted-foreground mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.about.cta_subtitle')}
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

export default AboutUs;
