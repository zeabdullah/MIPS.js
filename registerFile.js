/** This module defines each register and their containing `registerFile` data structure */

/**
 * A register in the register file map is an entry structured as:
 *
 * `key: 'string',
 *  value: 'int32'`
 */

// define the register file as a map of 32 registers
export const registerFile = new Map();
export const specialRegisterFile = new Map();

const REG_LABELS = [
  '$zero',
  '$at',
  '$v0',
  '$v1',
  '$a0',
  '$a1',
  '$a2',
  '$a3',
  '$t0',
  '$t1',
  '$t2',
  '$t3',
  '$t4',
  '$t5',
  '$t6',
  '$t7',
  '$s0',
  '$s1',
  '$s2',
  '$s3',
  '$s4',
  '$s5',
  '$s6',
  '$s7',
  '$t8',
  '$t9',
  '$k0',
  '$k1',
  '$gp',
  '$sp',
  '$fp',
  '$ra'
];
const SPECIAL_REG_LABELS = ['pc', 'pcnext', 'hi', 'lo'];

// instantiate all primary registers to zero
for (let i = 0; i < 32; i++) {
  registerFile.set(REG_LABELS[i], 0);
}

// instantiate all special registers to zero, including the program counter (pc) and pcnext
for (let i = 0; i < 4; i++) {
  specialRegisterFile.set(SPECIAL_REG_LABELS[i], 0);
}
