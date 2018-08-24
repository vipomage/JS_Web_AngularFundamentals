import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { ActivatedRoute } from "@angular/router";
import { ImageService } from "../image.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-image-edit",
  templateUrl: "./image-edit.component.html",
  styleUrls: ["./image-edit.component.css"]
})
export class ImageEditComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private imgService: ImageService
  ) {}

  user = this.authService.getCurrentUser();
  imageId = this.route.snapshot.params.id;
  uid = this.route.snapshot.params.uid;
  object = {};

  isPublic: boolean;
  dateTaken;

  getImage = () => {
    if (!this.uid) {
      this.imgService.getImage(this.imageId).on("value", snap => {
        this.object = snap.val();
        if (this.object) {
          if (this.object.hasOwnProperty("isPublic")) {
            this.isPublic = this.object["isPublic"];
          }
          if (this.object.hasOwnProperty("dateTaken")) {
            this.dateTaken = this.object["dateTaken"];
          }
        }
      });
    } else {
      this.imgService.getImage(this.imageId, this.uid).on("value", snap => {
        this.object = snap.val();
        if (this.object.hasOwnProperty("isPublic")) {
          this.isPublic = this.object["isPublic"];
        }
        if (this.object.hasOwnProperty("dateTaken")) {
          this.dateTaken = this.object["dateTaken"];
        }
      });
    }
  };

  editImage = (form: NgForm) => {
    if (
      form.value.hasOwnProperty("dateTaken") &&
      form.value.dateTaken !== undefined
    ) {
      this.object["dateTaken"] = form.value.dateTaken;
    }
    if (form.value.hasOwnProperty("isPublic")) {
      this.object["isPublic"] = form.value.isPublic;
    }
    this.imgService.updateImage(this.imageId, this.object);
  };

  toggleVisibility = e => {
    this.isPublic = e.target.checked;
  };

  ngOnInit() {
    this.getImage();
  }
}
