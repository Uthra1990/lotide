const assertArraysEqual = function(arr1, arr2)
{
  if(arr1.length === arr2.length)
  {
    for (var i = 0; i < arr1.length; i ++)
    {
      if(arr1[i] !== arr2[i])
      {
        console.log("Arrays are not the same");
        return false;
      }
    }
  }
  else
  {
    console.log("arrays not same length, therefore not the same");
    return false;
  }
console.log("arrays are the same!");
return true;
}


const takeUntil = function(array, callback) {
    var newArr = [];
    for(var i = 0; i < array.length; i++)
    {   
        // console.log(callback(array[i]))
        if(callback(array[i])){
            console.log(`${array[i]} is a falsey`);
          return newArr;  
        }
        newArr.push(array[i]);
    }
    return newArr;
  }
  
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);