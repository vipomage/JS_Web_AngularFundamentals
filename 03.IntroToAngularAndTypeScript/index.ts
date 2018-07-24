class Cat {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let cat = new Cat("Pesho", 33);

let someVar: number = 5;
let otherVar: number[] = [5, 3];
let anotherVar: any = "any";

class Dog {}

let dog: Dog = new Dog();

let age: number | string = 23; // '23'

function solve(): string {
  return "ivan";
}

class Person {
  constructor(private name: string, public age: number) {}
  sayHello = () => `Hello from ${this.name}!`;
}

let person = new Person('Ivan',5);

console.log(person.sayHello());


class Human  {
    constructor(public name:string){
    }
    move =()=> console.log('Moving...');
}

class Man extends Human{

    scream = () => console.log('AAARGH')

}


let man = new Man('Pesho');

man.move(); // inherits from Human



interface IPerson {
    name:string;
    age:number;

}

function so(person: IPerson) {
    console.log(person.name)
}


class Humanoid implements IPerson{
    name;
    age;
}


so(new Humanoid()); // Humanoid inherits IPerson therefore contains the properties