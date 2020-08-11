export function assembleComponentsAndAppend(tabList, appendTarget) {
  tabList._itemContainer.append(tabList._futureItem);
  const decoration = tabList._decoration;

  tabList.append(
    tabList._minimizeButton,
    tabList._title,
    tabList._itemContainer,
    tabList._minimizePadding,
    decoration.margin
  );
  
  appendTarget.appendChild(tabList);
}
