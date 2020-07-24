import { removeFormatting } from "../Events/removeFormattingOnPaste.js";

export function makeElementEditable(target) {
  target.contentEditable = true;
  target.spellcheck = false;

  //remove formatting on paste
  target.addEventListener("paste", (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  });
}
