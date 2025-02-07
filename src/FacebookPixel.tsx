import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

interface FbqFunction {
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  push?: (...args: any[]) => void;
  loaded?: boolean;
  version?: string;
  (...args: any[]): void;
}

const PIXEL_ID = '419577397226702';

const FacebookPixel = (): JSX.Element => {
  useEffect(() => {
    try {
      // Add Facebook Pixel base code
      const addPixelScript = (f: Window, b: Document, e: string, v: string) => {
        if (f.fbq) return;
        
        const fbq = function(this: FbqFunction, ...args: any[]) {
          if (this.callMethod) {
            this.callMethod.apply(this, args);
          } else {
            this.queue?.push(args);
          }
        } as FbqFunction;
        
        fbq.queue = [];
        fbq.loaded = true;
        fbq.version = '2.0';
        
        f.fbq = fbq;
        f._fbq = fbq;

        const script = b.createElement('script') as HTMLScriptElement;
        script.async = true;
        script.src = v;
        
        const firstScript = b.getElementsByTagName(e)[0];
        firstScript?.parentNode?.insertBefore(script, firstScript);
      };

      // Initialize the pixel
      addPixelScript(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
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