const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log('Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
/* if(assertEqual === true)
{
    console.log( Assertion Passed: ["Lighthouse labs"] === ["Bootcamp"])
}
else
{
    console.log(Assertion Failed: ["Lighthouse labs"] !== ["Bootcamp"])
}  */

module.exports = assertEqual;