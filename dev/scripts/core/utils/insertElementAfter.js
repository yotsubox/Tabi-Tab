/**
 * insert an element after a given target element
 * @param {HTMLElement} target element to insert after.
 * @param {HTMLElement} item item to insert.
 */
export function insertElementAfter(target, item) {
  const parent = target.parentElement;

  if (parent) {
    if (target.nextElementSibling)
      parent.insertBefore(item, target.nextElementSibling);
    else parent.appendChild(item);

    return;
  }

  throw ReferenceError(
    "target item does not have a parent, therefore can not be insert after."
  );
}
