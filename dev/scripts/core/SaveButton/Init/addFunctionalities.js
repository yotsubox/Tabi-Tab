/**
 *
 * @param {HTMLImageElement} saveButton
 */

export function addFunctionalities(saveButton) {
  /**
   * toggle gray scale for image.
   * @param {boolean} state turn on or off grayScale (true/false)
   */
  saveButton.setSavable = function (state) {
    if (state === false) {
      saveButton.classList.add("--gray-scale");
      saveButton.classList.add("--low-opacity");
    } else {
      saveButton.classList.remove("--gray-scale");
      saveButton.classList.remove("--low-opacity");
    }
  };
}
