export function assembleComponentsAndAppend(tabList, appendTarget) {
  tabList._itemContainer.append(tabList._futureItem);

  tabList.append(
    tabList._minimizeButton,
    tabList._title,
    tabList._itemContainer,
    tabList._minimizePadding
  );
  appendTarget.appendChild(tabList);
}
