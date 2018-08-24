import { Component, OnInit } from "@angular/core";
import { ImageService } from "../image.service";

@Component({
  selector: "app-public-images",
  templateUrl: "./public-images.component.html",
  styleUrls: ["./public-images.component.css"]
})
export class PublicImagesComponent implements OnInit {
  constructor(private imageService: ImageService) {}

  publicImages = [];

  ngOnInit() {
    this.imageService.getPublicImages().on("value", data => {
      let parsed = data.val();
      let temp = [];
      for (let uid in parsed) {
        for (let objId in parsed[uid]) {
          if (parsed[uid][objId].hasOwnProperty("isPublic")) {
            temp.push(parsed[uid][objId]);
          }
        }
      }
      this.publicImages = temp;
    });
  }
}
