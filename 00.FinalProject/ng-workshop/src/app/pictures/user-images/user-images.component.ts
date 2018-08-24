import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ImageService } from "../image.service";

@Component({
  selector: "app-user-images",
  templateUrl: "./user-images.component.html",
  styleUrls: ["./user-images.component.css"]
})
export class UserImagesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {}

  collection = [];
  uid = this.route.snapshot.params.uid;
  ngOnInit() {
    this.imageService
      .getCollection(this.route.snapshot.params.uid)
      .on("value", data => {
        if (data.val()) {
          this.collection = Object.values(data.val());
        }
      });
  }
}
