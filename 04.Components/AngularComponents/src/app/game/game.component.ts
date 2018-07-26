import { Component, OnInit } from "@angular/core";
import { Game } from "../types/game";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  games: Array<Game>;
  user_name: string = "My Name!";
  isShown: boolean = false;

  constructor() {
    this.games = [
      {
        id: 1,
        title: "Game 1",
        image: "https://i.imgflip.com/1vl6wl.jpg"
      },
      {
        id: 2,
        title: "Game 2",
        image: "https://i.imgflip.com/1vl6wl.jpg"
      }
    ];
  }

  showContacts = () => {
    this.isShown = !this.isShown;
  };

  showName = name => {
    this.user_name = name.value;
  };

  notifyMe = (notification: string) => {
    console.log(notification);
  };

  ngOnInit() {}
}
