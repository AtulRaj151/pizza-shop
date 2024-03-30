export const isObjectHasValues = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
      }
    
    return Object.values(obj).every(Boolean)
}

export const  formatTime = (totalSeconds)=> {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = [];
  if (hours > 0) {
    formattedTime.push(`${hours} hour${hours > 1 ? 's' : ''}`);
  }
  if (minutes > 0) {
    formattedTime.push(`${minutes} min${minutes > 1 ? 's' : ''}`);
  }
  if (seconds > 0) {
    formattedTime.push(`${seconds} sec${seconds > 1 ? 's' : ''}`);
  }

  return formattedTime.join(', ');
}