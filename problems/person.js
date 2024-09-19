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
    if(obj === null) throw new TypeError();
    if((typeof obj) !== "object") throw new TypeError();


    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj){
    if(obj === null) return false;
    if((typeof obj) !== "object") return false;

    this.update(obj);
    return true;

  }
}

module.exports = Person;
