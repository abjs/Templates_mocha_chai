const chai = require("chai");
chai.should();
describe("chai should template by abin", () => {
  it("to be a", () => {
    "Abin".should.be.a("string");
  });
  it("to equal", () => {
    "Abin".should.equal("Abin");
  });
  it("to have lengthOf", () => {
    "Abin".should.have.lengthOf(4);
  });
  it("to.have.property with lengthOf", () => {
    ({ name: "Abin" }.should.have.property("name").with.lengthOf(4));
  });
});
