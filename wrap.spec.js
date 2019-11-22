//returns empty string if nothing provided
//returns string as entered if length is less than the column length
//ensure that if the last char is a space in the column that it inserts line break appropriately
//starts the next line with the appropriate character after the space
//doesn't split up any words (execption if word is longer than line length...)
//special characters /etc.

const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("returns string as entered if length is less than the maxCol length", () => {
    expect(wrap("is this working", 20)).to.equal("is this working");
  });
  it("ensure that if the last char is a space in the column that it inserts line break appropriately", () => {
    expect(wrap("four five six", 5)).to.equal(`four\nfive\nsix`);
  });
  it("doesn't split up any words", () => {
    expect(wrap("four five", 7)).to.equal(`four\nfive`);
    expect(
      wrap(
        "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
        20
      )
    ).to.equal(
      `Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`
    );
  });
});
