const expect = require("chai").expect;
describe("chai expect template by abin", () => {
  it("to be a", () => {
    expect("Abin").to.be.a("string");
  });
  it("to equal", () => {
    expect("Abin").to.equal("Abin");
  });
  it("to have lengthOf", () => {
    expect("Abin").to.have.lengthOf(4);
  });
  it("to.have.property with lengthOf", () => {
    expect({ name: "Abin" }).to.have.property("name").with.lengthOf(4);
  });
});
