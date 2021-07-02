const chai = require("chai");
chai.should();
describe("chai should template by abin", () => {
  xit("to be a", () => {
    "Abin".should.be.a("string");
  });
  xit("to equal", () => {
    "Abin".should.equal("Abin");
  });
  xit("to have lengthOf", () => {
    "Abin".should.have.lengthOf(4);
  });
  xit("to.have.property with lengthOf", () => {
    ({ name: "Abin" }.should.have.property("name").with.lengthOf(4));
  });
});
