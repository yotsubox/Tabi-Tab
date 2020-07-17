import { LocalStorage } from "../../SaveSystem/LocalStorage.js";
/**
 *
 * @param {KeyboardEvent} e
 */
export function saveWhenCtrlS(e) {
  if (e.shiftKey || e.altKey) return;
  if (!e.ctrlKey || (e.key !== "s" && e.key !== "S")) return;
  e.preventDefault();
  LocalStorage.save();
}
