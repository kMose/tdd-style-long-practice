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

static greetAll(array){
  if ((typeof array[0] !== 'object')) throw Error("This isnt an object array.")

  let helloArray = [];

  for(let i = 0; i < array.length; i++){
      helloArray.push(array[i].sayHello());
  }

  return helloArray;


}

}

module.exports = Person;
