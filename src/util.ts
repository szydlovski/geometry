export function interpolateValue(from: number, to: number, percentage: number): number {
  return from + (to - from) * percentage;
}