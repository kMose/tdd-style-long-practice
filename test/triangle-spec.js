const {expect} = require("chai")
const {Triangle} = require("../problems/triangle.js")


describe("Constructor", function (){
    it("Takes length of three sides, side1,side2,side3 and sets them as instance properties" function (){
        let triangle1 = new Triangle(5, 5, 5);

        expect(triangle1).to.have.property('side1', 5)
        expect(triangle1).to.have.property('side2', 5)
        expect(triangle1).to.have.property('side3', 5)
    })
})
