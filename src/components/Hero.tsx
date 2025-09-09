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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-start">
          {!imageLoaded && (
            <div className="text-left max-w-2xl relative ml-16">
              <SkeletonLoader type="hero" />
            </div>
          )}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: imageLoaded ? 1 : 0, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left max-w-2xl relative ml-16"
            style={{ display: imageLoaded ? 'block' : 'none' }}
          >
            {/* Black square background */}
            <div
              className="absolute -inset-y-6 -inset-x-24 left-0 bg-black/50 rounded-r-2xl -z-10"
              style={{ left: 'calc(-50vw + 50%)' }}
            ></div>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light mb-2">
                {t('hero.line1')}
              </span>
              <span className="block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                {t('hero.line2')}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              className="text-sm text-white/70 text-left font-medium tracking-wide"
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
