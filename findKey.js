const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguments are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguments are NOT the same: ${actual} vs ${expected}`);
    }    
  };

  var findKeyIn = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }

var findKey = function(object, callback)
{
    for(var item in object)
    {
        if(callback(object[item]))
        {
            return item;
        }
    }
    return undefined;
}

var found = findKey(findKeyIn, x => x.stars === 2);
console.log(found);

assertEqual(found, "noma");