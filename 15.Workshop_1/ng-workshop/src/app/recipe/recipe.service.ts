import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeListModel } from "./models/recipe-list.model";
import { map } from "rxjs/operators";
import { RecipeCreateModel } from "./models/recipe-create.model";

const baseUrl = "https://angularworkshop1.firebaseio.com/recipes";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getAllRecipes = () =>
    this.http.get<RecipeListModel[]>(`${baseUrl}.json`).pipe(
      map((res: Response) => {
        const ids = Object.keys(res);
        const recipes: RecipeListModel[] = [];
        for (const i of ids) {
          res[i].id = i;
          recipes.push(res[i]);
        }
        return recipes;
      })
    );

  createRecipe = (body: RecipeCreateModel) =>
    this.http.post(`${baseUrl}.json`, body);

  getById = (id: string) =>
    this.http.get<RecipeListModel>(`${baseUrl}/${id}.json`);

  editRecipe = (body: RecipeCreateModel, id: string) =>
    this.http.patch(`${baseUrl}.json`, body);

  deleteRecipe = (id: string) => this.http.delete(`${baseUrl}/${id}.json`);
}
