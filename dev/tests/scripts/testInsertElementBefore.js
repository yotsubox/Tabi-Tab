import { insertElementBefore } from "../../scripts/core/Utils.js";
const expect = chai.expect;

describe("Test function insertElementBefore", () => {
  it("Insertion process is successful", () => {
    const div = document.createElement("div");
    const div2 = document.createElement("div");

    document.body.append(div, div2);

    insertElementBefore(div, div2);
    expect(div.previousElementSibling).to.be.equal(div2);
  });

  it("Throw error if target element does not have a parent", () => {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    try {
      insertElementBefore(div, div2);
    } catch (e) {
      expect(e).to.be.an.instanceof(ReferenceError);
    }
  });
});
