const assertArraysEqual = function(arr1, arr2)
{
  if(arr1.length === arr2.length)
  {
    for (var i = 0; i < arr1.length; i ++){
      if(arr1[i] !== arr2[i]){
        console.log("Arrays are not equal");
        return false;
      }
    }

  }
  else{
    console.log("arrays not of the same length, hence they are different");
    return false;
  }
console.log("arrays are  equal!");
return true;
}

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
    }
      
  }


  const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    for(letters of sentence){
        results[letters] = [];
    }
    
    for(var b in results){
        for(var a = 0; a < sentence.length; a++){
            if(b === sentence[a]){
                results[b].push(a);
            }
        }
    }
    return results;
  };
//   console.log(letterPositions("hello"))
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);