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

  isPublic: boolean = false;
  dateTaken;

  getImage = () => {
    if (!this.uid) {
      this.imgService.getImage(this.imageId).then(snap => {
        this.object = snap.val();
      });
    } else {
      this.imgService.getImage(this.imageId, this.uid).then(snap => {
        this.object = snap.val();
      });
    }
  };

  editImage = (form: NgForm) => {
    console.log(form.value);
  };

  toggleVisibility = e => {
    this.isPublic = e.target.checked;
  };

  ngOnInit() {
    this.getImage();
  }
}
