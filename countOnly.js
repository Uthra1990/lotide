const countOnly = function(allItems, itemsToCount) {
    const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
      
      const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    } 

const assertEqual = function(actual, expected) {
    if (expected === actual) {
      console.log('Assertion Passed:' + actual + ' === ' + expected);
    } else {
      console.log('Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };
      assertEqual(result1["Jason"], 1);
      assertEqual(result1["Karima"], undefined);
      assertEqual(result1["Fang"], 2);
      assertEqual(result1["Agouhanna"], undefined);
  // TEST CODE
  //assertEqual("Lighthouse Labs", "Bootcamp");
  //assertEqual(1,1);
  /* if(assertEqual === true)
  {
      console.log( Assertion Passed: ["Lighthouse labs"] === ["Bootcamp"])
  }
  else
  {
      console.log(Assertion Failed: ["Lighthouse labs"] !== ["Bootcamp"])
  }  */