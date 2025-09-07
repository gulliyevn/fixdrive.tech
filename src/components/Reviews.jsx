import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Mehmet Özkan",
            role: "Girişimci",
            rating: 5,
            text: "Bu kitap hayatımı tamamen değiştirdi. İçindeki stratejileri uyguladıktan sonra hem iş hem de kişisel yaşamımda inanılmaz gelişmeler yaşadım. Herkese tavsiye ederim!",
            avatar: "Professional businessman portrait"
        },
        {
            name: "Zeynep Demir",
            role: "Pazarlama Müdürü",
            rating: 5,
            text: "Dr. Ayşe Kaya'nın yaklaşımı çok pratik ve uygulanabilir. Kitaptaki teknikleri kullanarak kariyerimde büyük adımlar attım. Gerçekten değerli bir kaynak.",
            avatar: "Professional businesswoman portrait"
        },
        {
            name: "Can Yılmaz",
            role: "Öğretmen",
            rating: 5,
            text: "Öğrencilerime de tavsiye ettiğim harika bir kitap. Başarı konusundaki bakış açımı tamamen değiştirdi ve hedeflerime ulaşmak için net bir yol haritası verdi.",
            avatar: "Professional teacher portrait"
        },
        {
            name: "Elif Şahin",
            role: "Freelancer",
            rating: 5,
            text: "Freelance kariyerime başlarken okuduğum en faydalı kitaplardan biri. Zaman yönetimi ve hedef belirleme konularında aldığım bilgiler çok değerliydi.",
            avatar: "Professional freelancer portrait"
        },
        {
            name: "Ahmet Kara",
            role: "Mühendis",
            rating: 5,
            text: "Teknik bir geçmişe sahip olarak, kitaptaki bilimsel yaklaşım ve pratik örnekler beni çok etkiledi. Gerçekten işe yarayan stratejiler.",
            avatar: "Professional engineer portrait"
        },
        {
            name: "Selin Arslan",
            role: "Psikolog",
            rating: 5,
            text: "Mesleki deneyimim açısından da çok değerli bulduğum bir eser. Hem kendi gelişimim hem de danışanlarıma önerdiğim bir kaynak haline geldi.",
            avatar: "Professional psychologist portrait"
        }
    ];

    return (
        <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
                        Okuyucu Yorumları
                    </h2>
                    <p className="text-xl text-amber-800 max-w-3xl mx-auto">
                        Binlerce okuyucumuzun hayatında yarattığımız değişimi keşfedin
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="glass-effect rounded-xl p-6 relative hover:shadow-xl transition-all duration-300"
                        >
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-400 opacity-50" />

                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 book-shadow">
                                    <img
                                        alt={`${review.name} - ${review.role}`}
                                        className="w-full h-full object-cover"
                                        src="https://images.unsplash.com/photo-1653379670999-f7f03d702125" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-amber-900">{review.name}</h4>
                                    <p className="text-sm text-amber-700">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-amber-800 leading-relaxed italic">
                                "{review.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="glass-effect rounded-xl p-8 inline-block">
                        <div className="flex items-center justify-center space-x-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-900 mb-1">4.9/5</div>
                                <div className="flex items-center justify-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <div className="text-sm text-amber-700">Ortalama Puan</div>
                            </div>
                            <div className="w-px h-16 bg-amber-300"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-900 mb-1">2,847</div>
                                <div className="text-sm text-amber-700">Toplam Değerlendirme</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;