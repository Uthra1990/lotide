
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
  
  
  // const assertEqual = function(actual, expected) {
  //     if (expected === actual) {
  //       console.log('Assertion Passed:' + actual + ' === ' + expected);
  //     } else {
  //       console.log('Assertion Failed: ' + actual + ' !== ' + expected);
  //     }
  //   }; 


const middle = function(array) {
    let len = array.length
  //console.log('len'+len)
    let mod = len%2
    if (len !== 0 && mod == 1){
      middleIndex = Math.floor(len/2)
    //console.log('middleIndex'+middleIndex)
    //console.log(" The middle element is " +middleIndex)
    return middleIndex;
    }
    else
    {
      middleIndex = len/2
      return([middleIndex,(middleIndex+1)])
    }
}


 const arr = [1,2,8,4,5,7,9,10];
  console.log(" The middle element is " + middle(arr));
middle(arr)

module.exports = middle;