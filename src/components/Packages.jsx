import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Info } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const packages = {
    monthly: [
        { name: 'Plus', price: 6.99, perks: ['Priority booking', '3% commission', '2% cashback'], cta: 'Choose Plus' },
        { name: 'Premium', price: 14.99, perks: ['Guaranteed arrival', '1% commission', '5% cashback', 'Scheduled bookings up to 2 weeks'], cta: 'Choose Premium', popular: true },
        { name: 'Premium+', price: 29.99, perks: ['Dedicated driver option', '0% commission', '10% cashback', 'VIP support', 'Corporate invoicing'], cta: 'Choose Premium+' }
    ],
    yearly: [
        { name: 'Plus', price: 6.99 * 12 * 0.75, perks: ['Priority booking', '3% commission', '2% cashback'], cta: 'Choose Plus' },
        { name: 'Premium', price: 14.99 * 12 * 0.75, perks: ['Guaranteed arrival', '1% commission', '5% cashback', 'Scheduled bookings up to 2 weeks'], cta: 'Choose Premium', popular: true },
        { name: 'Premium+', price: 29.99 * 12 * 0.75, perks: ['Dedicated driver option', '0% commission', '10% cashback', 'VIP support', 'Corporate invoicing'], cta: 'Choose Premium+' }
    ]
};

const Packages = () => {
    const [isYearly, setIsYearly] = useState(false);
    const currentPackages = isYearly ? packages.yearly : packages.monthly;

    const handleChoosePlan = () => {
        toast({
            title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki komutunda isteyebilirsin! 🚀"
        });
    };

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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent Pricing for Everyone</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your needs. Cancel anytime.</p>
                </motion.div>

                <div className="flex items-center justify-center space-x-4 mb-12">
                    <Label htmlFor="billing-cycle" className="font-medium text-muted-foreground">Monthly</Label>
                    <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} />
                    <Label htmlFor="billing-cycle" className="font-medium text-muted-foreground">Yearly</Label>
                    <span className="bg-amber-100 text-amber-600 text-xs font-bold px-2 py-1 rounded-full">SAVE 25%</span>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
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
                            {pkg.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>}
                            <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-foreground">${isYearly ? (pkg.price / 12).toFixed(2) : pkg.price.toFixed(2)}</span>
                                <span className="text-muted-foreground ml-2">/ month</span>
                            </div>
                            <p className="text-muted-foreground mb-6 min-h-[40px]">{isYearly && `Billed as $${pkg.price.toFixed(2)} per year`}</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.perks.map((perk, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="w-5 h-5 text-green-500 mr-3" />
                                        <span className="text-muted-foreground">{perk}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button onClick={handleChoosePlan} size="lg" className={`w-full py-6 text-base rounded-lg transition-all duration-300 ${pkg.popular ? 'bg-deep-blue hover:bg-deep-blue/90' : 'bg-primary hover:bg-primary/90'}`}>
                                    {pkg.cta}
                                </Button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-8 flex items-center justify-center">
                    <p className="text-muted-foreground">All packages include access to secure rides and Family profiles.</p>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="ml-2 h-6 w-6">
                                <Info className="h-4 w-4 text-muted-foreground" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Family profiles allow you to manage rides for your loved ones under one account.</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </section>
    );
};

export default Packages;