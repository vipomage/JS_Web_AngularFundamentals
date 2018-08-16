import { Component, OnInit } from "@angular/core";
import { RecipeCreateModel } from "../models/recipe-create.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  id: string;
  bindingModel: RecipeCreateModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.recipeService
      .getById(this.id)
      .subscribe((recipe: RecipeCreateModel) => {
        this.bindingModel = recipe;
      });
  }

  edit = () => {
    const body = {
      [this.id]: { ...this.bindingModel }
    };
    this.recipeService.editRecipe(body, this.id).subscribe(() => {
      this.router.navigate([`/recipes/details/${this.id}`]).then(() => {
        this.toastr.success("Edit Success");
      });
    });
  };
}
