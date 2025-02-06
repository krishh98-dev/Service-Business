import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const PIXEL_ID = '419577397226702';

const FacebookPixel = (): JSX.Element => {
  useEffect(() => {
    // Check if pixel is already initialized
    if (typeof window.fbq === 'function') return;

    // Initialize fbq function first
    window.fbq = window.fbq || function() {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
    window._fbq = window._fbq || window.fbq;

    // Add data-cookieconsent attribute
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.setAttribute('data-cookieconsent', 'marketing');
    
    // Initialize Facebook Pixel
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');

    // Add script to document
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }
  }, []);

  return (
    <noscript>
      <img 
        height={1}
        width={1}
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        alt="Facebook Pixel"
        data-cookieconsent="marketing"
      />
    </noscript>
  );
};

export default FacebookPixel; 