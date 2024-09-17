class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }


  sayHello() {
    return `${this.name} says Hello!`;
  }

  visit = (otherPerson) => {
    return `${this.name} visited ${otherPerson.name}.`
  }


  switchVisit = (otherPerson) => {
    return otherPerson.visit(this);
  }

  update(obj){
    if((typeof obj) !== "object"){
      throw new TypeError();
    }

    this.name = obj.name;
    this.age = obj.age;
  }
}

module.exports = Person;
