import { Component, OnInit } from '@angular/core';
import {FurnitureService} from "../furniture.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FurnitureModel} from "../models";
import {Observable} from "rxjs";

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures:Observable<FurnitureModel[]>;
  constructor(private furnitureService:FurnitureService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.furnitures = this.furnitureService.getMyFurniture()
  }


  deleteItem = (id:string)=>{
    this.furnitureService.deleteFurniture(id).subscribe(()=>{
      this.router.navigate(['/furniture/all'])
    });

  }
}
