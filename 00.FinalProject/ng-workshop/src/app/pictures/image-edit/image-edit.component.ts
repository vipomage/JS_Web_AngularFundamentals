import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { ActivatedRoute } from "@angular/router";
import { ImageService } from "../image.service";

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
  object = {};

  getImage = () => {
    this.imgService.getImage(this.imageId).then(snap => {
      this.object = snap.val();
    });
  };

  ngOnInit() {
    this.getImage();
  }
}
