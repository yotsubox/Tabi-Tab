import { insertElementAfter } from "../../scripts/core/Utils.js";
const expect = chai.expect;

describe("Test function insertElementAfter", () => {
  it("Insertion process is successful", () => {
    const div = document.createElement("div");
    const div2 = document.createElement("div");

    document.body.append(div2, div);

    insertElementAfter(div, div2);
    expect(div.nextElementSibling).to.be.equal(div2);
  });

  it("Throws error if target element does not have a parent", () => {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    try {
      insertElementAfter(div2, div);
    } catch (e) {
      expect(e).to.be.an.instanceof(ReferenceError);
    }
  });
});
