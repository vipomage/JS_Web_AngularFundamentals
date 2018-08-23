import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { AuthService } from "../auth/auth.service";
import {
  HttpHeaders,
  HttpClient
} from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  uid = this.authService.getCurrentUser().uid;
  collection = [];

  //Returns Array[Object]
  //Get User images
  getCollection = () => {
    return firebase
      .database()
      .ref(`userCollections/` + this.uid);
  };

  //Returns Object[Object]
  //Get User images
  // getCollection = () => {
  //   firebase
  //     .database()
  //     .ref(`userCollections/` + this.uid)
  //     .on("value", data => {
  //       let parsed = data.val();
  //       this.collection = parsed;
  //     });
  // };

  //Fn which calls Colouring API and returns URL to converted Image
  colorizeLocalImg = file => {
    this.toastr.info("Image Processing", "Please Wait", {
      progressAnimation: "decreasing",
      timeOut: 10000
    });
    const API = "https://api.deepai.org/api/colorizer";
    const KEY = "7bebdcf9-76f0-4dfa-bc77-2361935e6ea7";

    let formData: FormData = new FormData();
    formData.append("image", file, new Date().getDate().toString());

    let headers = new HttpHeaders();
    headers.set("Api-Key", KEY);

    return this.http.post(API, formData, { headers: headers });
  };

  //Get single image by ID
  getImage = imageId =>
    firebase
      .database()
      .ref(`userCollections/${this.uid}/${imageId}`)
      .once("value");


  //Delete single image by ID
  deleteImage = imageId =>
    firebase.database().ref(`userCollections/${this.uid}/${imageId}`);
}
