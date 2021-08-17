const assertEqual = require('./assertEqual');
//const head = require('./head')
let head = function(arr) {

  if(arr[0])
    // console.log(arr[0])
    return arr[0]
}
/*const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log('Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('Assertion Failed: ' + actual + ' !== ' + expected);
  }
};*/



// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([6]), 6);
// assertEqual(head([]), "Hello"); 

module.exports = head;

  