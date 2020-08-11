import { createElement } from "../Utils.js";

export class InfoForm {
  static Create() {
    const infoForm = createElement("div", "info-form --collapse");
    addFunctionalities(infoForm);
    addText(infoForm);

    return infoForm;
  }
}

function addFunctionalities(infoForm) {
  infoForm.toggle = function () {
    infoForm.classList.toggle("--collapse");
  };
}

function addText(infoForm) {
  const webAppName = createElementWithTextContent(
    "p",
    "",
    "Tabi Tab - Personal Tab List."
  );

  const authorText = createElementWithTextContent(
    "p",
    "",
    "Made by Yotsubox (2020)"
  );

  const instruction = createElementWithTextContent(
    "pre",
    "",
    "To change background:\n1. Go to ./dev/images.\n2. Replace content of 'bg.png' with your desire image.\n3. Recompile."
  );

  infoForm.append(webAppName, authorText, instruction);
}

function createElementWithTextContent(tagName, className, textContent) {
  const elem = createElement(tagName, className);
  elem.textContent = textContent;
  return elem;
}
