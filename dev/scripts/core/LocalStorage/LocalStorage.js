const storage = window.localStorage;

export class LocalStorage {
  static save() {
    const lists = document.querySelector(".lists").children;
    for (const list of lists) {
      //exclude add list button
      if (list.tagName === "BUTTON") continue;

      const titleName = list.querySelector(".list__title").textContent;
      const itemContents = list.querySelectorAll(".list__item-content");

      const urls = [].map.call(
        itemContents,
        (itemContent) => itemContent.textContent
      );

      storage.setItem(titleName, JSON.stringify(urls));
    }
  }

  static load() {
    console.log(storage);
  }

  static clear() {
    storage.clear();
  }
}
