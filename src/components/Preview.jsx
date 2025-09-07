import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Preview = () => {
    const chapters = [
        {
            number: "01",
            title: "Zihinsel Dönüşüm",
            description: "Başarı zihniyetini geliştirme ve sınırlayıcı inançları aşma",
            icon: Lightbulb,
            duration: "25 dk"
        },
        {
            number: "02",
            title: "Hedef Belirleme Sanatı",
            description: "SMART hedefler kurma ve bunları gerçekleştirme stratejileri",
            icon: Target,
            duration: "30 dk"
        },
        {
            number: "03",
            title: "Zaman Yönetimi",
            description: "Verimliliği artırma ve öncelikleri belirleme teknikleri",
            icon: Clock,
            duration: "28 dk"
        },
        {
            number: "04",
            title: "Sürekli Gelişim",
            description: "Kişisel ve profesyonel büyüme için sürdürülebilir alışkanlıklar",
            icon: TrendingUp,
            duration: "35 dk"
        }
    ];

    const handleReadMore = () => {
        toast({
            title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki komutunda isteyebilirsin! 🚀"
        });
    };

    return (
        <section id="preview" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
                        Kitap Önizlemesi
                    </h2>
                    <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                        Bu kitapta sizi bekleyen değerli içerikleri keşfedin. Her bölüm,
                        başarıya giden yolculuğunuzda size rehberlik edecek pratik bilgiler içeriyor.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {chapters.map((chapter, index) => (
                        <motion.div
                            key={chapter.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="glass-effect rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg golden-glow">
                                        {chapter.number}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display text-xl font-semibold text-amber-900">
                                            {chapter.title}
                                        </h3>
                                        <div className="flex items-center text-amber-700 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {chapter.duration}
                                        </div>
                                    </div>
                                    <p className="text-amber-800 mb-4 leading-relaxed">
                                        {chapter.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <chapter.icon className="w-6 h-6 text-amber-600" />
                                        <Button
                                            onClick={handleReadMore}
                                            variant="ghost"
                                            size="sm"
                                            className="text-amber-700 hover:text-amber-900 hover:bg-amber-100"
                                        >
                                            Devamını Oku
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-xl p-8 text-center"
                >
                    <h3 className="font-display text-2xl font-semibold text-amber-900 mb-4">
                        Ücretsiz Örnek Bölüm
                    </h3>
                    <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
                        Kitabın ilk bölümünü ücretsiz olarak okuyabilir ve içeriğin kalitesini deneyimleyebilirsiniz.
                    </p>
                    <Button
                        onClick={handleReadMore}
                        className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full golden-glow"
                    >
                        Ücretsiz Bölümü İndir
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Preview;