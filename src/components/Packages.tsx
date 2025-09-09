import React, { useState, memo, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
// import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Check, Info } from 'lucide-react';
// import { toast } from '@/components/ui/use-toast';
import { useT } from '@/contexts/LanguageContext';

type PackageTier = {
  // eslint-disable-line no-unused-vars
  name: string;
  price: number;
  perks: string[];
  cta: string;
  popular?: boolean;
};

const getPackages = (t: (key: string) => string) => ({
  // eslint-disable-line no-unused-vars
  monthly: [
    {
      name: t('pricing.tiers.free.name'),
      price: 0,
      perks: [
        t('pricing.tiers.free.perk1'),
        t('pricing.tiers.free.perk2'),
        t('pricing.tiers.free.perk3'),
      ],
      cta: t('pricing.tiers.free.cta'),
    },
    {
      name: t('pricing.tiers.plus.name'),
      price: 6.99,
      perks: [
        t('pricing.tiers.plus.perk1'),
        t('pricing.tiers.plus.perk2'),
        t('pricing.tiers.plus.perk3'),
      ],
      cta: t('pricing.tiers.plus.cta'),
    },
    {
      name: t('pricing.tiers.premium.name'),
      price: 14.99,
      perks: [
        t('pricing.tiers.premium.perk1'),
        t('pricing.tiers.premium.perk2'),
        t('pricing.tiers.premium.perk3'),
        t('pricing.tiers.premium.perk4'),
      ],
      cta: t('pricing.tiers.premium.cta'),
      popular: true,
    },
    {
      name: t('pricing.tiers.premium_plus.name'),
      price: 29.99,
      perks: [
        t('pricing.tiers.premium_plus.perk1'),
        t('pricing.tiers.premium_plus.perk2'),
        t('pricing.tiers.premium_plus.perk3'),
        t('pricing.tiers.premium_plus.perk4'),
        t('pricing.tiers.premium_plus.perk5'),
      ],
      cta: t('pricing.tiers.premium_plus.cta'),
    },
  ],
  yearly: [
    {
      name: t('pricing.tiers.free.name'),
      price: 0,
      perks: [
        t('pricing.tiers.free.perk1'),
        t('pricing.tiers.free.perk2'),
        t('pricing.tiers.free.perk3'),
      ],
      cta: t('pricing.tiers.free.cta'),
    },
    {
      name: t('pricing.tiers.plus.name'),
      price: 6.99 * 12 * 0.75,
      perks: [
        t('pricing.tiers.plus.perk1'),
        t('pricing.tiers.plus.perk2'),
        t('pricing.tiers.plus.perk3'),
      ],
      cta: t('pricing.tiers.plus.cta'),
    },
    {
      name: t('pricing.tiers.premium.name'),
      price: 14.99 * 12 * 0.75,
      perks: [
        t('pricing.tiers.premium.perk1'),
        t('pricing.tiers.premium.perk2'),
        t('pricing.tiers.premium.perk3'),
        t('pricing.tiers.premium.perk4'),
      ],
      cta: t('pricing.tiers.premium.cta'),
      popular: true,
    },
    {
      name: t('pricing.tiers.premium_plus.name'),
      price: 29.99 * 12 * 0.75,
      perks: [
        t('pricing.tiers.premium_plus.perk1'),
        t('pricing.tiers.premium_plus.perk2'),
        t('pricing.tiers.premium_plus.perk3'),
        t('pricing.tiers.premium_plus.perk4'),
        t('pricing.tiers.premium_plus.perk5'),
      ],
      cta: t('pricing.tiers.premium_plus.cta'),
    },
  ],
});

const Packages: React.FC = memo(() => {
  const { t } = useT();
  const [isYearly, setIsYearly] = useState(false);

  const packages = useMemo(() => getPackages(t), [t]);
  const currentPackages = useMemo(
    () => (isYearly ? packages.yearly : packages.monthly),
    [isYearly, packages],
  );

  const handleToggle = useCallback(() => {
    setIsYearly((prev) => !prev);
  }, []);

  const handleChoosePlan = useCallback(() => {
    // Detect user's device and open appropriate app store
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    if (isIOS) {
      window.open('https://apps.apple.com/app/fixdrive', '_blank');
    } else if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=com.fixdrive.app', '_blank');
    } else {
      // For desktop users, show both options
      const choice = confirm(
        'Choose your platform:\nOK for iOS App Store\nCancel for Google Play Store',
      );
      if (choice) {
        window.open('https://apps.apple.com/app/fixdrive', '_blank');
      } else {
        window.open('https://play.google.com/store/apps/details?id=com.fixdrive.app', '_blank');
      }
    }
  }, []);

  return (
    <section id="packages" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
        </motion.div>

        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className="font-medium text-muted-foreground">{t('pricing.billing.monthly')}</span>
          <Switch id="billing-cycle" checked={isYearly} onCheckedChange={handleToggle} />
          <span className="font-medium text-muted-foreground">{t('pricing.billing.yearly')}</span>
          <span className="bg-amber-100 text-amber-600 text-xs font-bold px-2 py-1 rounded-full">
            {t('pricing.billing.save')}
          </span>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-stretch">
          {currentPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`bg-card rounded-2xl p-8 flex flex-col card-shadow relative hover:shadow-xl transition-all duration-300 cursor-pointer ${pkg.popular ? 'border-2 border-primary' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {pkg.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-1 rounded-full text-sm font-semibold text-center">
                  {t('pricing.tiers.premium.badge')}
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-foreground">
                  ${isYearly ? (pkg.price / 12).toFixed(2) : pkg.price.toFixed(2)}
                </span>
                <span className="text-muted-foreground ml-2">
                  {t('pricing.tiers.meta.per_month')}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 min-h-[40px]">
                {isYearly &&
                  t('pricing.tiers.meta.billed_as_year', { price: pkg.price.toFixed(2) })}
              </p>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.perks.map((perk, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-muted-foreground">{perk}</span>
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleChoosePlan}
                  size="lg"
                  className={`w-full py-6 text-base rounded-lg transition-all duration-300 ${pkg.popular ? 'bg-deep-blue hover:bg-deep-blue/90' : 'bg-primary hover:bg-primary/90'}`}
                >
                  {pkg.cta}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 flex items-center justify-center">
          <p className="text-muted-foreground">{t('pricing.tiers.meta.all_packages_include')}</p>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2 h-6 w-6">
                <Info className="h-4 w-4 text-muted-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t('pricing.tiers.meta.family_profiles_tip')}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
});

Packages.displayName = 'Packages';

export default Packages;
