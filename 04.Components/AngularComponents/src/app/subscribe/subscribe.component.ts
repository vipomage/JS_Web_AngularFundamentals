import { Component, OnInit, Input } from "@angular/core";
import { Game } from "../types/game";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.css"]
})
export class SubscribeComponent implements OnInit {
  @Input("subGame") subGame: Game;
  constructor() {}

  showSubscription =()=>{
    console.log(`The ID is ${this.subGame.id}`)
  }

  ngOnInit() {
  }
}
