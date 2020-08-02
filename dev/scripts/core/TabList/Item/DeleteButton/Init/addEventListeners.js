export function addEventListeners(deleteButton) {
  //mousedown happens before click (click is after blur, which hides the button away)
  deleteButton.addEventListener("mousedown", (e) => {
    e.preventDefault();
    focusOnNextItem(deleteButton);
    deleteButton.deleteItem();
  });
}

function focusOnNextItem(deleteButton) {
  const nextItem = deleteButton.getOwner().next();
  if (nextItem) nextItem.getContentBox().focus();
}
