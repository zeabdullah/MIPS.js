const instructions = {
  add: {
    instructionFunction: add
  },
  addi: {
    instructionFunction: add
  },
  addu: {
    instructionFunction: addUnsigned
  }
};

function add(val1, val2) {
  return val1 + val2;
}

function addUnsigned(val1, val2) {
  return Math.abs(val1) + Math.abs(val2);
}

// multiply is not easy. maybe keep it for later?

function sub(val1, val2) {
  return val1 - val2;
}

function subUnsigned(val1, val2) {
  return Math.abs(val1) - Math.abs(val2);
}

// TODO: the rest of the arithmetic operations
