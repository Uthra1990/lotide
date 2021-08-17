const head = require('../head');
const assertEqual = require('../assertEqual');
const { assert } = require("chai");

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 6);
assertEqual(head([]), "Hello"); 

describe("#head", () => {
    it("should return 5 as the head", () => {
        assert.deepEqual(head([5,6,7]), 5)
    });
    it("should  return Hello as head", () => {
        assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
    });
    it("should  return 6 as head", () => {
        assert.deepEqual(head([6]), 6)
    });
    it("should  return undefined as head", () => {
        assert.deepEqual(head([]), "Hello")
    });
});