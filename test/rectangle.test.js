const assert = require("assert");
const rectangle = require("../rectangle");

describe("rectangle", () => {
  it("square", () => {
    assert.strictEqual(new rectangle(5, 5).isSquare(), false);
    assert.strictEqual(new rectangle(6, 5).isSquare(), true);
  });

  it("area", () => {
    assert.strictEqual(new rectangle(2, 1).getArea(), 2);
  });

  it("perimeter", () => {
    assert.strictEqual(new rectangle(2, 1).getPerimeter(), 6);
  });
});
