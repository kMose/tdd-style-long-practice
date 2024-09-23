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
            console.log(validTriangles)
        })
        return validTriangles;
    }

}

module.exports = {Triangle}
