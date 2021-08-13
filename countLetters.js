const assertEqual = function(actual, expected) {
    if (expected === actual) {
      console.log('Assertion Passed:' + actual + ' === ' + expected);
    } else {
      console.log('Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1,1);

  function countLetters(str){
    let letters = {};
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();

    for (var i = 0; i<str.length; i++){
      increment(str[i]);
    }
    return letters;
  
    function increment(key){
      if (letters[key])
        letters[key]++;
      else
        letters[key] = 1;
    }
  }
  
  console.log( countLetters("LHL") );