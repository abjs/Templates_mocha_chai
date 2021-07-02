const assert = require("chai").assert;
describe("chai assert template by abin", () => {
  xit("equal", () => {
    assert.equal(1, 1);
  });
  xit("deepStrictEqual", () => {
    assert.deepStrictEqual("abin", "abin");
  });
  xit("ok", () => {
    assert.ok(true);
  });
  xit("typeOf number", () => {
    assert.typeOf(false, "boolean");
  });
  xit("typeOf number", () => {
    assert.typeOf(5, "number");
  });
  xit("typeOf string", () => {
    assert.typeOf("Abin", "string");
  });
  xit("typeOf object", () => {
    assert.typeOf(["abin", "bibin", "albin"], "array");
  });
  xit("typeOf object", () => {
    assert.typeOf({ name: "Abin" }, "object");
  });
  xit("lengthOf", () => {
    assert.lengthOf("Abin", 4);
  });
  xit("have property", () => {
    assert.property({ name: "Abin" }, "name");
  });
  xit("lengthOf object", () => {
    const data = { name: "Abin" };
    assert.lengthOf(data.name, 4);
  });
});
