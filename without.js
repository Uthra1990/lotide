
/* function checkArrays( arrA, arrB ){

    //check if lengths are different
    if(arrA.length !== arrB.length) return false;

    //slice so we do not effect the orginal
    //sort makes sure they are in order
    var cA = arrA.slice(); 
    var cB = arrB.slice();

    for(var i=0;i<cA.length;i++){
         if(cA[i]!==cB[i]) return false;
    }

    return true;


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
  
let assertArraysEqual = function(arr1,arr2){   
    var flag = checkArrays(arr1, arr2)
    console.log(flag)
    if(flag == true){
        console.log('Assertion Passed:' + arr1 + ' === ' + arr2);
    }else{
        console.log('Assertion Failed: ' + arr1 + ' !== ' + arr2);
    }
} */




/* assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([3, 2, 1], [1, 2, 3])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 4]) */

function without (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

console.log(without(['a', 'b'], ['a', 'b', 'c', 'd']));
console.log(without("abcd", "abcde"));
console.log(without("zxc", "zxc"));
console.log(without(["hello", "world", "lighthouse"],["Lighthouse"]))


