import { createElement } from "../Utils.js";
import { ChangesDetector } from "../SaveSystem/ChangesDetector.js";
import { SubmitButton } from "./FutureItem/submitButton.js";
import { ContentBox } from "./FutureItem/ContentBox.js";

export class FutureItem {
  static Create(tabList) {
    const futureItem = createElement("div", "list__item list__future-item");
    futureItem._owner = tabList;
    futureItem._contentBox = ContentBox.Create(futureItem);
    futureItem._submitButton = SubmitButton.Create(futureItem);

    addFunctionalities(futureItem);

    // futureItem.append(futureItem._contentBox, futureItem._submitButton);
    futureItem.append(futureItem._contentBox, futureItem._submitButton);
    return futureItem;
  }
}

function addFunctionalities(futureItem) {
  futureItem.toggleUnorderedListStyle = function () {
    futureItem.classList.toggle("list__future-item--offset-left");
  };

  futureItem.toggleButtons = function () {
    futureItem._submitButton.classList.toggle("--hidden");
  };

  futureItem.newItemIfNotEmpty = function () {
    const contentBox = futureItem._contentBox;

    const text = contentBox.textContent.trim();
    if (!text.length) return;

    ChangesDetector.detected();
    //transfer text to newly created item and append.
    futureItem._owner.newItem(text);
    contentBox.textContent = "";
  };

  futureItem.focusOnPreviousElem = function () {
    const tabList = futureItem._owner;
    const itemCount = tabList.getItemCount();
    if (itemCount) tabList.getItems()[itemCount - 1].getContentBox().focus();
    else tabList.getTitle().focus();
  };

  futureItem.getContentBox = function () {
    return futureItem._contentBox;
  };
}
