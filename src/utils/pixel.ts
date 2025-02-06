export const trackPixelEvent = (eventName: string, data?: any) => {
  if (window.fbq) {
    window.fbq('track', eventName, data);
  }
}; 