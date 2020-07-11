import { createNewList } from "../../scripts/core/createNewList.js";
const expect = chai.expect;

describe("Test function createNewList()", () => {
  it("New list is created", () => {
    const listElem = createNewList();
    expect(listElem).to.be.an.instanceof(HTMLElement);
  });

  it("Function returns the created list element", () => {
    const div = document.createElement("div");

    const listElem = createNewList(div);

    expect(listElem).to.be.not.null;
  });

  it("Be able to append to given a element", () => {
    const div = document.createElement("div");

    const listElem = createNewList(div);

    expect(div.firstElementChild).to.be.equal(listElem);
  });

  it("If given target element to append to is null, just return the element", () => {
    const div = document.createElement("div");

    createNewList(null);

    expect(div.children).to.have.lengthOf(0);
  });
});
