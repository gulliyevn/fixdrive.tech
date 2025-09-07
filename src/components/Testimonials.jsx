import React from 'react';
import { motion } from 'framer-motion';
import { Star, Building } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah L.",
        role: "Busy Parent",
        text: "FixDrive has been a lifesaver for school runs. Our driver, David, is always on time and the kids love him. It's one less thing to worry about!",
        avatar: "Portrait of a smiling mother",
        rating: 5,
    },
    {
        name: "Mark C.",
        role: "Tech Executive",
        text: "My daily commute is now my most productive time. No more stress about traffic or parking. The subscription model is transparent and worth every penny.",
        avatar: "Portrait of a professional man in a suit",
        rating: 5,
    },
    {
        name: "HR Manager, Innovate Inc.",
        role: "Corporate Client",
        text: "FixDrive piloted with our team — punctuality improved across the board. It's a fantastic perk for our employees, and the corporate invoicing is seamless.",
        avatar: "Corporate building icon",
        rating: 5,
        isCorporate: true,
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Families and Professionals</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers are saying.</p>
                </motion.div>
                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-card p-8 rounded-2xl card-shadow flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 bg-secondary flex items-center justify-center">
                                    {testimonial.isCorporate ? (
                                        <Building className="w-7 h-7 text-primary" />
                                    ) : (
                                        <img  alt={testimonial.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic flex-grow">"{testimonial.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;