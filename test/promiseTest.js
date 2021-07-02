const assert = require("chai").assert;
describe("Promise Function Test", () => {
  it("should need an property success", async () => {
    setTimeout(() => {
        assert.ok(true)
    }, 2000);
  });
});
