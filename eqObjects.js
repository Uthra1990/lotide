const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`These two arguments are the same: ${actual} vs ${expected}`);
  } else {
    console.log(`These two arguments are NOT the same: ${actual} vs ${expected}`);
  }
        
};
  
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }   
  } else {
    return false;
  }    
  return true;   
};
  
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
  }else{

      for(let key in obj1)
      {
          if((Array.isArray(obj1[key]) && Array.isArray(obj2[key])))
          {
              if(eqArrays(obj1[key], obj2[key])=== false)
              {
                  return false
              }
              
          } else {
              if (obj1[key] !== obj2[key]) {
          return false;
        }
          }
      }
      return true;
  }
}

    

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
       
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false
  
assertEqual(assertObjectsEqual(ab, ba), true);
assertEqual(assertObjectsEqual(ab, abc), false);