function checkArrays( arrA, arrB ){

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
}
  
let assertArraysEqual = function(arr1,arr2){   
    var flag = checkArrays(arr1, arr2)
    console.log(flag)
    if(flag == true){
        console.log('Assertion Passed:' + arr1 + ' === ' + arr2);
    }else{
        console.log('Assertion Failed: ' + arr1 + ' !== ' + arr2);
    }
}


assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([3, 2, 1], [1, 2, 3])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 4])