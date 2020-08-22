export function assembleComponents(tabList) {
  tabList._itemContainer.append(tabList._futureItem);
  const decoration = tabList._decoration;

  tabList.append(
    tabList._minimizeButton,
    tabList._title,
    tabList._itemContainer,
    tabList._minimizePadding,
    decoration.margin
  );
}
