const expect = chai.expect;

describe("Test Mocha ", function () {
  describe("Test Mocha: describe", function () {
    it("Test Mocha: it", () => {
      const variable = true;
      expect(variable, "! Variable should be true").to.be.true;
    });
  });
});
