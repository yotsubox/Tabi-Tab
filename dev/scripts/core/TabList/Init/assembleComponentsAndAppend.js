export function assembleComponentsAndAppend(tabList, appendTarget) {
  const itemContainer = tabList.getItemContainer();
  itemContainer.append(tabList.getFutureItem());

  tabList.append(
    tabList.getMinimizeButton(),
    tabList.getTitle(),
    itemContainer
  );
  appendTarget.appendChild(tabList);
}
