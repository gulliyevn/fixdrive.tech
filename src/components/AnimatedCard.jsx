import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ 
    children, 
    className = '', 
    delay = 0,
    hoverScale = 1.02,
    hoverY = -5,
    whileInView = true
}) => {
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay,
                ease: "easeOut",
                type: "spring",
                damping: 25,
                stiffness: 100
            }
        }
    };
    
    const hoverVariants = {
        hover: {
            y: hoverY,
            scale: hoverScale,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView={whileInView ? "visible" : undefined}
            animate={!whileInView ? "visible" : undefined}
            whileHover={hoverVariants.hover}
            viewport={{ once: true, amount: 0.3 }}
            className={`bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-border/50 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;
