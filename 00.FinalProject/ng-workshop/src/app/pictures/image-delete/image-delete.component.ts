import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ImageService} from "../image.service";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-image-delete',
  templateUrl: './image-delete.component.html',
  styleUrls: ['./image-delete.component.css']
})
export class ImageDeleteComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private imgService:ImageService,
    private toastr:ToastrService,
    private authService:AuthService
  ) { }


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


  deleteImage = ()=>{
    let id = this.route.snapshot.params.id;
    this.imgService.deleteImage(id).remove().then(()=>{
      this.router.navigate(['/pictures/list']).then(()=>{
        this.toastr.success('Image Deleted!')
      })
    })
  };

  returnBack = () =>{
    window.history.back()
  }
}
