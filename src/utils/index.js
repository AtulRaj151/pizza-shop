export const isObjectHasValues = () => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
      }
    
      return Object.keys(obj).length > 0;
}