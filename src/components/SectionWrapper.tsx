import React from 'react';
import { motion } from 'framer-motion';

type Viewport = { once?: boolean; amount?: number };

type SectionWrapperProps = React.PropsWithChildren<{
    id?: string;
    className?: string;
    delay?: number;
    duration?: number;
    viewport?: Viewport;
}>;

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    id,
    className = '',
    delay = 0,
    duration = 0.6,
    viewport = { once: true, amount: 0.3 },
}) => {
    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: 'easeOut', type: 'spring', damping: 25, stiffness: 100 }}
            viewport={viewport}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;


