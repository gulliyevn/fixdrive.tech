import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  stagger = 0.05,
  as: Component = 'span', // eslint-disable-line no-unused-vars
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={item} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
