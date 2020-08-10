export function addItemsToTabListFromItemContents(tabList, itemContents) {
  for (const content of itemContents) {
    tabList.newItem(content);
  }
}
