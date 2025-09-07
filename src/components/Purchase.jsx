import React from 'react';
import { motion } from 'framer-motion';
import { Check, Gift, Clock, Shield, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Purchase = () => {
    const features = [
        "12 kapsamlı bölüm",
        "Pratik egzersizler ve çalışma kağıtları",
        "Bonus: Ses kayıtları",
        "Yaşam boyu güncellemeler",
        "30 gün para iade garantisi",
        "Mobil ve tablet uyumlu"
    ];

    const bonuses = [
        {
            icon: Gift,
            title: "Bonus E-kitap",
            description: "Motivasyon Teknikleri Rehberi",
            value: "₺49"
        },
        {
            icon: Download,
            title: "Ses Kayıtları",
            description: "Tüm bölümlerin ses versiyonu",
            value: "₺79"
        },
        {
            icon: Clock,
            title: "Webinar Erişimi",
            description: "Canlı Q&A oturumları",
            value: "₺129"
        }
    ];

    const handlePurchase = () => {
        toast({
            title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki komutunda isteyebilirsin! 🚀"
        });
    };

    return (
        <section id="purchase" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
                        Hemen Başlayın
                    </h2>
                    <p className="text-xl text-amber-800 max-w-3xl mx-auto">
                        Başarıya giden yolculuğunuza bugün başlayın ve hayatınızı dönüştürün
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600"></div>
                    </div>

                    <div className="relative z-10">
                        {/* Pricing */}
                        <div className="mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-2xl text-amber-700 line-through mr-4">₺149</span>
                                <span className="text-5xl md:text-6xl font-bold gradient-text">₺89</span>
                            </div>
                            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                <Clock className="w-4 h-4 mr-2" />
                                Sınırlı Süre %40 İndirim
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="font-semibold text-amber-900 mb-4 text-lg">Kitap İçeriği:</h3>
                                <ul className="space-y-3">
                                    {features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center text-amber-800"
                                        >
                                            <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-amber-900 mb-4 text-lg">Ücretsiz Bonuslar:</h3>
                                <div className="space-y-3">
                                    {bonuses.map((bonus, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center justify-between p-3 bg-amber-50 rounded-lg"
                                        >
                                            <div className="flex items-center">
                                                <bonus.icon className="w-5 h-5 text-amber-600 mr-3" />
                                                <div className="text-left">
                                                    <div className="font-medium text-amber-900 text-sm">{bonus.title}</div>
                                                    <div className="text-xs text-amber-700">{bonus.description}</div>
                                                </div>
                                            </div>
                                            <span className="text-sm font-semibold text-amber-800">{bonus.value}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Total Value */}
                        <div className="mb-8 p-4 bg-amber-100 rounded-lg">
                            <div className="text-amber-900">
                                <span className="text-lg">Toplam Değer: </span>
                                <span className="text-xl font-bold line-through">₺406</span>
                                <span className="text-2xl font-bold text-green-600 ml-2">Bugün Sadece ₺89</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mb-6"
                        >
                            <Button
                                onClick={handlePurchase}
                                size="lg"
                                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-12 py-6 rounded-full text-xl golden-glow w-full md:w-auto"
                            >
                                Hemen Satın Al - ₺89
                            </Button>
                        </motion.div>

                        {/* Guarantee */}
                        <div className="flex items-center justify-center text-amber-700">
                            <Shield className="w-5 h-5 mr-2" />
                            <span className="text-sm">30 gün koşulsuz para iade garantisi</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Purchase;