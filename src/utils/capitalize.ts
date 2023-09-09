export function capitalize(_str: string) {
  const str = _str;
  return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}
