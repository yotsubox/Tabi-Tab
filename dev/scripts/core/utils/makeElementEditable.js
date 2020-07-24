import { removeFormatting } from "./Listeners/removeFormatting.js";

export function makeElementEditable(target) {
  target.contentEditable = true;
  target.spellcheck = false;

  target.addEventListener("paste", removeFormatting);
}
