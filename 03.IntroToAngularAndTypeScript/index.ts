class Cat {
    name;
    age;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

let cat = new Cat('Pesho',33);


let someVar : number = 5;
let otherVar : number[] = [5,3];
let anotherVar:any = 'any';


class Dog {

}

let dog:Dog = new Dog();

let age:number|string  = 23; // '23'