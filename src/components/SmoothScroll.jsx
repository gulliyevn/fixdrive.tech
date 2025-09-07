import React, { useEffect } from 'react';

const SmoothScroll = () => {
    useEffect(() => {
        // Add smooth scrolling behavior to the document
        const style = document.createElement('style');
        style.textContent = `
            html {
                scroll-behavior: smooth;
            }
            
            /* Custom scrollbar */
            ::-webkit-scrollbar {
                width: 8px;
            }
            
            ::-webkit-scrollbar-track {
                background: hsl(var(--muted));
            }
            
            ::-webkit-scrollbar-thumb {
                background: hsl(var(--primary));
                border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background: hsl(var(--primary) / 0.8);
            }
            
            /* Smooth scroll for all browsers */
            * {
                scroll-behavior: smooth;
            }
            
            /* Enhanced focus styles */
            *:focus-visible {
                outline: 2px solid hsl(var(--primary));
                outline-offset: 2px;
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);

        // Enhanced scroll spy for active navigation
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav button[onclick*="scrollToSection"]');
        
        const handleScroll = () => {
            let current = '';
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            // Update active nav link
            navLinks.forEach(link => {
                link.classList.remove('text-primary', 'font-semibold');
                link.classList.add('text-muted-foreground');
                
                if (link.getAttribute('onclick')?.includes(current)) {
                    link.classList.remove('text-muted-foreground');
                    link.classList.add('text-primary', 'font-semibold');
                }
            });
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.head.removeChild(style);
        };
    }, []);

    return null;
};

export default SmoothScroll;
