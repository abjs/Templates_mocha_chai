const expect = require("chai").expect;
describe("chai expect template by abin", () => {
  xit("to be a", () => {
    expect("Abin").to.be.a("string");
  });
  xit("to equal", () => {
    expect("Abin").to.equal("Abin");
  });
  xit("to have lengthOf", () => {
    expect("Abin").to.have.lengthOf(4);
  });
  xit("to.have.property with lengthOf", () => {
    expect({ name: "Abin" }).to.have.property("name").with.lengthOf(4);
  });
});
