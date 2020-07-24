/**
 *
 * @param {HTMLImageElement} saveButton
 */

export function addFunctionalities(saveButton) {
  /**
   * toggle gray scale for image.
   * @param {boolean} state turn on or off grayScale (true/false)
   */
  saveButton.toggleGrayScale = function (state) {
    // DEBUG
    saveButton.classList.remove("--gray-scale");
    console.log("CALLED", state);

    if (state) saveButton.classList.add("--gray-scale");
    else saveButton.classList.remove("--gray-scale");
  };
}
