import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { environment } from "../environments/environment";
import { fadeAnimation } from "./fade.animations";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  constructor() {}

  title = "Colorize Me";
  getState = outlet => (outlet.isActivated ? outlet.activatedRoute : "");

  ngOnInit(): void {
    firebase.initializeApp(environment.firebase);
  }
}
