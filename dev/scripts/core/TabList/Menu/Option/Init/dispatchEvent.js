export function dispatchEvent() {
  for (const { listener, thisArg, args } of this._listenersData)
    listener.apply(thisArg, args);
}
