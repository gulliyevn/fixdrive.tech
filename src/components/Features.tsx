import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Tag, ShieldCheck } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import AnimatedText from './AnimatedText';
import { useT } from '@/contexts/LanguageContext';

const Features: React.FC = memo(() => {
  const { t } = useT();

  const features = useMemo(
    () => [
      {
        icon: Users,
        title: t('features.bullets.fixed_drivers_title'),
        description: t('features.bullets.fixed_drivers_desc'),
      },
      {
        icon: Calendar,
        title: t('features.bullets.schedule_first_title'),
        description: t('features.bullets.schedule_first_desc'),
      },
      {
        icon: Tag,
        title: t('features.bullets.transparent_pricing_title'),
        description: t('features.bullets.transparent_pricing_desc'),
      },
      {
        icon: ShieldCheck,
        title: t('features.bullets.safety_verification_title'),
        description: t('features.bullets.safety_verification_desc'),
      },
    ],
    [t],
  );

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text={t('features.reliability_core_title')}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            delay={0.2}
          />
          <AnimatedText
            text={t('features.reliability_core_body')}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            delay={0.4}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6">
              <div className="flex justify-center mb-6">
                <motion.div
                  className="bg-primary/10 p-4 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;
