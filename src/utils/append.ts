export function append<T = never>(elt: T, array: T[]): T[] {
  return [...array, elt];
}
