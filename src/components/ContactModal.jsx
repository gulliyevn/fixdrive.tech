import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import Modal from './ui/modal';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            toast({
                title: "Message Sent!",
                description: "Thank you for contacting us. We'll get back to you within 24 hours.",
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
            onClose();
        } else {
            toast({
                title: "Error",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Contact Us" size="lg">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                        <p className="text-muted-foreground mb-6">
                            Have questions about FixDrive? We're here to help! Reach out to us through any of the channels below.
                        </p>
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
                                <p className="font-medium text-foreground">Email</p>
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
                                <p className="font-medium text-foreground">Phone</p>
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
                                <p className="font-medium text-foreground">Address</p>
                                <p className="text-sm text-muted-foreground">30 N Gould St Ste N<br />Sheridan, WY 82801</p>
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
                                <p className="font-medium text-foreground">Business Hours</p>
                                <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                placeholder="Tell us how we can help you..."
                                required
                            />
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-primary to-deep-blue hover:from-primary/90 hover:to-deep-blue/90 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                        </motion.div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ContactModal;
