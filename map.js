const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }
const results1 = map(words, word => word[0]);
console.log(results1);

let eqArrays = function(arr1,arr2){
    // if length is not equal
    let a=arr1.length
    let b=arr2.length
    if(a!==b){
     console.log("the arrays are not equal")
    }
    else{
    // comapring each element of array
     for(var i=0;i<arr1.length;i++)
     if(arr1[i]!=arr2[i])
      return "False" 
      else
      return "True"
    }
  }
  
  
  const assertEqual = function(actual, expected) {
      if (expected === actual) {
        console.log('Assertion Passed:' + actual + ' === ' + expected);
      } else {
        console.log('Assertion Failed: ' + actual + ' !== ' + expected);
      }
    };
  
    assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), "True"); 
    assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), "False");
    assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),"True")
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),"False")