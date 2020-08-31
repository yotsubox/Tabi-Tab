import { InfoForm } from "./InfoButton/InfoForm.js";
import { TextType } from "./InfoButton/InfoForm/TextType.js";
import { info } from "./ImagePaths.js";

export class InfoButton {
  static FromExistingElem(infoButton) {
    initProperties(infoButton);
    addFunctionalities(infoButton);
    addEventListeners(infoButton);
  }
}

function initProperties(infoButton) {
  infoButton._info = InfoForm.Create();
  addContent(infoButton._info);

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

function addContent(infoForm) {
  const webAppName = "Tabi Tab! - Personal Tab List";

  const author = "Made by Yotsubox (github.com/yotsubox)";

  const instructionsHeader = "--INSTRUCTIONS--";
  const tabListInstructions =
    " + 'Right click' to open menu.\n+'Left-click' on top of list to toggle list minimization";
  const editItemInstructions =
    " + 'Up/down arrow' to edit previous/next item.\n" +
    " + 'Alt + Up/down arrow' to move item.\n" +
    " + 'Hold Ctrl + left click' to open link in new tab.";
  const changeBackgroundInstructions =
    " 1. Go to folder 'images'.\n" +
    " 2. Replace content of 'bg.png' with your desire background.\n" +
    " 3. restart Tabi Tab.\n";
  const saveInstructions = " + 'Ctrl + S' to save.\n" + " + Program will auto save every 10 seconds.";
  const getSaveFileInstructions =
    " - 'Left-click' the top left button, it will download the save file of your current lists.";
  const getSaveFileInstructionsWarning =
    " (WARNING: a downloaded save file will NOT be automatically updated when save," +
    " you will have to download a new one every time you want to get the UPDATED save file of your current lists)";

  const loadSaveFileInstruction =
    " 1. 'Left-click' on the button next to 'get save file' button.\n" + " 2. Choose your desire save file.";

  const removeAllInstructions = "1. 'Left-click' the red 'X' button.\n2. Select 'yes'.";

  const specialThanks =
    "Freesvg: Icons," +
    "\nJemoticons, emoticonfun: Emoticons," +
    "\nu/franklinsteinnn: Background (so beautiful!)," +
    "\nMDN, w3schools, Stack Overflow: Programming references.";

  const version = "ver 1.0.0";

  infoForm.addText(TextType.HEADER, webAppName);
  infoForm.addText(TextType.HEADER, author);

  const headerElem = infoForm.addText(TextType.SECTION, instructionsHeader)[0];

  const tabListInsHeader = infoForm.addText(TextType.SECTION, "Tab List:", headerElem)[0];
  infoForm.addText(TextType.PARAGRAPH, tabListInstructions, tabListInsHeader);

  const editItemInsHeader = infoForm.addText(TextType.SECTION, "When edit an item:", headerElem)[0];
  infoForm.addText(TextType.PARAGRAPH, editItemInstructions, editItemInsHeader);

  const changeBackgroundInsHeader = infoForm.addText(TextType.SECTION, "Change background:", headerElem)[0];
  infoForm.addText(TextType.PARAGRAPH, changeBackgroundInstructions, changeBackgroundInsHeader);

  const saveInsHeader = infoForm.addText(TextType.SECTION, "Save:", headerElem)[0];
  infoForm.addText(TextType.PARAGRAPH, saveInstructions, saveInsHeader);

  const loadSaveFileInsHeader = infoForm.addText(TextType.SECTION, "Load save file:", headerElem)[0];
  infoForm.addText(TextType.PARAGRAPH, loadSaveFileInstruction, loadSaveFileInsHeader);

  const getSaveFileInsHeader = infoForm.addText(TextType.SECTION, "Get save file:", headerElem)[0];
  infoForm.addText(TextType.PARAGRAPH, getSaveFileInstructions, getSaveFileInsHeader);
  infoForm.addText(TextType.PARAGRAPH_BOLD, getSaveFileInstructionsWarning, getSaveFileInsHeader);

  const removeAllInsHeader = infoForm.addText(TextType.SECTION, "Remove all lists:", headerElem)[0];
  infoForm.addText(TextType.PARAGRAPH, removeAllInstructions, removeAllInsHeader);

  const specialThanksHeader = infoForm.addText(TextType.SECTION, "Special Thanks to:", headerElem)[0];
  infoForm.addText(TextType.PARAGRAPH, specialThanks, specialThanksHeader);

  infoForm.addText(TextType.PARAGRAPH, "---------", headerElem);
  infoForm.addText(TextType.PARAGRAPH, version, headerElem);
}
