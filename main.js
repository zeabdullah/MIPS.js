import * as lineReader from 'line-reader';
import { dispatchInstruction } from './src/instructionList.js';

main();

function main() {
  if (!process.argv[2]) {
    console.log('[ERR]: Invalid Arguments, Expected a filename');
    return;
  }

  lineReader.eachLine(process.argv[2], (line, last) => {
    const lineSeparated = line.split(' ');

    const opcode = lineSeparated[0];
    const operands = lineSeparated.slice(1).join('');
    dispatchInstruction(opcode, operands);
  });
}
