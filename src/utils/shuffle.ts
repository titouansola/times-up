const HALF = 0.5;
export function shuffle<T = never>(array: T[]): T[] {
  return [...array].sort(() => HALF - Math.random());
}
