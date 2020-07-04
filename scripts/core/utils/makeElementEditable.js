export function makeElementEditable(target) {
  target.contentEditable = true;

  target.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
      target.blur();
  });
}
