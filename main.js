import * as fs from 'fs';
import { registerFile, specialRegisterFile } from './registerFile.js';

// read .testfile
const sampleTxtFile = fs.readFileSync('.TESTFILE', 'utf-8');

// e.g.: addi $t0, $s0, $s1
// steps: split string into the instruction (addi) and 'rest' ($t0, $s0, $s1)
