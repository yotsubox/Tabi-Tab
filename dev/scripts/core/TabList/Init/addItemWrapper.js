import { createElement } from "../../Utils.js";
export function addItemWrapper(tabList) {
  const itemWrapper = createElement("div", "list__item-wrapper");
  tabList.appendChild(itemWrapper);

  return itemWrapper;
}
