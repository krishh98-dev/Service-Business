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
      // Add Facebook Pixel base code
      const addPixelScript = (f: Window, b: Document, e: string, v: string, n: string, t: HTMLScriptElement, s: Element | null) => {
        if (f.fbq) return;
        
        const fbq = function() {
          fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
        };
        
        f.fbq = fbq;
        f.fbq.push = fbq;
        f.fbq.loaded = true;
        f.fbq.version = '2.0';
        f.fbq.queue = [];
        
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        
        s = b.getElementsByTagName(e)[0];
        s?.parentNode?.insertBefore(t, s);
      };

      // Initialize the pixel
      addPixelScript(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js',
        'fbq',
        document.createElement('script'),
        document.getElementsByTagName('script')[0]
      );

      // Initialize Facebook Pixel
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');

      // Track when someone starts the checkout
      const trackCheckout = () => {
        window.fbq('track', 'InitiateCheckout');
      };

      // Add event listeners to all checkout buttons
      const checkoutButtons = document.querySelectorAll('a[href*="cashfree.com/forms/service-business"]');
      checkoutButtons.forEach(button => {
        button.addEventListener('click', trackCheckout);
      });

      // Cleanup
      return () => {
        checkoutButtons.forEach(button => {
          button.removeEventListener('click', trackCheckout);
        });
      };
    } catch (error) {
      console.error('Error initializing Facebook Pixel:', error);
    }
  }, []);

  return (
    <>
      <noscript>
        <img 
          height={1}
          width={1}
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Facebook Pixel"
        />
      </noscript>
    </>
  );
};

export default FacebookPixel; 