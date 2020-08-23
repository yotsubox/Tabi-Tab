export function showPageWhenEverythingIsLoaded() {
  window.onload = function () {
    document.querySelector("#loading-section").remove();
    document.querySelector("#page").classList.remove("--hidden");
    document.body.classList.remove("--overflow-hidden");
  };
}
