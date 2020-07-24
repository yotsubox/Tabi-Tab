export class ChangesDetector {
  static _changed = false;
  static _onChangeListenersData = [];
  static _onSaveListenersData = [];

  static _listenersData = {
    onChange: ChangesDetector._onChangeListenersData,
    onSave: ChangesDetector._onSaveListenersData,
  };

  static haveChangesBeenMade() {
    // DEBUG
    console.log("haveChangesBeenMade", ChangesDetector._changed);

    return ChangesDetector._changed;
  }

  /**
   * Add listener, called when things have changed.
   * @param {"onChange" | "onSave"} type the event type.
   * @param {function} listener the function/method to call to
   * @param {object | null} thisArg the object to call method from (null if is a function)
   */
  static addEventListener(type, listener, thisArg, ...args) {
    ChangesDetector._listenersData[type].push({
      listener,
      thisArg,
      args,
    });
  }

  static _dispatchEvent(type) {
    const listenersData = ChangesDetector._listenersData[type];
    //callback
    for (const { listener, thisArg, args } of listenersData) {
      listener.apply(thisArg, args);
    }
  }

  /**
   * call to inform that changes have been made.
   * dispatch "onChange" event only if changes have not been made before.
   */
  static detected() {
    //only call once.
    if (ChangesDetector._changed) return;

    ChangesDetector._changed = true;

    ChangesDetector._dispatchEvent("onChange");
  }

  /**
   * call to inform that changes have been saved.
   * dispatch "onSave" event.
   */
  static resetState() {
    ChangesDetector._changed = false;

    ChangesDetector._dispatchEvent("onSave");
  }
}
