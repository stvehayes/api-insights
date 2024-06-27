export const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  } else {
    return Math.round(num).toString();
  }
};

export const calculatePercentage = (part, total) => {
  if (total === 0) return '0%';
  return ((part / total) * 100).toFixed(1) + '%';
};

export const convertMinutes = (minutes) => {
  if (minutes < 60) {
    return `${minutes} minutes`;
  } else if (minutes < 1441) {
    const hours = (minutes / 60).toFixed(0);
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  } else {
    const days = (minutes / 1440).toFixed(0);
    return `${days} day${days > 1 ? 's' : ''}`;
  }
};

export const convertHexToRGB = (hex, alpha = 1) => {
  hex = hex.replace(/^#/, '');

  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  if (alpha < 0) {
    alpha = 0;
  } else if (alpha > 1) {
    alpha = 1;
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
