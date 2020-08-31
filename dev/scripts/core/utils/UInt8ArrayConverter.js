export class UInt8ArrayConverter {
  static fromBinaryString(str) {
    const binArray = str.match(/.{1,8}/g);
    const array = binArray.map((binary) => parseInt(+binary, 2));
    return Uint8Array.from(array);
  }
}
