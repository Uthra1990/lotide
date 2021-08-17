
let eqArrays = function(arr1,arr2){
  // if length is not equal
  let a=arr1.length
  let b=arr2.length
  let flag = true
  if(a!==b){
   console.log("the arrays are not equal")
   return false
  }
  else{
  // comparing each element of array
   for(var i=0;i<arr1.length;i++){
      if(arr1[i] !== arr2[i]){
        flag = false  
      }
      // console.log(arr1[i] + '----'+ arr2[i] )
   }
   return flag
  }
}
const assertEqual = function(actual, expected) {
    if (expected === actual) {
      console.log('Assertion Passed:' + actual + ' === ' + expected);
    } else {
      console.log('Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
// assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false)

module.exports = eqArrays;
