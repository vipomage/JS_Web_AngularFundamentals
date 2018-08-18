import { Route, RouterModule } from "@angular/router";

import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeDetailsComponent } from "./recipe/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeCreateComponent } from "./recipe/recipe-create/recipe-create.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth/auth.guard";
import { ImageUploadComponent } from "./pictures/image-upload/image-upload.component";
import { ImageDetailsComponent } from "./pictures/image-details/image-details.component";
import { ImageEditComponent } from "./pictures/image-edit/image-edit.component";
import { ImageListComponent } from "./pictures/image-list/image-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Route[] = [
  { path: "", component: SignupComponent },
  { path: "welcome", component: WelcomeComponent, canActivate: [AuthGuard] },
  {
    path: "auth",
    children: [
      { path: "signin", component: SigninComponent },
      { path: "signup", component: SignupComponent }
    ]
  },
  {
    path: "pictures",
    children: [
      { path: "", pathMatch: "full", component: ImageUploadComponent },
      { path: "upload", component: ImageUploadComponent },
      { path: "details/:id", component: ImageDetailsComponent },
      { path: "edit/:id", component: ImageEditComponent },
      { path: "list", component: ImageListComponent }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
