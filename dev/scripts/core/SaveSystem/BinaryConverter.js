export class BinaryConverter {
  /**
   * Convert a string into it's binary form.
   * @param {String} str
   */
  static fromString(str) {
    const byteArray = new TextEncoder().encode(str);
    console.log(byteArray);

    const binaryString = byteArray.reduce((accumulator, byte) => accumulator + byte.toString(2).padStart(8, "0"), "");

    console.log(binaryString);
    return binaryString;
  }
}
