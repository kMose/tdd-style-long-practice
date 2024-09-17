const { expect } = require('chai')
const reverseString = require("../problems/reverse-string.js");

describe("reverseString Function", function (){
    it("Reverses the word fun to nuf", function (){
        let word1 = "fun";
        let result = reverseString(word1);

        expect(result).to.equal("nuf")
    })

    it("Reverses the word pen to nep", function (){
        let word1 = "pen";
        let result = reverseString(word1);

        expect(result).to.equal("nep")
    })

    it("Reverses the word onomatopoeia to aieopotamono", function (){
        let word1 = "onomatopoeia";
        let result = reverseString(word1);

        expect(result).to.equal("aieopotamono")
    })

    it("Throws an error on invalid input", function (){
        let word1 = 5;
        let word2 = ""
        let word3 = null

        expect(() => reverseString(word1)).to.throw(TypeError);
        expect(() => reverseString(word2)).to.throw(TypeError);
        expect(() => reverseString(word3)).to.throw(TypeError);
    })
})
