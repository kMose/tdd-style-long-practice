const { expect } = require('chai')
const reverseString = require("../problems/reverse-string.js");

describe("reverseString Function", function (){
    it("Reverses the word fun to nuf", function (){
        let word1 = "fun";
        let result = reverseString(word1);

        expect(result).to.equal("nuf")
    })
})
