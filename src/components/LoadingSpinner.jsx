import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <motion.div
                className={`${sizeClasses[size]} border-4 border-primary/20 border-t-primary rounded-full`}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
};

export const LoadingButton = ({ children, loading, ...props }) => {
    return (
        <button
            {...props}
            disabled={loading || props.disabled}
            className={`${props.className} ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
            {loading ? (
                <div className="flex items-center justify-center">
                    <LoadingSpinner size="sm" className="mr-2" />
                    Loading...
                </div>
            ) : (
                children
            )}
        </button>
    );
};

export const LoadingCard = ({ className = '' }) => {
    return (
        <div className={`bg-card rounded-2xl p-8 ${className}`}>
            <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
