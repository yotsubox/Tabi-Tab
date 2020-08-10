export function addEventListeners(deleteButton) {
  //mousedown happens before click (click is after blur, which hides the button away)
  deleteButton.addEventListener("mousedown", (e) => {
    e.preventDefault();

    //0 = left click
    if (e.button !== 0) return;

    focusOnNextItem(deleteButton);
    deleteButton.deleteItem();
  });
}

function focusOnNextItem(deleteButton) {
  const nextItem = deleteButton.getOwner().next();
  if (nextItem) nextItem.getContentBox().focus();
}
