const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("It is a function", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
  });

  it("Capital letters", () => {
    assert.strictEqual(
      capitalizeFirstLetters("jérémy parle beaucoup trop"),
      "Jérémy Parle Beaucoup Trop"
    );
    assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
