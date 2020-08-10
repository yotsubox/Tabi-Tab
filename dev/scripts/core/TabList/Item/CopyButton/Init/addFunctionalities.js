import { createElement } from "../../../../Utils.js";

export function addFunctionalities(copyButton) {
  copyButton.getOwner = function () {
    return this._owner;
  };

  copyButton.copyToClipboard = function () {
    let dummy = createElement("input");
    document.body.appendChild(dummy);

    dummy.value = this._owner.getContent();
    dummy.select();
    document.execCommand("copy");

    //select make contentBox lose focus.
    this._owner.getContentBox().focus();
    document.body.removeChild(dummy);
  };
}
