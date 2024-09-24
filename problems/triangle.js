class Triangle{
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }



    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths(){
        if(this.side1 + this.side2 <= this.side3) return false;
        if(this.side2 + this.side3 <= this.side1) return false;
        if(this.side3 + this.side1 <= this.side2) return false;
        return true;
    }

    validate(){
        this.isValid = this.hasValidSideLengths()
    }

    static getValidTriangles(...triangleArray){
        let validTriangles = [];
        triangleArray.forEach((currentTriangle) => {
            currentTriangle.validate();
            if (currentTriangle.isValid) validTriangles.push(currentTriangle);
        })
        return validTriangles;
    }

}


class Scalene extends Triangle {
    constructor(side1, side2, side3){
        super(side1, side2, side3)
        super.validate()
    }


    isScalene (){
        if(this.isValid == false) return false;
        if(this.side1 == this.side2) return false;
        if(this.side1 == this.side3) return false;
        if(this.side2 == this.side3) return false;
        return true;
    }

    validate(){
        this.isValidScalene = this.isScalene()
    }

}

class Isoceles extends Triangle{
    constructor(side1, side2, side3){
        super(side1,side2,side3)
        super.validate();
    }

    isIsoceles(){
        let equalSides = 0;
        if(this.side1 == this.side2 && this.side2 == this.side3) return false;
        if(this.side1 == this.side2) return true;
        if(this.side1 == this.side3) return true;
        if(this.side2 == this.side3) return true;
        return false;
    }

    validate(){
        this.isValidIsoceles = this.isIsoceles()
    }

}

module.exports = {Triangle, Scalene, Isoceles}
