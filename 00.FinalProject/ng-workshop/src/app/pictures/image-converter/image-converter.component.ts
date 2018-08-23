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
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private imgService: ImageService
  ) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split("/")[0] !== "image") {
      console.error("unsupported file type :( ");
      return;
    }

    // The storage path
    const date = new Date().getTime();
    const path = `${this.uid}/${date}_${file.name}`;

    // Upload To StorageAsFile
    // this.task = this.storage.upload(path, file);
    //
    // this.task.then(data => {
    //   const UID = this.authService.getCurrentUser().uid;
    //
    //   data.ref.getDownloadURL().then(imgUrl => {
    //     this.downloadURL = imgUrl;
    //     this.uploadToDB(UID, imgUrl);
    //   });
    // });

    // Progress monitoring
    // this.percentage = this.task.percentageChanges();
    // this.snapshot = this.task.snapshotChanges();

    //MAIN

    this.imgService.colorizeLocalImg(file)
      .subscribe(convertedImg => {
      let processed = convertedImg["output_url"];
      this.uploadToDB(processed);
    });
  }

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

  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }

  uploadUserToDb = (user, uid) => {
    let obj = {};
    obj[uid] = user;
    firebase
      .database()
      .ref("users")
      .update(obj)
      .then(() => {
        // User Add Success
      })
      .catch(e => console.log(e.message));
  };

  ngOnInit() {}
}
