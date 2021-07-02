const assert = require("chai").assert;
describe("mocha hooks template by abin", () => {
  before(() => {
    console.log("\truns once before the first test in this block");
  });

  after(() => {
    console.log("\truns once after the last test in this block");
  });

  beforeEach(() => {
    console.log("\truns before each test in this block");
  });

  afterEach(() => {
    console.log("\truns after each test in this block");
  });
  xit("equal", () => {
    assert.equal(1, 1);
  });
  xit("deepStrictEqual", () => {
    assert.deepStrictEqual("abin", "abin");
  });
});
