import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: any;
  }
}

const CLARITY_ID = "q5ll6jldt2";

const MicrosoftClarity = (): null => {
  useEffect(() => {
    // Don't initialize if already loaded
    if (typeof window.clarity === 'function') return;

    try {
      // Initialize clarity function
      window.clarity = window.clarity || function(...args: any[]) {
        (window.clarity.q = window.clarity.q || []).push(args);
      };

      // Create and insert script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
      script.setAttribute('data-cookieconsent', 'statistics');
      
      // Enable analytics by default
      window.clarity('consent', true);
      
      // Add script to document
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.head.appendChild(script);
      }
    } catch (error) {
      console.error('Error initializing Microsoft Clarity:', error);
    }
  }, []);

  return null;
};

export default MicrosoftClarity; 