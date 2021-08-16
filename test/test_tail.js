const { assert } = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
      console.log(words.length)
    assert.strictEqual((words.length), 3);
  });
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns ['Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), [ 'Labs']);
  });
});