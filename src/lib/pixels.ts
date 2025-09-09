/* eslint-disable no-unused-vars */
// Meta Pixel and LinkedIn Insight Tag integration
declare global {
  interface Window {
    fbq: (..._args: unknown[]) => void;
    lintrk: (..._args: unknown[]) => void;
    _linkedin_partner_id: string;
    _linkedin_data_partner_ids: string[];
  }
}

// Meta Pixel (Facebook)
export const initMetaPixel = () => {
  if (typeof window !== 'undefined') {
    // Replace with your actual Meta Pixel ID
    const META_PIXEL_ID = 'YOUR_META_PIXEL_ID';

    if (META_PIXEL_ID && META_PIXEL_ID !== 'YOUR_META_PIXEL_ID') {
      // Load Meta Pixel script
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);

      // Add noscript fallback
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`;
      document.head.appendChild(noscript);

      console.log('Meta Pixel initialized with ID:', META_PIXEL_ID);
    } else {
      console.warn('Meta Pixel ID not set. Analytics will not be active.');
    }
  }
};

// LinkedIn Insight Tag
export const initLinkedInPixel = () => {
  if (typeof window !== 'undefined') {
    // Replace with your actual LinkedIn Partner ID
    const LINKEDIN_PARTNER_ID = 'YOUR_LINKEDIN_PARTNER_ID';

    if (LINKEDIN_PARTNER_ID && LINKEDIN_PARTNER_ID !== 'YOUR_LINKEDIN_PARTNER_ID') {
      window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
      window._linkedin_data_partner_ids = [LINKEDIN_PARTNER_ID];

      // Load LinkedIn Insight Tag script
      const script = document.createElement('script');
      script.innerHTML = `
        (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
      `;
      document.head.appendChild(script);

      console.log('LinkedIn Insight Tag initialized with ID:', LINKEDIN_PARTNER_ID);
    } else {
      console.warn('LinkedIn Partner ID not set. Analytics will not be active.');
    }
  }
};

// Track custom events
export const trackMetaEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackLinkedInEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.lintrk) {
    window.lintrk('track', { conversion_id: eventName, ...parameters });
  }
};

// Initialize all pixels
export const initPixels = () => {
  initMetaPixel();
  initLinkedInPixel();
};
