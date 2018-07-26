import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

}

class Engine {
  constructor(public model: string, public type: string) {}

  makeSound = () => {};
}

class Car {
  constructor(
    public make: string,
    public model: string,
    private engine: Engine
  ) {}
}

let smallEngine = new Engine("2l", "gasoline");
let bigEngine = new Engine("3l", "diesel");

let merc = new Car("Mercedes", "s500", smallEngine);
let audi = new Car("Audi", "s8", bigEngine);
