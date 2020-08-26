import { createElement } from "../Utils.js";

const classByType = ["info-form__h", "info-form__s", "info-form__p", "info-form__p-bold"];

export class InfoForm {
  static Create() {
    const infoForm = createElement("div", "info-form --collapse");
    addFunctionalities(infoForm);

    return infoForm;
  }
}

function addFunctionalities(infoForm) {
  infoForm.toggle = function () {
    infoForm.classList.toggle("--collapse");
  };

  infoForm.addText = function (type, text, parent = infoForm) {
    let lines = text.match(/.+/g); //everything except newline
    if (!lines) lines = [""];
    const elems = [];
    for (const line of lines) {
      const textElement = createElement("div", classByType[type]);
      textElement.textContent = line;

      parent.append(textElement);
      elems.push(textElement);
    }

    return elems;
  };
}

function createElementWithTextContent(tagName, className, textContent) {
  const elem = createElement(tagName, className);
  elem.textContent = textContent;
  return elem;
}
