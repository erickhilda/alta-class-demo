export function toCamelCase(str) {
  return str.replace(/[-_](\w)/g, (match, p1) => p1.toUpperCase());
}

export function toSnakcCase(str) {
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}
