import instructionFunctions from './instructionFunctions';

const instructions = {
  add: {
    instructionFunction: instructionFunctions.arithmetic.add
  },
  addi: {
    instructionFunction: instructionFunctions.arithmetic.add
  },
  addu: {
    instructionFunction: instructionFunctions.arithmetic.add
  },
  and: {},
  andi: {},
  or: {},
  ori: {},
  sll: {},
  srl: {}
};

export function dispatchInstruction(opcode, restOfInstruction) {
  // TODO: implementation
}
