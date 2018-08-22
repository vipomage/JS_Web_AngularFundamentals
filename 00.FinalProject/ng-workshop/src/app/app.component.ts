import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { environment } from "./../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Colorize Me";

  ngOnInit(): void {
    firebase.initializeApp(environment.firebase);
  }
}
