export function sumOf(a, b) {
  return a + b;
}

export function substractOf(a, b) {
  return a - b;
}

export function multiplyOf(a, b) {
  return a * b;
}

export function divideOf(a, b) {
  return a / b;
}

export function areaOf(a, b) {
  if (a === undefined || b === undefined) {
    return 'value cannot be undefined';
  }

  if (Math.sign(a) === -1 || Math.sign(b) === -1) {
    return 'value cannot be negative';
  }

  return a * b;
}