export function createNewList(appendTarget) {
  const list = document.createElement("div");
  list.className = "list";

  //ol elem
  const ol = document.createElement("ol");
  ol.className = "list-ol";

  //initial li elem
  const li = document.createElement("li");
  li.className = "list-li";
  li.contentEditable = "true";
  li.textContent = "cirno.";

  if (appendTarget) appendTarget.appendChild(list);
  list.appendChild(ol);
  ol.appendChild(li);

  return list;
}
