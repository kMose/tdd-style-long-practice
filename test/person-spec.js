const {expect} = require('chai');
const Person = require("../problems/person.js")

let person1, person2, person3, person4;

beforeEach(function(){
    person1 = new Person("Todd", 33);
    person2 = new Person("Howard", 24);
    person3 = new Person("Bolton", 28);
    person4 = new Person("Tyrion", 33);
})



describe("Constructor method - takes a name and age and sets them as properties on an instance", function(){


    it("sets name and age property correctly", function (){
        expect(person1.name).to.equal("Todd");
        expect(person1.age).to.equal(33);
        expect(person2.name).to.equal("Howard");
        expect(person2.age).to.equal(24);
        expect(person3.name).to.equal("Bolton");
        expect(person4.name).to.equal("Tyrion");
    })
})

describe("sayHello() returns a string with the persons name and says Hello!", function(){
    it("They all say hello", function (){

        let result1 = person1.sayHello();
        let result2 = person2.sayHello();
        let result3 = person3.sayHello();

        expect(result1).to.equal("Todd says Hello!")
        expect(result2).to.equal("Howard says Hello!")
        expect(result3).to.equal("Bolton says Hello!")

    })

})





describe("visit(otherPerson) instance method returns a string stating person1.visited(person2)", function (){

    it("returns Todd visited Howard", function (){
        let result1 = person1.visit(person2);
        let result2 = person2.visit(person1);
        let result3 = person1.visit(person3);


        expect(result1).to.equal("Todd visited Howard.");
        expect(result2).to.equal("Howard visited Todd.");
        expect(result3).to.equal("Todd visited Bolton.");
    })



})
