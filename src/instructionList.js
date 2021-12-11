import Table from 'cli-table';
import instructionFunctions from './instructionFunctions/index.js';
import { registerFile } from './registerFile.js';
const { arithmetic, logical, comparison } = instructionFunctions;

const INSTRUCTIONS = {
  add: {
    interpretOperands: operandsStr => {
      const [rd, rs, rt] = operandsStr.split(',');
      const result = INSTRUCTIONS.add.instructionFunction(
        registerFile.get(rs),
        registerFile.get(rt)
      );

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: arithmetic.add
  },
  addi: {
    interpretOperands: operandsStr => {
      const [rd, rs, imm] = operandsStr.split(',');
      const result = INSTRUCTIONS.addi.instructionFunction(registerFile.get(rs), Number(imm));
      updateAndPrintRegister(rd, result);
    },
    instructionFunction: arithmetic.add
  },
  addu: {
    interpretOperands: operandsStr => {
      const [rd, rs, rt] = operandsStr.split(',');
      const result = INSTRUCTIONS.addu.instructionFunction(
        registerFile.get(rs),
        registerFile.get(rt),
        true
      );

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: arithmetic.add
  },
  addiu: {
    interpretOperands: operandsStr => {
      const [rd, rs, imm] = operandsStr.split(',');
      const result = INSTRUCTIONS.addiu.instructionFunction(
        registerFile.get(rs),
        Number(imm),
        true
      );

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: arithmetic.add
  },
  sub: {
    interpretOperands: operandsStr => {
      const [rd, rs, rt] = operandsStr.split(',');
      const result = INSTRUCTIONS.sub.instructionFunction(
        registerFile.get(rs),
        registerFile.get(rt)
      );

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: arithmetic.sub
  },
  subu: {
    interpretOperands: operandsStr => {
      const [rd, rs, rt] = operandsStr.split(',');
      const result = INSTRUCTIONS.subu.instructionFunction(
        registerFile.get(rs),
        registerFile.get(rt),
        true
      );

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: arithmetic.sub
  },
  and: {
    interpretOperands: operandsStr => {
      const [rd, rs, rt] = operandsStr.split(',');
      const result = INSTRUCTIONS.and.instructionFunction(
        registerFile.get(rs),
        registerFile.get(rt)
      );

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: logical.AND
  },
  andi: {
    interpretOperands: operandsStr => {
      const [rd, rs, imm] = operandsStr.split(',');
      const result = INSTRUCTIONS.andi.instructionFunction(registerFile.get(rs), Number(imm));

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: logical.AND
  },
  or: {
    interpretOperands: operandsStr => {
      const [rd, rs, rt] = operandsStr.split(',');
      const result = INSTRUCTIONS.or.instructionFunction(
        registerFile.get(rs),
        registerFile.get(rt)
      );

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: logical.OR
  },
  ori: {
    interpretOperands: operandsStr => {
      const [rd, rs, imm] = operandsStr.split(',');
      const result = INSTRUCTIONS.ori.instructionFunction(registerFile.get(rs), Number(imm));

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: logical.OR
  },
  sll: {
    interpretOperands: operandsStr => {
      const [rd, rs, shamt] = operandsStr.split(',');
      const result = INSTRUCTIONS.sll.instructionFunction(registerFile.get(rs), shamt);

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: logical.shiftLeft
  },
  srl: {
    interpretOperands: operandsStr => {
      const [rd, rs, shamt] = operandsStr.split(',');
      const result = INSTRUCTIONS.srl.instructionFunction(registerFile.get(rs), shamt);

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: logical.shiftRight
  },
  slt: {
    interpretOperands: operandsStr => {
      const [rd, rs, rt] = operandsStr.split(',');
      const result = INSTRUCTIONS.slt.instructionFunction(
        registerFile.get(rs),
        registerFile.get(rt)
      );

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: comparison.SetOnLessThan
  },
  slti: {
    interpretOperands: operandsStr => {
      const [rd, rs, imm] = operandsStr.split(',');
      const result = INSTRUCTIONS.slti.instructionFunction(registerFile.get(rs), imm);

      updateAndPrintRegister(rd, result);
    },
    instructionFunction: comparison.SetOnLessThan
  }
};

export function dispatchInstruction(opcode, operands) {
  console.log('\n\nINSTRUCTION: %s %s', opcode, operands);

  INSTRUCTIONS[opcode]?.interpretOperands(operands);
}

function updateAndPrintRegister(regName, newVal) {
  if (regName == '$zero') {
    console.log('[ERR]: $zero cannot be written to');
    return;
  }

  const oldVal = registerFile.get(regName);

  registerFile.set(regName, newVal);

  // instantiate
  const table = new Table({
    head: ['Reg Name', 'Old Value', 'New Value'],
    colWidths: [11, 22, 22]
  });

  // add table row
  table.push([regName, oldVal, newVal]);

  // print table
  console.log(table.toString());
}
