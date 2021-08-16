const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual.js');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", function()
{
    
    it("should return last array in index", () =>{
        assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Lighthouse,Labs");
    })
    it("original array is unmodified", () => {

        
        
        assertArraysEqual(tail(words), ["Yo Yo", "Lighthouse", "Labs"]);
        
    })
})