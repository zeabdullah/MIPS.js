import * as lineReader from 'line-reader';
// import { registerFile, specialRegisterFile } from './src/registerFile';

// read .testfile
lineReader.eachLine('.TESTFILE', (line, last) => {
  console.log(line);
});

// e.g.: addi $t0, $s0, $s1
// steps: split string into the instruction (addi) and 'rest' ($t0, $s0, $s1)
