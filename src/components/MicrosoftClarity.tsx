import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: any;
  }
}

const CLARITY_ID = "q5ll6jldt2";

const MicrosoftClarity = (): null => {
  useEffect(() => {
    try {
      // Add Clarity tracking code
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", CLARITY_ID);

      // Set tracking preferences
      window.clarity("set", "_uxa", "0"); // Disable automatic form tracking
      window.clarity("set", "optimize", "1"); // Enable optimization
      window.clarity("identify", "user_" + new Date().getTime()); // Set unique user ID
    } catch (error) {
      console.error('Error initializing Microsoft Clarity:', error);
    }
  }, []);

  return null;
};

export default MicrosoftClarity; 