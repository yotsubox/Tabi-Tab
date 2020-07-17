import { LocalStorage } from "../SaveSystem/LocalStorage.js";

export function saveEveryTenSec() {
  setTimeout(function repeat() {
    LocalStorage.save();
    setTimeout(repeat, 10000);
  }, 10000);
}
