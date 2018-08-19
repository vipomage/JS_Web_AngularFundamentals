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

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private authService: AuthService,
    private toastr: ToastrService
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

    const uid = this.authService.getCurrentUser().uid;
    // The storage path
    const date = new Date().getTime();
    const path = `${uid}/${date}_${file.name}`;

    // The main task
    this.task = this.storage.upload(path, file);

    this.task.then(data => {
      const UID = this.authService.getCurrentUser().uid;

      data.ref.getDownloadURL().then(imgUrl => {
        this.downloadURL = imgUrl;
        this.uploadToDB(UID, imgUrl);
      });
    });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // The file's download URL
  }

  uploadToDB = (uid: string, imageUrl) => {
    firebase
      .database()
      .ref(`userCollections/${uid}`)
      .push(imageUrl)
      .then(() => {
        this.toastr.success("Image upload Success");
      });
  };

  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }

  ngOnInit() {}
}
