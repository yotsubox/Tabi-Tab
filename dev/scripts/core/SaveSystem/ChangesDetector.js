let _changed = false;
const _listenersData = {
  onChange: [],
  onSave: [],
};

/**
 * Class that detects changes and dispatches events related to changes.
 */
export class ChangesDetector {
  static haveChangesBeenMade() {
    return _changed;
  }

  /**
   * Add listener, called when things have changed.
   * @param {"onChange" | "onSave"} type the event type.
   * @param {function} listener the function/method to call to
   * @param {object | null} thisArg the object to call method from (null if is a function)
   */
  static addEventListener(type, listener, thisArg, ...args) {
    _listenersData[type].push({
      listener,
      thisArg,
      args,
    });
  }

  static _dispatchEvent(type) {
    const listenersData = _listenersData[type];
    //callback
    for (const { listener, thisArg, args } of listenersData)
      listener.apply(thisArg, args);
  }

  /**
   * call to inform that changes have been made.
   * dispatch "onChange" event only if changes have not been made before.
   */
  static detected() {
    //only call once.
    if (_changed) return;

    _changed = true;

    ChangesDetector._dispatchEvent("onChange");
  }

  /**
   * call to inform that changes have been saved.
   * dispatch "onSave" event.
   */
  static resetState() {
    _changed = false;

    ChangesDetector._dispatchEvent("onSave");
  }

  static isKeyCauseChanges(key) {
    if (
      key === "Control" ||
      key === "Shift" ||
      key === "Enter" ||
      key === "Alt" ||
      key === "Tab" ||
      key === "CapsLock" ||
      key === "ArrowUp" ||
      key === "ArrowDown" ||
      key === "ArrowLeft" ||
      key === "ArrowRight"
    )
      return false;

    return true;
  }
}
