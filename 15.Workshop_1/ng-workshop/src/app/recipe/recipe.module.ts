import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipeRoutingModule } from "./recipe-routing.module";

import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeCreateComponent } from "./recipe-create/recipe-create.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

@NgModule({
  declarations: [
    RecipeStartComponent,
    RecipeCreateComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeListComponent
  ],
  imports: [FormsModule, CommonModule, RecipeRoutingModule]
})
export class RecipeModule {}
