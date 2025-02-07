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
      // Initialize Facebook Pixel
      !(function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      // Initialize with your Pixel ID
      window.fbq('init', PIXEL_ID);
      
      // Track PageView
      window.fbq('track', 'PageView');

      // Track ViewContent for the current page
      window.fbq('track', 'ViewContent', {
        content_name: document.title,
        content_type: 'website',
      });

      // Add event listeners for tracking
      const trackEvent = (eventName: string) => {
        window.fbq('track', eventName);
        console.log('Facebook Pixel Event:', eventName); // For debugging
      };

      // Track clicks on all checkout/purchase buttons
      const trackableElements = document.querySelectorAll(
        'a[href*="cashfree.com"], button:contains("Get Started"), a:contains("Get Started")'
      );

      trackableElements.forEach(element => {
        element.addEventListener('click', () => {
          trackEvent('InitiateCheckout');
        });
      });

      // Track scroll depth
      let hasTrackedScroll = false;
      const handleScroll = () => {
        if (!hasTrackedScroll && window.scrollY > window.innerHeight) {
          trackEvent('ScrollDepth');
          hasTrackedScroll = true;
        }
      };
      window.addEventListener('scroll', handleScroll);

      // Track time spent
      setTimeout(() => {
        trackEvent('TimeSpent');
      }, 30000); // Track after 30 seconds

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        trackableElements.forEach(element => {
          element.removeEventListener('click', () => trackEvent('InitiateCheckout'));
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