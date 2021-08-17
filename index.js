const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual= require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const countOnly  = require('./countOnly');
const eqArrays= require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyValue = require('./findKeyValue');
const flatten = require('./flatten');
const letterPositions= require('./letterPositions');
const map = require('./map');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual : assertArraysEqual,
  assertEqual : assertEqual,
  countLetters : countLetters,
  countOnly : countOnly,
  eqArrays : eqArrays,
  eqObjects : eqObjects,
  findKey : findKey,
  findKeyValue : findKeyValue,
  flatten : flatten,
  letterPositions : letterPositions,
  map : map
};