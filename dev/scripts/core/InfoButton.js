import { InfoForm } from "./InfoButton/InfoForm.js";

export class InfoButton {
  static FromExistingElem(infoButton) {
    initProperties(infoButton);
    addFunctionalities(infoButton);
    addEventListeners(infoButton);
  }
}

function initProperties(infoButton) {
  infoButton._info = InfoForm.Create();

  document.body.append(infoButton._info);
}

function addFunctionalities(infoButton) {
  infoButton.showInfo = function () {
    this._info.toggle("--collapse");
  };
}

function addEventListeners(infoButton) {
  infoButton.addEventListener("click", infoButton.showInfo);
}
