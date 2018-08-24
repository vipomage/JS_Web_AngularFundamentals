import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ImageService } from "../image.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-image-delete",
  templateUrl: "./image-delete.component.html",
  styleUrls: ["./image-delete.component.css"]
})
export class ImageDeleteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imgService: ImageService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  user = this.authService.getCurrentUser();
  imageId = this.route.snapshot.params.id;
  uid = this.route.snapshot.params.uid;

  object = {};

  getImage = () => {
    if (!this.uid) {
      this.imgService.getImage(this.imageId).on("value", snap => {
        this.object = snap.val();
      });
    } else {
      this.imgService.getImage(this.imageId, this.uid).on("value", snap => {
        this.object = snap.val();
      });
    }
  };

  ngOnInit() {
    this.getImage();
  }

  deleteImage = (imageUrl: string) => {
    let id = this.route.snapshot.params.id;
    this.imgService
      .deleteImageFromStorage(imageUrl)
      .delete()
      .then(() => {
        this.imgService
          .deleteImage(id, this.uid)
          .remove()
          .then(() => {
            this.router.navigate(["/pictures/list"]).then(() => {
              this.toastr.success("Image Deleted!");
            });
          })
          .catch(e => this.toastr.error(e.message));
      })
      .catch(e => this.toastr.error(e.message));
  };

  returnBack = () => {
    window.history.back();
  };
}
