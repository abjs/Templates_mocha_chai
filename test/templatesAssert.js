const assert = require("chai").assert;
describe("chai assert template by abin", () => {
  it("equal", () => {
    assert.equal(1, 1);
  });
  it("deepStrictEqual", () => {
    assert.deepStrictEqual("abin", "abin");
  });
  it("ok", () => {
    assert.ok(true);
  });
  it("typeOf number", () => {
    assert.typeOf(false, "boolean");
  });
  it("typeOf number", () => {
    assert.typeOf(5, "number");
  });
  it("typeOf string", () => {
    assert.typeOf("Abin", "string");
  });
  it("typeOf object", () => {
    assert.typeOf(["abin", "bibin", "albin"], "array");
  });
  it("typeOf object", () => {
    assert.typeOf({ name: "Abin" }, "object");
  });
  it("lengthOf", () => {
    assert.lengthOf("Abin", 4);
  });
  it("have property", () => {
    assert.property({ name: "Abin" }, "name");
  });
  it("lengthOf object", () => {
    const data = { name: "Abin" };
    assert.lengthOf(data.name, 4);
  });
});
