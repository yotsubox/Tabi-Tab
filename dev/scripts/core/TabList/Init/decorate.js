import { Margin } from "../Decoration.js";

export function decorate(tabList) {
  const decoration = {};
  decoration.margin = Margin.Create(tabList);

  return decoration;
}
