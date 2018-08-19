import { Component, OnInit } from "@angular/core";
import { ImageService } from "../image.service";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.css"]
})
export class ImageListComponent implements OnInit {

  public collection = this.imgService.collection;

  constructor(private imgService: ImageService) {}

  ngOnInit() {

  }
}
