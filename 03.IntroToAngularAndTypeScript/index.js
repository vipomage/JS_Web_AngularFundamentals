var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    return Cat;
}());
var cat = new Cat("Pesho", 33);
var someVar = 5;
var otherVar = [5, 3];
var anotherVar = "any";
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var dog = new Dog();
var age = 23; // '23'
function solve() {
    return "ivan";
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.sayHello = function () { return "Hello from " + _this.name + "!"; };
    }
    return Person;
}());
var person = new Person('Ivan', 5);
console.log(person.sayHello());
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
        this.move = function () { return console.log('Moving...'); };
    }
    return Human;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scream = function () { return console.log('AAARGH'); };
        return _this;
    }
    return Man;
}(Human));
var man = new Man('Pesho');
man.move(); // inherits from Human
function so(person) {
    console.log(person.name);
}
var Humanoid = /** @class */ (function () {
    function Humanoid() {
    }
    return Humanoid;
}());
so(new Humanoid()); // Humanoid inherits IPerson therefore contains the properties
