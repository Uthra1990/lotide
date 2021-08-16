const assertEqual = function(actual, expected) {
    if (expected === actual) {
      console.log('Assertion Passed:' + actual + ' === ' + expected);
    } else {
      console.log('Assertion Failed: ' + actual + ' !== ' + expected);
    }
};

let tail = function(arr) {
    let len = arr.length
    let tempArr = []
    if(len !=0)
    {
        tempArr = arr
        tempArr.shift()
        return tempArr
    }
  }
  assertEqual(tail([5,6,7]),[6,7]);
  assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse","Labs"]);
  assertEqual(tail([6]), []);
  assertEqual(tail([]), "Hello");
  
  module.exports = tail;