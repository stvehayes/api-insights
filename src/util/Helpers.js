export const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

export const calculatePercentage = (part, total) => {
  if (total === 0) return '0%';
  return ((part / total) * 100).toFixed(1) + '%';
};
