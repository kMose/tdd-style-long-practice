const myMap = require("../problems/my-map.js")
const chai = require("chai");
const spies = require("chai-spies");
const {expect} = chai;
chai.use(spies);

    let array1 = []
    let cb = (element) => element * 2;
beforeEach(()=>{
    array1 = [1,2,3];
})


describe("myMap function", function (){
    it("returns an array with the callback function run on each element", function (){
        let result = myMap(array1, cb)

        expect(result).to.include.ordered.members([2,4,6]);
    })

    it("returns an array with the callback function run on each element and doesn't manipulate original array", function (){
        let result = myMap(array1, cb)

        expect(array1).to.include.ordered.members([1,2,3])
        expect(result).to.include.ordered.members([2,4,6]);
    })

    it("does not use the .map function", function (){

        let result = myMap(array1, cb)
        let mapSpy = chai.spy.on(Array.prototype, "map")



        expect(mapSpy).to.not.have.been.called.once;
        expect(array1).to.include.ordered.members([1,2,3])
        expect(result).to.include.ordered.members([2,4,6]);
    })

    it("calls the callback 3 times", function (){

        let cbSpy = chai.spy(cb)
        let result = myMap(array1, cbSpy)

        expect(cbSpy).to.have.been.called(3);
        expect(array1).to.include.ordered.members([1,2,3])
        expect(result).to.include.ordered.members([2,4,6]);
    })



})
