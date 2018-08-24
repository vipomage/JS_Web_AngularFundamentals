import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { DatabaseReference } from "angularfire2/database/interfaces";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  constructor() {}

  getUsers = (): DatabaseReference => firebase.database().ref("users");

  getAllImages = (): DatabaseReference =>
    firebase.database().ref("userCollections");

  getUserImages = (uid: string): DatabaseReference =>
    firebase.database().ref(`userCollections/${uid}`);
}
