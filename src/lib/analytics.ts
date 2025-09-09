/* eslint-disable no-unused-vars */
// Google Analytics 4 integration
declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 tracking ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function (...args: unknown[]) {
      (window.gtag as unknown as { q: unknown[] }).q =
        (window.gtag as unknown as { q: unknown[] }).q || [];
      (window.gtag as unknown as { q: unknown[] }).q.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for FixDrive
export const trackContactSales = () => {
  trackEvent('click', 'engagement', 'contact_sales_button');
};

export const trackNewsletterSubscribe = () => {
  trackEvent('subscribe', 'engagement', 'newsletter_signup');
};

export const trackAppDownload = (platform: 'ios' | 'android') => {
  trackEvent('download', 'engagement', `app_${platform}`);
};

export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', 'engagement', language);
};

export const trackThemeToggle = (theme: 'light' | 'dark') => {
  trackEvent('theme_toggle', 'engagement', theme);
};
