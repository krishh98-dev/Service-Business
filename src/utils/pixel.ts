export const trackPixelEvent = (eventName: string, data?: any) => {
  try {
    if (window.fbq) {
      window.fbq('track', eventName, data);
      console.log('Facebook Pixel Event Tracked:', eventName, data || '');
    } else {
      console.warn('Facebook Pixel not initialized yet');
      // Retry after a short delay
      setTimeout(() => {
        if (window.fbq) {
          window.fbq('track', eventName, data);
          console.log('Facebook Pixel Event Tracked (retry):', eventName, data || '');
        }
      }, 1000);
    }
  } catch (error) {
    console.error('Error tracking Facebook Pixel event:', error);
  }
}; 