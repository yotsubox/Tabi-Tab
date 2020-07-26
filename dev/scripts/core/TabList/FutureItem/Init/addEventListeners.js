export function addEventListeners(list, futureItem) {
  futureItem.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    //prevent line-break
    e.preventDefault();

    futureItem.textContent = futureItem.textContent.trim();

    //if content is empty
    if (!futureItem.textContent.length) {
      return;
    }

    newItem(e, futureItem, list);
  });

  futureItem.addEventListener("blur", () => {
    futureItem.textContent = futureItem.textContent.trim();
  });

  function newItem(e, futureItem, tabList) {
    const item = tabList.newItem();

    //transfer text to newly created item and append.
    const itemContent = item.getContentElem();
    itemContent.textContent = futureItem.textContent;
    futureItem.textContent = "";

    tabList.getItemWrapper().insertBefore(item, futureItem);
  }
}
