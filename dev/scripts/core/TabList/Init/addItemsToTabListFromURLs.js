export function addItemsToTabListFromURLs(tabList, urls) {
  for (const url of urls) {
    const item = tabList.newItem(url);
    tabList._itemContainer.insertBefore(item, tabList._futureItem);
  }
}
