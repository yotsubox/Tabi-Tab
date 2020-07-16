/**
 * A stack that store objects needed to be saved (such as tab lists).
 */
export class SavableObjects {
  static _stack = [];

  static add(saveable) {
    this._stack.push(saveable);
  }

  static *[Symbol.iterator]() {
    for (const savable of this._stack) yield savable;
  }

  static clear() {
    this._stack = [];
  }
}
