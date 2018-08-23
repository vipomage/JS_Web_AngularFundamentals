import { Component, OnInit } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "angularfire2/storage";
import "firebase/storage";
import * as firebase from "firebase/app";
import "firebase/database";
import { Observable } from "rxjs";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "../../auth/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { ImageService } from "../image.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "image-convert",
  templateUrl: "./image-converter.component.html",
  styleUrls: ["./image-converter.component.css"]
})
export class ImageConvertComponent implements OnInit {
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  isHovering: boolean;
  uid: string = this.authService.getCurrentUser().uid;
  url: string;
  status: string;
  preventEdit: boolean = false;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private imgService: ImageService,
    private http: HttpClient
  ) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  //Fn Triggered on file select/drop
  startUpload(event: FileList) {
    this.disableFileUpload();
    this.status = "Uploading please wait!";
    // The File object
    const file = event.item(0);

    // Client-side validation for images
    if (file.type.split("/")[0] !== "image") {
      this.toastr.error("unsupported file type :(");
      return;
    }

    // The storage path
    const date = new Date().getTime();
    const path = `${this.uid}/${date}_${file.name}`;

    //Send the image to Colouring API and then saves it to Firebase Storage ->
    //Gets link and adds it to firebase database
    //
    //Reason being the Colouring-API image links results in painfully slow loading of images
    //Firebase is Fast!
    this.imgService.colorizeLocalImg(file).subscribe(convertedImg => {
      let imageUrl = convertedImg["output_url"]; //converted Image URL
      //get image as blob
      this.status = "Converting Image Please Wait!";
      this.http.get(imageUrl, { responseType: "blob" }).subscribe(data => {
        this.status = "Image Converted uploading....";
        //upload to Storage
        this.task = this.storage.upload(path, data);
        //get Link to uploaded img and add to DB for listing
        this.task.then(data => {
          data.ref.getDownloadURL().then(imgUrl => {
            this.downloadURL = imgUrl;
            this.uploadToDB(imgUrl);
          });
        });

        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();
      });
    });
  }

  // Fn which uploads an image URL to userCollection in DB
  uploadToDB = imageUrl => {
    let dbRef = firebase.database().ref(`userCollections/${this.uid}`);
    let key = dbRef.push().key;

    let pushObj = {
      imageUrl,
      id: key,
      owner: this.authService.getCurrentUser().email,
      uploadedOn: new Date().getTime()
    };

    firebase
      .database()
      .ref(`userCollections/${this.uid}/${key}`)
      .update(pushObj)
      .then(() => {
        this.router.navigate(["/pictures/list"]).then(() => {
          this.toastr.success("Image upload Success");
        });
      });
  };

  disableFileUpload = () => {
    this.preventEdit = !this.preventEdit;
  };

  ngOnInit() {
    this.preventEdit = false;
  }
}
