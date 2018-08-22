import { Component, OnInit } from "@angular/core";
import { ImageService } from "../pictures/image.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  constructor(private imgService: ImageService) {}

  ngOnInit() {
    const image =
      "https://firebasestorage.googleapis.com/v0/b/colorize-a9b46.appspot.com/o/88mlKKISkSO8puD2F2Wrf17pPEn1%2F38030600_10155354268726924_2092173969695178752_n.jpg?alt=media&token=321ef776-5ee1-47de-b8c5-efed1944999d";
    this.imgService.getCollection();
  }
}
