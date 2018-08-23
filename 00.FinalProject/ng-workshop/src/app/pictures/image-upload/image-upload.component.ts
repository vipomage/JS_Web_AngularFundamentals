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

@Component({
  selector: "image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.css"]
})
export class ImageUploadComponent implements OnInit {
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  isHovering: boolean;
  uid: string = this.authService.getCurrentUser().uid;
  url: string;
  preventEdit: boolean = false;
  status: string;
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    this.status = "Uploading please wait!";
    this.disableFileUpload();
    // The File object
    const file = event.item(0);

    // Client-side validation
    if (file.type.split("/")[0] !== "image") {
      this.toastr.error("unsupported file type :( ");
      return;
    }

    // The storage path
    const date = new Date().getTime();
    const path = `${this.uid}/${date}_${file.name}`;

    //Upload To StorageAsFile
    this.task = this.storage.upload(path, file);

    //Get link to uploaded file and upload it userCollection in DB
    this.task.then(data => {
      data.ref.getDownloadURL().then(imgUrl => {
        this.downloadURL = imgUrl;
        this.uploadToDB(imgUrl);
      });
    });

    //Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
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
        this.status = "";
        this.router.navigate(["/pictures/list"]).then(() => {
          this.toastr.success("Image upload Success");
        });
      });
  };

  //Fn which uploads user to users collection in DB

  disableFileUpload = () => {
    this.preventEdit = !this.preventEdit;
  };

  ngOnInit() {
    this.preventEdit = false;
  }
}
