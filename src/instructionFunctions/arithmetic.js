export function add(val1, val2, unsigned = false) {
  return unsigned ? Math.abs(val1) + Math.abs(val2) : val1 + val2;
}

export function sub(val1, val2, unsigned = false) {
  return unsigned ? Math.abs(val1) - Math.abs(val2) : val1 - val2;
}

export function mult(val1, val2) {
  // TODO: implement it similar to how MIPS does it
  return val1 * val2;
}

export function divide(val1, val2) {
  // TODO: make it between integers only
  return [val1 % val2, val1 / val2];
}
