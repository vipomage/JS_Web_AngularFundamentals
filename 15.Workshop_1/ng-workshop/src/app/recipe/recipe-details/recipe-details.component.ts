import { Component, OnInit } from "@angular/core";
import { RecipeListModel } from "../models/recipe-list.model";
import { RecipeService } from "../recipe.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeListModel;
  id: string;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.recipeService.getById(this.id).subscribe(data => {
      this.recipe = data;
    });
  }

  delete = () =>
    this.recipeService.deleteRecipe(this.id).subscribe(data => {
      this.router
        .navigate(["/recipes/list"])
        .then(() => this.toastr.success("Recipe deleted", "Success!"));
    });
}
