const quantifiers = new Set(['latest', 'earliest', 'pending']);

export function hex(value: string  | number) {
  if (typeof value === 'string') {
    return value.startsWith('0x') ? value : `0x${value}`;
  }
  return `0x${value.toString(16)}`;
}

export function hexOrQuantifier(value: string | number) {
  if (typeof value === 'string' && quantifiers.has(value)) return value;
  return hex(value);
}
