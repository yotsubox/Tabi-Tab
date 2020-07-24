/**
 *
 * @param {ClipboardEvent} e
 */
//https://stackoverflow.com/questions/6899659/remove-formatting-from-a-contenteditable-div
export function removeFormatting(e) {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  document.execCommand("insertHTML", false, text);
}
