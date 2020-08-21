import { EventManager } from "../EventManager.js";
import { EventType } from "./ChangesDetector/EventType.js";

let _changed = false;
const _eventManager = new EventManager();
_eventManager.registerEvents(EventType);

/**
 * Class that detects changes and dispatches events related to changes.
 */
export class ChangesDetector {
  static hasChangesBeenMade() {
    return _changed;
  }

  /**
   * Add listener, called when things have changed.
   * @param {"onChange" | "onSave"} type the event type.
   * @param {function} listener the function/method to call to
   * @param {object | null} thisArg the object to call method from (null if is a function)
   */
  static addEventListener(eventType, listener) {
    _eventManager.addEventListener(eventType, listener);
  }

  /**
   * call to inform that changes have been made.
   * dispatch "onChange" event only if changes have not been made before.
   */
  static detected() {
    //only call once.
    if (_changed) return;

    _changed = true;

    _eventManager.triggerEvent(EventType.CHANGED);
  }

  /**
   * call to inform that changes have been saved.
   * dispatch "onSave" event.
   */
  static resetState() {
    _changed = false;

    _eventManager.triggerEvent(EventType.SAVED);
  }

  static isKeyboardEventCauseChanges(event) {
    const key = event.key;
    if (event.altKey || event.ctrlKey) return false;

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
