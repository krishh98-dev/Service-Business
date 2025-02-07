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
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

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