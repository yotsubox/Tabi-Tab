import { createAddListButton } from "../../scripts/core/createAddListButton.js";
const expect = chai.expect;

describe("Test function createAddListButton()", () => {
  it("Button is created", () => {
    const btn = createAddListButton();
    expect(btn).to.be.an.instanceof(HTMLElement);
  });

  it("Function returns the created button element", () => {
    const btn = createAddListButton();

    expect(btn).to.be.not.null;
  });

  it("Be able to append to a given element", () => {
    const div = document.createElement("div");

    const btn = createAddListButton(div);

    expect(div.firstElementChild).to.be.equal(btn);
  });

  it("If given target element to append to is null, just return the element", () => {
    const div = document.createElement("div");

    createAddListButton(null);

    expect(div.children).to.have.lengthOf(0);
  });

  it("When the button is pressed, append a new list to parent's Element but before the button", () => {
    const div = document.createElement("div");

    const btn = createAddListButton(div);

    const clickEvent = new MouseEvent("click");
    btn.dispatchEvent(clickEvent); //create new list.
    btn.dispatchEvent(clickEvent); //create new list.

    expect(div.children).to.have.lengthOf(3);
    expect(div.lastElementChild).to.be.instanceof(HTMLButtonElement);
    expect(div.firstElementChild).to.be.instanceof(HTMLElement);
  });
});
