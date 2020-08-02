export function addItemsToTabListFromURLs(tabList, urls) {
  for (const url of urls) {
    tabList.newItem(url);
  }
}
