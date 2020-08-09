const _objects = new Set();
/**
 * A stack that store objects needed to be saved (such as tab lists).
 */
export class SavableObjects {
  static debug() {
    console.log(_objects);
  }

  static add(saveable) {
    _objects.add(saveable);
  }

  static delete(object) {
    _objects.delete(object);
  }

  static *[Symbol.iterator]() {
    for (const savable of _objects) yield savable;
  }

  static clear() {
    _objects.clear();
  }
}
