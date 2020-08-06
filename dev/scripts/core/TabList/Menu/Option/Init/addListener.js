export function addListener(listener, thisArg = null, ...args) {
  this._listenersData.push({ listener, thisArg, args });
}
