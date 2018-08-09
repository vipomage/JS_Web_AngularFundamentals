import { Component, OnInit } from "@angular/core";
import { CreateFurnitureModel } from "../models";
import { CustomFormsModule } from "ng2-validation";
import { FurnitureService } from "../furniture.service";

@Component({
  selector: "app-create-furniture",
  templateUrl: "./create-furniture.component.html",
  styleUrls: ["./create-furniture.component.css"]
})
export class CreateFurnitureComponent implements OnInit {
  bindingModel: CreateFurnitureModel;

  constructor(private furnitureService: FurnitureService) {
    this.bindingModel = {
      make: "",
      model: "",
      year: 1950,
      description: "",
      price: 1,
      image: ""
    };
  }

  ngOnInit() {}

  create = () => {
    this.furnitureService.createFurniture(this.bindingModel).subscribe();
  };
}
