export function addFunctionalities(titleBox) {
  titleBox.updateTitle = async function () {
    const res = await fetch(this._owner.getURL(), {
      method: "GET",
      mode: "cors",
    });

    if (!res.ok) return;

    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const title = doc.querySelector("head > title");

    if (title) {
      this.textContent = title.textContent;
      this.classList.remove("--hidden");
    }
  };
}
