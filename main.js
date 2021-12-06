import * as lineReader from 'line-reader';
// import { registerFile, specialRegisterFile } from './src/registerFile';

// read .testfile
let lineNum = 0;
lineReader.eachLine('.TESTFILE', (line, last) => {
  const lineSeparated = line.split(' ');

  const opcode = lineSeparated[0];
  const restOfInstruction = lineSeparated.slice(1).join('');
  dispatchInstruction(opcode, restOfInstruction);

  lineNum++;
});

// e.g.: addi $t0, $s0, $s1
// steps: split string into the instruction (addi) and 'rest' ($t0, $s0, $s1)
