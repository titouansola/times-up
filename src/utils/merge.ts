export function merge<T = never>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}
