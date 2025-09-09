/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import Modal from './ui/modal';
import { useT } from '@/contexts/LanguageContext';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useT();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(formData.subject || `New message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
      );
      window.location.href = `mailto:junago@junago.net?subject=${subject}&body=${body}`;
      setFormData({ name: '', email: '', subject: '', message: '' });
      onClose();
    } else {
      toast({
        title: t('contact_modal.form.error_title'),
        description: t('contact_modal.form.error_description'),
        variant: 'destructive',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('contact_modal.title')} size="lg">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('contact_modal.get_in_touch.title')}
            </h3>
            <p className="text-muted-foreground mb-6">{t('contact_modal.get_in_touch.subtitle')}</p>
          </div>
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-3 p-4 bg-muted/50 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {t('contact_modal.contact_info.email')}
                </p>
                <p className="text-sm text-muted-foreground">junago@junago.net</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3 p-4 bg-muted/50 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {t('contact_modal.contact_info.phone')}
                </p>
                <p className="text-sm text-muted-foreground">+1 (850) 308-3085</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3 p-4 bg-muted/50 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {t('contact_modal.contact_info.address')}
                </p>
                <p className="text-sm text-muted-foreground">
                  30 N Gould St Ste N<br />
                  Sheridan, WY 82801
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3 p-4 bg-muted/50 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {t('contact_modal.contact_info.business_hours')}
                </p>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {t('contact_modal.contact_info.business_hours_text')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">
            {t('contact_modal.form.title')}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {t('contact_modal.form.name')} {t('contact_modal.form.required')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('contact_modal.form.name_placeholder')}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t('contact_modal.form.email')} {t('contact_modal.form.required')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('contact_modal.form.email_placeholder')}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                {t('contact_modal.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('contact_modal.form.subject_placeholder')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t('contact_modal.form.message')} {t('contact_modal.form.required')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder={t('contact_modal.form.message_placeholder')}
                required
              />
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-deep-blue hover:from-primary/90 hover:to-deep-blue/90 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4 mr-2" />
                {t('contact_modal.form.send_button')}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
