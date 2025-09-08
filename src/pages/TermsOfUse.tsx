import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '@/components/SectionWrapper';
import { FileText, Scale, Shield, AlertTriangle, Users, Car } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

const TermsOfUse: React.FC = () => {
    const { t } = useT();
    
    return (
        <>
            <Helmet>
                <title>{t('pages.terms.meta_title')}</title>
                <meta name="description" content={t('pages.terms.meta_description')} />
                <meta property="og:title" content={t('pages.terms.meta_title')} />
                <meta property="og:description" content={t('pages.terms.meta_description')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fixdrive.tech/terms" />
                <link rel="canonical" href="https://fixdrive.tech/terms" />
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
                            <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
                            <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6">
                                {t('pages.terms.hero_title')}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                {t('pages.terms.hero_subtitle')}
                            </p>
                            <p className="text-sm text-muted-foreground mt-4">
                                {t('pages.terms.last_updated')} {new Date().toLocaleDateString()}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Introduction */}
                <SectionWrapper className="py-20 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="prose prose-lg max-w-none text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg leading-relaxed mb-6">
                                {t('pages.terms.intro_p1')}
                            </p>
                            <p className="text-lg leading-relaxed">
                                {t('pages.terms.intro_p2')}
                            </p>
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* Key Terms */}
                <SectionWrapper className="bg-muted/30 py-20 md:py-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.terms.key_terms_title')}
                        </motion.h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Users,
                                    title: t('pages.terms.user_responsibilities_title'),
                                    items: [
                                        t('pages.terms.user_responsibilities_items.0'),
                                        t('pages.terms.user_responsibilities_items.1'),
                                        t('pages.terms.user_responsibilities_items.2'),
                                        t('pages.terms.user_responsibilities_items.3')
                                    ]
                                },
                                {
                                    icon: Car,
                                    title: t('pages.terms.service_usage_title'),
                                    items: [
                                        t('pages.terms.service_usage_items.0'),
                                        t('pages.terms.service_usage_items.1'),
                                        t('pages.terms.service_usage_items.2'),
                                        t('pages.terms.service_usage_items.3')
                                    ]
                                },
                                {
                                    icon: Shield,
                                    title: t('pages.terms.safety_liability_title'),
                                    items: [
                                        t('pages.terms.safety_liability_items.0'),
                                        t('pages.terms.safety_liability_items.1'),
                                        t('pages.terms.safety_liability_items.2'),
                                        t('pages.terms.safety_liability_items.3')
                                    ]
                                }
                            ].map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    className="bg-background p-6 rounded-xl shadow-sm border"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <section.icon className="h-8 w-8 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-foreground mb-4">{section.title}</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                {/* Detailed Terms */}
                <SectionWrapper className="py-20 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.terms.detailed_terms_title')}
                        </motion.h2>
                        
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    title: t('pages.terms.acceptance_title'),
                                    content: t('pages.terms.acceptance_content')
                                },
                                {
                                    title: t('pages.terms.service_description_title'),
                                    content: t('pages.terms.service_description_content')
                                },
                                {
                                    title: t('pages.terms.user_accounts_title'),
                                    content: t('pages.terms.user_accounts_content')
                                },
                                {
                                    title: t('pages.terms.payment_terms_title'),
                                    content: t('pages.terms.payment_terms_content')
                                },
                                {
                                    title: t('pages.terms.prohibited_uses_title'),
                                    content: t('pages.terms.prohibited_uses_content')
                                },
                                {
                                    title: t('pages.terms.limitation_liability_title'),
                                    content: t('pages.terms.limitation_liability_content')
                                },
                                {
                                    title: t('pages.terms.termination_title'),
                                    content: t('pages.terms.termination_content')
                                },
                                {
                                    title: t('pages.terms.changes_terms_title'),
                                    content: t('pages.terms.changes_terms_content')
                                }
                            ].map((term, index) => (
                                <div key={index} className="bg-gradient-to-r from-primary/5 to-blue-500/5 p-6 rounded-xl border">
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{term.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{term.content}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* Important Notices */}
                <SectionWrapper className="bg-muted/30 py-20 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.terms.important_notices_title')}
                        </motion.h2>
                        
                        <motion.div
                            className="grid md:grid-cols-2 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-4">
                                <AlertTriangle className="h-8 w-8 text-yellow-500 mb-4" />
                                <h3 className="text-xl font-semibold text-foreground mb-4">{t('pages.terms.safety_first_title')}</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{t('pages.terms.safety_first_items.0')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{t('pages.terms.safety_first_items.1')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{t('pages.terms.safety_first_items.2')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{t('pages.terms.safety_first_items.3')}</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="space-y-4">
                                <Scale className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-semibold text-foreground mb-4">{t('pages.terms.legal_compliance_title')}</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{t('pages.terms.legal_compliance_items.0')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{t('pages.terms.legal_compliance_items.1')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{t('pages.terms.legal_compliance_items.2')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{t('pages.terms.legal_compliance_items.3')}</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* Contact Information */}
                <SectionWrapper className="py-20 md:py-32">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.terms.questions_title')}
                        </motion.h2>
                        <motion.p 
                            className="text-xl text-muted-foreground mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {t('pages.terms.questions_subtitle')}
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

export default TermsOfUse;
