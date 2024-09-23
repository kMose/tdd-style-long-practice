const {expect} = require("chai")
const {Triangle} = require("../problems/triangle.js")

let triangle1, triangle2, triangleInvalid;

beforeEach(() => {
    triangle1 = new Triangle(5, 5, 5);
    triangle2 = new Triangle(2,2,1)
    triangleInvalid = new Triangle(10, 15, 33)
})

describe("Constructor", function (){
    it("Takes length of three sides, side1,side2,side3 and sets them as instance properties", function (){
        //let triangle1 = new Triangle(5, 5, 5);

        expect(triangle1).to.have.property('side1', 5)
        expect(triangle1).to.have.property('side2', 5)
        expect(triangle1).to.have.property('side3', 5)
    })

describe("getPerimiter() instance method", function (){
    it("Will return the perimiter of the triangle instance, summing sides", function (){
        let tri = new Triangle(25, 25, 25);
        let result = triangle1.getPerimeter();
        let result2 = tri.getPerimeter();
        expect(result).to.equal(15);
        expect(result2).to.equal(75);
    })

})

describe("hasValidSideLengths() instance method - True if valid", function(){
    it("Returns true if the sum of 2 lengths of the triangle are greater than the remaining side", function(){
        let result = triangle1.hasValidSideLengths();
        let result2 = triangle2.hasValidSideLengths();

        expect(result1).to.be.true;
        expect(result2).to.be.true;


    })
    it("Returns false if the sum of 2 sides are less than or equal", function (){


    })


})


})
