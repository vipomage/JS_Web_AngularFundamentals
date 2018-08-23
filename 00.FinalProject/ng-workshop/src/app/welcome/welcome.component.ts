import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import {User} from "../models/user";
import {DataSnapshot} from "angularfire2/database/interfaces";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  title = "Restogram";
  user:User;


  ngOnInit() {
    this.authService.retrieveUser().once('value')
      .then((data:DataSnapshot)=>{
        this.user = data.val();
      });
  }
}
