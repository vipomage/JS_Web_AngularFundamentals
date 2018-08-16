import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDzOqlEGCG1NS4yT__4LtYaBjPJTIoH7MI",
  authDomain: "angularworkshop1.firebaseapp.com",
  databaseURL: "https://angularworkshop1.firebaseio.com"
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ng-workshop";

  ngOnInit(): void {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
