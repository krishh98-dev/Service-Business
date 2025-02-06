import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: any;
  }
}

const CLARITY_ID = "q5ll6jldt2";

const MicrosoftClarity = (): null => {
  useEffect(() => {
    if (window.clarity) return;

    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
      script.setAttribute('data-cookieconsent', 'statistics');

      // Initialize with privacy settings
      window.clarity = window.clarity || function(...args: any[]) {
        (window.clarity.q = window.clarity.q || []).push(args);
      };

      window.clarity('consent', {
        analytics: false,
        advertising: false
      });

      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    } catch (error) {
      console.error('Error loading Clarity:', error);
    }
  }, []);

  return null;
};

export default MicrosoftClarity; 