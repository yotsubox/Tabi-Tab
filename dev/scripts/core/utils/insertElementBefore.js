/**
 * insert an element before a given target element
 * @param {HTMLElement} target element to insert before.
 * @param {HTMLElement} item item to insert.
 */
export function insertElementBefore(target, item) {
  const parent = target.parentElement;

  if (parent) {
    parent.insertBefore(item, target);
    return;
  }

  throw ReferenceError(
    `target item (${target.constructor.name}) does not have a parent, therefore can not be insert before.`
  );
}
