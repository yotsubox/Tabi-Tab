import { Enum } from "./Utils.js";

export class EventManager {
  constructor(eventEnum = null) {
    this._eventTypeToHandlers = new Map();
    if (eventEnum) {
      if (eventEnum instanceof Enum) this.registerEvents(eventEnum);
      else throw TypeError("given argument must be an Enum.");
    }
  }

  /**
   * @param {Enum} eventEnum
   */
  registerEvents(eventEnum) {
    for (const eventType of Object.values(eventEnum)) {
      if (!this._eventTypeToHandlers.has(eventType)) this._eventTypeToHandlers.set(eventType, []);
    }
  }

  addEventListener(eventType, listener) {
    this._checkIfEventTypeIsRegistered(eventType);

    this._eventTypeToHandlers.get(eventType).push(listener);
  }

  triggerEvent(eventType) {
    this._checkIfEventTypeIsRegistered(eventType);

    const listeners = this._eventTypeToHandlers.get(eventType);
    for (const listener of listeners) listener();
  }

  _checkIfEventTypeIsRegistered(eventType) {
    if (!this._eventTypeToHandlers.has(eventType))
      throw new SyntaxError(`Event of type ${eventType} is not registered.`);
  }
}
