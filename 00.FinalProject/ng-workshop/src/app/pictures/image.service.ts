import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { AuthService } from "../auth/auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  uid = this.authService.getCurrentUser().uid;
  collection = [];

  getCollection = () =>
    firebase
      .database()
      .ref(`userCollections/` + this.uid)
      .on("value", data => {
        let parsed = Object.values(data.val());
        this.collection = parsed
      });

  constructor(private authService: AuthService) {}

  // insertInCollection = (imageUrl: string) => {
  //   this.collection.push(imageUrl);
  // };

  updateDbCollection = () => {
    let uid = this.authService.getCurrentUser().uid;
    firebase.database().ref(`${uid}`);
  };
}
