export function formatNumberToPercentage(value: number) {
  const percentage = value * 100;
    return `${percentage.toFixed(0)}%`;
  }
  