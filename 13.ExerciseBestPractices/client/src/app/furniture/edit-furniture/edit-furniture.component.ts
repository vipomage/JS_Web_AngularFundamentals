import { Component, OnInit } from "@angular/core";
import { FurnitureModel } from "../models";
import { ActivatedRoute, Router } from "@angular/router";
import { FurnitureService } from "../furniture.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-edit-furniture",
  templateUrl: "./edit-furniture.component.html",
  styleUrls: ["./edit-furniture.component.css"]
})
export class EditFurnitureComponent implements OnInit {
  bindingModel: FurnitureModel;
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.furnitureService
      .getfurnitureById(this.route.snapshot.params["id"])
      .subscribe(data => {
        this.bindingModel = data;
      });
  }

  edit = () => {
    this.furnitureService
      .editFurniture(this.bindingModel.id, this.bindingModel)
      .subscribe(() => {
        this.toastr.success("Edited Furniture", "Success");
        this.router.navigate(["/furniture/all"]);
      });
  };
}
