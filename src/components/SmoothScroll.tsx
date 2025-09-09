import React, { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `html { scroll-behavior: smooth; }`;
    document.head.appendChild(style);

    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = ''; // eslint-disable-line no-unused-vars
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = element.getAttribute('id') || '';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default SmoothScroll;
