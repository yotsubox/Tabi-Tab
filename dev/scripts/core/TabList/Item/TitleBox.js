import { createElement } from "../../Utils/createElement.js";
import { addFunctionalities } from "./TitleBox/Init.js";

export class TitleBox {
  static Create(item) {
    const titleBox = createElement("div", "list__item-title-box --hidden");
    item.append(titleBox);
    titleBox._owner = item;

    addFunctionalities(titleBox);

    titleBox.updateTitle();

    return titleBox;
  }
}
