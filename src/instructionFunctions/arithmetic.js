export function add(val1, val2, unsigned = false) {
  return unsigned ? Math.abs(val1) + Math.abs(val2) : val1 + val2;
}

export function sub(val1, val2, unsigned = false) {
  return unsigned ? Math.abs(val1) - Math.abs(val2) : val1 - val2;
}

export function mult(val1, val2) {
  // TODO: implement it similar to how MIPS does it
  // i.e. hi-lo registers
  return val1 * val2;
}

export function div(val1, val2) {
  // [remainder (hi), quotient (lo)]
  const remainder = val1 % val2;
  const quotient = Math.floor(val1 / val2);

  return [remainder, quotient];
}
