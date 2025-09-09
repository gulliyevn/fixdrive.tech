import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
// import { toast } from '@/components/ui/use-toast';
import { useT } from '@/contexts/LanguageContext';

const CtaBanner: React.FC = () => {
  const { t } = useT();
  // no-op placeholder removed to satisfy linter

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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
            <Button
              size="lg"
              onClick={() => {
                // Fire a custom event that Navigation listens to
                document.dispatchEvent(new Event('open-contact'));
                // Ensure viewport is at top so modal central overlay isn't visually offset
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="bg-white text-deep-blue hover:bg-gray-200 font-bold px-8 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              {t('cta.contact_sales')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
