import * as lineReader from 'line-reader';
import { dispatchInstruction } from './src/instructionList.js';
import { registerFile } from './src/registerFile.js';
// import { registerFile, specialRegisterFile } from './src/registerFile';

if (!process.argv[2]) console.log('[ERR]: Invalid Arguments, Expected a filename');

let lineNum = 1;
lineReader.eachLine(process.argv[2], (line, last) => {
  const lineSeparated = line.split(' ');

  const opcode = lineSeparated[0];
  const operands = lineSeparated.slice(1).join('');
  dispatchInstruction(opcode, operands);

  lineNum++;
});
