const {expect} = require("chai")
const {Triangle, Scalene} = require("../problems/triangle.js")

let triangle1, triangle2, triangleInvalid, scaleneValid, scaleneInvalid;

beforeEach(() => {
    triangle1 = new Triangle(5, 5, 5);
    triangle2 = new Triangle(2,2,1)
    triangleInvalid = new Triangle(10, 15, 33)
    scaleneValid = new Scalene(25, 13, 24);
    scaleneInvalid = new Scalene(25, 13, 25);
    isoValid = new Isoceles(25,25,13);
    isoInvalid = new Isoceles(25,24,13);

})

describe("Constructor", function (){
    it("Takes length of three sides, side1,side2,side3 and sets them as instance properties", function (){
        //let triangle1 = new Triangle(5, 5, 5);

        expect(triangle1).to.have.property('side1', 5)
        expect(triangle1).to.have.property('side2', 5)
        expect(triangle1).to.have.property('side3', 5)
    })
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
        let result1 = triangle1.hasValidSideLengths();
        let result2 = triangle2.hasValidSideLengths();

        expect(result1).to.be.true;
        expect(result2).to.be.true;

    })
    it("Returns false if the sum of 2 sides are less than or equal", function (){
        let result3 = triangleInvalid.hasValidSideLengths();
        expect(result3).to.be.false;
    })
})

describe("validate() instance method", function(){
    it("adds an isValid property to the triangle instance", function(){
        triangle1.validate();
        triangleInvalid.validate();
        expect(triangle1).to.have.property("isValid");
        expect(triangleInvalid).to.have.property("isValid");
    })

    it("Triangle 1 isValid set to true", function(){
        triangle1.validate();
        expect(triangle1).to.have.property("isValid", true);
    })

    it("TriangleInvalid isValid set to false", function(){
        triangleInvalid.validate();
        expect(triangleInvalid).to.have.property("isValid", false);
    })

})

describe("getValidTriangles() static method", function(){
    it("returns instances of all valid triangles", function(){
        let validTriangleArray;

        validTriangleArray = Triangle.getValidTriangles(triangle1, triangle2, triangleInvalid);

        expect(validTriangleArray).to.include(triangle1, triangle2)
        expect(validTriangleArray).to.not.include(triangleInvalid)

    })

})

describe("Scalene triangle class initilization", function (){
    it("initializes ", function (){

        expect(scaleneValid).to.have.property("side1", 25);
    })

    it("inherits isValidTriangle, and hasValidSideLengths instance methods, and isValid Property", function (){

        expect(scaleneValid).to.have.property("isValid", true);

    })
})

describe("isScalene() function", function(){
    it("returns true if sides are unequal", function (){
        let result = scaleneValid.isScalene();
        expect(result).to.equal(true);
    })

    it("returns false if sides are equal", function (){
        let result = scaleneInvalid.isScalene();
        expect(result).to.equal(false);
    })

    it("returns false if invalid triangle to begin with", function(){
        let badTriangle = new Scalene(100,1,2)
        let result = badTriangle.isScalene();

        expect(badTriangle).to.have.property("isValid", false);
        expect(result).to.equal(false)
    })
})

describe("validate() for Scalene Triangle", function(){
    it("adds an isValidScalene Property to the scalene triangle instance", function(){
        scaleneInvalid.validate();
        expect(scaleneInvalid).to.have.property("isValidScalene")
    })

    it("isvalidscalene is FALSE after validation with scaleneInvalid.validate()", function(){
        scaleneInvalid.validate();
        expect(scaleneInvalid).to.have.property("isValidScalene", false)
    })

    it("isValidscalene is TRUE after validation with scaleneValid.validate()", function(){
        scaleneValid.validate();
        expect(scaleneValid).to.have.property("isValidScalene", true)
    })
})


describe("Isoceles triangle class initilization", function (){
    it("initializes ", function (){
        expect(isoValid).to.have.property("side1", 25);
    })

    it("inherits isValidTriangle, and hasValidSideLengths instance methods, and isValid Property", function (){

        expect(isoValid).to.have.property("isValid", true);

    })
})

describe("isIsoceles() function", function(){
    it("returns true if two sides are equal", function (){
        let result = isoValid.isIsoceles();
        expect(result).to.equal(true);
    })

    it("returns false if two sides arent equal", function (){
        let result = isoInvalid.isIsoceles();
        expect(result).to.equal(false);
    })
})

describe("validate() for isoceles Triangle", function(){
    it("adds an isValidIsoceles Property to the isoceles triangle instance", function(){
        isoInvalid.validate();
        expect(isoInvalid).to.have.property("isValidIsoceles")
    })

    it("isValidIsoceles is FALSE after validation with isoInvalid.validate()", function(){
        isoInvalid.validate();
        expect(isoInvalid).to.have.property("isValidIsoceles", false)
    })

    it("isValidIsoceles is TRUE after validation with isocelesValid.validate()", function(){
        isoValid.validate();
        expect(isoValid).to.have.property("isValidIsoceles", true)
    })
})
