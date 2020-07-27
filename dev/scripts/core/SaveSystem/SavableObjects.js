let _stack = [];
/**
 * A stack that store objects needed to be saved (such as tab lists).
 */
export class SavableObjects {
  static add(saveable) {
    _stack.push(saveable);
  }

  static *[Symbol.iterator]() {
    for (const savable of _stack) yield savable;
  }

  static clear() {
    _stack = [];
  }
}
