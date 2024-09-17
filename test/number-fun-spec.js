const {expect} = require("chai");
const {returnsThree, reciprocal} = require("../problems/number-fun.js");


describe("returnsThree Function", function () {
    it("returns the number '3' ", function(){

        let result = returnsThree();

        expect(result).to.equal(3);

    })

})

describe("Reciprocal function", function (){
    context("Valid Arguments", function (){


        it("Takes a number and returns the reciprocal of that number", function (){

            let number1 = 3;
            let number2 = 2;
            let number3 = 5;

            let result1 = reciprocal(number1)
            let result2 = reciprocal(number2)
            let result3 = reciprocal(number3)

            expect(result1).to.equal(1/3)
            expect(result2).to.equal(1/2)
            expect(result3).to.equal(1/5)
        })
    })

    context("Invalid Arguments", function (){


        it("returns a RangeError when number is out of bounds <= 1 || >= 1000000", function (){


            let big = 1000000;
            let small = 0;

            expect(() => reciprocal(big)).to.throw(RangeError);
            expect(() => reciprocal(small)).to.throw(RangeError);
        })

        it("returns an error on general invalid input", function (){

            let input1 = null;
            let input2 = 'foo';
            let input3 = ["i like turtles"];

            expect(() => reciprocal(input1)).to.throw(TypeError);
            expect(() => reciprocal(input2)).to.throw(TypeError);
            expect(() => reciprocal(input3)).to.throw(TypeError);

        })
    })



})
