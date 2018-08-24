import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ImageService } from "../image.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-image-details",
  templateUrl: "./image-details.component.html",
  styleUrls: ["./image-details.component.css"]
})
export class ImageDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private imgService: ImageService,
    private authService: AuthService
  ) {}

  user = this.authService.getCurrentUser();
  imageId = this.route.snapshot.params.id;
  uid = this.route.snapshot.params.uid;
  object = {};

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

  ngOnInit() {
    this.getImage();
  }
}
