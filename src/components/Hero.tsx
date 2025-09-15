import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { useT } from '@/contexts/LanguageContext';
import SkeletonLoader from './SkeletonLoader';

const Hero: React.FC = memo(() => {
  const { t } = useT();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative h-[38.5vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Light mode image */}
        <picture className="dark:hidden">
          <source srcSet="/assets/Hero.avif" type="image/avif" />
          <source srcSet="/assets/Hero.webp" type="image/webp" />
          <img
            src="/assets/Hero.png"
            alt="FixDrive app on smartphone with Mercedes car and city skyline"
            className="w-full h-full object-contain object-top md:object-cover md:object-center"
            loading="eager"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
          />
        </picture>

        {/* Dark mode image */}
        <picture className="hidden dark:block">
          <source srcSet="/assets/Hero2.avif" type="image/avif" />
          <source srcSet="/assets/Hero2.webp" type="image/webp" />
          <img
            src="/assets/Hero2.png"
            alt="FixDrive app on smartphone with Mercedes car and city skyline"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
          />
        </picture>

        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-start">
          {!imageLoaded && (
            <div className="text-left max-w-2xl absolute md:relative left-2 sm:left-4 -top-[5.5rem] md:left-auto md:top-0 md:ml-16 lg:ml-16">
              <SkeletonLoader type="hero" />
            </div>
          )}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: imageLoaded ? 1 : 0, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left max-w-2xl absolute md:relative left-2 sm:left-4 -top-[5.5rem] md:left-auto md:top-0 md:ml-16 lg:ml-16"
            style={{ display: imageLoaded ? 'block' : 'none' }}
          >
            {/* Background behind text: mobile compact, desktop wide bar */}
            {/* Desktop/tablet wide background */}
            <div
              className="hidden md:block absolute -inset-y-6 -inset-x-24 left-0 bg-black/50 rounded-r-2xl -z-10"
              style={{ left: 'calc(-50vw + 50%)' }}
            ></div>
            {/* Mobile compact background fitting the text block */}
            <div className="md:hidden absolute -inset-2 bg-black/60 rounded-r-xl -z-10"></div>
            <motion.h1
              className="text-2xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-xl md:text-5xl lg:text-6xl font-light mb-1">
                {t('hero.line1')}
              </span>
              <span className="block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                {t('hero.line2')}
              </span>
            </motion.h1>

            <motion.p
              className="text-[12px] md:text-2xl text-white/90 mb-3 md:mb-12 max-w-2xl font-light leading-snug md:leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {(() => {
                const text = t('hero.subtitle');
                const marker = 'schedules — ';
                const idx = text.indexOf(marker);
                if (idx !== -1) {
                  const first = text.slice(0, idx + marker.length);
                  const second = text.slice(idx + marker.length);
                  return (
                    <>
                      <span>{first}</span>
                      <span className="block md:inline">{second}</span>
                    </>
                  );
                }
                return text;
              })()}
            </motion.p>

            <motion.p
              className="text-[10px] md:text-sm text-white/70 text-left font-medium tracking-wide mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('hero.availability_ribbon')}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
