import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ImageService} from "../image.service";
import {AuthService} from "../../auth/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: "app-image-details",
  templateUrl: "./image-details.component.html",
  styleUrls: ["./image-details.component.css"]
})
export class ImageDetailsComponent implements OnInit {
  constructor(
    private route:ActivatedRoute,
    private imgService:ImageService,
    private authService:AuthService,
    private toastr:ToastrService,
    private router:Router
    ) {}

  user = this.authService.getCurrentUser();
  imageId = this.route.snapshot.params.id;
  object = {};


  getImage = () =>{
    this.imgService.getImage(this.imageId).then(snap=>{
      this.object = snap.val();
    })
  };

  ngOnInit() {
    this.getImage();
  }
}
