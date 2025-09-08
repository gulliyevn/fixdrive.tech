import React from 'react';
import { motion } from 'framer-motion';
import { Star, Building, User, Briefcase } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

type Testimonial = {
    name: string;
    role: string;
    text: string;
    avatar: string;
    rating: number;
    isCorporate?: boolean;
};

const getTestimonials = (t: (key: string) => string): Testimonial[] => [
    {
        name: t('reviews.testimonials.sarah.name'),
        role: t('reviews.testimonials.sarah.role'),
        text: t('reviews.testimonials.sarah.text'),
        avatar: 'Portrait of a smiling mother',
        rating: 5,
    },
    {
        name: t('reviews.testimonials.mark.name'),
        role: t('reviews.testimonials.mark.role'),
        text: t('reviews.testimonials.mark.text'),
        avatar: 'Portrait of a professional man in a suit',
        rating: 5,
    },
    {
        name: t('reviews.testimonials.corporate.name'),
        role: t('reviews.testimonials.corporate.role'),
        text: t('reviews.testimonials.corporate.text'),
        avatar: 'Corporate building icon',
        rating: 5,
        isCorporate: true,
    },
];

const Testimonials: React.FC = () => {
    const { t } = useT();
    const testimonials = getTestimonials(t);
    
    return (
        <section id="testimonials" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('reviews.title')}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('reviews.subtitle')}</p>
                </motion.div>
                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-card p-8 rounded-2xl card-shadow flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 bg-secondary flex items-center justify-center">
                                    {testimonial.isCorporate ? (
                                        <Building className="w-7 h-7 text-primary" />
                                    ) : testimonial.role.includes('Executive') || testimonial.role.includes('Manager') ? (
                                        <Briefcase className="w-7 h-7 text-primary" />
                                    ) : (
                                        <User className="w-7 h-7 text-primary" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic flex-grow">"{testimonial.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


