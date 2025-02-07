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
    try {
      // Initialize fbq function if not already initialized
      if (typeof window.fbq !== 'function') {
        window.fbq = function() {
          window.fbq.q = window.fbq.q || [];
          window.fbq.q.push(arguments);
        };
        window._fbq = window._fbq || window.fbq;
      }

      // Add Facebook Pixel script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.setAttribute('data-cookieconsent', 'marketing');
      
      // Add script to document
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.head.appendChild(script);
      }

      // Initialize Facebook Pixel
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');

      // Clean up function
      return () => {
        // Remove the script when component unmounts
        const pixelScript = document.querySelector('script[src="https://connect.facebook.net/en_US/fbevents.js"]');
        if (pixelScript && pixelScript.parentNode) {
          pixelScript.parentNode.removeChild(pixelScript);
        }
      };
    } catch (error) {
      console.error('Error initializing Facebook Pixel:', error);
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