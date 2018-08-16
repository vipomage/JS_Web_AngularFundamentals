import { Component, OnInit } from "@angular/core";
import { RecipeCreateModel } from "../models/recipe-create.model";
import { RecipeService } from "../recipe.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe-create",
  templateUrl: "./recipe-create.component.html",
  styleUrls: ["./recipe-create.component.css"]
})
export class RecipeCreateComponent implements OnInit {
  public bindingModel: RecipeCreateModel;

  constructor(
    private recipeService: RecipeService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.bindingModel = new RecipeCreateModel("", "", "");
  }

  ngOnInit() {}

  create = () =>
    this.recipeService.createRecipe(this.bindingModel).subscribe(data => {
      console.log(data);
      this.router
        .navigate(["/recipes/list"])
        .then(() => this.toastr.success("Item Added"));
    });
}
