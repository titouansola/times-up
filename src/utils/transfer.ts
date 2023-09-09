export function transfer<T = never>(
  index: number,
  _source: T[],
  _target: T[]
): [T[], T[]] {
  const source = [..._source];
  const target = [..._target];
  target.push(...source.splice(index, 1));
  return [source, target];
}
