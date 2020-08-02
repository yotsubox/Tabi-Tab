export function addEventListeners(copyButton) {
  copyButton.addEventListener("mousedown", (e) => {
    //prevent blur on contentBox.
    e.preventDefault();

    copyButton.copyToClipboard();
  });
}
