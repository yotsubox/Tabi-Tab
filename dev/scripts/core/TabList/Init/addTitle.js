import { makeElementEditable } from "../../Utils.js";
export function addTitle(tabList, name = "Title") {
  const title = document.createElement("div");
  title.className = "list__title";
  title.textContent = name;

  makeElementEditable(title);

  //REFACTOR THIS.
  title.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    if (tabList.getItemCount() === 0) tabList.futureItem.focus();
    else title.blur();
  });

  title.addEventListener("blur", () => {
    title.textContent = title.textContent.trim();
  });

  tabList.itemWrapper.appendChild(title);
  return title;
}
