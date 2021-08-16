const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguments are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguments are NOT the same: ${actual} vs ${expected}`);
    }      
  };

const findKeyByValue = function(object, value){
for(var key in object){
    if(object[key] === value){
        return key;
    }
}
return undefined;
}

// console.log(Object.keys(bestTVShowsByGenre));

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);