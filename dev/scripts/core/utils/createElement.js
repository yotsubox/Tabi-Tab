/**
 *
 * @param {String} tagName
 * @param {String} className
 * @return {HTMLElement}
 */
export function createElement(tagName, className = "") {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}
