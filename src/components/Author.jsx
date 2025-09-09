import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Globe } from 'lucide-react';

const Author = () => {
  const achievements = [
    {
      icon: BookOpen,
      number: '12',
      label: 'Yayınlanmış Kitap',
    },
    {
      icon: Users,
      number: '500K+',
      label: 'Etkilenen Yaşam',
    },
    {
      icon: Award,
      number: '25+',
      label: 'Uluslararası Ödül',
    },
    {
      icon: Globe,
      number: '40+',
      label: 'Ülkede Satış',
    },
  ];

  return (
    <section id="author" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
            Yazar Hakkında
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Dünya çapında tanınan kişisel gelişim uzmanı ve motivasyon konuşmacısı
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl book-shadow"
              >
                <img
                  alt="Dr. Ayşe Kaya - Kişisel gelişim uzmanı ve yazar portresi"
                  className="w-80 h-96 object-cover"
                  src="https://images.unsplash.com/photo-1575383596664-30f4489f9786"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass-effect rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-amber-900">20+</div>
                <div className="text-sm text-amber-700">Yıl Deneyim</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-3xl font-bold text-amber-900 mb-2">Dr. Ayşe Kaya</h3>
              <p className="text-lg text-amber-700 font-medium">
                Kişisel Gelişim Uzmanı & Motivasyon Konuşmacısı
              </p>
            </div>

            <div className="space-y-4 text-amber-800 leading-relaxed">
              <p>
                20 yılı aşkın deneyimi ile binlerce insanın hayatına dokunmuş, onların
                potansiyellerini keşfetmelerine yardımcı olmuş bir uzman. Harvard
                Üniversitesi&apos;nde Psikoloji doktorası yapmış ve dünya çapında tanınan bir
                araştırmacı.
              </p>
              <p>
                Kitapları 40&apos;tan fazla ülkede yayınlanmış ve milyonlarca okuyucuya ulaşmıştır.
                TEDx konuşmaları 50 milyondan fazla izlenme almış ve uluslararası platformlarda
                düzenli olarak konuşmacı olarak yer almaktadır.
              </p>
              <p>
                &quot;Başarının Sırları&quot; kitabı, yılların deneyimi ve araştırmasının bir ürünü
                olarak, okuyucularına pratik ve uygulanabilir stratejiler sunuyor.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-lg p-4 text-center"
                >
                  <achievement.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-900 mb-1">{achievement.number}</div>
                  <div className="text-sm text-amber-700">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Author;
