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

  const instructions = createElementWithTextContent(
    "pre",
    "",
    "Tab List:\n" +
      " + 'Right click' to open menu.\n\n" +
      "When edit item:\n" +
      " + 'Up/down arrow' to edit previous/next item.\n" +
      " + 'Alt + Up/down arrow' to move item.\n" +
      " + 'Hold Ctrl + left click' to open link in new tab.\n\n" +
      "To change background:\n 1. Go to folder 'images'.\n 2. Replace content of 'bg.png' with your desire background.\n 3. restart Tabi Tab."
  );

  infoForm.append(webAppName, authorText, instructions);
}

function createElementWithTextContent(tagName, className, textContent) {
  const elem = createElement(tagName, className);
  elem.textContent = textContent;
  return elem;
}
