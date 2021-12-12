import { specialRegisterFile } from '../registerFile.js';

export function mfhi() {
  return specialRegisterFile.get('hi');
}

export function mflo() {
  return specialRegisterFile.get('lo');
}
