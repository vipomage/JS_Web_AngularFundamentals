import { Component, OnInit } from "@angular/core";
import { FurnitureService } from "../furniture.service";
import { FurnitureModel } from "../models";
import { Observable } from "rxjs";

@Component({
  selector: "app-all-furniture",
  templateUrl: "./all-furniture.component.html",
  styleUrls: ["./all-furniture.component.css"]
})
export class AllFurnitureComponent implements OnInit {
  furnitures: Observable<FurnitureModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private furnitureService: FurnitureService) {}

  ngOnInit() {
    this.furnitures = this.furnitureService.getAllFurniture();
  }

  changePage = page => {
    this.currentPage = page;
  };
}
