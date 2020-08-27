import { LocalStorage } from "../SaveSystem/LocalStorage.js";
export function scrollToLastOpenedPosition() {
  window.scrollTo(0, LocalStorage.getSavedScrollY());
}
