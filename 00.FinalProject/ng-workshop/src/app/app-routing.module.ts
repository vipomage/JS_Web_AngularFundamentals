import { Route, RouterModule } from "@angular/router";

import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth/auth.guard";
import { ImageUploadComponent } from "./pictures/image-upload/image-upload.component";
import { ImageDetailsComponent } from "./pictures/image-details/image-details.component";
import { ImageEditComponent } from "./pictures/image-edit/image-edit.component";
import { ImageListComponent } from "./pictures/image-list/image-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import {ImageDeleteComponent} from "./pictures/image-delete/image-delete.component";
import {ImageConvertComponent} from "./pictures/image-converter/image-converter.component";

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
      { path:'convert',component:ImageConvertComponent},
      { path: "details/:id", component: ImageDetailsComponent },
      { path: "edit/:id", component: ImageEditComponent },
      { path: "list", component: ImageListComponent },
      { path: 'delete/:id',component:ImageDeleteComponent}
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
