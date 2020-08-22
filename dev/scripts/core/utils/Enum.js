export class Enum {
  static Create(...list) {
    const enumObj = {};
    Object.setPrototypeOf(enumObj, Enum.prototype);

    let i = 0;
    for (const item of list) {
      enumObj[item] = i++;
    }

    return Object.freeze(enumObj);
  }
}
