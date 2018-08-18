import { Component, OnInit } from "@angular/core";
import firebase from "firebase/app";
import "firebase/auth";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCk-WThkSMKQLEPpetFLDPwJXW_dAmnjvg",
  authDomain: "colorize-a9b46.firebaseapp.com",
  databaseURL: "https://colorize-a9b46.firebaseio.com",
  projectId: "colorize-a9b46"
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Colorize Me";

  ngOnInit(): void {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
