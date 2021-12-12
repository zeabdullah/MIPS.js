import * as lineReader from 'line-reader';
import { dispatchInstruction } from './src/instructionList.js';

main();

function main() {
  if (!process.argv[2]) {
    console.log('[ERR]: Invalid Arguments, Expected a filename');
    return;
  }

  // const labels = [];
  let lineNum = 1;
  lineReader.eachLine(process.argv[2], (line, last) => {
    // Next line if current line is empty or is a comment
    if (!line || isAComment(line)) return;

    // if (isALabel(line)) {
    //   storeLabel(line)
    //   labels.push({ label: , lineNum });
    // }

    const lineSeparated = line.split(' ');

    const opcode = lineSeparated[0];
    const operands = lineSeparated.slice(1).join('');
    dispatchInstruction(opcode, operands);

    lineNum++;
  });

  // function storeLabel(line) {
  //   const splitLine = line.split('');

  // }
}

/* Basic (and not complete) checking if a line is a comment.
  Doesn't handle comments that don't come at the start. */
function isAComment(line) {
  return line[0] === '#' || line.slice(0, 2) === '//' ? true : false;
}

// Checks if a given line is a MIPS assembly label
// function isALabel(line) {
//   const splitLine = line.split(' ');
//   return splitLine[0] && splitLine[1] === ':' && splitLine.length === 2 ? true : false;
// }
