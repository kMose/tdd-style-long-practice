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

describe("switchVisit(otherPerson) invokes visit of otherPerson, passing in current instance as argument", function (){

    it("returns Howard visited Todd", function (){
        let result1 = person1.switchVisit(person2);

        expect(result1).to.equal("Howard visited Todd.");
    })

})


describe("update(obj) updates the person object with a name and age.", function (){
    context("Is not a valid object", function (){
        it("Argument is not an object, throw a TypeError", function() {
            let badInput1 = "foo";
            let badInput2 = 21;

            expect(() => person1.update(badInput1)).to.throw(TypeError)
            expect(() => person1.update(badInput2)).to.throw(TypeError)
        })
    })


    context("is a valid object, update it", function (){
        it("Changes properties of person 1 to John and then Sansa", function (){


            let goodInput1 = {name: "John", age: 65};
            let goodInput2 = {name: "Sansa", age: 19};

            person1.update(goodInput1);
            expect(person1).to.have.property("name", "John");
            expect(person1).to.have.property("age", 65);
            person1.update(goodInput2);
            expect(person1).to.have.property("name", "Sansa");
            expect(person1).to.have.property("age", 19);
        })
    })


    describe("tryUpdate(obj) invoke update(obj) returns true if update was successfully invoked otherwise false", function (){
        context("Update returns true", function(){
            it("returned true and instance has new property values", function (){
                let goodInput1 = {name: "John", age: 65};
                let output = null;
                output = person1.tryUpdate(goodInput1);

                expect(output).to.be.true;
                expect(person1).to.have.property("name", "John");
                expect(person1).to.have.property("age", 65);



            })
        })
        context("update returns false", function (){
            it("returns false, does not throw an error", function (){
                person1 = new Person("Todd", 33);
                output = person1.tryUpdate(null);

                expect(output).to.be.false;
                expect(person1.name).to.equal("Todd");
                expect(person1.age).to.equal(33);

            })
        })
    })


    describe("greetAll - static method, takes an array of Person instances, calls sayHello on each, stores each in an array of strings, returns array", function (){
        it("returns an array of strings containing name says hello", function (){
            let personArray = [person1, person2, person3, person4];
            let helloReturn = Person.greetAll(personArray);

            expect(helloReturn).to.be.an('array');

            for(let i = 0; i < helloReturn.length; i++){
                expect(helloReturn[i]).to.equal(`${personArray[i].name} says Hello!`)
            }


            // expect(helloReturn[0]).to.equal("Todd says Hello!")
            // expect(helloReturn[1]).to.equal("Howard says Hello!")
            // expect(helloReturn[2]).to.equal("Bolton says Hello!")
            // expect(helloReturn[3]).to.equal("Tyrion says Hello!")
        })


    })



})
