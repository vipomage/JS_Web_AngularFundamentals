import { Component, OnInit } from "@angular/core";
import { ImageService } from "../image.service";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.css"]
})
export class ImageListComponent implements OnInit {
  public collection: Array<Object> = [];

  constructor(private imgService: ImageService) {}

  ngOnInit() {
    this.imgService.getCollection().on("value", data => {
      if (data.val()) {
        this.collection = Object.values(data.val());
      }
    });
  }
}
