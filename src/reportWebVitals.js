/* eslint-disable no-console */
const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      const webVitals = await import('web-vitals');
      const {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB,
      } = webVitals;

      const results = await Promise.all([
        getCLS(onPerfEntry),
        getFID(onPerfEntry),
        getFCP(onPerfEntry),
        getLCP(onPerfEntry),
        getTTFB(onPerfEntry),
      ]);

      return results;
    } catch (error) {
      console.error(error);
    }
  }
};

export default reportWebVitals;
